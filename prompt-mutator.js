/**
 * OmniGlyph - Minimalist Prompt Special Character Mutator Engine
 * Randomly replaces letters and numbers with similar special characters & homoglyphs
 */

const PromptMutator = {
  SIMILAR_GLYPHS: {
    // Digits / Numbers (0-9)
    '0': ['𝟢', '𝟘', '𝟎', '⓿', '⓪', 'Ø', 'о', 'ο', 'º', '०', '૦'],
    '1': ['𝟣', '𝟙', '𝟏', '❶', '①', 'l', 'I', 'і', 'ι', '١', '१'],
    '2': ['𝟤', '𝟚', '𝟐', '❷', '②', 'Ƨ', 'ᒿ', '২', '२', '੨'],
    '3': ['𝟥', '𝟛', '𝟑', '❸', '③', 'З', 'з', 'Ʒ', 'ʒ', 'э', '३'],
    '4': ['𝟦', '𝟜', '𝟒', '❹', '④', 'Ч', 'ч', '५', '४'],
    '5': ['𝟧', '𝟝', '𝟓', '❺', '⑤', 'Ƽ', 'ƽ', '𝘚', '५', '੫'],
    '6': ['𝟨', '𝟞', '𝟔', '❻', '⑥', 'б', 'b', '৬', '६'],
    '7': ['𝟩', '𝟟', '𝟕', '❼', '⑦', 'г', 'Ƭ', '৭', '७'],
    '8': ['𝟪', '𝟠', '𝟖', '❽', '⑧', 'в', 'B', 'Ȣ', '੪', '८'],
    '9': ['𝟫', '𝟡', '𝟗', '❾', '⑨', 'я', 'q', '৭', '९'],

    // Lowercase (a-z)
    'a': ['а', 'ɑ', 'α', 'ä', 'å', 'ã', 'á', 'à', '𝐚', '𝕒', '𝒶', 'ᵃ', '@'],
    'b': ['Ь', 'ь', 'β', 'ᛒ', '8', '𝐛', '𝕓', '𝒷', 'ƀ', 'в'],
    'c': ['с', 'ϲ', 'ç', 'ć', 'č', '©', '¢', '𝐜', '𝕔', '𝒸', 'ᴄ'],
    'd': ['ԁ', 'ⅾ', 'đ', 'ð', '𝐝', '𝕕', '𝒹', 'ď'],
    'e': ['е', 'є', 'ε', 'ë', 'é', 'è', 'ê', '3', '€', '𝐞', '𝕖', 'ℯ', 'э'],
    'f': ['ғ', 'ƒ', 'ᚠ', '𝐟', '𝕗', '𝒻'],
    'g': ['ɡ', 'ց', 'ğ', '9', '𝐠', '𝕘', 'ℊ', 'ɢ'],
    'h': ['һ', 'հ', 'ᚻ', '#', '𝐡', '𝕙', '𝒽', 'ʜ'],
    'i': ['і', 'ı', 'ι', 'ï', 'í', 'ì', '1', '!', '𝐢', '𝕚', '𝒾', 'ɪ'],
    'j': ['ј', 'ϳ', '𝐣', '𝕛', '𝒿', 'ᴊ'],
    'k': ['κ', 'к', 'ᚲ', '𝐤', '𝕜', '𝓀', 'ᴋ'],
    'l': ['ӏ', 'ι', '|', '1', '£', '𝐥', '𝕝', '𝓁', 'ʟ'],
    'm': ['м', 'ɱ', 'ᴍ', '𝐦', '𝕞', '𝓂'],
    'n': ['п', 'η', 'ñ', 'ń', 'ո', '𝐧', '𝕟', '𝓃', 'ɴ'],
    'o': ['о', 'ο', 'ö', 'ø', 'ó', 'ò', '0', 'ɵ', '𝐨', '𝕠', 'ℴ', 'ᴏ'],
    'p': ['р', 'ρ', 'ք', 'þ', '¶', '𝐩', '𝕡', '𝓅', 'ᴘ'],
    'q': ['ԛ', 'գ', '9', '𝐪', '𝕢', '𝓆', 'ǫ'],
    'r': ['г', 'ɾ', 'ᚱ', '®', '𝐫', '𝕣', '𝓇', 'ʀ'],
    's': ['ѕ', 'š', 'ş', '$', '5', '§', '𝐬', '𝕤', '𝓈', 'ꜱ'],
    't': ['т', 'τ', '†', '7', '𝐭', '𝕥', '𝓉', 'ᴛ'],
    'u': ['υ', 'ս', 'ü', 'ú', 'ù', 'µ', '𝐮', '𝕦', '𝓊', 'ᴜ'],
    'v': ['ν', 'ѵ', 'ᐯ', '𝐯', '𝕧', '𝓋', 'ᴠ'],
    'w': ['ѡ', 'ɯ', 'ᚹ', 'vv', '𝐰', '𝕨', '𝓌', 'ᴡ'],
    'x': ['х', 'χ', '×', 'ҳ', '𝐱', '𝕩', '𝓍'],
    'y': ['у', 'ү', 'γ', 'ý', '¥', '𝐲', '𝕪', '𝓎', 'ʏ'],
    'z': ['ᴢ', 'ž', 'ź', 'ż', '2', '𝐳', '𝕫', '𝓏'],

    // Uppercase (A-Z)
    'A': ['А', 'Α', 'Ä', 'Å', 'Δ', 'Á', 'À', '4', '𝐀', '𝔸', '𝒜'],
    'B': ['В', 'Β', 'ᛒ', '8', '𝐁', '𝔹', 'ℬ', 'Ɓ'],
    'C': ['С', 'Ϲ', 'Ç', 'Ć', 'Č', '©', '𝐂', 'ℂ', '𝒞'],
    'D': ['ᗪ', 'Ð', 'Ď', '𝐃', '𝔻', '𝒟'],
    'E': ['Е', 'Ε', 'Ë', 'É', 'È', 'Ê', '3', '€', '𝐄', '𝔼', 'ℰ'],
    'F': ['Ғ', 'ᚠ', '𝐅', '𝔽', 'ℱ'],
    'G': ['Ԍ', 'Ğ', 'Ģ', '6', '𝐆', '𝔾', '𝒢'],
    'H': ['Н', 'Η', 'ᚺ', '#', '𝐇', 'ℍ', 'ℋ'],
    'I': ['І', 'Ι', 'Ï', 'Í', 'Ì', '1', '|', '𝐈', '𝕀', 'ℐ'],
    'J': ['Ј', 'Ϳ', '𝐉', '𝕁', '𝒥'],
    'K': ['К', 'Κ', 'ᚲ', '𝐊', '𝕂', '𝒦'],
    'L': ['Լ', 'Ł', '1', '£', '𝐋', '𝕃', 'ℒ'],
    'M': ['М', 'Μ', 'ᴹ', '𝐌', '𝕄', 'ℳ'],
    'N': ['Ν', 'Ñ', 'Ń', 'ո', '𝐍', 'ℕ', '𝒩'],
    'O': ['О', 'Ο', 'Ö', 'Ø', 'Ó', '0', 'Ω', '𝐎', '𝕆', '𝒪'],
    'P': ['Р', 'Ρ', 'Þ', '¶', '𝐏', 'ℙ', '𝒫'],
    'Q': ['Ԛ', '𝐐', 'ℚ', '𝒬'],
    'R': ['Я', '®', 'ᚱ', '𝐑', 'ℝ', 'ℛ'],
    'S': ['Ѕ', 'Š', '$', '5', '§', '𝐒', '𝕊', '𝒮'],
    'T': ['Т', 'Τ', '†', '7', '𝐓', '𝕋', '𝒯'],
    'U': ['Ս', 'Ü', 'Ú', 'Ù', 'Û', '𝐔', '𝕌', '𝒰'],
    'V': ['Ѵ', 'Ꮩ', '𝐕', '𝕍', '𝒱'],
    'W': ['Ԝ', 'Ш', 'ᚹ', 'VV', '𝐖', '𝕎', '𝒲'],
    'X': ['Х', 'Χ', '×', '𝐗', '𝕏', '𝒳'],
    'Y': ['Ү', 'Υ', 'Ý', '¥', '𝐘', '𝕐', '𝒴'],
    'Z': ['Ζ', 'Ž', 'Ź', 'Ż', '2', '𝐙', 'ℤ', '𝒵']
  },

  isEligible(char) {
    return Boolean(this.SIMILAR_GLYPHS[char]);
  },

  getRandomSimilarGlyph(char) {
    const pool = this.SIMILAR_GLYPHS[char];
    if (pool && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      return pool[idx];
    }
    return char;
  },

  analyze(text) {
    const chars = Array.from(text || '');
    const totalChars = chars.length;
    let eligibleCount = 0;
    let nonAsciiCount = 0;

    chars.forEach(c => {
      if (this.isEligible(c)) eligibleCount++;
      if (c.codePointAt(0) > 127) nonAsciiCount++;
    });

    return {
      totalChars,
      eligibleCount,
      nonAsciiCount
    };
  },

  mutate(text, targetPercentage = 50) {
    if (!text) {
      return {
        outputText: '',
        totalChars: 0,
        eligibleCount: 0,
        mutatedCount: 0,
        actualPercentage: 0
      };
    }

    const chars = Array.from(text);
    const totalChars = chars.length;

    // Find all eligible letter and number positions
    const eligibleIndices = [];
    chars.forEach((c, idx) => {
      if (this.isEligible(c)) {
        eligibleIndices.push(idx);
      }
    });

    const eligibleCount = eligibleIndices.length;
    if (eligibleCount === 0 || targetPercentage <= 0) {
      return {
        outputText: text,
        totalChars,
        eligibleCount,
        mutatedCount: 0,
        actualPercentage: 0
      };
    }

    const numToMutate = Math.min(
      eligibleCount,
      Math.round((eligibleCount * targetPercentage) / 100)
    );

    // Pick positions evenly distributed across text
    const selectedIndices = new Set();
    const step = eligibleCount / numToMutate;
    for (let i = 0; i < numToMutate; i++) {
      const pickIndex = Math.floor(i * step);
      selectedIndices.add(eligibleIndices[pickIndex]);
    }

    let mutatedCount = 0;
    const outputChars = chars.map((char, idx) => {
      if (selectedIndices.has(idx)) {
        const replacement = this.getRandomSimilarGlyph(char);
        if (replacement !== char) {
          mutatedCount++;
          return replacement;
        }
      }
      return char;
    });

    const actualPercentage = eligibleCount > 0
      ? Number(((mutatedCount / eligibleCount) * 100).toFixed(1))
      : 0;

    return {
      outputText: outputChars.join(''),
      totalChars,
      eligibleCount,
      mutatedCount,
      actualPercentage
    };
  }
};

if (typeof window !== 'undefined') {
  window.PromptMutator = PromptMutator;
}
if (typeof globalThis !== 'undefined') {
  globalThis.PromptMutator = PromptMutator;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PromptMutator };
}
