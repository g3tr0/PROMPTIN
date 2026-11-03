/**
 * OmniGlyph - Complete Universal Encoding, Hashing & Cipher Engine
 */

const Encodings = {
  // UTF-8
  toUtf8Hex(text) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    return Array.from(bytes).map(b => b.toString(16).toUpperCase().padStart(2, '0')).join(' ');
  },

  toUtf8Bytes(text) {
    const encoder = new TextEncoder();
    return Array.from(encoder.encode(text)).join(' ');
  },

  toBinary8(text) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    return Array.from(bytes).map(b => b.toString(2).padStart(8, '0')).join(' ');
  },

  toBinary16(text) {
    return Array.from(text).map(c => c.codePointAt(0).toString(2).padStart(16, '0')).join(' ');
  },

  fromBinary(binStr) {
    const clean = binStr.replace(/[^01]/g, '');
    const bytes = [];
    for (let i = 0; i < clean.length; i += 8) {
      const byte = clean.slice(i, i + 8);
      if (byte.length === 8) bytes.push(parseInt(byte, 2));
    }
    return new TextDecoder().decode(new Uint8Array(bytes));
  },

  // Base64 & Base64URL
  toBase64(text) {
    try {
      const bytes = new TextEncoder().encode(text);
      const binString = Array.from(bytes, byte => String.fromCodePoint(byte)).join('');
      return btoa(binString);
    } catch (e) {
      return '';
    }
  },

  fromBase64(b64) {
    try {
      let clean = b64.trim().replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
      while (clean.length % 4 !== 0) {
        clean += '=';
      }
      const binString = atob(clean);
      const bytes = Uint8Array.from(binString, m => m.codePointAt(0));
      return new TextDecoder().decode(bytes);
    } catch (e) {
      return 'Invalid Base64 (Switch to Encode to convert plain text)';
    }
  },

  encode(text, type) {
    if (!text) return '';
    switch (type) {
      case 'base64': return this.toBase64(text);
      case 'base32': return this.toBase32(text);
      case 'hex': return this.toHex(text, '0x', ' ');
      case 'binary': return this.toBinary8(text);
      case 'ascii': return this.toAsciiDecimal(text);
      case 'url': return this.toUrlEncode(text);
      case 'html': return this.toHtmlHex(text);
      case 'unicode': return this.toUnicodeEscape(text);
      case 'morse': return this.toMorse(text);
      case 'rot13': return this.rot13(text);
      case 'rot47': return this.rot47(text);
      case 'atbash': return this.atbash(text);
      case 'reverse': return this.reverseText(text);
      default: return text;
    }
  },

  decode(text, type) {
    if (!text) return '';
    switch (type) {
      case 'base64': return this.fromBase64(text);
      case 'base32': return this.fromBase32(text);
      case 'hex': return this.fromHex(text);
      case 'binary': return this.fromBinary(text);
      case 'ascii': return this.fromAsciiDecimal(text);
      case 'url': return this.fromUrlEncode(text);
      case 'html': return this.fromHtmlEntities(text);
      case 'unicode': return this.fromUnicodeEscape(text);
      case 'morse': return this.fromMorse(text);
      case 'rot13': return this.rot13(text);
      case 'rot47': return this.rot47(text);
      case 'atbash': return this.atbash(text);
      case 'reverse': return this.reverseText(text);
      default: return text;
    }
  },

  toBase64Url(text) {
    return this.toBase64(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  },

  // Base32 (RFC 4648)
  toBase32(text) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const bytes = new TextEncoder().encode(text);
    let bits = 0;
    let value = 0;
    let output = '';

    for (let i = 0; i < bytes.length; i++) {
      value = (value << 8) | bytes[i];
      bits += 8;
      while (bits >= 5) {
        output += charset[(value >>> (bits - 5)) & 31];
        bits -= 5;
      }
    }
    if (bits > 0) {
      output += charset[(value << (5 - bits)) & 31];
    }
    while (output.length % 8 !== 0) {
      output += '=';
    }
    return output;
  },

  fromBase32(b32) {
    try {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
      const clean = b32.toUpperCase().replace(/=+$/, '');
      let bits = 0;
      let value = 0;
      const bytes = [];

      for (let i = 0; i < clean.length; i++) {
        const idx = charset.indexOf(clean[i]);
        if (idx === -1) continue;
        value = (value << 5) | idx;
        bits += 5;
        if (bits >= 8) {
          bytes.push((value >>> (bits - 8)) & 255);
          bits -= 8;
        }
      }
      return new TextDecoder().decode(new Uint8Array(bytes));
    } catch (e) {
      return 'Invalid Base32';
    }
  },

  // Base58 (Bitcoin / IPFS)
  toBase58(text) {
    const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    const bytes = new TextEncoder().encode(text);
    const digits = [0];
    for (let i = 0; i < bytes.length; i++) {
      for (let j = 0; j < digits.length; j++) digits[j] <<= 8;
      digits[0] += bytes[i];
      let carry = 0;
      for (let j = 0; j < digits.length; ++j) {
        digits[j] += carry;
        carry = (digits[j] / 58) | 0;
        digits[j] %= 58;
      }
      while (carry) {
        digits.push(carry % 58);
        carry = (carry / 58) | 0;
      }
    }
    let res = '';
    for (let i = 0; i < bytes.length && bytes[i] === 0; i++) res += '1';
    for (let i = digits.length - 1; i >= 0; i--) res += ALPHABET[digits[i]];
    return res;
  },

  // Hexadecimal
  toHex(text, prefix = '0x', separator = ' ') {
    const bytes = new TextEncoder().encode(text);
    return Array.from(bytes)
      .map(b => `${prefix}${b.toString(16).toUpperCase().padStart(2, '0')}`)
      .join(separator);
  },

  toHexRaw(text) {
    const bytes = new TextEncoder().encode(text);
    return Array.from(bytes).map(b => b.toString(16).toUpperCase().padStart(2, '0')).join('');
  },

  fromHex(hexStr) {
    try {
      const clean = hexStr.replace(/(0x|\\x|\s|,)/gi, '');
      const bytes = [];
      for (let i = 0; i < clean.length; i += 2) {
        bytes.push(parseInt(clean.substr(i, 2), 16));
      }
      return new TextDecoder().decode(new Uint8Array(bytes));
    } catch (e) {
      return 'Invalid Hexadecimal';
    }
  },

  // ASCII Decimal Numbers
  toAsciiDecimal(text) {
    return Array.from(text).map(c => c.charCodeAt(0)).join(' ');
  },

  fromAsciiDecimal(decStr) {
    try {
      const nums = decStr.trim().split(/\s+/).map(Number);
      return String.fromCharCode(...nums);
    } catch (e) {
      return '';
    }
  },

  // URL / Percent Encoding
  toUrlEncode(text) {
    return encodeURIComponent(text);
  },

  toFullUrlEncode(text) {
    const bytes = new TextEncoder().encode(text);
    return Array.from(bytes).map(b => '%' + b.toString(16).toUpperCase().padStart(2, '0')).join('');
  },

  fromUrlEncode(encoded) {
    try {
      return decodeURIComponent(encoded);
    } catch (e) {
      return 'Invalid URL encoded string';
    }
  },

  // HTML Entities
  toHtmlHex(text) {
    return Array.from(text).map(c => `&#x${c.codePointAt(0).toString(16).toUpperCase()};`).join('');
  },

  toHtmlDec(text) {
    return Array.from(text).map(c => `&#${c.codePointAt(0)};`).join('');
  },

  fromHtmlEntities(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  },

  // Unicode Escape Sequences
  toUnicodeEscape(text) {
    return Array.from(text).map(c => {
      const cp = c.codePointAt(0);
      if (cp <= 0xFFFF) {
        return '\\u' + cp.toString(16).toUpperCase().padStart(4, '0');
      } else {
        return '\\u{' + cp.toString(16).toUpperCase() + '}';
      }
    }).join('');
  },

  fromUnicodeEscape(str) {
    try {
      return str.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([0-9a-fA-F]{4})/g, (match, p1, p2) => {
        const hex = p1 || p2;
        return String.fromCodePoint(parseInt(hex, 16));
      });
    } catch (e) {
      return str;
    }
  },

  // UTF-16
  toUtf16Hex(text) {
    const res = [];
    for (let i = 0; i < text.length; i++) {
      res.push('0x' + text.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0'));
    }
    return res.join(' ');
  },

  // UTF-32
  toUtf32Hex(text) {
    return Array.from(text).map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(8, '0')).join(' ');
  },

  // Ciphers
  rot13(str) {
    return str.replace(/[a-zA-Z]/g, c => {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
    });
  },

  rot47(str) {
    const res = [];
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      if (c >= 33 && c <= 126) {
        res.push(String.fromCharCode(33 + ((c - 33 + 47) % 94)));
      } else {
        res.push(str[i]);
      }
    }
    return res.join('');
  },

  atbash(str) {
    return str.replace(/[a-zA-Z]/g, c => {
      const isUpper = c <= 'Z';
      const base = isUpper ? 65 : 97;
      return String.fromCharCode(base + (25 - (c.charCodeAt(0) - base)));
    });
  },

  caesarCipher(str, shift = 3) {
    const s = ((shift % 26) + 26) % 26;
    return str.replace(/[a-zA-Z]/g, c => {
      const base = c <= 'Z' ? 65 : 97;
      return String.fromCharCode((c.charCodeAt(0) - base + s) % 26 + base);
    });
  },

  reverseText(str) {
    return Array.from(str).reverse().join('');
  },

  leetspeak(str) {
    const map = { 'a': '4', 'b': '8', 'e': '3', 'g': '6', 'i': '1', 'o': '0', 's': '5', 't': '7', 'z': '2' };
    return str.replace(/[abegiostz]/gi, c => map[c.toLowerCase()] || c);
  },

  // Morse Code
  toMorse(text) {
    const MORSE_MAP = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
      'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
      'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
      'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
      'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
      '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
      '9': '----.', '0': '-----', ' ': '/', '.': '.-.-.-', ',': '--..--',
      '?': '..--..', '!': '-.-.--', '@': '.--.-.'
    };
    return text.toUpperCase().split('').map(c => MORSE_MAP[c] || c).join(' ');
  },

  fromMorse(morse) {
    const REVERSE_MORSE = {
      '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
      '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
      '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
      '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
      '-.--': 'Y', '--..': 'Z', '.----': '1', '..---': '2', '...--': '3',
      '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
      '----.': '9', '-----': '0', '/': ' ', '.-.-.-': '.', '--..--': ',',
      '..--..': '?', '-.-.--': '!', '.--.-.': '@'
    };
    return morse.trim().split(/\s+/).map(code => REVERSE_MORSE[code] || (code === '/' ? ' ' : '?')).join('');
  },

  // Hashes (Web Crypto API)
  async hash(text, algorithm = 'SHA-256') {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
};

if (typeof window !== 'undefined') window.Encodings = Encodings;
if (typeof globalThis !== 'undefined') globalThis.Encodings = Encodings;
if (typeof module !== 'undefined' && module.exports) module.exports = { Encodings };

