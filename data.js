/**
 * OmniGlyph - Database of Special Characters & Alphanumeric Glyphs
 * Massive curated collection of 1133+ characters across Unicode categories
 */

const GLYPH_CATEGORIES = [
  {
    "id": "all",
    "name": "All Characters"
  },
  {
    "id": "alphabet_styles",
    "name": "Alphabet Styles & Script"
  },
  {
    "id": "phonetic_latin",
    "name": "Phonetic & Extended Latin"
  },
  {
    "id": "punctuation",
    "name": "Punctuation & Rare Typography"
  },
  {
    "id": "math",
    "name": "Mathematics & Logic"
  },
  {
    "id": "greek",
    "name": "Greek Alphabet & Notation"
  },
  {
    "id": "cyrillic",
    "name": "Cyrillic Script"
  },
  {
    "id": "arrows",
    "name": "Arrows & Vectors"
  },
  {
    "id": "geometry",
    "name": "Geometry & Shapes"
  },
  {
    "id": "games",
    "name": "Chess, Cards & Dice"
  },
  {
    "id": "box",
    "name": "Box Drawing & Blocks"
  },
  {
    "id": "currency",
    "name": "World Currencies"
  },
  {
    "id": "runes",
    "name": "Norse Runes (Futhark)"
  },
  {
    "id": "hieroglyphs",
    "name": "Egyptian Hieroglyphs"
  },
  {
    "id": "music_astro",
    "name": "Music & Celestial"
  },
  {
    "id": "invisible",
    "name": "Invisible & Zero-Width"
  },
  {
    "id": "braille",
    "name": "Braille Patterns"
  },
  {
    "id": "fractions",
    "name": "Super/Subscript & Fractions"
  },
  {
    "id": "esoteric",
    "name": "Rare & Viral Symbols"
  },
  {
    "id": "diacritics",
    "name": "Diacritics & Zalgo Marks"
  }
];

const GLYPHS_DATABASE = [
  {
    "char": "𝐀",
    "name": "Mathematical Bold Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐁",
    "name": "Mathematical Bold Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐂",
    "name": "Mathematical Bold Capital C",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐃",
    "name": "Mathematical Bold Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐄",
    "name": "Mathematical Bold Capital E",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐅",
    "name": "Mathematical Bold Capital F",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐆",
    "name": "Mathematical Bold Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐇",
    "name": "Mathematical Bold Capital H",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐈",
    "name": "Mathematical Bold Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐉",
    "name": "Mathematical Bold Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐊",
    "name": "Mathematical Bold Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐋",
    "name": "Mathematical Bold Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐌",
    "name": "Mathematical Bold Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐍",
    "name": "Mathematical Bold Capital N",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐎",
    "name": "Mathematical Bold Capital O",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐏",
    "name": "Mathematical Bold Capital P",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐐",
    "name": "Mathematical Bold Capital Q",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐑",
    "name": "Mathematical Bold Capital R",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐒",
    "name": "Mathematical Bold Capital S",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐓",
    "name": "Mathematical Bold Capital T",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐔",
    "name": "Mathematical Bold Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐕",
    "name": "Mathematical Bold Capital V",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐖",
    "name": "Mathematical Bold Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐗",
    "name": "Mathematical Bold Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐘",
    "name": "Mathematical Bold Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐙",
    "name": "Mathematical Bold Capital Z",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐚",
    "name": "Mathematical Bold Small A",
    "cat": "alphabet_styles",
    "tags": [
      "a",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐛",
    "name": "Mathematical Bold Small B",
    "cat": "alphabet_styles",
    "tags": [
      "b",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐜",
    "name": "Mathematical Bold Small C",
    "cat": "alphabet_styles",
    "tags": [
      "c",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐝",
    "name": "Mathematical Bold Small D",
    "cat": "alphabet_styles",
    "tags": [
      "d",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐞",
    "name": "Mathematical Bold Small E",
    "cat": "alphabet_styles",
    "tags": [
      "e",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐟",
    "name": "Mathematical Bold Small F",
    "cat": "alphabet_styles",
    "tags": [
      "f",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐠",
    "name": "Mathematical Bold Small G",
    "cat": "alphabet_styles",
    "tags": [
      "g",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐡",
    "name": "Mathematical Bold Small H",
    "cat": "alphabet_styles",
    "tags": [
      "h",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐢",
    "name": "Mathematical Bold Small I",
    "cat": "alphabet_styles",
    "tags": [
      "i",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐣",
    "name": "Mathematical Bold Small J",
    "cat": "alphabet_styles",
    "tags": [
      "j",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐤",
    "name": "Mathematical Bold Small K",
    "cat": "alphabet_styles",
    "tags": [
      "k",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐥",
    "name": "Mathematical Bold Small L",
    "cat": "alphabet_styles",
    "tags": [
      "l",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐦",
    "name": "Mathematical Bold Small M",
    "cat": "alphabet_styles",
    "tags": [
      "m",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐧",
    "name": "Mathematical Bold Small N",
    "cat": "alphabet_styles",
    "tags": [
      "n",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐨",
    "name": "Mathematical Bold Small O",
    "cat": "alphabet_styles",
    "tags": [
      "o",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐩",
    "name": "Mathematical Bold Small P",
    "cat": "alphabet_styles",
    "tags": [
      "p",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐪",
    "name": "Mathematical Bold Small Q",
    "cat": "alphabet_styles",
    "tags": [
      "q",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐫",
    "name": "Mathematical Bold Small R",
    "cat": "alphabet_styles",
    "tags": [
      "r",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐬",
    "name": "Mathematical Bold Small S",
    "cat": "alphabet_styles",
    "tags": [
      "s",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐭",
    "name": "Mathematical Bold Small T",
    "cat": "alphabet_styles",
    "tags": [
      "t",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐮",
    "name": "Mathematical Bold Small U",
    "cat": "alphabet_styles",
    "tags": [
      "u",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐯",
    "name": "Mathematical Bold Small V",
    "cat": "alphabet_styles",
    "tags": [
      "v",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐰",
    "name": "Mathematical Bold Small W",
    "cat": "alphabet_styles",
    "tags": [
      "w",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐱",
    "name": "Mathematical Bold Small X",
    "cat": "alphabet_styles",
    "tags": [
      "x",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐲",
    "name": "Mathematical Bold Small Y",
    "cat": "alphabet_styles",
    "tags": [
      "y",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝐳",
    "name": "Mathematical Bold Small Z",
    "cat": "alphabet_styles",
    "tags": [
      "z",
      "bold",
      "alphabet"
    ]
  },
  {
    "char": "𝔸",
    "name": "Blackboard Bold Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝔹",
    "name": "Blackboard Bold Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "ℂ",
    "name": "Blackboard Bold Capital C (Complex Numbers)",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝔻",
    "name": "Blackboard Bold Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝔼",
    "name": "Blackboard Bold Capital E (Expectation Value)",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝔽",
    "name": "Blackboard Bold Capital F (Finite Field)",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝔾",
    "name": "Blackboard Bold Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "ℍ",
    "name": "Blackboard Bold Capital H (Quaternions)",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕀",
    "name": "Blackboard Bold Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕁",
    "name": "Blackboard Bold Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕂",
    "name": "Blackboard Bold Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕃",
    "name": "Blackboard Bold Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕄",
    "name": "Blackboard Bold Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "ℕ",
    "name": "Blackboard Bold Capital N (Natural Numbers)",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕆",
    "name": "Blackboard Bold Capital O (Octonions)",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "ℙ",
    "name": "Blackboard Bold Capital P (Primes / Probability)",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "ℚ",
    "name": "Blackboard Bold Capital Q (Rational Numbers)",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "ℝ",
    "name": "Blackboard Bold Capital R (Real Numbers)",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕊",
    "name": "Blackboard Bold Capital S (Sedenions)",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕋",
    "name": "Blackboard Bold Capital T (Torus)",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕌",
    "name": "Blackboard Bold Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕍",
    "name": "Blackboard Bold Capital V (Vector Space)",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕎",
    "name": "Blackboard Bold Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕏",
    "name": "Blackboard Bold Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕐",
    "name": "Blackboard Bold Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "ℤ",
    "name": "Blackboard Bold Capital Z (Integers)",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "double struck",
      "blackboard",
      "math set"
    ]
  },
  {
    "char": "𝕒",
    "name": "Blackboard Bold Small A",
    "cat": "alphabet_styles",
    "tags": [
      "a",
      "double struck"
    ]
  },
  {
    "char": "𝕓",
    "name": "Blackboard Bold Small B",
    "cat": "alphabet_styles",
    "tags": [
      "b",
      "double struck"
    ]
  },
  {
    "char": "𝕔",
    "name": "Blackboard Bold Small C",
    "cat": "alphabet_styles",
    "tags": [
      "c",
      "double struck"
    ]
  },
  {
    "char": "𝕕",
    "name": "Blackboard Bold Small D",
    "cat": "alphabet_styles",
    "tags": [
      "d",
      "double struck"
    ]
  },
  {
    "char": "𝕖",
    "name": "Blackboard Bold Small E",
    "cat": "alphabet_styles",
    "tags": [
      "e",
      "double struck"
    ]
  },
  {
    "char": "𝕗",
    "name": "Blackboard Bold Small F",
    "cat": "alphabet_styles",
    "tags": [
      "f",
      "double struck"
    ]
  },
  {
    "char": "𝕘",
    "name": "Blackboard Bold Small G",
    "cat": "alphabet_styles",
    "tags": [
      "g",
      "double struck"
    ]
  },
  {
    "char": "𝕙",
    "name": "Blackboard Bold Small H",
    "cat": "alphabet_styles",
    "tags": [
      "h",
      "double struck"
    ]
  },
  {
    "char": "𝕚",
    "name": "Blackboard Bold Small I",
    "cat": "alphabet_styles",
    "tags": [
      "i",
      "double struck"
    ]
  },
  {
    "char": "𝕛",
    "name": "Blackboard Bold Small J",
    "cat": "alphabet_styles",
    "tags": [
      "j",
      "double struck"
    ]
  },
  {
    "char": "𝕜",
    "name": "Blackboard Bold Small K",
    "cat": "alphabet_styles",
    "tags": [
      "k",
      "double struck"
    ]
  },
  {
    "char": "𝕝",
    "name": "Blackboard Bold Small L",
    "cat": "alphabet_styles",
    "tags": [
      "l",
      "double struck"
    ]
  },
  {
    "char": "𝕞",
    "name": "Blackboard Bold Small M",
    "cat": "alphabet_styles",
    "tags": [
      "m",
      "double struck"
    ]
  },
  {
    "char": "𝕟",
    "name": "Blackboard Bold Small N",
    "cat": "alphabet_styles",
    "tags": [
      "n",
      "double struck"
    ]
  },
  {
    "char": "𝕠",
    "name": "Blackboard Bold Small O",
    "cat": "alphabet_styles",
    "tags": [
      "o",
      "double struck"
    ]
  },
  {
    "char": "𝕡",
    "name": "Blackboard Bold Small P",
    "cat": "alphabet_styles",
    "tags": [
      "p",
      "double struck"
    ]
  },
  {
    "char": "𝕢",
    "name": "Blackboard Bold Small Q",
    "cat": "alphabet_styles",
    "tags": [
      "q",
      "double struck"
    ]
  },
  {
    "char": "𝕣",
    "name": "Blackboard Bold Small R",
    "cat": "alphabet_styles",
    "tags": [
      "r",
      "double struck"
    ]
  },
  {
    "char": "𝕤",
    "name": "Blackboard Bold Small S",
    "cat": "alphabet_styles",
    "tags": [
      "s",
      "double struck"
    ]
  },
  {
    "char": "𝕥",
    "name": "Blackboard Bold Small T",
    "cat": "alphabet_styles",
    "tags": [
      "t",
      "double struck"
    ]
  },
  {
    "char": "𝕦",
    "name": "Blackboard Bold Small U",
    "cat": "alphabet_styles",
    "tags": [
      "u",
      "double struck"
    ]
  },
  {
    "char": "𝕧",
    "name": "Blackboard Bold Small V",
    "cat": "alphabet_styles",
    "tags": [
      "v",
      "double struck"
    ]
  },
  {
    "char": "𝕨",
    "name": "Blackboard Bold Small W",
    "cat": "alphabet_styles",
    "tags": [
      "w",
      "double struck"
    ]
  },
  {
    "char": "𝕩",
    "name": "Blackboard Bold Small X",
    "cat": "alphabet_styles",
    "tags": [
      "x",
      "double struck"
    ]
  },
  {
    "char": "𝕪",
    "name": "Blackboard Bold Small Y",
    "cat": "alphabet_styles",
    "tags": [
      "y",
      "double struck"
    ]
  },
  {
    "char": "𝕫",
    "name": "Blackboard Bold Small Z",
    "cat": "alphabet_styles",
    "tags": [
      "z",
      "double struck"
    ]
  },
  {
    "char": "𝔄",
    "name": "Fraktur Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔅",
    "name": "Fraktur Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "ℭ",
    "name": "Fraktur Capital C",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔇",
    "name": "Fraktur Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔈",
    "name": "Fraktur Capital E",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔉",
    "name": "Fraktur Capital F",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔊",
    "name": "Fraktur Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "ℌ",
    "name": "Fraktur Capital H",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "ℑ",
    "name": "Fraktur Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔍",
    "name": "Fraktur Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔎",
    "name": "Fraktur Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔏",
    "name": "Fraktur Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔐",
    "name": "Fraktur Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔑",
    "name": "Fraktur Capital N",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔒",
    "name": "Fraktur Capital O",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔓",
    "name": "Fraktur Capital P",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔔",
    "name": "Fraktur Capital Q",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "ℜ",
    "name": "Fraktur Capital R",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔖",
    "name": "Fraktur Capital S",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔗",
    "name": "Fraktur Capital T",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔘",
    "name": "Fraktur Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔙",
    "name": "Fraktur Capital V",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔚",
    "name": "Fraktur Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔛",
    "name": "Fraktur Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔜",
    "name": "Fraktur Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "ℨ",
    "name": "Fraktur Capital Z",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔞",
    "name": "Fraktur Small A",
    "cat": "alphabet_styles",
    "tags": [
      "a",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔟",
    "name": "Fraktur Small B",
    "cat": "alphabet_styles",
    "tags": [
      "b",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔠",
    "name": "Fraktur Small C",
    "cat": "alphabet_styles",
    "tags": [
      "c",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔡",
    "name": "Fraktur Small D",
    "cat": "alphabet_styles",
    "tags": [
      "d",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔢",
    "name": "Fraktur Small E",
    "cat": "alphabet_styles",
    "tags": [
      "e",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔣",
    "name": "Fraktur Small F",
    "cat": "alphabet_styles",
    "tags": [
      "f",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔤",
    "name": "Fraktur Small G",
    "cat": "alphabet_styles",
    "tags": [
      "g",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔥",
    "name": "Fraktur Small H",
    "cat": "alphabet_styles",
    "tags": [
      "h",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔦",
    "name": "Fraktur Small I",
    "cat": "alphabet_styles",
    "tags": [
      "i",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔧",
    "name": "Fraktur Small J",
    "cat": "alphabet_styles",
    "tags": [
      "j",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔨",
    "name": "Fraktur Small K",
    "cat": "alphabet_styles",
    "tags": [
      "k",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔩",
    "name": "Fraktur Small L",
    "cat": "alphabet_styles",
    "tags": [
      "l",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔪",
    "name": "Fraktur Small M",
    "cat": "alphabet_styles",
    "tags": [
      "m",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔫",
    "name": "Fraktur Small N",
    "cat": "alphabet_styles",
    "tags": [
      "n",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔬",
    "name": "Fraktur Small O",
    "cat": "alphabet_styles",
    "tags": [
      "o",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔭",
    "name": "Fraktur Small P",
    "cat": "alphabet_styles",
    "tags": [
      "p",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔮",
    "name": "Fraktur Small Q",
    "cat": "alphabet_styles",
    "tags": [
      "q",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔯",
    "name": "Fraktur Small R",
    "cat": "alphabet_styles",
    "tags": [
      "r",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔰",
    "name": "Fraktur Small S",
    "cat": "alphabet_styles",
    "tags": [
      "s",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔱",
    "name": "Fraktur Small T",
    "cat": "alphabet_styles",
    "tags": [
      "t",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔲",
    "name": "Fraktur Small U",
    "cat": "alphabet_styles",
    "tags": [
      "u",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔳",
    "name": "Fraktur Small V",
    "cat": "alphabet_styles",
    "tags": [
      "v",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔴",
    "name": "Fraktur Small W",
    "cat": "alphabet_styles",
    "tags": [
      "w",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔵",
    "name": "Fraktur Small X",
    "cat": "alphabet_styles",
    "tags": [
      "x",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔶",
    "name": "Fraktur Small Y",
    "cat": "alphabet_styles",
    "tags": [
      "y",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝔷",
    "name": "Fraktur Small Z",
    "cat": "alphabet_styles",
    "tags": [
      "z",
      "fraktur",
      "gothic"
    ]
  },
  {
    "char": "𝒜",
    "name": "Mathematical Script Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℬ",
    "name": "Mathematical Script Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒞",
    "name": "Mathematical Script Capital C",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒟",
    "name": "Mathematical Script Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℰ",
    "name": "Mathematical Script Capital E",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℱ",
    "name": "Mathematical Script Capital F",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒢",
    "name": "Mathematical Script Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℋ",
    "name": "Mathematical Script Capital H",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℐ",
    "name": "Mathematical Script Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒥",
    "name": "Mathematical Script Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒦",
    "name": "Mathematical Script Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℒ",
    "name": "Mathematical Script Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℳ",
    "name": "Mathematical Script Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒩",
    "name": "Mathematical Script Capital N",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒪",
    "name": "Mathematical Script Capital O",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒫",
    "name": "Mathematical Script Capital P",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒬",
    "name": "Mathematical Script Capital Q",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℛ",
    "name": "Mathematical Script Capital R",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒮",
    "name": "Mathematical Script Capital S",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒯",
    "name": "Mathematical Script Capital T",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒰",
    "name": "Mathematical Script Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒱",
    "name": "Mathematical Script Capital V",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒲",
    "name": "Mathematical Script Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒳",
    "name": "Mathematical Script Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒴",
    "name": "Mathematical Script Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒵",
    "name": "Mathematical Script Capital Z",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒶",
    "name": "Mathematical Script Small A",
    "cat": "alphabet_styles",
    "tags": [
      "a",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒷",
    "name": "Mathematical Script Small B",
    "cat": "alphabet_styles",
    "tags": [
      "b",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒸",
    "name": "Mathematical Script Small C",
    "cat": "alphabet_styles",
    "tags": [
      "c",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒹",
    "name": "Mathematical Script Small D",
    "cat": "alphabet_styles",
    "tags": [
      "d",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℯ",
    "name": "Mathematical Script Small E",
    "cat": "alphabet_styles",
    "tags": [
      "e",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒻",
    "name": "Mathematical Script Small F",
    "cat": "alphabet_styles",
    "tags": [
      "f",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℊ",
    "name": "Mathematical Script Small G",
    "cat": "alphabet_styles",
    "tags": [
      "g",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒽",
    "name": "Mathematical Script Small H",
    "cat": "alphabet_styles",
    "tags": [
      "h",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒾",
    "name": "Mathematical Script Small I",
    "cat": "alphabet_styles",
    "tags": [
      "i",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝒿",
    "name": "Mathematical Script Small J",
    "cat": "alphabet_styles",
    "tags": [
      "j",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓀",
    "name": "Mathematical Script Small K",
    "cat": "alphabet_styles",
    "tags": [
      "k",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓁",
    "name": "Mathematical Script Small L",
    "cat": "alphabet_styles",
    "tags": [
      "l",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓂",
    "name": "Mathematical Script Small M",
    "cat": "alphabet_styles",
    "tags": [
      "m",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓃",
    "name": "Mathematical Script Small N",
    "cat": "alphabet_styles",
    "tags": [
      "n",
      "script",
      "cursive"
    ]
  },
  {
    "char": "ℴ",
    "name": "Mathematical Script Small O",
    "cat": "alphabet_styles",
    "tags": [
      "o",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓅",
    "name": "Mathematical Script Small P",
    "cat": "alphabet_styles",
    "tags": [
      "p",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓆",
    "name": "Mathematical Script Small Q",
    "cat": "alphabet_styles",
    "tags": [
      "q",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓇",
    "name": "Mathematical Script Small R",
    "cat": "alphabet_styles",
    "tags": [
      "r",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓈",
    "name": "Mathematical Script Small S",
    "cat": "alphabet_styles",
    "tags": [
      "s",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓉",
    "name": "Mathematical Script Small T",
    "cat": "alphabet_styles",
    "tags": [
      "t",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓊",
    "name": "Mathematical Script Small U",
    "cat": "alphabet_styles",
    "tags": [
      "u",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓋",
    "name": "Mathematical Script Small V",
    "cat": "alphabet_styles",
    "tags": [
      "v",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓌",
    "name": "Mathematical Script Small W",
    "cat": "alphabet_styles",
    "tags": [
      "w",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓍",
    "name": "Mathematical Script Small X",
    "cat": "alphabet_styles",
    "tags": [
      "x",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓎",
    "name": "Mathematical Script Small Y",
    "cat": "alphabet_styles",
    "tags": [
      "y",
      "script",
      "cursive"
    ]
  },
  {
    "char": "𝓏",
    "name": "Mathematical Script Small Z",
    "cat": "alphabet_styles",
    "tags": [
      "z",
      "script",
      "cursive"
    ]
  },
  {
    "char": "Ａ",
    "name": "Fullwidth Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｂ",
    "name": "Fullwidth Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｃ",
    "name": "Fullwidth Capital C",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｄ",
    "name": "Fullwidth Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｅ",
    "name": "Fullwidth Capital E",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｆ",
    "name": "Fullwidth Capital F",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｇ",
    "name": "Fullwidth Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｈ",
    "name": "Fullwidth Capital H",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｉ",
    "name": "Fullwidth Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｊ",
    "name": "Fullwidth Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｋ",
    "name": "Fullwidth Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｌ",
    "name": "Fullwidth Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｍ",
    "name": "Fullwidth Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｎ",
    "name": "Fullwidth Capital N",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｏ",
    "name": "Fullwidth Capital O",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｐ",
    "name": "Fullwidth Capital P",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｑ",
    "name": "Fullwidth Capital Q",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｒ",
    "name": "Fullwidth Capital R",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｓ",
    "name": "Fullwidth Capital S",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｔ",
    "name": "Fullwidth Capital T",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｕ",
    "name": "Fullwidth Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｖ",
    "name": "Fullwidth Capital V",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｗ",
    "name": "Fullwidth Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｘ",
    "name": "Fullwidth Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｙ",
    "name": "Fullwidth Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "Ｚ",
    "name": "Fullwidth Capital Z",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ａ",
    "name": "Fullwidth Small A",
    "cat": "alphabet_styles",
    "tags": [
      "a",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｂ",
    "name": "Fullwidth Small B",
    "cat": "alphabet_styles",
    "tags": [
      "b",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｃ",
    "name": "Fullwidth Small C",
    "cat": "alphabet_styles",
    "tags": [
      "c",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｄ",
    "name": "Fullwidth Small D",
    "cat": "alphabet_styles",
    "tags": [
      "d",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｅ",
    "name": "Fullwidth Small E",
    "cat": "alphabet_styles",
    "tags": [
      "e",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｆ",
    "name": "Fullwidth Small F",
    "cat": "alphabet_styles",
    "tags": [
      "f",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｇ",
    "name": "Fullwidth Small G",
    "cat": "alphabet_styles",
    "tags": [
      "g",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｈ",
    "name": "Fullwidth Small H",
    "cat": "alphabet_styles",
    "tags": [
      "h",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｉ",
    "name": "Fullwidth Small I",
    "cat": "alphabet_styles",
    "tags": [
      "i",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｊ",
    "name": "Fullwidth Small J",
    "cat": "alphabet_styles",
    "tags": [
      "j",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｋ",
    "name": "Fullwidth Small K",
    "cat": "alphabet_styles",
    "tags": [
      "k",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｌ",
    "name": "Fullwidth Small L",
    "cat": "alphabet_styles",
    "tags": [
      "l",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｍ",
    "name": "Fullwidth Small M",
    "cat": "alphabet_styles",
    "tags": [
      "m",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｎ",
    "name": "Fullwidth Small N",
    "cat": "alphabet_styles",
    "tags": [
      "n",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｏ",
    "name": "Fullwidth Small O",
    "cat": "alphabet_styles",
    "tags": [
      "o",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｐ",
    "name": "Fullwidth Small P",
    "cat": "alphabet_styles",
    "tags": [
      "p",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｑ",
    "name": "Fullwidth Small Q",
    "cat": "alphabet_styles",
    "tags": [
      "q",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｒ",
    "name": "Fullwidth Small R",
    "cat": "alphabet_styles",
    "tags": [
      "r",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｓ",
    "name": "Fullwidth Small S",
    "cat": "alphabet_styles",
    "tags": [
      "s",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｔ",
    "name": "Fullwidth Small T",
    "cat": "alphabet_styles",
    "tags": [
      "t",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｕ",
    "name": "Fullwidth Small U",
    "cat": "alphabet_styles",
    "tags": [
      "u",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｖ",
    "name": "Fullwidth Small V",
    "cat": "alphabet_styles",
    "tags": [
      "v",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｗ",
    "name": "Fullwidth Small W",
    "cat": "alphabet_styles",
    "tags": [
      "w",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｘ",
    "name": "Fullwidth Small X",
    "cat": "alphabet_styles",
    "tags": [
      "x",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｙ",
    "name": "Fullwidth Small Y",
    "cat": "alphabet_styles",
    "tags": [
      "y",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "ｚ",
    "name": "Fullwidth Small Z",
    "cat": "alphabet_styles",
    "tags": [
      "z",
      "fullwidth",
      "vaporwave"
    ]
  },
  {
    "char": "０",
    "name": "Fullwidth Digit 0",
    "cat": "alphabet_styles",
    "tags": [
      "0",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "１",
    "name": "Fullwidth Digit 1",
    "cat": "alphabet_styles",
    "tags": [
      "1",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "２",
    "name": "Fullwidth Digit 2",
    "cat": "alphabet_styles",
    "tags": [
      "2",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "３",
    "name": "Fullwidth Digit 3",
    "cat": "alphabet_styles",
    "tags": [
      "3",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "４",
    "name": "Fullwidth Digit 4",
    "cat": "alphabet_styles",
    "tags": [
      "4",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "５",
    "name": "Fullwidth Digit 5",
    "cat": "alphabet_styles",
    "tags": [
      "5",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "６",
    "name": "Fullwidth Digit 6",
    "cat": "alphabet_styles",
    "tags": [
      "6",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "７",
    "name": "Fullwidth Digit 7",
    "cat": "alphabet_styles",
    "tags": [
      "7",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "８",
    "name": "Fullwidth Digit 8",
    "cat": "alphabet_styles",
    "tags": [
      "8",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "９",
    "name": "Fullwidth Digit 9",
    "cat": "alphabet_styles",
    "tags": [
      "9",
      "fullwidth",
      "number"
    ]
  },
  {
    "char": "Ⓐ",
    "name": "Circled Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "circled"
    ]
  },
  {
    "char": "Ⓑ",
    "name": "Circled Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "circled"
    ]
  },
  {
    "char": "Ⓒ",
    "name": "Circled Capital C",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "circled"
    ]
  },
  {
    "char": "Ⓓ",
    "name": "Circled Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "circled"
    ]
  },
  {
    "char": "Ⓔ",
    "name": "Circled Capital E",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "circled"
    ]
  },
  {
    "char": "Ⓕ",
    "name": "Circled Capital F",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "circled"
    ]
  },
  {
    "char": "Ⓖ",
    "name": "Circled Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "circled"
    ]
  },
  {
    "char": "Ⓗ",
    "name": "Circled Capital H",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "circled"
    ]
  },
  {
    "char": "Ⓘ",
    "name": "Circled Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "circled"
    ]
  },
  {
    "char": "Ⓙ",
    "name": "Circled Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "circled"
    ]
  },
  {
    "char": "Ⓚ",
    "name": "Circled Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "circled"
    ]
  },
  {
    "char": "Ⓛ",
    "name": "Circled Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "circled"
    ]
  },
  {
    "char": "Ⓜ",
    "name": "Circled Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "circled"
    ]
  },
  {
    "char": "Ⓝ",
    "name": "Circled Capital N",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "circled"
    ]
  },
  {
    "char": "Ⓞ",
    "name": "Circled Capital O",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "circled"
    ]
  },
  {
    "char": "Ⓟ",
    "name": "Circled Capital P",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "circled"
    ]
  },
  {
    "char": "Ⓠ",
    "name": "Circled Capital Q",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "circled"
    ]
  },
  {
    "char": "Ⓡ",
    "name": "Circled Capital R",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "circled"
    ]
  },
  {
    "char": "Ⓢ",
    "name": "Circled Capital S",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "circled"
    ]
  },
  {
    "char": "Ⓣ",
    "name": "Circled Capital T",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "circled"
    ]
  },
  {
    "char": "Ⓤ",
    "name": "Circled Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "circled"
    ]
  },
  {
    "char": "Ⓥ",
    "name": "Circled Capital V",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "circled"
    ]
  },
  {
    "char": "Ⓦ",
    "name": "Circled Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "circled"
    ]
  },
  {
    "char": "Ⓧ",
    "name": "Circled Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "circled"
    ]
  },
  {
    "char": "Ⓨ",
    "name": "Circled Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "circled"
    ]
  },
  {
    "char": "Ⓩ",
    "name": "Circled Capital Z",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "circled"
    ]
  },
  {
    "char": "ⓐ",
    "name": "Circled Small A",
    "cat": "alphabet_styles",
    "tags": [
      "a",
      "circled"
    ]
  },
  {
    "char": "ⓑ",
    "name": "Circled Small B",
    "cat": "alphabet_styles",
    "tags": [
      "b",
      "circled"
    ]
  },
  {
    "char": "ⓒ",
    "name": "Circled Small C",
    "cat": "alphabet_styles",
    "tags": [
      "c",
      "circled"
    ]
  },
  {
    "char": "ⓓ",
    "name": "Circled Small D",
    "cat": "alphabet_styles",
    "tags": [
      "d",
      "circled"
    ]
  },
  {
    "char": "ⓔ",
    "name": "Circled Small E",
    "cat": "alphabet_styles",
    "tags": [
      "e",
      "circled"
    ]
  },
  {
    "char": "ⓕ",
    "name": "Circled Small F",
    "cat": "alphabet_styles",
    "tags": [
      "f",
      "circled"
    ]
  },
  {
    "char": "ⓖ",
    "name": "Circled Small G",
    "cat": "alphabet_styles",
    "tags": [
      "g",
      "circled"
    ]
  },
  {
    "char": "ⓗ",
    "name": "Circled Small H",
    "cat": "alphabet_styles",
    "tags": [
      "h",
      "circled"
    ]
  },
  {
    "char": "ⓘ",
    "name": "Circled Small I",
    "cat": "alphabet_styles",
    "tags": [
      "i",
      "circled"
    ]
  },
  {
    "char": "ⓙ",
    "name": "Circled Small J",
    "cat": "alphabet_styles",
    "tags": [
      "j",
      "circled"
    ]
  },
  {
    "char": "ⓚ",
    "name": "Circled Small K",
    "cat": "alphabet_styles",
    "tags": [
      "k",
      "circled"
    ]
  },
  {
    "char": "ⓛ",
    "name": "Circled Small L",
    "cat": "alphabet_styles",
    "tags": [
      "l",
      "circled"
    ]
  },
  {
    "char": "ⓜ",
    "name": "Circled Small M",
    "cat": "alphabet_styles",
    "tags": [
      "m",
      "circled"
    ]
  },
  {
    "char": "ⓝ",
    "name": "Circled Small N",
    "cat": "alphabet_styles",
    "tags": [
      "n",
      "circled"
    ]
  },
  {
    "char": "ⓞ",
    "name": "Circled Small O",
    "cat": "alphabet_styles",
    "tags": [
      "o",
      "circled"
    ]
  },
  {
    "char": "ⓟ",
    "name": "Circled Small P",
    "cat": "alphabet_styles",
    "tags": [
      "p",
      "circled"
    ]
  },
  {
    "char": "ⓠ",
    "name": "Circled Small Q",
    "cat": "alphabet_styles",
    "tags": [
      "q",
      "circled"
    ]
  },
  {
    "char": "ⓡ",
    "name": "Circled Small R",
    "cat": "alphabet_styles",
    "tags": [
      "r",
      "circled"
    ]
  },
  {
    "char": "ⓢ",
    "name": "Circled Small S",
    "cat": "alphabet_styles",
    "tags": [
      "s",
      "circled"
    ]
  },
  {
    "char": "ⓣ",
    "name": "Circled Small T",
    "cat": "alphabet_styles",
    "tags": [
      "t",
      "circled"
    ]
  },
  {
    "char": "ⓤ",
    "name": "Circled Small U",
    "cat": "alphabet_styles",
    "tags": [
      "u",
      "circled"
    ]
  },
  {
    "char": "ⓥ",
    "name": "Circled Small V",
    "cat": "alphabet_styles",
    "tags": [
      "v",
      "circled"
    ]
  },
  {
    "char": "ⓦ",
    "name": "Circled Small W",
    "cat": "alphabet_styles",
    "tags": [
      "w",
      "circled"
    ]
  },
  {
    "char": "ⓧ",
    "name": "Circled Small X",
    "cat": "alphabet_styles",
    "tags": [
      "x",
      "circled"
    ]
  },
  {
    "char": "ⓨ",
    "name": "Circled Small Y",
    "cat": "alphabet_styles",
    "tags": [
      "y",
      "circled"
    ]
  },
  {
    "char": "ⓩ",
    "name": "Circled Small Z",
    "cat": "alphabet_styles",
    "tags": [
      "z",
      "circled"
    ]
  },
  {
    "char": "①",
    "name": "Circled Number 1",
    "cat": "alphabet_styles",
    "tags": [
      "1",
      "circled",
      "number"
    ]
  },
  {
    "char": "②",
    "name": "Circled Number 2",
    "cat": "alphabet_styles",
    "tags": [
      "2",
      "circled",
      "number"
    ]
  },
  {
    "char": "③",
    "name": "Circled Number 3",
    "cat": "alphabet_styles",
    "tags": [
      "3",
      "circled",
      "number"
    ]
  },
  {
    "char": "④",
    "name": "Circled Number 4",
    "cat": "alphabet_styles",
    "tags": [
      "4",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑤",
    "name": "Circled Number 5",
    "cat": "alphabet_styles",
    "tags": [
      "5",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑥",
    "name": "Circled Number 6",
    "cat": "alphabet_styles",
    "tags": [
      "6",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑦",
    "name": "Circled Number 7",
    "cat": "alphabet_styles",
    "tags": [
      "7",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑧",
    "name": "Circled Number 8",
    "cat": "alphabet_styles",
    "tags": [
      "8",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑨",
    "name": "Circled Number 9",
    "cat": "alphabet_styles",
    "tags": [
      "9",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑩",
    "name": "Circled Number 10",
    "cat": "alphabet_styles",
    "tags": [
      "10",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑪",
    "name": "Circled Number 11",
    "cat": "alphabet_styles",
    "tags": [
      "11",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑫",
    "name": "Circled Number 12",
    "cat": "alphabet_styles",
    "tags": [
      "12",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑬",
    "name": "Circled Number 13",
    "cat": "alphabet_styles",
    "tags": [
      "13",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑭",
    "name": "Circled Number 14",
    "cat": "alphabet_styles",
    "tags": [
      "14",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑮",
    "name": "Circled Number 15",
    "cat": "alphabet_styles",
    "tags": [
      "15",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑯",
    "name": "Circled Number 16",
    "cat": "alphabet_styles",
    "tags": [
      "16",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑰",
    "name": "Circled Number 17",
    "cat": "alphabet_styles",
    "tags": [
      "17",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑱",
    "name": "Circled Number 18",
    "cat": "alphabet_styles",
    "tags": [
      "18",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑲",
    "name": "Circled Number 19",
    "cat": "alphabet_styles",
    "tags": [
      "19",
      "circled",
      "number"
    ]
  },
  {
    "char": "⑳",
    "name": "Circled Number 20",
    "cat": "alphabet_styles",
    "tags": [
      "20",
      "circled",
      "number"
    ]
  },
  {
    "char": "⓪",
    "name": "Circled Number 0",
    "cat": "alphabet_styles",
    "tags": [
      "0",
      "circled",
      "number"
    ]
  },
  {
    "char": "❶",
    "name": "Negative Circled Number 1",
    "cat": "alphabet_styles",
    "tags": [
      "1",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❷",
    "name": "Negative Circled Number 2",
    "cat": "alphabet_styles",
    "tags": [
      "2",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❸",
    "name": "Negative Circled Number 3",
    "cat": "alphabet_styles",
    "tags": [
      "3",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❹",
    "name": "Negative Circled Number 4",
    "cat": "alphabet_styles",
    "tags": [
      "4",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❺",
    "name": "Negative Circled Number 5",
    "cat": "alphabet_styles",
    "tags": [
      "5",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❻",
    "name": "Negative Circled Number 6",
    "cat": "alphabet_styles",
    "tags": [
      "6",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❼",
    "name": "Negative Circled Number 7",
    "cat": "alphabet_styles",
    "tags": [
      "7",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❽",
    "name": "Negative Circled Number 8",
    "cat": "alphabet_styles",
    "tags": [
      "8",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❾",
    "name": "Negative Circled Number 9",
    "cat": "alphabet_styles",
    "tags": [
      "9",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "❿",
    "name": "Negative Circled Number 10",
    "cat": "alphabet_styles",
    "tags": [
      "10",
      "dingbat",
      "number"
    ]
  },
  {
    "char": "🄰",
    "name": "Squared Latin Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄱",
    "name": "Squared Latin Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄲",
    "name": "Squared Latin Capital C",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄳",
    "name": "Squared Latin Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄴",
    "name": "Squared Latin Capital E",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄵",
    "name": "Squared Latin Capital F",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄶",
    "name": "Squared Latin Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄷",
    "name": "Squared Latin Capital H",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄸",
    "name": "Squared Latin Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄹",
    "name": "Squared Latin Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄺",
    "name": "Squared Latin Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄻",
    "name": "Squared Latin Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄼",
    "name": "Squared Latin Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄽",
    "name": "Squared Latin Capital N",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄾",
    "name": "Squared Latin Capital O",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "squared",
      "box"
    ]
  },
  {
    "char": "🄿",
    "name": "Squared Latin Capital P",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅀",
    "name": "Squared Latin Capital Q",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅁",
    "name": "Squared Latin Capital R",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅂",
    "name": "Squared Latin Capital S",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅃",
    "name": "Squared Latin Capital T",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅄",
    "name": "Squared Latin Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅅",
    "name": "Squared Latin Capital V",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅆",
    "name": "Squared Latin Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅇",
    "name": "Squared Latin Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅈",
    "name": "Squared Latin Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅉",
    "name": "Squared Latin Capital Z",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "squared",
      "box"
    ]
  },
  {
    "char": "🅰",
    "name": "Negative Squared Capital 🅰",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅱",
    "name": "Negative Squared Capital 🅱",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅲",
    "name": "Negative Squared Capital 🅲",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅳",
    "name": "Negative Squared Capital 🅳",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅴",
    "name": "Negative Squared Capital 🅴",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅵",
    "name": "Negative Squared Capital 🅵",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅶",
    "name": "Negative Squared Capital 🅶",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅷",
    "name": "Negative Squared Capital 🅷",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅸",
    "name": "Negative Squared Capital 🅸",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅹",
    "name": "Negative Squared Capital 🅹",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅺",
    "name": "Negative Squared Capital 🅺",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅻",
    "name": "Negative Squared Capital 🅻",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅼",
    "name": "Negative Squared Capital 🅼",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅽",
    "name": "Negative Squared Capital 🅽",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅾",
    "name": "Negative Squared Capital 🅾",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🅿",
    "name": "Negative Squared Capital 🅿",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆂",
    "name": "Negative Squared Capital 🆂",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆃",
    "name": "Negative Squared Capital 🆃",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆄",
    "name": "Negative Squared Capital 🆄",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆅",
    "name": "Negative Squared Capital 🆅",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆆",
    "name": "Negative Squared Capital 🆆",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆇",
    "name": "Negative Squared Capital 🆇",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆈",
    "name": "Negative Squared Capital 🆈",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "🆉",
    "name": "Negative Squared Capital 🆉",
    "cat": "alphabet_styles",
    "tags": [
      "negative squared",
      "emoji style"
    ]
  },
  {
    "char": "⒜",
    "name": "Parenthesized Small A",
    "cat": "alphabet_styles",
    "tags": [
      "a",
      "parenthesized"
    ]
  },
  {
    "char": "⒝",
    "name": "Parenthesized Small B",
    "cat": "alphabet_styles",
    "tags": [
      "b",
      "parenthesized"
    ]
  },
  {
    "char": "⒞",
    "name": "Parenthesized Small C",
    "cat": "alphabet_styles",
    "tags": [
      "c",
      "parenthesized"
    ]
  },
  {
    "char": "⒟",
    "name": "Parenthesized Small D",
    "cat": "alphabet_styles",
    "tags": [
      "d",
      "parenthesized"
    ]
  },
  {
    "char": "⒠",
    "name": "Parenthesized Small E",
    "cat": "alphabet_styles",
    "tags": [
      "e",
      "parenthesized"
    ]
  },
  {
    "char": "⒡",
    "name": "Parenthesized Small F",
    "cat": "alphabet_styles",
    "tags": [
      "f",
      "parenthesized"
    ]
  },
  {
    "char": "⒢",
    "name": "Parenthesized Small G",
    "cat": "alphabet_styles",
    "tags": [
      "g",
      "parenthesized"
    ]
  },
  {
    "char": "⒣",
    "name": "Parenthesized Small H",
    "cat": "alphabet_styles",
    "tags": [
      "h",
      "parenthesized"
    ]
  },
  {
    "char": "⒤",
    "name": "Parenthesized Small I",
    "cat": "alphabet_styles",
    "tags": [
      "i",
      "parenthesized"
    ]
  },
  {
    "char": "⒥",
    "name": "Parenthesized Small J",
    "cat": "alphabet_styles",
    "tags": [
      "j",
      "parenthesized"
    ]
  },
  {
    "char": "⒦",
    "name": "Parenthesized Small K",
    "cat": "alphabet_styles",
    "tags": [
      "k",
      "parenthesized"
    ]
  },
  {
    "char": "⒧",
    "name": "Parenthesized Small L",
    "cat": "alphabet_styles",
    "tags": [
      "l",
      "parenthesized"
    ]
  },
  {
    "char": "⒨",
    "name": "Parenthesized Small M",
    "cat": "alphabet_styles",
    "tags": [
      "m",
      "parenthesized"
    ]
  },
  {
    "char": "⒩",
    "name": "Parenthesized Small N",
    "cat": "alphabet_styles",
    "tags": [
      "n",
      "parenthesized"
    ]
  },
  {
    "char": "⒪",
    "name": "Parenthesized Small O",
    "cat": "alphabet_styles",
    "tags": [
      "o",
      "parenthesized"
    ]
  },
  {
    "char": "⒫",
    "name": "Parenthesized Small P",
    "cat": "alphabet_styles",
    "tags": [
      "p",
      "parenthesized"
    ]
  },
  {
    "char": "⒬",
    "name": "Parenthesized Small Q",
    "cat": "alphabet_styles",
    "tags": [
      "q",
      "parenthesized"
    ]
  },
  {
    "char": "⒭",
    "name": "Parenthesized Small R",
    "cat": "alphabet_styles",
    "tags": [
      "r",
      "parenthesized"
    ]
  },
  {
    "char": "⒮",
    "name": "Parenthesized Small S",
    "cat": "alphabet_styles",
    "tags": [
      "s",
      "parenthesized"
    ]
  },
  {
    "char": "⒯",
    "name": "Parenthesized Small T",
    "cat": "alphabet_styles",
    "tags": [
      "t",
      "parenthesized"
    ]
  },
  {
    "char": "⒰",
    "name": "Parenthesized Small U",
    "cat": "alphabet_styles",
    "tags": [
      "u",
      "parenthesized"
    ]
  },
  {
    "char": "⒱",
    "name": "Parenthesized Small V",
    "cat": "alphabet_styles",
    "tags": [
      "v",
      "parenthesized"
    ]
  },
  {
    "char": "⒲",
    "name": "Parenthesized Small W",
    "cat": "alphabet_styles",
    "tags": [
      "w",
      "parenthesized"
    ]
  },
  {
    "char": "⒳",
    "name": "Parenthesized Small X",
    "cat": "alphabet_styles",
    "tags": [
      "x",
      "parenthesized"
    ]
  },
  {
    "char": "⒴",
    "name": "Parenthesized Small Y",
    "cat": "alphabet_styles",
    "tags": [
      "y",
      "parenthesized"
    ]
  },
  {
    "char": "⒵",
    "name": "Parenthesized Small Z",
    "cat": "alphabet_styles",
    "tags": [
      "z",
      "parenthesized"
    ]
  },
  {
    "char": "ᴀ",
    "name": "Latin Small Capital A",
    "cat": "alphabet_styles",
    "tags": [
      "A",
      "small caps"
    ]
  },
  {
    "char": "ʙ",
    "name": "Latin Small Capital B",
    "cat": "alphabet_styles",
    "tags": [
      "B",
      "small caps"
    ]
  },
  {
    "char": "ᴄ",
    "name": "Latin Small Capital C",
    "cat": "alphabet_styles",
    "tags": [
      "C",
      "small caps"
    ]
  },
  {
    "char": "ᴅ",
    "name": "Latin Small Capital D",
    "cat": "alphabet_styles",
    "tags": [
      "D",
      "small caps"
    ]
  },
  {
    "char": "ᴇ",
    "name": "Latin Small Capital E",
    "cat": "alphabet_styles",
    "tags": [
      "E",
      "small caps"
    ]
  },
  {
    "char": "ғ",
    "name": "Latin Small Capital F",
    "cat": "alphabet_styles",
    "tags": [
      "F",
      "small caps"
    ]
  },
  {
    "char": "ɢ",
    "name": "Latin Small Capital G",
    "cat": "alphabet_styles",
    "tags": [
      "G",
      "small caps"
    ]
  },
  {
    "char": "ʜ",
    "name": "Latin Small Capital H",
    "cat": "alphabet_styles",
    "tags": [
      "H",
      "small caps"
    ]
  },
  {
    "char": "ɪ",
    "name": "Latin Small Capital I",
    "cat": "alphabet_styles",
    "tags": [
      "I",
      "small caps"
    ]
  },
  {
    "char": "ᴊ",
    "name": "Latin Small Capital J",
    "cat": "alphabet_styles",
    "tags": [
      "J",
      "small caps"
    ]
  },
  {
    "char": "ᴋ",
    "name": "Latin Small Capital K",
    "cat": "alphabet_styles",
    "tags": [
      "K",
      "small caps"
    ]
  },
  {
    "char": "ʟ",
    "name": "Latin Small Capital L",
    "cat": "alphabet_styles",
    "tags": [
      "L",
      "small caps"
    ]
  },
  {
    "char": "ᴍ",
    "name": "Latin Small Capital M",
    "cat": "alphabet_styles",
    "tags": [
      "M",
      "small caps"
    ]
  },
  {
    "char": "ɴ",
    "name": "Latin Small Capital N",
    "cat": "alphabet_styles",
    "tags": [
      "N",
      "small caps"
    ]
  },
  {
    "char": "ᴏ",
    "name": "Latin Small Capital O",
    "cat": "alphabet_styles",
    "tags": [
      "O",
      "small caps"
    ]
  },
  {
    "char": "ᴘ",
    "name": "Latin Small Capital P",
    "cat": "alphabet_styles",
    "tags": [
      "P",
      "small caps"
    ]
  },
  {
    "char": "ǫ",
    "name": "Latin Small Capital Q",
    "cat": "alphabet_styles",
    "tags": [
      "Q",
      "small caps"
    ]
  },
  {
    "char": "ʀ",
    "name": "Latin Small Capital R",
    "cat": "alphabet_styles",
    "tags": [
      "R",
      "small caps"
    ]
  },
  {
    "char": "s",
    "name": "Latin Small Capital S",
    "cat": "alphabet_styles",
    "tags": [
      "S",
      "small caps"
    ]
  },
  {
    "char": "ᴛ",
    "name": "Latin Small Capital T",
    "cat": "alphabet_styles",
    "tags": [
      "T",
      "small caps"
    ]
  },
  {
    "char": "ᴜ",
    "name": "Latin Small Capital U",
    "cat": "alphabet_styles",
    "tags": [
      "U",
      "small caps"
    ]
  },
  {
    "char": "ᴠ",
    "name": "Latin Small Capital V",
    "cat": "alphabet_styles",
    "tags": [
      "V",
      "small caps"
    ]
  },
  {
    "char": "ᴡ",
    "name": "Latin Small Capital W",
    "cat": "alphabet_styles",
    "tags": [
      "W",
      "small caps"
    ]
  },
  {
    "char": "x",
    "name": "Latin Small Capital X",
    "cat": "alphabet_styles",
    "tags": [
      "X",
      "small caps"
    ]
  },
  {
    "char": "ʏ",
    "name": "Latin Small Capital Y",
    "cat": "alphabet_styles",
    "tags": [
      "Y",
      "small caps"
    ]
  },
  {
    "char": "ᴢ",
    "name": "Latin Small Capital Z",
    "cat": "alphabet_styles",
    "tags": [
      "Z",
      "small caps"
    ]
  },
  {
    "char": "Æ",
    "name": "Latin Capital Ligature AE (Ash)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "æ",
    "name": "Latin Small Ligature AE",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Œ",
    "name": "Latin Capital Ligature OE (Ethel)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "œ",
    "name": "Latin Small Ligature OE",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Þ",
    "name": "Latin Capital Thorn",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "þ",
    "name": "Latin Small Thorn",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ð",
    "name": "Latin Capital Eth",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ð",
    "name": "Latin Small Eth",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ß",
    "name": "Latin Small Letter Sharp S (Eszett)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ẞ",
    "name": "Latin Capital Letter Sharp S",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ø",
    "name": "Latin Capital Letter O with Stroke",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ø",
    "name": "Latin Small Letter O with Stroke",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Å",
    "name": "Latin Capital Letter A with Ring Above (Angstrom)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "å",
    "name": "Latin Small Letter A with Ring Above",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ŋ",
    "name": "Latin Small Letter Eng (Velar Nasal)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ŋ",
    "name": "Latin Capital Letter Eng",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ʃ",
    "name": "Latin Small Letter Esh (Voiceless Postalveolar Fricative)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ʒ",
    "name": "Latin Small Letter Ezh (Voiced Postalveolar Fricative)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ə",
    "name": "Latin Small Letter Schwa",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ə",
    "name": "Latin Capital Letter Schwa",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ʔ",
    "name": "Latin Letter Glottal Stop",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ʕ",
    "name": "Latin Letter Pharyngeal Voiced Fricative",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ç",
    "name": "Latin Small Letter C with Cedilla",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ç",
    "name": "Latin Capital Letter C with Cedilla",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ñ",
    "name": "Latin Small Letter N with Tilde",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ñ",
    "name": "Latin Capital Letter N with Tilde",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ı",
    "name": "Latin Small Letter Dotless I (Turkish)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "İ",
    "name": "Latin Capital Letter I with Dot Above",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ł",
    "name": "Latin Small Letter L with Stroke (Polish)",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ł",
    "name": "Latin Capital Letter L with Stroke",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ş",
    "name": "Latin Small Letter S with Cedilla",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ş",
    "name": "Latin Capital Letter S with Cedilla",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ğ",
    "name": "Latin Small Letter G with Breve",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ğ",
    "name": "Latin Capital Letter G with Breve",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "ž",
    "name": "Latin Small Letter Z with Caron",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Ž",
    "name": "Latin Capital Letter Z with Caron",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "č",
    "name": "Latin Small Letter C with Caron",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Č",
    "name": "Latin Capital Letter C with Caron",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "š",
    "name": "Latin Small Letter S with Caron",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "Š",
    "name": "Latin Capital Letter S with Caron",
    "cat": "phonetic_latin",
    "tags": [
      "phonetics",
      "extended latin",
      "ipa"
    ]
  },
  {
    "char": "‽",
    "name": "Interrobang (Exclamation + Question)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "¿",
    "name": "Inverted Question Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "¡",
    "name": "Inverted Exclamation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "§",
    "name": "Section Sign / Double S (Legal)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "¶",
    "name": "Pilcrow / Paragraph Sign",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "†",
    "name": "Dagger (Obelisk)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‡",
    "name": "Double Dagger (Diesis)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "•",
    "name": "Bullet Point",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "⁃",
    "name": "Hyphen Bullet",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‣",
    "name": "Triangular Bullet",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‰",
    "name": "Per Mille Sign (Parts per thousand)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‱",
    "name": "Per Ten Thousand / Basis Point",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "※",
    "name": "Reference Mark (Komejirushi)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "№",
    "name": "Numero Sign",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "℃",
    "name": "Degree Celsius",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "℉",
    "name": "Degree Fahrenheit",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "°",
    "name": "Degree Sign",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "′",
    "name": "Prime (Minutes / Feet)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "″",
    "name": "Double Prime (Seconds / Inches)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‴",
    "name": "Triple Prime",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "«",
    "name": "Left-Pointing Double Angle Quotation Mark (Guillemet)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "»",
    "name": "Right-Pointing Double Angle Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‹",
    "name": "Single Left-Pointing Angle Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "›",
    "name": "Single Right-Pointing Angle Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "“",
    "name": "Left Double Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "”",
    "name": "Right Double Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‘",
    "name": "Left Single Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "’",
    "name": "Right Single Quotation Mark / Apostrophe",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "„",
    "name": "Double Low-9 Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "‚",
    "name": "Single Low-9 Quotation Mark",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "—",
    "name": "Em Dash",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "–",
    "name": "En Dash",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "―",
    "name": "Horizontal Bar",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "…",
    "name": "Horizontal Ellipsis",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "⋯",
    "name": "Midline Horizontal Ellipsis",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "⋮",
    "name": "Vertical Ellipsis",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "⋱",
    "name": "Down Right Diagonal Ellipsis",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "⋰",
    "name": "Up Right Diagonal Ellipsis",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "¬",
    "name": "Not Sign (Negation)",
    "cat": "punctuation",
    "tags": [
      "punctuation",
      "typography",
      "symbol"
    ]
  },
  {
    "char": "∀",
    "name": "For All Universal Quantifier",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∁",
    "name": "Complement",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∂",
    "name": "Partial Differential",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∃",
    "name": "There Exists Existential Quantifier",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∄",
    "name": "There Does Not Exist",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∅",
    "name": "Empty Set",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∆",
    "name": "Increment / Laplacian Delta",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∇",
    "name": "Nabla / Del Gradient",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∈",
    "name": "Element Of Set",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∉",
    "name": "Not An Element Of Set",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∋",
    "name": "Contains As Member",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∎",
    "name": "End of Proof Q.E.D. Tombstone",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∏",
    "name": "N-Ary Product / Pi Operator",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∑",
    "name": "N-Ary Summation / Sigma",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "−",
    "name": "Minus Sign",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∓",
    "name": "Minus-or-Plus Sign",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "±",
    "name": "Plus-or-Minus Sign",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∕",
    "name": "Division Slash",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∖",
    "name": "Set Minus / Backslash",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∗",
    "name": "Asterisk Operator / Convolution",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∘",
    "name": "Ring Operator / Function Composition",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∙",
    "name": "Bullet Operator / Dot Product",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "√",
    "name": "Square Root Radical",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∛",
    "name": "Cube Root",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∜",
    "name": "Fourth Root",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∝",
    "name": "Proportional To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∞",
    "name": "Infinity",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∟",
    "name": "Right Angle",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∠",
    "name": "Angle",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∡",
    "name": "Measured Angle",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∣",
    "name": "Divides Relation",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∤",
    "name": "Does Not Divide",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∥",
    "name": "Parallel To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∧",
    "name": "Logical AND / Conjunction",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∨",
    "name": "Logical OR / Disjunction",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∩",
    "name": "Set Intersection",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∪",
    "name": "Set Union",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∫",
    "name": "Integral",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∬",
    "name": "Double Integral",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∭",
    "name": "Triple Integral",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∮",
    "name": "Contour Integral",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∴",
    "name": "Therefore Logical Consequence",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∵",
    "name": "Because / Since",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∼",
    "name": "Tilde Operator / Distributed As",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "∽",
    "name": "Reverse Tilde / Similar",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≃",
    "name": "Asymptotically Equal To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≅",
    "name": "Approximately Equal / Congruent",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≈",
    "name": "Almost Equal To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≠",
    "name": "Not Equal To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≡",
    "name": "Identical To / Congruence",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≤",
    "name": "Less-Than or Equal To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≥",
    "name": "Greater-Than or Equal To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≪",
    "name": "Much Less-Than",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "≫",
    "name": "Much Greater-Than",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊂",
    "name": "Subset Of",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊃",
    "name": "Superset Of",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊆",
    "name": "Subset Of or Equal To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊇",
    "name": "Superset Of or Equal To",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊕",
    "name": "Circled Plus / Direct Sum / XOR",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊖",
    "name": "Circled Minus",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊗",
    "name": "Circled Times / Tensor Product",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊙",
    "name": "Circled Dot Operator / Hadamard",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊢",
    "name": "Right Tack / Provable Assertion",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊨",
    "name": "Double Turnstile / Semantic Entailment",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊥",
    "name": "Up Tack / Orthogonal / Contradiction Bottom",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "⊤",
    "name": "Down Tack / Tautology Top",
    "cat": "math",
    "tags": [
      "math",
      "logic",
      "algebra",
      "calculus"
    ]
  },
  {
    "char": "Α",
    "name": "Greek Capital Letter Alpha",
    "cat": "greek",
    "tags": [
      "alpha",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Β",
    "name": "Greek Capital Letter Beta",
    "cat": "greek",
    "tags": [
      "beta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Γ",
    "name": "Greek Capital Letter Gamma",
    "cat": "greek",
    "tags": [
      "gamma",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Δ",
    "name": "Greek Capital Letter Delta",
    "cat": "greek",
    "tags": [
      "delta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ε",
    "name": "Greek Capital Letter Epsilon",
    "cat": "greek",
    "tags": [
      "epsilon",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ζ",
    "name": "Greek Capital Letter Zeta",
    "cat": "greek",
    "tags": [
      "zeta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Η",
    "name": "Greek Capital Letter Eta",
    "cat": "greek",
    "tags": [
      "eta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Θ",
    "name": "Greek Capital Letter Theta",
    "cat": "greek",
    "tags": [
      "theta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ι",
    "name": "Greek Capital Letter Iota",
    "cat": "greek",
    "tags": [
      "iota",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Κ",
    "name": "Greek Capital Letter Kappa",
    "cat": "greek",
    "tags": [
      "kappa",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Λ",
    "name": "Greek Capital Letter Lambda",
    "cat": "greek",
    "tags": [
      "lambda",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Μ",
    "name": "Greek Capital Letter Mu",
    "cat": "greek",
    "tags": [
      "mu",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ν",
    "name": "Greek Capital Letter Nu",
    "cat": "greek",
    "tags": [
      "nu",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ξ",
    "name": "Greek Capital Letter Xi",
    "cat": "greek",
    "tags": [
      "xi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ο",
    "name": "Greek Capital Letter Omicron",
    "cat": "greek",
    "tags": [
      "omicron",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Π",
    "name": "Greek Capital Letter Pi",
    "cat": "greek",
    "tags": [
      "pi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ρ",
    "name": "Greek Capital Letter Rho",
    "cat": "greek",
    "tags": [
      "rho",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Σ",
    "name": "Greek Capital Letter Sigma",
    "cat": "greek",
    "tags": [
      "sigma",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Τ",
    "name": "Greek Capital Letter Tau",
    "cat": "greek",
    "tags": [
      "tau",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Υ",
    "name": "Greek Capital Letter Upsilon",
    "cat": "greek",
    "tags": [
      "upsilon",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Φ",
    "name": "Greek Capital Letter Phi",
    "cat": "greek",
    "tags": [
      "phi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Χ",
    "name": "Greek Capital Letter Chi",
    "cat": "greek",
    "tags": [
      "chi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ψ",
    "name": "Greek Capital Letter Psi",
    "cat": "greek",
    "tags": [
      "psi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Ω",
    "name": "Greek Capital Letter Omega",
    "cat": "greek",
    "tags": [
      "omega",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "α",
    "name": "Greek Small Letter alpha",
    "cat": "greek",
    "tags": [
      "alpha",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "β",
    "name": "Greek Small Letter beta",
    "cat": "greek",
    "tags": [
      "beta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "γ",
    "name": "Greek Small Letter gamma",
    "cat": "greek",
    "tags": [
      "gamma",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "δ",
    "name": "Greek Small Letter delta",
    "cat": "greek",
    "tags": [
      "delta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ε",
    "name": "Greek Small Letter epsilon",
    "cat": "greek",
    "tags": [
      "epsilon",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ζ",
    "name": "Greek Small Letter zeta",
    "cat": "greek",
    "tags": [
      "zeta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "η",
    "name": "Greek Small Letter eta",
    "cat": "greek",
    "tags": [
      "eta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "θ",
    "name": "Greek Small Letter theta",
    "cat": "greek",
    "tags": [
      "theta",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ι",
    "name": "Greek Small Letter iota",
    "cat": "greek",
    "tags": [
      "iota",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "κ",
    "name": "Greek Small Letter kappa",
    "cat": "greek",
    "tags": [
      "kappa",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "λ",
    "name": "Greek Small Letter lambda",
    "cat": "greek",
    "tags": [
      "lambda",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "μ",
    "name": "Greek Small Letter mu",
    "cat": "greek",
    "tags": [
      "mu",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ν",
    "name": "Greek Small Letter nu",
    "cat": "greek",
    "tags": [
      "nu",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ξ",
    "name": "Greek Small Letter xi",
    "cat": "greek",
    "tags": [
      "xi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ο",
    "name": "Greek Small Letter omicron",
    "cat": "greek",
    "tags": [
      "omicron",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "π",
    "name": "Greek Small Letter pi",
    "cat": "greek",
    "tags": [
      "pi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ρ",
    "name": "Greek Small Letter rho",
    "cat": "greek",
    "tags": [
      "rho",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "σ",
    "name": "Greek Small Letter sigma",
    "cat": "greek",
    "tags": [
      "sigma",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ς",
    "name": "Greek Small Letter final sigma",
    "cat": "greek",
    "tags": [
      "final sigma",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "τ",
    "name": "Greek Small Letter tau",
    "cat": "greek",
    "tags": [
      "tau",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "υ",
    "name": "Greek Small Letter upsilon",
    "cat": "greek",
    "tags": [
      "upsilon",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "φ",
    "name": "Greek Small Letter phi",
    "cat": "greek",
    "tags": [
      "phi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "χ",
    "name": "Greek Small Letter chi",
    "cat": "greek",
    "tags": [
      "chi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ψ",
    "name": "Greek Small Letter psi",
    "cat": "greek",
    "tags": [
      "psi",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "ω",
    "name": "Greek Small Letter omega",
    "cat": "greek",
    "tags": [
      "omega",
      "greek",
      "alphabet"
    ]
  },
  {
    "char": "Б",
    "name": "Cyrillic Letter Be",
    "cat": "cyrillic",
    "tags": [
      "be",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "б",
    "name": "Cyrillic Letter be",
    "cat": "cyrillic",
    "tags": [
      "be",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "В",
    "name": "Cyrillic Letter Ve",
    "cat": "cyrillic",
    "tags": [
      "ve",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "в",
    "name": "Cyrillic Letter ve",
    "cat": "cyrillic",
    "tags": [
      "ve",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Г",
    "name": "Cyrillic Letter Ghe",
    "cat": "cyrillic",
    "tags": [
      "ghe",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "г",
    "name": "Cyrillic Letter ghe",
    "cat": "cyrillic",
    "tags": [
      "ghe",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Д",
    "name": "Cyrillic Letter De",
    "cat": "cyrillic",
    "tags": [
      "de",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "д",
    "name": "Cyrillic Letter de",
    "cat": "cyrillic",
    "tags": [
      "de",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ж",
    "name": "Cyrillic Letter Zhe",
    "cat": "cyrillic",
    "tags": [
      "zhe",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ж",
    "name": "Cyrillic Letter zhe",
    "cat": "cyrillic",
    "tags": [
      "zhe",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "З",
    "name": "Cyrillic Letter Ze",
    "cat": "cyrillic",
    "tags": [
      "ze",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "з",
    "name": "Cyrillic Letter ze",
    "cat": "cyrillic",
    "tags": [
      "ze",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "И",
    "name": "Cyrillic Letter I",
    "cat": "cyrillic",
    "tags": [
      "i",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "и",
    "name": "Cyrillic Letter i",
    "cat": "cyrillic",
    "tags": [
      "i",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Й",
    "name": "Cyrillic Letter Short I",
    "cat": "cyrillic",
    "tags": [
      "short i",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "й",
    "name": "Cyrillic Letter short i",
    "cat": "cyrillic",
    "tags": [
      "short i",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Л",
    "name": "Cyrillic Letter El",
    "cat": "cyrillic",
    "tags": [
      "el",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "л",
    "name": "Cyrillic Letter el",
    "cat": "cyrillic",
    "tags": [
      "el",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "П",
    "name": "Cyrillic Letter Pe",
    "cat": "cyrillic",
    "tags": [
      "pe",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "п",
    "name": "Cyrillic Letter pe",
    "cat": "cyrillic",
    "tags": [
      "pe",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "У",
    "name": "Cyrillic Letter U",
    "cat": "cyrillic",
    "tags": [
      "u",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "у",
    "name": "Cyrillic Letter u",
    "cat": "cyrillic",
    "tags": [
      "u",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ф",
    "name": "Cyrillic Letter Ef",
    "cat": "cyrillic",
    "tags": [
      "ef",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ф",
    "name": "Cyrillic Letter ef",
    "cat": "cyrillic",
    "tags": [
      "ef",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ц",
    "name": "Cyrillic Letter Tse",
    "cat": "cyrillic",
    "tags": [
      "tse",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ц",
    "name": "Cyrillic Letter tse",
    "cat": "cyrillic",
    "tags": [
      "tse",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ч",
    "name": "Cyrillic Letter Che",
    "cat": "cyrillic",
    "tags": [
      "che",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ч",
    "name": "Cyrillic Letter che",
    "cat": "cyrillic",
    "tags": [
      "che",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ш",
    "name": "Cyrillic Letter Sha",
    "cat": "cyrillic",
    "tags": [
      "sha",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ш",
    "name": "Cyrillic Letter sha",
    "cat": "cyrillic",
    "tags": [
      "sha",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Щ",
    "name": "Cyrillic Letter Shcha",
    "cat": "cyrillic",
    "tags": [
      "shcha",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "щ",
    "name": "Cyrillic Letter shcha",
    "cat": "cyrillic",
    "tags": [
      "shcha",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ъ",
    "name": "Cyrillic Letter Hard Sign",
    "cat": "cyrillic",
    "tags": [
      "hard sign",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ъ",
    "name": "Cyrillic Letter hard sign",
    "cat": "cyrillic",
    "tags": [
      "hard sign",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ы",
    "name": "Cyrillic Letter Yeru",
    "cat": "cyrillic",
    "tags": [
      "yeru",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ы",
    "name": "Cyrillic Letter yeru",
    "cat": "cyrillic",
    "tags": [
      "yeru",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ь",
    "name": "Cyrillic Letter Soft Sign",
    "cat": "cyrillic",
    "tags": [
      "soft sign",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ь",
    "name": "Cyrillic Letter soft sign",
    "cat": "cyrillic",
    "tags": [
      "soft sign",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Э",
    "name": "Cyrillic Letter E",
    "cat": "cyrillic",
    "tags": [
      "e",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "э",
    "name": "Cyrillic Letter e",
    "cat": "cyrillic",
    "tags": [
      "e",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Ю",
    "name": "Cyrillic Letter Yu",
    "cat": "cyrillic",
    "tags": [
      "yu",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "ю",
    "name": "Cyrillic Letter yu",
    "cat": "cyrillic",
    "tags": [
      "yu",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "Я",
    "name": "Cyrillic Letter Ya",
    "cat": "cyrillic",
    "tags": [
      "ya",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "я",
    "name": "Cyrillic Letter ya",
    "cat": "cyrillic",
    "tags": [
      "ya",
      "cyrillic",
      "russian"
    ]
  },
  {
    "char": "←",
    "name": "Leftwards Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↑",
    "name": "Upwards Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "→",
    "name": "Rightwards Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↓",
    "name": "Downwards Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↔",
    "name": "Left Right Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↕",
    "name": "Up Down Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↖",
    "name": "North West Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↗",
    "name": "North East Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↘",
    "name": "South East Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↙",
    "name": "South West Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↚",
    "name": "Leftwards Arrow with Stroke",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↛",
    "name": "Rightwards Arrow with Stroke",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↜",
    "name": "Leftwards Wave Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↝",
    "name": "Rightwards Wave Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↞",
    "name": "Leftwards Two Headed Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↠",
    "name": "Rightwards Two Headed Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↢",
    "name": "Leftwards Arrow with Tail",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↣",
    "name": "Rightwards Arrow with Tail",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↩",
    "name": "Leftwards Arrow with Hook",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↪",
    "name": "Rightwards Arrow with Hook",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↰",
    "name": "Upwards Arrow with Tip Leftwards",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↱",
    "name": "Upwards Arrow with Tip Rightwards",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↵",
    "name": "Downwards Arrow with Corner Leftwards (Enter Key)",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↺",
    "name": "Anticlockwise Open Circle Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "↻",
    "name": "Clockwise Open Circle Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇄",
    "name": "Rightwards Arrow over Leftwards Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇅",
    "name": "Upwards Arrow Leftwards of Downwards",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇆",
    "name": "Leftwards Arrow over Rightwards Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇇",
    "name": "Leftwards Paired Arrows",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇉",
    "name": "Rightwards Paired Arrows",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇐",
    "name": "Leftwards Double Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇒",
    "name": "Rightwards Double Arrow (Implies)",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇔",
    "name": "Left Right Double Arrow (Equivalent / IFF)",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇑",
    "name": "Upwards Double Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇓",
    "name": "Downwards Double Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇕",
    "name": "Up Down Double Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇜",
    "name": "Leftwards Squiggle Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇝",
    "name": "Rightwards Squiggle Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇦",
    "name": "Leftwards White Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇨",
    "name": "Rightwards White Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇧",
    "name": "Upwards White Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "⇩",
    "name": "Downwards White Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "➔",
    "name": "Heavy Rightwards Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "➤",
    "name": "Black Rightwards Arrowhead",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "➥",
    "name": "Heavy Lower Right-Bent Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "➦",
    "name": "Heavy Upper Right-Bent Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "➽",
    "name": "Heavy Concave-Pointed Arrow",
    "cat": "arrows",
    "tags": [
      "arrow",
      "direction",
      "vector"
    ]
  },
  {
    "char": "■",
    "name": "Black Square",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "□",
    "name": "White Square",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "▲",
    "name": "Black Up-Pointing Triangle",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "△",
    "name": "White Up-Pointing Triangle",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "▼",
    "name": "Black Down-Pointing Triangle",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "▽",
    "name": "White Down-Pointing Triangle",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "◆",
    "name": "Black Diamond",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "◇",
    "name": "White Diamond",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "○",
    "name": "White Circle",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "●",
    "name": "Black Circle",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "◎",
    "name": "Bullseye Circle",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "★",
    "name": "Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "☆",
    "name": "White Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✦",
    "name": "Black Four Pointed Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✧",
    "name": "White Four Pointed Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✩",
    "name": "Stress Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✪",
    "name": "Circled White Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✫",
    "name": "Open Centre Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✬",
    "name": "Black Centre White Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✭",
    "name": "Outlined Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✮",
    "name": "Heavy Outlined Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✯",
    "name": "Pinwheel Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✰",
    "name": "Shadowed White Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "⁂",
    "name": "Asterism",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "⁑",
    "name": "Two Asterisks",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "❂",
    "name": "Circled Open Centre Sun",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "❁",
    "name": "White Florette",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "❀",
    "name": "White Blossom",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✿",
    "name": "Black Florette",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✾",
    "name": "Six Petalled Black and White Florette",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✽",
    "name": "Heavy Teardrop Spoked Asterisk",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✼",
    "name": "Teardrop Spoked Pinwheel Asterisk",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✻",
    "name": "Teardrop Spoked Asterisk",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✺",
    "name": "Sixteen Pointed Asterisk",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✹",
    "name": "Twelve Pointed Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✸",
    "name": "Heavy Eight Pointed Rectilinear Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✷",
    "name": "Eight Pointed Rectilinear Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✶",
    "name": "Six Pointed Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✵",
    "name": "Eight Pointed Pinwheel Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✴",
    "name": "Eight Pointed Black Star",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✳",
    "name": "Eight Spoked Asterisk",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✲",
    "name": "Open Centre Asterisk",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "✱",
    "name": "Heavy Asterisk",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "❆",
    "name": "Heavy Chevron Snowflake",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "❅",
    "name": "Tight Trifoliate Snowflake",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "❄",
    "name": "Snowflake",
    "cat": "geometry",
    "tags": [
      "shape",
      "geometry",
      "star",
      "flower"
    ]
  },
  {
    "char": "♔",
    "name": "White Chess King",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♕",
    "name": "White Chess Queen",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♖",
    "name": "White Chess Rook",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♗",
    "name": "White Chess Bishop",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♘",
    "name": "White Chess Knight",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♙",
    "name": "White Chess Pawn",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♚",
    "name": "Black Chess King",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♛",
    "name": "Black Chess Queen",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♜",
    "name": "Black Chess Rook",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♝",
    "name": "Black Chess Bishop",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♞",
    "name": "Black Chess Knight",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♟",
    "name": "Black Chess Pawn",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♠",
    "name": "Black Spade Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♡",
    "name": "White Heart Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♢",
    "name": "White Diamond Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♣",
    "name": "Black Club Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♤",
    "name": "White Spade Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♥",
    "name": "Black Heart Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♦",
    "name": "Black Diamond Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "♧",
    "name": "White Club Suit",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "⚀",
    "name": "Die Face-1",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "⚁",
    "name": "Die Face-2",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "⚂",
    "name": "Die Face-3",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "⚃",
    "name": "Die Face-4",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "⚄",
    "name": "Die Face-5",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "⚅",
    "name": "Die Face-6",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "🂡",
    "name": "Playing Card Ace of Spades",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "🂱",
    "name": "Playing Card Ace of Hearts",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "🃁",
    "name": "Playing Card Ace of Diamonds",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "🃑",
    "name": "Playing Card Ace of Clubs",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "🂮",
    "name": "Playing Card King of Spades",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "🂾",
    "name": "Playing Card King of Hearts",
    "cat": "games",
    "tags": [
      "chess",
      "cards",
      "dice",
      "game"
    ]
  },
  {
    "char": "─",
    "name": "Box Drawings Light Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "━",
    "name": "Box Drawings Heavy Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "│",
    "name": "Box Drawings Light Vertical",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┃",
    "name": "Box Drawings Heavy Vertical",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┄",
    "name": "Box Drawings Light Triple Dash Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┅",
    "name": "Box Drawings Heavy Triple Dash Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┌",
    "name": "Box Drawings Light Down and Right",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┐",
    "name": "Box Drawings Light Down and Left",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "└",
    "name": "Box Drawings Light Up and Right",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┘",
    "name": "Box Drawings Light Up and Left",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "├",
    "name": "Box Drawings Light Vertical and Right",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┤",
    "name": "Box Drawings Light Vertical and Left",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┬",
    "name": "Box Drawings Light Down and Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┴",
    "name": "Box Drawings Light Up and Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "┼",
    "name": "Box Drawings Light Vertical and Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "═",
    "name": "Box Drawings Double Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "║",
    "name": "Box Drawings Double Vertical",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╔",
    "name": "Box Drawings Double Down and Right",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╗",
    "name": "Box Drawings Double Down and Left",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╚",
    "name": "Box Drawings Double Up and Right",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╝",
    "name": "Box Drawings Double Up and Left",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╠",
    "name": "Box Drawings Double Vertical and Right",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╣",
    "name": "Box Drawings Double Vertical and Left",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╦",
    "name": "Box Drawings Double Down and Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╩",
    "name": "Box Drawings Double Up and Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "╬",
    "name": "Box Drawings Double Vertical and Horizontal",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "▀",
    "name": "Upper Half Block",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "▄",
    "name": "Lower Half Block",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "█",
    "name": "Full Block",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "▌",
    "name": "Left Half Block",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "▐",
    "name": "Right Half Block",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "░",
    "name": "Light Shade",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "▒",
    "name": "Medium Shade",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "▓",
    "name": "Dark Shade",
    "cat": "box",
    "tags": [
      "box",
      "drawing",
      "terminal",
      "ui"
    ]
  },
  {
    "char": "$",
    "name": "Dollar Sign",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "€",
    "name": "Euro Sign",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "£",
    "name": "Pound Sterling",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "¥",
    "name": "Yen / Yuan Sign",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₿",
    "name": "Bitcoin Sign",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "¢",
    "name": "Cent Sign",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₽",
    "name": "Russian Ruble",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₩",
    "name": "Korean Won",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₺",
    "name": "Turkish Lira",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₴",
    "name": "Ukrainian Hryvnia",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₸",
    "name": "Kazakhstani Tenge",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "֏",
    "name": "Armenian Dram",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₲",
    "name": "Paraguayan Guarani",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₵",
    "name": "Ghanaian Cedi",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₹",
    "name": "Indian Rupee",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "﷼",
    "name": "Rial Sign",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₱",
    "name": "Philippine Peso",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₫",
    "name": "Vietnamese Dong",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₪",
    "name": "Israeli New Shekel",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "฿",
    "name": "Thai Baht",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₮",
    "name": "Mongolian Tugrik",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "₭",
    "name": "Lao Kip",
    "cat": "currency",
    "tags": [
      "currency",
      "money",
      "finance"
    ]
  },
  {
    "char": "ᚠ",
    "name": "Rune Fehu (Wealth / Cattle)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚡ",
    "name": "Rune Venn (Friendship)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚢ",
    "name": "Rune Uruz (Aurochs / Strength)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚣ",
    "name": "Rune Yr (Bow)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚤ",
    "name": "Rune Ur (Drizzle)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚥ",
    "name": "Rune Wynn (Joy)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚦ",
    "name": "Rune Thurisaz (Giant / Thor)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚧ",
    "name": "Rune Thorn (Protection)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚨ",
    "name": "Rune Ansuz (Odin / Breath)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚩ",
    "name": "Rune Os (God / River)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚪ",
    "name": "Rune Ac (Oak Tree)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚫ",
    "name": "Rune Aesc (Ash Tree)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚬ",
    "name": "Rune As (God)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚭ",
    "name": "Rune Ar (Abundance)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚮ",
    "name": "Rune Othala (Heritage)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚯ",
    "name": "Rune Ethel (Ancestry)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚱ",
    "name": "Rune Raidho (Journey / Wagon)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚲ",
    "name": "Rune Kenaz (Torch / Fire)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚳ",
    "name": "Rune Cen (Pine Torch)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚴ",
    "name": "Rune Kaun (Boil / Ulcer)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚵ",
    "name": "Rune Kyn (Kinship)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚶ",
    "name": "Rune Gyfu (Gift)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚷ",
    "name": "Rune Gebo (Gift / Partnership)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚸ",
    "name": "Rune Gar (Spear)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚹ",
    "name": "Rune Wunjo (Joy / Harmony)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚺ",
    "name": "Rune Hagalaz (Hail / Disruption)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚻ",
    "name": "Rune Haegl (Hail)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚼ",
    "name": "Rune Hagall (Crystal Hail)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚽ",
    "name": "Rune Hagall (Short Twig)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚾ",
    "name": "Rune Nauthiz (Need / Resistance)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᚿ",
    "name": "Rune Naudhr (Distress)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛁ",
    "name": "Rune Isa (Ice / Stillness)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛂ",
    "name": "Rune Is (Frozen Water)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛃ",
    "name": "Rune Jera (Year / Harvest)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛄ",
    "name": "Rune Ger (Good Season)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛅ",
    "name": "Rune Ar (Plenty)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛆ",
    "name": "Rune Ar (Short Twig)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛇ",
    "name": "Rune Eihwaz (Yew / World Tree)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛈ",
    "name": "Rune Perthro (Fate / Mystery)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛉ",
    "name": "Rune Algiz (Elk / Divine Protection)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛊ",
    "name": "Rune Sowilo (Sun / Victory)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛋ",
    "name": "Rune Sigel (Sunlight)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛌ",
    "name": "Rune Sol (Short Twig Sun)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛍ",
    "name": "Rune Cweorth (Sacred Fire)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛎ",
    "name": "Rune Calc (Chalice)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛏ",
    "name": "Rune Tiwaz (Tyr / Honor)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛐ",
    "name": "Rune Tir (Planet Mars / Spear)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛑ",
    "name": "Rune Tyr (Short Twig)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛒ",
    "name": "Rune Berkano (Birch / Rebirth)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛓ",
    "name": "Rune Beorc (Birch Goddess)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛔ",
    "name": "Rune Bjarkan (Short Twig)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛕ",
    "name": "Rune Peordh (Pawn / Play)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛖ",
    "name": "Rune Ehwaz (Horse / Movement)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛗ",
    "name": "Rune Mannaz (Human / Mind)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛘ",
    "name": "Rune Madr (Mortal Man)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛙ",
    "name": "Rune Man (Short Twig)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛚ",
    "name": "Rune Laguz (Water / Intuition)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛛ",
    "name": "Rune Lagu (Flowing Stream)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛜ",
    "name": "Rune Ingwaz (Seed / Internal Growth)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛝ",
    "name": "Rune Ing (Frey / Fertility)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛞ",
    "name": "Rune Dagaz (Dawn / Awakening)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛟ",
    "name": "Rune Othala (Ancestral Estate)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛠ",
    "name": "Rune Ear (Grave Soil)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛡ",
    "name": "Rune Ior (Sea Monster / Midgard Serpent)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛢ",
    "name": "Rune Cweorth (Funeral Pyre)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛣ",
    "name": "Rune Calc (Offering Vessel)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛤ",
    "name": "Rune Cealc (Chalk / Earth)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛥ",
    "name": "Rune Stan (Keystone / Boulder)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛦ",
    "name": "Rune Yr (Yew Bow)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛧ",
    "name": "Rune Yr (Short Twig Bow)",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛨ",
    "name": "Rune Icelandic Yr",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛩ",
    "name": "Rune Q Rune",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "ᛪ",
    "name": "Rune X Rune",
    "cat": "runes",
    "tags": [
      "rune",
      "norse",
      "futhark",
      "viking"
    ]
  },
  {
    "char": "𓃠",
    "name": "Egyptian Cat (Miu)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃰",
    "name": "Egyptian Elephant",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃱",
    "name": "Egyptian Giraffe",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃮",
    "name": "Egyptian Leopard",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃯",
    "name": "Egyptian Lion",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃲",
    "name": "Egyptian Ram",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃴",
    "name": "Egyptian Gazelle",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃵",
    "name": "Egyptian Goat",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓃷",
    "name": "Egyptian Jackal / Anubis",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓆏",
    "name": "Egyptian Frog (Heqet)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓆈",
    "name": "Egyptian Lizard",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓆉",
    "name": "Egyptian Turtle",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓆗",
    "name": "Egyptian Cobra / Uraeus",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓆣",
    "name": "Egyptian Scarab Beetle (Khepri)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓆤",
    "name": "Egyptian Honeybee",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓆡",
    "name": "Egyptian Fish",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓀠",
    "name": "Egyptian Man with Arms Raised",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓀡",
    "name": "Egyptian Man in Adoration",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓀭",
    "name": "Egyptian King with White Crown",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓁀",
    "name": "Egyptian Mummy",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓂀",
    "name": "Eye of Horus (Wedjat)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓋹",
    "name": "Ankh (Key of Life)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓊽",
    "name": "Djed Pillar (Stability / Osiris)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓌀",
    "name": "Was Sceptre (Power)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓍯",
    "name": "Knot of Isis (Tyet)",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "𓎛",
    "name": "Wick of Twisted Flax",
    "cat": "hieroglyphs",
    "tags": [
      "egyptian",
      "hieroglyph",
      "ancient",
      "pharaoh"
    ]
  },
  {
    "char": "♩",
    "name": "Quarter Note",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♪",
    "name": "Eighth Note",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♫",
    "name": "Beamed Eighth Notes",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♬",
    "name": "Beamed Sixteenth Notes",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♭",
    "name": "Music Flat Sign",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♮",
    "name": "Music Natural Sign",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♯",
    "name": "Music Sharp Sign",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "𝄞",
    "name": "Musical Symbol G Clef (Treble)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "𝄢",
    "name": "Musical Symbol F Clef (Bass)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "𝄡",
    "name": "Musical Symbol C Clef (Alto)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "☉",
    "name": "Sun (Sol / Gold)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "☽",
    "name": "Waxing Crescent Moon",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "☾",
    "name": "Waning Crescent Moon",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "☿",
    "name": "Mercury (Quicksilver)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♀",
    "name": "Venus (Copper / Female)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♁",
    "name": "Earth Symbol",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♂",
    "name": "Mars (Iron / Male)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♃",
    "name": "Jupiter (Tin)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♄",
    "name": "Saturn (Lead)",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♅",
    "name": "Uranus",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♆",
    "name": "Neptune",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♇",
    "name": "Pluto",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♈",
    "name": "Aries Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♉",
    "name": "Taurus Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♊",
    "name": "Gemini Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♋",
    "name": "Cancer Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♌",
    "name": "Leo Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♍",
    "name": "Virgo Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♎",
    "name": "Libra Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♏",
    "name": "Scorpio Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♐",
    "name": "Sagittarius Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♑",
    "name": "Capricorn Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♒",
    "name": "Aquarius Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "♓",
    "name": "Pisces Zodiac",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "🜁",
    "name": "Air Element",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "🜂",
    "name": "Fire Element",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "🜃",
    "name": "Earth Element",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "🜄",
    "name": "Water Element",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "🜍",
    "name": "Brimstone / Sulfur",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "🝤",
    "name": "Philosopher Stone",
    "cat": "music_astro",
    "tags": [
      "music",
      "astrology",
      "celestial",
      "alchemy"
    ]
  },
  {
    "char": "​",
    "name": "Zero-Width Space (ZWSP)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": "‌",
    "name": "Zero-Width Non-Joiner (ZWNJ)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": "‍",
    "name": "Zero-Width Joiner (ZWJ)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": "⁠",
    "name": "Word Joiner (No Line Break)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": "﻿",
    "name": "Zero-Width No-Break Space / Byte Order Mark (BOM)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": " ",
    "name": "Non-Breaking Space (NBSP)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": "‎",
    "name": "Left-to-Right Mark (LRM)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": "‏",
    "name": "Right-to-Left Mark (RLM)",
    "cat": "invisible",
    "tags": [
      "invisible",
      "zero width",
      "stealth",
      "anti tracking"
    ]
  },
  {
    "char": "⠀",
    "name": "Braille Pattern Blank",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠁",
    "name": "Braille Pattern Dots-1 (A)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠂",
    "name": "Braille Pattern Dots-2",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠃",
    "name": "Braille Pattern Dots-12 (B)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠄",
    "name": "Braille Pattern Dots-3",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠅",
    "name": "Braille Pattern Dots-13 (K)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠆",
    "name": "Braille Pattern Dots-23",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠇",
    "name": "Braille Pattern Dots-123 (L)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠈",
    "name": "Braille Pattern Dots-4",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠉",
    "name": "Braille Pattern Dots-14 (C)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠊",
    "name": "Braille Pattern Dots-24 (I)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠋",
    "name": "Braille Pattern Dots-124 (F)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠌",
    "name": "Braille Pattern Dots-34",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠍",
    "name": "Braille Pattern Dots-134 (M)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠎",
    "name": "Braille Pattern Dots-234 (S)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠏",
    "name": "Braille Pattern Dots-1234 (P)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠐",
    "name": "Braille Pattern Dots-5",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠑",
    "name": "Braille Pattern Dots-15 (E)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠒",
    "name": "Braille Pattern Dots-25 (Colon)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠓",
    "name": "Braille Pattern Dots-125 (H)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠔",
    "name": "Braille Pattern Dots-35",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠕",
    "name": "Braille Pattern Dots-135 (O)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠖",
    "name": "Braille Pattern Dots-235 (Exclamation)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠗",
    "name": "Braille Pattern Dots-1235 (R)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠘",
    "name": "Braille Pattern Dots-45",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠙",
    "name": "Braille Pattern Dots-145 (D)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠚",
    "name": "Braille Pattern Dots-245 (J)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠛",
    "name": "Braille Pattern Dots-1245 (G)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠜",
    "name": "Braille Pattern Dots-345",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠝",
    "name": "Braille Pattern Dots-1345 (N)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠞",
    "name": "Braille Pattern Dots-2345 (T)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠟",
    "name": "Braille Pattern Dots-12345 (Q)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "⠿",
    "name": "Braille Pattern Dots-123456 (Full 6-Dot Cell)",
    "cat": "braille",
    "tags": [
      "braille",
      "tactile",
      "dot"
    ]
  },
  {
    "char": "¹",
    "name": "Superscript One",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "²",
    "name": "Superscript Two (Squared)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "³",
    "name": "Superscript Three (Cubed)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "ⁿ",
    "name": "Superscript n",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁰",
    "name": "Superscript Zero",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁴",
    "name": "Superscript Four",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁵",
    "name": "Superscript Five",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁶",
    "name": "Superscript Six",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁷",
    "name": "Superscript Seven",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁸",
    "name": "Superscript Eight",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁹",
    "name": "Superscript Nine",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁺",
    "name": "Superscript Plus",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁻",
    "name": "Superscript Minus",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁼",
    "name": "Superscript Equals",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁽",
    "name": "Superscript Left Parenthesis",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⁾",
    "name": "Superscript Right Parenthesis",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₀",
    "name": "Subscript Zero",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₁",
    "name": "Subscript One",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₂",
    "name": "Subscript Two",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₃",
    "name": "Subscript Three",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₄",
    "name": "Subscript Four",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₅",
    "name": "Subscript Five",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₆",
    "name": "Subscript Six",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₇",
    "name": "Subscript Seven",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₈",
    "name": "Subscript Eight",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₉",
    "name": "Subscript Nine",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₊",
    "name": "Subscript Plus",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₋",
    "name": "Subscript Minus",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₌",
    "name": "Subscript Equals",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₍",
    "name": "Subscript Left Parenthesis",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "₎",
    "name": "Subscript Right Parenthesis",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "½",
    "name": "Vulgar Fraction One Half (1/2)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅓",
    "name": "Vulgar Fraction One Third (1/3)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "¼",
    "name": "Vulgar Fraction One Quarter (1/4)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "¾",
    "name": "Vulgar Fraction Three Quarters (3/4)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅕",
    "name": "Vulgar Fraction One Fifth (1/5)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅙",
    "name": "Vulgar Fraction One Sixth (1/6)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅛",
    "name": "Vulgar Fraction One Eighth (1/8)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅔",
    "name": "Vulgar Fraction Two Thirds (2/3)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅖",
    "name": "Vulgar Fraction Two Fifths (2/5)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅗",
    "name": "Vulgar Fraction Three Fifths (3/5)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅘",
    "name": "Vulgar Fraction Four Fifths (4/5)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅚",
    "name": "Vulgar Fraction Five Sixths (5/6)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅜",
    "name": "Vulgar Fraction Three Eighths (3/8)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅝",
    "name": "Vulgar Fraction Five Eighths (5/8)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "⅞",
    "name": "Vulgar Fraction Seven Eighths (7/8)",
    "cat": "fractions",
    "tags": [
      "fraction",
      "exponent",
      "math",
      "subscript",
      "superscript"
    ]
  },
  {
    "char": "ඞ",
    "name": "Sinhala Letter Kanthaja Na (Among Us Meme)",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "﷽",
    "name": "Bismillah Ar-Rahman (Longest Single Unicode Glyph)",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "ॐ",
    "name": "Sacred Om / Aum",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☯",
    "name": "Yin Yang",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☸",
    "name": "Wheel of Dharma",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "⚡",
    "name": "High Voltage / Lightning",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☣",
    "name": "Biohazard Sign",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☢",
    "name": "Radioactive Sign",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☠",
    "name": "Skull and Crossbones",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "⚔",
    "name": "Crossed Swords",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "⚖",
    "name": "Scales of Justice",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "ツ",
    "name": "Katakana Tu (Smiley Face)",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "シ",
    "name": "Katakana Si (Smirk)",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "ッ",
    "name": "Small Katakana Tu",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "웃",
    "name": "Hangul Ut (Standing Person)",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "유",
    "name": "Hangul Yu (Person Crying)",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☬",
    "name": "Khanda Sikh Symbol",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☥",
    "name": "Ankh Cross",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "☧",
    "name": "Chi Rho Christian Monogram",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "✠",
    "name": "Maltese Cross",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "✡",
    "name": "Star of David",
    "cat": "esoteric",
    "tags": [
      "meme",
      "viral",
      "sacred",
      "rare"
    ]
  },
  {
    "char": "̀",
    "name": "Combining Grave Accent",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "́",
    "name": "Combining Acute Accent",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̂",
    "name": "Combining Circumflex Accent",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̃",
    "name": "Combining Tilde",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̄",
    "name": "Combining Macron",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̈",
    "name": "Combining Diaeresis / Trema",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̴",
    "name": "Combining Tilde Overlay",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̶",
    "name": "Combining Long Stroke Overlay (Strikethrough)",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̣",
    "name": "Combining Dot Below",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "̧",
    "name": "Combining Cedilla",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "҈",
    "name": "Combining Cyrillic Millions Sign",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  },
  {
    "char": "҉",
    "name": "Combining Cyrillic Hundred Thousands Sign",
    "cat": "diacritics",
    "tags": [
      "diacritic",
      "combining",
      "zalgo"
    ]
  }
];

// Tables of Zalgo Marks
const ZALGO_MARKS_UP = [
  "̍",
  "̎",
  "̄",
  "̅",
  "̿",
  "̑",
  "̆",
  "̐",
  "͒",
  "͗",
  "͑",
  "̇",
  "̈",
  "̊",
  "͂",
  "̓",
  "̈́",
  "͊",
  "͋",
  "͌",
  "͐",
  "̀",
  "́",
  "̂",
  "̃",
  "͘",
  "͆",
  "̚",
  "̕",
  "̛",
  "̀",
  "́",
  "͝",
  "͞",
  "͟",
  "͠",
  "͡",
  "͢",
  "҈",
  "҉"
];

const ZALGO_MARKS_MID = [
  "̕",
  "̛",
  "̀",
  "́",
  "͘",
  "͎",
  "͟",
  "͠",
  "̴",
  "̵",
  "̶",
  "̷",
  "̸",
  "͆",
  "̱",
  "̲",
  "̳",
  "̙",
  "̘",
  "̜",
  "̭",
  "̮",
  "̻",
  "̼"
];

const ZALGO_MARKS_DOWN = [
  "̖",
  "̗",
  "̘",
  "̙",
  "̜",
  "̝",
  "̞",
  "̟",
  "̠",
  "̤",
  "̥",
  "̦",
  "̩",
  "̪",
  "̫",
  "̬",
  "̭",
  "̮",
  "̯",
  "̰",
  "̱",
  "̲",
  "̳",
  "̹",
  "̺",
  "̻",
  "̼",
  "ͅ",
  "͇",
  "͈",
  "͉",
  "͍",
  "͓",
  "͔",
  "͕",
  "͖",
  "͙",
  "͚",
  "̣",
  "̧"
];
