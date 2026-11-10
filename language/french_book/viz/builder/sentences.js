/* French sentences for the sentence builder: words with their role (S subject, V verb, O object, N negation,
   A adjective, P object pronoun, T time, L place, Q question word, D adverb), the meaning and the rule shown. */
window.SENTENCES = [
  { w: ["Je|S", "mange|V", "une pomme|O"], en: "I eat an apple.", hi: "मैं सेब खाता हूँ।", why: "Subject + verb + object, as in English.", whyhi: "कर्ता + क्रिया + कर्म, अंग्रेज़ी की तरह।" },
  { w: ["Nous|S", "ne|N", "parlons|V", "pas|N", "anglais|O"], en: "We do not speak English.", hi: "हम अंग्रेज़ी नहीं बोलते।", why: "ne … pas goes around the verb.", whyhi: "ne … pas क्रिया के दोनों ओर आते हैं।" },
  { w: ["Elle|S", "a|V", "une voiture|O", "rouge|A"], en: "She has a red car.", hi: "उसके पास लाल गाड़ी है।", why: "Most adjectives (colours too) come after the noun.", whyhi: "ज़्यादातर विशेषण (रंग भी) संज्ञा के बाद आते हैं।" },
  { w: ["Il|S", "a|V", "un|O", "petit|A", "chien|O"], en: "He has a small dog.", hi: "उसके पास एक छोटा कुत्ता है।", why: "BAGS adjectives (beauty, age, goodness, size) come before the noun.", whyhi: "BAGS विशेषण (सुंदरता, आयु, अच्छाई, आकार) संज्ञा से पहले आते हैं।" },
  { w: ["Je|S", "le|P", "vois|V", "demain|T"], en: "I see him tomorrow.", hi: "मैं उसे कल देखूँगा।", why: "An object pronoun (le, la, les) comes before the verb.", whyhi: "कर्म सर्वनाम (le, la, les) क्रिया से पहले आता है।" },
  { w: ["Tu|S", "vas|V", "à Paris|L", "en juin|T"], en: "You are going to Paris in June.", hi: "तुम जून में पेरिस जा रहे हो।", why: "Place, then time.", whyhi: "पहले स्थान, फिर समय।" },
  { w: ["Est-ce que|Q", "tu|S", "aimes|V", "le chocolat|O", "?|Q"], en: "Do you like chocolate?", hi: "क्या तुम्हें चॉकलेट पसंद है?", why: "Est-ce que + a normal sentence makes a question.", whyhi: "Est-ce que + सामान्य वाक्य = प्रश्न।" },
  { w: ["Je|S", "lui|P", "donne|V", "le livre|O"], en: "I give him the book.", hi: "मैं उसे किताब देता हूँ।", why: "lui (to him / to her) also comes before the verb.", whyhi: "lui (उसे) भी क्रिया से पहले आता है।" },
  { w: ["Ils|S", "se|P", "lèvent|V", "tôt|D"], en: "They get up early.", hi: "वे जल्दी उठते हैं।", why: "A reflexive verb keeps its pronoun (se) before it.", whyhi: "निजवाचक क्रिया का सर्वनाम (se) उससे पहले आता है।" },
  { w: ["Je|S", "n'|N", "ai|V", "pas|N", "vu|V", "le film|O"], en: "I have not seen the film.", hi: "मैंने फ़िल्म नहीं देखी।", why: "In the passé composé, ne … pas goes around avoir.", whyhi: "passé composé में ne … pas, avoir के दोनों ओर आते हैं।" },
  { w: ["Où|Q", "habites|V", "-tu|S", "?|Q"], en: "Where do you live?", hi: "तुम कहाँ रहते हो?", why: "Inversion: the verb comes before the subject, joined by a hyphen.", whyhi: "उलटा क्रम: क्रिया पहले, कर्ता बाद में, बीच में हाइफ़न।" },
  { w: ["Nous|S", "avons|V", "toujours|D", "aimé|V", "la musique|O"], en: "We have always loved music.", hi: "हमें हमेशा से संगीत पसंद रहा है।", why: "Short adverbs go between avoir and the participle.", whyhi: "छोटे क्रिया-विशेषण avoir और participle के बीच आते हैं।" }
];
