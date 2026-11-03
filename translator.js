/**
 * OmniGlyph - Minimalist Multilingual Translation Engine
 * Powered by Google Translate Neural API with offline conversational dictionary
 */

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ru', name: 'Russian' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'el', name: 'Greek' },
  { code: 'la', name: 'Latin' },
  { code: 'nl', name: 'Dutch' },
  { code: 'pl', name: 'Polish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'hi', name: 'Hindi' },
  { code: 'sv', name: 'Swedish' }
];

// Conversational greetings & rapid mapping
const CONVERSATIONAL_MAP = {
  'oi': { es: 'Hola', en: 'Hi', fr: 'Salut', de: 'Hallo', it: 'Ciao', pt: 'Oi', ja: 'こんにちは', ru: 'Привет' },
  'ola': { es: 'Hola', en: 'Hello', fr: 'Bonjour', de: 'Hallo', it: 'Ciao', pt: 'Olá', ja: 'こんにちは', ru: 'Привет' },
  'olá': { es: 'Hola', en: 'Hello', fr: 'Bonjour', de: 'Hallo', it: 'Ciao', pt: 'Olá', ja: 'こんにちは', ru: 'Привет' },
  'hello': { es: 'Hola', pt: 'Olá', fr: 'Bonjour', de: 'Hallo', it: 'Ciao', en: 'Hello', ja: 'こんにちは', ru: 'Привет' },
  'hi': { es: 'Hola', pt: 'Oi', fr: 'Salut', de: 'Hallo', it: 'Ciao', en: 'Hi', ja: 'こんにちは', ru: 'Привет' },
  'hola': { pt: 'Olá', en: 'Hello', fr: 'Bonjour', de: 'Hallo', it: 'Ciao', es: 'Hola', ja: 'こんにちは', ru: 'Привет' },
  'bom dia': { es: 'Buenos días', en: 'Good morning', fr: 'Bonjour', de: 'Guten Morgen', it: 'Buongiorno', pt: 'Bom dia' },
  'boa tarde': { es: 'Buenas tardes', en: 'Good afternoon', fr: 'Bon après-midi', de: 'Guten Tag', it: 'Buon pomeriggio', pt: 'Boa tarde' },
  'boa noite': { es: 'Buenas noches', en: 'Good night', fr: 'Bonne nuit', de: 'Gute Nacht', it: 'Buonanotte', pt: 'Boa noite' },
  'tudo bem': { es: '¿Todo bien?', en: 'All good?', fr: 'Tout va bien?', de: 'Alles gut?', it: 'Tutto bene?', pt: 'Tudo bem' },
  'como vai': { es: '¿Cómo estás?', en: 'How are you?', fr: 'Comment vas-tu?', de: 'Wie geht es dir?', it: 'Come stai?', pt: 'Como vai' },
  'obrigado': { es: 'Gracias', en: 'Thank you', fr: 'Merci', de: 'Danke', it: 'Grazie', pt: 'Obrigado' },
  'obrigada': { es: 'Gracias', en: 'Thank you', fr: 'Merci', de: 'Danke', it: 'Grazie', pt: 'Obrigada' },
  'gracias': { pt: 'Obrigado', en: 'Thank you', fr: 'Merci', de: 'Danke', it: 'Grazie', es: 'Gracias' },
  'thank you': { pt: 'Obrigado', es: 'Gracias', fr: 'Merci', de: 'Danke', it: 'Grazie', en: 'Thank you' },
  'de nada': { es: 'De nada', en: "You're welcome", fr: 'De rien', de: 'Bitte', it: 'Prego', pt: 'De nada' },
  'por favor': { es: 'Por favor', en: 'Please', fr: "S'il vous plaît", de: 'Bitte', it: 'Per favore', pt: 'Por favor' },
  'tchau': { es: 'Adiós', en: 'Bye', fr: 'Au revoir', de: 'Tschüss', it: 'Ciao', pt: 'Tchau' },
  'sim': { es: 'Sí', en: 'Yes', fr: 'Oui', de: 'Ja', it: 'Sì', pt: 'Sim' },
  'nao': { es: 'No', en: 'No', fr: 'Non', de: 'Nein', it: 'No', pt: 'Não' },
  'não': { es: 'No', en: 'No', fr: 'Non', de: 'Nein', it: 'No', pt: 'Não' },
  'yes': { es: 'Sí', pt: 'Sim', fr: 'Oui', de: 'Ja', it: 'Sì', en: 'Yes' },
  'no': { es: 'No', pt: 'Não', fr: 'Non', de: 'Nein', it: 'No', en: 'No' }
};

const Translator = {
  lastDetected: null,

  async translate(text, fromLang = 'en', toLang = 'es') {
    if (!text || !text.trim()) return '';

    const cleanText = text.trim();
    if (fromLang === toLang && fromLang !== 'auto') return cleanText;

    // Check conversational exact matches first
    const cleanLower = cleanText.toLowerCase().replace(/[!.,?]+$/, '');
    if (CONVERSATIONAL_MAP[cleanLower] && CONVERSATIONAL_MAP[cleanLower][toLang]) {
      const match = CONVERSATIONAL_MAP[cleanLower][toLang];
      const punctuationMatch = cleanText.match(/[!.,?]+$/);
      return punctuationMatch ? match + punctuationMatch[0] : match;
    }

    // Primary: Google Translate Neural API (CORS enabled)
    try {
      const sl = fromLang === 'auto' ? 'auto' : fromLang;
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${toLang}&dt=t&q=${encodeURIComponent(cleanText)}`;
      
      const response = await fetch(url, { signal: AbortSignal.timeout(7000) });
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data[0])) {
          if (data[2]) Translator.lastDetected = data[2];
          const translated = data[0].map(segment => segment[0]).join('');
          if (translated) return translated;
        }
      }
    } catch (err) {
      console.warn('Google Translate API unreachable, attempting fallback...', err);
    }

    // Secondary: MyMemory Translation API
    try {
      const fromParam = fromLang === 'auto' ? 'en' : fromLang;
      const mmUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanText)}&langpair=${fromParam}|${toLang}`;
      const mmRes = await fetch(mmUrl, { signal: AbortSignal.timeout(5000) });
      if (mmRes.ok) {
        const mmData = await mmRes.json();
        if (mmData && mmData.responseData && mmData.responseData.translatedText) {
          const txt = document.createElement('textarea');
          txt.innerHTML = mmData.responseData.translatedText;
          return txt.value;
        }
      }
    } catch (err) {
      console.warn('MyMemory fallback failed...', err);
    }

    // Tertiary: Clean fallback
    return cleanText;
  }
};
