/* Numbers and clock times in words, French and English (the visualizations of the language books).
 * NumWords.number(n, lang) for 0 to 999 999; NumWords.time(h, m, lang, h24) for h 0-23, m 0-59. French follows the
 * traditional spelling (vingt et un, soixante et onze, quatre-vingts); English the British and Indian usage
 * (one hundred and five; quarter past three). */
(function (w) {
  "use strict";
  var FU = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
  var FT = { 20: "vingt", 30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante" };
  function fr(n) {
    if (n < 17) return FU[n];
    if (n < 20) return "dix-" + FU[n - 10];
    if (n < 70) { var t = Math.floor(n / 10) * 10, u = n % 10; return u === 0 ? FT[t] : u === 1 ? FT[t] + " et un" : FT[t] + "-" + FU[u]; }
    if (n < 80) return n === 71 ? "soixante et onze" : "soixante-" + fr(n - 60);
    if (n < 100) return n === 80 ? "quatre-vingts" : "quatre-vingt-" + fr(n - 80);
    if (n < 1000) {
      var h = Math.floor(n / 100), r = n % 100;
      var hs = h === 1 ? "cent" : FU[h] + " cent" + (r === 0 ? "s" : "");
      return r ? hs + " " + fr(r) : hs;
    }
    var th = Math.floor(n / 1000), rest = n % 1000;
    var ts = th === 1 ? "mille" : fr(th).replace(/(vingt|cent)s$/, "$1") + " mille";
    return rest ? ts + " " + fr(rest) : ts;
  }
  var EO = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  var ET = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  function en(n) {
    if (n < 20) return EO[n];
    if (n < 100) return ET[Math.floor(n / 10)] + (n % 10 ? "-" + EO[n % 10] : "");
    if (n < 1000) return EO[Math.floor(n / 100)] + " hundred" + (n % 100 ? " and " + en(n % 100) : "");
    var r = n % 1000;
    return en(Math.floor(n / 1000)) + " thousand" + (r ? (r < 100 ? " and " : " ") + en(r) : "");
  }
  function frHour(h) {
    if (h === 0 || h === 24) return "minuit";
    if (h === 12) return "midi";
    return (h === 1 ? "une" : h === 21 ? "vingt et une" : fr(h)) + " heure" + (h > 1 ? "s" : "");
  }
  function frTime(h, m, h24) {
    if (h24) return "Il est " + (h === 0 ? "zéro heure" : frHour(h).replace(/^midi$/, "douze heures")) + (m ? " " + (m === 1 ? "une" : fr(m)) : "") + ".";
    var hh = h % 12, nh = (h + 1) % 24;
    var base = function (x) { return x === 0 || x === 12 ? frHour(x) : frHour(x % 12 || 12); };
    if (m === 0) return "Il est " + base(h) + ".";
    if (m === 15) return "Il est " + base(h) + " et quart.";
    if (m === 30) return "Il est " + base(h) + (h % 12 === 0 ? " et demi." : " et demie.");
    if (m === 45) return "Il est " + base(nh) + " moins le quart.";
    if (m < 30) return "Il est " + base(h) + " " + fr(m) + ".";
    return "Il est " + base(nh) + " moins " + fr(60 - m) + ".";
  }
  function enHour(h) { return h === 0 ? "midnight" : h === 12 ? "noon" : en(h % 12 || 12); }
  function enTime(h, m, digital) {
    var h12 = h % 12 || 12;
    if (digital) return "It's " + en(h12) + (m === 0 ? " o'clock" : m < 10 ? " oh " + en(m) : " " + en(m)) + ".";
    var nh = (h + 1) % 24;
    if (m === 0) return h === 0 || h === 12 ? "It's " + enHour(h) + "." : "It's " + en(h12) + " o'clock.";
    if (m === 15) return "It's quarter past " + enHour(h) + ".";
    if (m === 30) return "It's half past " + enHour(h) + ".";
    if (m === 45) return "It's quarter to " + enHour(nh) + ".";
    if (m < 30) return "It's " + en(m) + " past " + enHour(h) + ".";
    return "It's " + en(60 - m) + " to " + enHour(nh) + ".";
  }
  w.NumWords = {
    number: function (n, lang) { return lang === "fr" ? fr(n) : en(n); },
    time: function (h, m, lang, h24) { return lang === "fr" ? frTime(h, m, h24) : enTime(h, m, h24); }
  };
})(window);
