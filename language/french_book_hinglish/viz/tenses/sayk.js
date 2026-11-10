/* Speech for the visualizations of the language books (copied next to each viz/<name>/index.html by the importer).
 * The same choice of voice as assets/speak.js and the books' own readers: the clearest voice of the language
 * (natural and neural voices first); French a little slower than English. Window.Say:
 *   Say.say(text, lang, slow)   speaks (returns false without speech synthesis)
 *   Say.has(lang)               a voice exists for the language (true until the voices are known)
 *   Say.onVoices(fn)            fn() when the device's voices are known
 *   Say.ui                      the edition of the book: "en", "hinglish" or "hi" (from <html data-ui>)
 */
(function (w) {
  "use strict";
  var synth = "speechSynthesis" in w ? w.speechSynthesis : null;
  var LISTS = { fr: ["fr-FR", "fr-CA", "fr-BE", "fr-CH", "fr"], en: ["en-IN", "en-GB", "en-AU", "en-US", "en"], hi: ["hi-IN", "hi"] };
  var RATE = { fr: 0.82, en: 0.9 };
  var known = false, cbs = [];
  function rank(v, l) { var s = String(v.lang || "").replace("_", "-").toLowerCase(); for (var i = 0; i < l.length; i++) if (s.indexOf(l[i].toLowerCase()) === 0) return l.length - i; return 0; }
  function score(v, l) {
    var r = rank(v, l); if (!r) return -1;
    var n = v.name, sc = r * 100;
    if (/natural|neural|online/i.test(n)) sc += 60;
    if (/premium|enhanced|siri/i.test(n)) sc += 55;
    if (/google/i.test(n)) sc += 45;
    if (/am[ée]lie|thomas|audrey|aur[ée]lie|marie|denise|henri|eloise|vivienne|remy|daniel|sonia|ryan|libby|neerja|prabhat|aria|jenny|guy|samantha|karen|moira|rishi/i.test(n)) sc += 20;
    if (/compact|espeak|robot|novelty|zarvox|trinoids|bubbles|cellos|organ|jester|superstar|whisper|bells/i.test(n)) sc -= 80;
    return sc;
  }
  function voices(lang) {
    if (!synth) return [];
    var l = LISTS[lang] || [lang], vs = synth.getVoices() || [];
    if (vs.length) known = true;
    return vs.filter(function (v) { return rank(v, l) > 0; }).sort(function (a, b) { return score(b, l) - score(a, l); });
  }
  var timer = 0;
  function say(text, lang, slow) {
    if (!synth || !text) return false;
    synth.cancel();
    clearTimeout(timer);
    var v = voices(lang)[0], rate = (RATE[lang] || 0.9) * (slow ? 0.72 : 1);
    timer = setTimeout(function () {
      String(text).split(/(?<=[.!?;])\s+/).forEach(function (part) {
        var u = new SpeechSynthesisUtterance(part);
        if (v) { u.voice = v; u.lang = v.lang; } else u.lang = (LISTS[lang] || [lang])[0];
        u.rate = rate;
        synth.speak(u);
      });
    }, 60);
    return true;
  }
  function fire() { known = true; var c = cbs; cbs = []; c.forEach(function (f) { try { f(); } catch (e) { /* ignore */ } }); }
  if (synth) {
    if (synth.addEventListener) synth.addEventListener("voiceschanged", fire);
    if ((synth.getVoices() || []).length) known = true;
    setTimeout(fire, 2000);
  }
  w.Say = {
    say: say,
    has: function (lang) { return !!synth && (!known || voices(lang).length > 0); },
    onVoices: function (fn) { if (known) fn(); else cbs.push(fn); },
    ui: (document.documentElement.getAttribute("data-ui") || "en")
  };
})(window);
