/**
 * OmniGlyph - Minimalist & Symmetrical Core Controller (English Edition)
 */

// Global State
const state = {
  currentCategory: 'all',
  searchQuery: '',
  favorites: JSON.parse(localStorage.getItem('omniglyph_favs') || '[]'),
  theme: localStorage.getItem('omniglyph_theme') || 'dark',
  transFrom: 'auto',
  transTo: 'es',
  decoderType: 'base64',
  currentEmoteCategory: 'all',
  emoteSearchQuery: '',
  emoteTypeFilter: 'all',
  promptSlider: 50,
  promptStyle: 'homoglyphs'
};

// Theme Manager (SVG Sun / Moon)
function initTheme() {
  const root = document.documentElement;
  const sunIcon = document.getElementById('themeIconSun');
  const moonIcon = document.getElementById('themeIconMoon');
  
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (sunIcon && moonIcon) {
      if (t === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }

  applyTheme(state.theme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.onclick = () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('omniglyph_theme', state.theme);
      applyTheme(state.theme);
    };
  }
}

// Unicode Helpers
function getUnicodeCodePoint(str) {
  return Array.from(str)
    .map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0'))
    .join(' ');
}

function getHtmlEntityHex(str) {
  return Array.from(str)
    .map(c => '&#x' + c.codePointAt(0).toString(16).toUpperCase() + ';')
    .join('');
}

function getHtmlEntityDec(str) {
  return Array.from(str)
    .map(c => '&#' + c.codePointAt(0) + ';')
    .join('');
}

function getUtf8Bytes(str) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return Array.from(bytes).map(b => '0x' + b.toString(16).toUpperCase().padStart(2, '0')).join(' ');
}

// Minimalist Silent Toast Notification
function showToast(text) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = text;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 1800);
}

// Copy to Clipboard
async function copyToClipboard(text, customMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(customMessage || `Copied: ${text}`);
  } catch (err) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(customMessage || `Copied`);
  }
}

// ==========================================================================
// SECTION 1: CHARACTERS (CUSTOM DROPDOWN)
// ==========================================================================
function setupCategoryDropdown() {
  const wrapper = document.getElementById('catDropdownWrapper');
  const trigger = document.getElementById('catDropdownTrigger');
  const label = document.getElementById('catSelectedLabel');
  const container = document.getElementById('catOptionsContainer');

  if (!wrapper || !trigger || !container) return;

  const favCat = { id: 'favorites', name: `Favorites (${state.favorites.length})` };
  const allCats = [favCat, ...GLYPH_CATEGORIES];

  container.innerHTML = '';

  allCats.forEach(cat => {
    const opt = document.createElement('div');
    opt.className = `custom-option ${state.currentCategory === cat.id ? 'selected' : ''}`;
    opt.textContent = cat.name;
    opt.onclick = (e) => {
      e.stopPropagation();
      state.currentCategory = cat.id;
      label.textContent = cat.name;
      
      container.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      wrapper.classList.remove('open');
      renderGlyphs();
    };
    container.appendChild(opt);
  });

  trigger.onclick = (e) => {
    e.stopPropagation();
    document.querySelectorAll('.custom-select-wrapper').forEach(w => {
      if (w !== wrapper) w.classList.remove('open');
    });
    wrapper.classList.toggle('open');
  };
}

function renderGlyphs() {
  const grid = document.getElementById('glyphsGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  let filtered = GLYPHS_DATABASE;

  if (state.currentCategory === 'favorites') {
    filtered = filtered.filter(g => state.favorites.includes(g.char));
  } else if (state.currentCategory !== 'all') {
    filtered = filtered.filter(g => g.cat === state.currentCategory);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    filtered = filtered.filter(g => {
      const charMatch = g.char.includes(q);
      const nameMatch = g.name.toLowerCase().includes(q);
      const tagMatch = g.tags.some(t => t.toLowerCase().includes(q));
      const codeMatch = getUnicodeCodePoint(g.char).toLowerCase().includes(q);
      return charMatch || nameMatch || tagMatch || codeMatch;
    });
  }

  if (countEl) {
    countEl.textContent = `${filtered.length} character${filtered.length === 1 ? '' : 's'}`;
  }

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No characters found matching your query.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(glyph => {
    const codePoint = getUnicodeCodePoint(glyph.char);
    const isFav = state.favorites.includes(glyph.char);

    const card = document.createElement('div');
    card.className = 'glyph-card';
    card.title = `${glyph.name}\nClick to copy\nDouble click for details`;
    card.innerHTML = `
      <span class="glyph-fav-star ${isFav ? 'active' : ''}">★</span>
      <div class="glyph-symbol">${glyph.char === '\u200B' ? '◌' : (glyph.char.trim() === '' ? '␣' : glyph.char)}</div>
      <div class="glyph-code">${codePoint.split(' ')[0]}</div>
      <div class="glyph-title">${glyph.name}</div>
    `;

    const star = card.querySelector('.glyph-fav-star');
    star.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(glyph.char);
    });

    card.addEventListener('click', (e) => {
      if (e.shiftKey) {
        openModal(glyph);
      } else {
        copyToClipboard(glyph.char, `Copied: ${glyph.char}`);
      }
    });

    card.addEventListener('dblclick', () => {
      openModal(glyph);
    });

    grid.appendChild(card);
  });
}

function toggleFavorite(char) {
  const index = state.favorites.indexOf(char);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast(`Removed from Favorites: ${char}`);
  } else {
    state.favorites.push(char);
    showToast(`Added to Favorites: ${char}`);
  }
  localStorage.setItem('omniglyph_favs', JSON.stringify(state.favorites));
  setupCategoryDropdown();
  renderGlyphs();
}

function openModal(glyph) {
  const modal = document.getElementById('glyphModal');
  if (!modal) return;

  const codePoint = getUnicodeCodePoint(glyph.char);
  const htmlDec = getHtmlEntityDec(glyph.char);
  const htmlHex = getHtmlEntityHex(glyph.char);
  const utf8 = getUtf8Bytes(glyph.char);
  const isFav = state.favorites.includes(glyph.char);

  document.getElementById('modalChar').textContent = glyph.char === '\u200B' ? '◌ (ZWSP)' : glyph.char;
  document.getElementById('modalTitle').textContent = glyph.name;
  
  const catObj = GLYPH_CATEGORIES.find(c => c.id === glyph.cat);
  document.getElementById('modalCategory').textContent = catObj ? catObj.name : glyph.cat;

  document.getElementById('modalCodePoint').textContent = codePoint;
  document.getElementById('modalHtmlDec').textContent = htmlDec;
  document.getElementById('modalHtmlHex').textContent = htmlHex;
  document.getElementById('modalUtf8').textContent = utf8;

  const favBtn = document.getElementById('modalFavBtn');
  favBtn.textContent = isFav ? 'Unfavorite' : 'Favorite';
  favBtn.onclick = () => {
    toggleFavorite(glyph.char);
    favBtn.textContent = state.favorites.includes(glyph.char) ? 'Unfavorite' : 'Favorite';
  };

  document.getElementById('modalCopyCharBtn').onclick = () => {
    copyToClipboard(glyph.char, `Copied: ${glyph.char}`);
  };

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('glyphModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================================================
// SECTION 2: ENCODINGS & EXPANDED CIPHERS
// ==========================================================================
function setupEncodingsStation() {
  const input = document.getElementById('encodingInput');
  const grid = document.getElementById('encodingsGrid');
  if (!input || !grid) return;

  async function updateEncodings() {
    const text = input.value || 'OmniGlyph';
    
    const encList = [
      { name: 'UTF-8 Hex', val: Encodings.toUtf8Hex(text) },
      { name: 'UTF-8 Bytes', val: Encodings.toUtf8Bytes(text) },
      { name: 'Binary (8-bit)', val: Encodings.toBinary8(text) },
      { name: 'Binary (16-bit)', val: Encodings.toBinary16(text) },
      { name: 'Base64 Standard', val: Encodings.toBase64(text) },
      { name: 'Base64URL', val: Encodings.toBase64Url(text) },
      { name: 'Base32', val: Encodings.toBase32(text) },
      { name: 'Base58', val: Encodings.toBase58(text) },
      { name: 'Hexadecimal (0x)', val: Encodings.toHex(text, '0x', ' ') },
      { name: 'Hexadecimal (\\x)', val: Encodings.toHex(text, '\\x', '') },
      { name: 'Hexadecimal (Raw)', val: Encodings.toHexRaw(text) },
      { name: 'ASCII Decimal', val: Encodings.toAsciiDecimal(text) },
      { name: 'URL Percent-Encoding', val: Encodings.toUrlEncode(text) },
      { name: 'Full Percent-Encoding', val: Encodings.toFullUrlEncode(text) },
      { name: 'Unicode Escape (\\uXXXX)', val: Encodings.toUnicodeEscape(text) },
      { name: 'HTML Entities (Hex)', val: Encodings.toHtmlHex(text) },
      { name: 'HTML Entities (Dec)', val: Encodings.toHtmlDec(text) },
      { name: 'UTF-16 Hex (BE)', val: Encodings.toUtf16Hex(text) },
      { name: 'UTF-32 Hex', val: Encodings.toUtf32Hex(text) },
      { name: 'ROT13 Cipher', val: Encodings.rot13(text) },
      { name: 'ROT47 Cipher', val: Encodings.rot47(text) },
      { name: 'Atbash Cipher', val: Encodings.atbash(text) },
      { name: 'Caesar Cipher (+3)', val: Encodings.caesarCipher(text, 3) },
      { name: 'Reverse Text', val: Encodings.reverseText(text) },
      { name: 'Leetspeak (1337)', val: Encodings.leetspeak(text) },
      { name: 'Morse Code', val: Encodings.toMorse(text) },
      { name: 'SHA-1 Hash', val: await Encodings.hash(text, 'SHA-1') },
      { name: 'SHA-256 Hash', val: await Encodings.hash(text, 'SHA-256') },
      { name: 'SHA-512 Hash', val: await Encodings.hash(text, 'SHA-512') }
    ];

    grid.innerHTML = '';

    encList.forEach(enc => {
      const card = document.createElement('div');
      card.className = 'encoding-card';
      card.title = 'Click to copy';
      card.innerHTML = `
        <div class="encoding-header">
          <span class="encoding-name">${enc.name}</span>
        </div>
        <div class="encoding-output-box">${enc.val}</div>
      `;

      card.onclick = () => {
        copyToClipboard(enc.val, `Copied: ${enc.name}`);
      };

      grid.appendChild(card);
    });
  }

  input.addEventListener('input', updateEncodings);
  updateEncodings();

  // Codec Setup (Encode / Decode Two-Way Converter)
  const typeWrapper = document.getElementById('decoderTypeWrapper');
  const typeTrigger = document.getElementById('decoderTypeTrigger');
  const typeLabel = document.getElementById('decoderTypeLabel');
  const typeOptions = document.getElementById('decoderTypeOptions');
  const decInput = document.getElementById('decoderInput');
  const decOutput = document.getElementById('decoderOutput');
  const decCopyBtn = document.getElementById('decoderCopyBtn');
  const modeEncodeBtn = document.getElementById('codecModeEncodeBtn');
  const modeDecodeBtn = document.getElementById('codecModeDecodeBtn');
  const inputLabel = document.getElementById('codecInputLabel');
  const outputLabel = document.getElementById('codecOutputLabel');

  let currentMode = 'decode'; // default to decode as requested originally

  function updateCodecLabels() {
    if (currentMode === 'encode') {
      if (inputLabel) inputLabel.textContent = 'Plain Text Input:';
      if (outputLabel) outputLabel.textContent = 'Encoded Output:';
      if (modeEncodeBtn) modeEncodeBtn.classList.add('neo-btn-primary');
      if (modeDecodeBtn) modeDecodeBtn.classList.remove('neo-btn-primary');
      if (decInput) decInput.placeholder = 'Type plain text to encode...';
    } else {
      if (inputLabel) inputLabel.textContent = 'Encoded Input:';
      if (outputLabel) outputLabel.textContent = 'Decoded Plain Text:';
      if (modeDecodeBtn) modeDecodeBtn.classList.add('neo-btn-primary');
      if (modeEncodeBtn) modeEncodeBtn.classList.remove('neo-btn-primary');
      if (decInput) decInput.placeholder = 'Paste encoded data here...';
    }
  }

  function runCodec() {
    const raw = decInput.value || '';
    if (!raw.trim()) {
      decOutput.value = '';
      return;
    }

    if (currentMode === 'encode') {
      decOutput.value = Encodings.encode(raw, state.decoderType);
    } else {
      decOutput.value = Encodings.decode(raw, state.decoderType);
    }
  }

  if (modeEncodeBtn) {
    modeEncodeBtn.addEventListener('click', () => {
      currentMode = 'encode';
      updateCodecLabels();
      runCodec();
    });
  }

  if (modeDecodeBtn) {
    modeDecodeBtn.addEventListener('click', () => {
      currentMode = 'decode';
      updateCodecLabels();
      runCodec();
    });
  }

  if (typeWrapper && typeTrigger && typeOptions) {
    typeTrigger.onclick = (e) => {
      e.stopPropagation();
      document.querySelectorAll('.custom-select-wrapper').forEach(w => {
        if (w !== typeWrapper) w.classList.remove('open');
      });
      typeWrapper.classList.toggle('open');
    };

    typeOptions.querySelectorAll('.custom-option').forEach(opt => {
      opt.onclick = (e) => {
        e.stopPropagation();
        state.decoderType = opt.dataset.value;
        typeLabel.textContent = opt.textContent;
        typeOptions.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        typeWrapper.classList.remove('open');
        runCodec();
      };
    });
  }

  if (decInput) decInput.addEventListener('input', runCodec);

  if (decCopyBtn) {
    decCopyBtn.addEventListener('click', () => {
      if (!decOutput.value) {
        showToast('Nothing to copy');
        return;
      }
      copyToClipboard(decOutput.value, 'Output copied');
    });
  }

  updateCodecLabels();
}

// ==========================================================================
// SECTION 3: TRANSLATOR (CAPITALIZED, NO LISTEN BUTTON)
// ==========================================================================
function setupTranslator() {
  const fromWrapper = document.getElementById('transFromDropdownWrapper');
  const fromTrigger = document.getElementById('transFromTrigger');
  const fromLabel = document.getElementById('transFromLabel');
  const fromOptions = document.getElementById('transFromOptions');

  const toWrapper = document.getElementById('transToDropdownWrapper');
  const toTrigger = document.getElementById('transToTrigger');
  const toLabel = document.getElementById('transToLabel');
  const toOptions = document.getElementById('transToOptions');

  const fromText = document.getElementById('transFromText');
  const toText = document.getElementById('transToText');
  const swapBtn = document.getElementById('transSwapBtn');
  const copyToBtn = document.getElementById('transCopyToBtn');
  const clearFromBtn = document.getElementById('transClearFromBtn');
  const statusEl = document.getElementById('transStatus');

  if (!fromWrapper || !toWrapper || !fromText || !toText) return;

  // Populate Origin Dropdown
  fromOptions.innerHTML = '';
  const autoOpt = document.createElement('div');
  autoOpt.className = 'custom-option selected';
  autoOpt.textContent = 'Auto Detect';
  autoOpt.dataset.code = 'auto';
  autoOpt.onclick = (e) => {
    e.stopPropagation();
    state.transFrom = 'auto';
    fromLabel.textContent = 'Auto Detect';
    fromOptions.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
    autoOpt.classList.add('selected');
    fromWrapper.classList.remove('open');
    executeTranslation();
  };
  fromOptions.appendChild(autoOpt);

  LANGUAGES.forEach(l => {
    const opt = document.createElement('div');
    opt.className = 'custom-option';
    opt.textContent = l.name;
    opt.dataset.code = l.code;
    opt.onclick = (e) => {
      e.stopPropagation();
      state.transFrom = l.code;
      fromLabel.textContent = l.name;
      fromOptions.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      fromWrapper.classList.remove('open');
      executeTranslation();
    };
    fromOptions.appendChild(opt);
  });

  fromTrigger.onclick = (e) => {
    e.stopPropagation();
    document.querySelectorAll('.custom-select-wrapper').forEach(w => {
      if (w !== fromWrapper) w.classList.remove('open');
    });
    fromWrapper.classList.toggle('open');
  };

  // Populate Destination Dropdown
  toOptions.innerHTML = '';
  LANGUAGES.forEach(l => {
    const opt = document.createElement('div');
    opt.className = `custom-option ${l.code === state.transTo ? 'selected' : ''}`;
    opt.textContent = l.name;
    opt.dataset.code = l.code;
    opt.onclick = (e) => {
      e.stopPropagation();
      state.transTo = l.code;
      toLabel.textContent = l.name;
      toOptions.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      toWrapper.classList.remove('open');
      executeTranslation();
    };
    toOptions.appendChild(opt);
  });

  toTrigger.onclick = (e) => {
    e.stopPropagation();
    document.querySelectorAll('.custom-select-wrapper').forEach(w => {
      if (w !== toWrapper) w.classList.remove('open');
    });
    toWrapper.classList.toggle('open');
  };

  let debounceTimer = null;

  async function executeTranslation() {
    const text = fromText.value.trim();
    if (!text) {
      toText.value = '';
      if (statusEl) statusEl.textContent = 'Ready';
      return;
    }

    if (statusEl) statusEl.textContent = 'Translating...';

    const result = await Translator.translate(text, state.transFrom, state.transTo);
    toText.value = result;

    if (statusEl) {
      if (state.transFrom === 'auto' && Translator.lastDetected) {
        const detected = LANGUAGES.find(l => l.code === Translator.lastDetected);
        statusEl.textContent = detected ? `Detected: ${detected.name}` : 'Complete';
      } else {
        statusEl.textContent = 'Complete';
      }
    }
  }

  fromText.addEventListener('input', () => {
    document.getElementById('transCharCount').textContent = `${fromText.value.length} characters`;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(executeTranslation, 600);
  });

  swapBtn.addEventListener('click', () => {
    const currentFrom = state.transFrom === 'auto' ? 'en' : state.transFrom;
    const currentTo = state.transTo;

    state.transFrom = currentTo;
    state.transTo = currentFrom;

    const langFromObj = LANGUAGES.find(l => l.code === currentTo);
    const langToObj = LANGUAGES.find(l => l.code === currentFrom);
    if (langFromObj) fromLabel.textContent = langFromObj.name;
    if (langToObj) toLabel.textContent = langToObj.name;

    const temp = fromText.value;
    fromText.value = toText.value;
    toText.value = temp;

    executeTranslation();
  });

  copyToBtn.addEventListener('click', () => {
    copyToClipboard(toText.value, 'Translation copied');
  });

  clearFromBtn.addEventListener('click', () => {
    fromText.value = '';
    toText.value = '';
    fromText.focus();
    if (statusEl) statusEl.textContent = 'Ready';
  });
}

// ==========================================================================
// SECTION 4: ANALYZER (100% SYMMETRICAL)
// ==========================================================================
function setupAnalyzer() {
  const textarea = document.getElementById('analyzerInput');
  if (!textarea) return;

  const updateStats = () => {
    const text = textarea.value;

    const charCount = Array.from(text).length;
    const encoder = new TextEncoder();
    const byteCount = encoder.encode(text).length;
    const lineCount = text ? text.split('\n').length : 0;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    document.getElementById('statChars').textContent = charCount;
    document.getElementById('statBytes').textContent = byteCount;
    document.getElementById('statLines').textContent = lineCount;
    document.getElementById('statWords').textContent = wordCount;

    const list = document.getElementById('glyphBreakdownList');
    list.innerHTML = '';

    if (!text) {
      list.innerHTML = '<div style="color:var(--text-secondary); text-align:center; padding:1rem;">Type or paste text on the left to analyze...</div>';
      return;
    }

    const uniqueChars = Array.from(new Set(Array.from(text))).slice(0, 50);

    uniqueChars.forEach(char => {
      const code = getUnicodeCodePoint(char);
      const matched = GLYPHS_DATABASE.find(g => g.char === char);
      const name = matched ? matched.name : (char === ' ' ? 'Space' : (char === '\n' ? 'Line Break' : 'Unicode Character'));

      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <span style="font-size:1.1rem; width:28px; text-align:center;">${char === ' ' ? '␣' : (char === '\n' ? '↵' : char)}</span>
        <span style="color:var(--accent); font-size:0.75rem;">${code}</span>
        <span style="color:var(--text-secondary); font-size:0.75rem; flex:1; margin-left:8px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${name}</span>
        <button class="neo-btn neo-btn-mini">Copy</button>
      `;

      row.querySelector('.neo-btn').onclick = () => {
        copyToClipboard(char, `Copied: ${char}`);
      };

      list.appendChild(row);
    });
  };

  textarea.addEventListener('input', updateStats);
  updateStats();
}

// ==========================================================================
// SECTION 5: ZALGO
// ==========================================================================
function setupZalgoGenerator() {
  const input = document.getElementById('zalgoInput');
  const preview = document.getElementById('zalgoPreview');
  const upSlider = document.getElementById('zalgoUp');
  const midSlider = document.getElementById('zalgoMid');
  const downSlider = document.getElementById('zalgoDown');
  const copyBtn = document.getElementById('zalgoCopyBtn');
  const chaosBtn = document.getElementById('zalgoChaosBtn');

  if (!input || !preview) return;

  function getRandomMark(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateZalgo() {
    const text = input.value || '';
    if (!text) {
      preview.innerHTML = '<span style="color:var(--text-secondary);">(Type text above to preview glitch effect)</span>';
      return;
    }
    const numUp = parseInt(upSlider.value, 10);
    const numMid = parseInt(midSlider.value, 10);
    const numDown = parseInt(downSlider.value, 10);

    let result = '';

    for (const char of text) {
      if (char === ' ' || char === '\n') {
        result += char;
        continue;
      }
      result += char;
      for (let i = 0; i < numUp; i++) result += getRandomMark(ZALGO_MARKS_UP);
      for (let i = 0; i < numMid; i++) result += getRandomMark(ZALGO_MARKS_MID);
      for (let i = 0; i < numDown; i++) result += getRandomMark(ZALGO_MARKS_DOWN);
    }

    preview.textContent = result;
  }

  [input, upSlider, midSlider, downSlider].forEach(el => {
    el.addEventListener('input', () => {
      document.getElementById('zalgoUpVal').textContent = upSlider.value;
      document.getElementById('zalgoMidVal').textContent = midSlider.value;
      document.getElementById('zalgoDownVal').textContent = downSlider.value;
      generateZalgo();
    });
  });

  if (chaosBtn) {
    chaosBtn.addEventListener('click', () => {
      upSlider.value = Math.floor(Math.random() * 8) + 4;
      midSlider.value = Math.floor(Math.random() * 4) + 2;
      downSlider.value = Math.floor(Math.random() * 8) + 4;
      document.getElementById('zalgoUpVal').textContent = upSlider.value;
      document.getElementById('zalgoMidVal').textContent = midSlider.value;
      document.getElementById('zalgoDownVal').textContent = downSlider.value;
      generateZalgo();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyToClipboard(preview.textContent, 'Zalgo text copied');
    });
  }

  generateZalgo();
}

// ==========================================================================
// SECTION 6: EMOTES & MOBILE EMOJIS (800+ CURATED)
// ==========================================================================
function setupEmotesStation() {
  const searchInput = document.getElementById('emoteSearchInput');
  const searchClearBtn = document.getElementById('emoteSearchClearBtn');
  const catWrapper = document.getElementById('emoteCatDropdownWrapper');
  const catTrigger = document.getElementById('emoteCatDropdownTrigger');
  const catLabel = document.getElementById('emoteCatSelectedLabel');
  const catContainer = document.getElementById('emoteCatOptionsContainer');
  const countEl = document.getElementById('emoteResultsCount');
  const grid = document.getElementById('emotesGrid');
  const typeBtns = document.querySelectorAll('.emote-type-btn');

  if (!grid || typeof EMOTES_DATABASE === 'undefined') return;

  // Build category options dropdown based on active type
  function buildCategoryDropdown() {
    if (!catContainer) return;
    catContainer.innerHTML = '';

    let cats = EMOTE_CATEGORIES;
    if (state.emoteTypeFilter && state.emoteTypeFilter !== 'all') {
      cats = cats.filter(c => c.type === 'all' || c.type === state.emoteTypeFilter);
    }

    cats.forEach(cat => {
      const opt = document.createElement('div');
      opt.className = `custom-option ${state.currentEmoteCategory === cat.id ? 'selected' : ''}`;
      opt.textContent = cat.name;
      opt.onclick = (e) => {
        e.stopPropagation();
        state.currentEmoteCategory = cat.id;
        if (catLabel) catLabel.textContent = cat.name;
        catContainer.querySelectorAll('.custom-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        catWrapper.classList.remove('open');
        renderEmotes();
      };
      catContainer.appendChild(opt);
    });
  }

  // Type Switcher Tabs (All / Mobile Emojis / Kaomojis)
  if (typeBtns && typeBtns.length > 0) {
    typeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        typeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.emoteTypeFilter = btn.dataset.type || 'all';
        state.currentEmoteCategory = 'all';
        if (catLabel) {
          catLabel.textContent = state.emoteTypeFilter === 'emoji' ? 'All Emojis' : (state.emoteTypeFilter === 'kaomoji' ? 'All Kaomojis' : 'All Emotes & Emojis');
        }
        buildCategoryDropdown();
        renderEmotes();
      });
    });
  }

  if (catTrigger && catWrapper) {
    catTrigger.onclick = (e) => {
      e.stopPropagation();
      document.querySelectorAll('.custom-select-wrapper').forEach(w => {
        if (w !== catWrapper) w.classList.remove('open');
      });
      catWrapper.classList.toggle('open');
    };
  }

  function renderEmotes() {
    let filtered = EMOTES_DATABASE;

    // Filter by type (emoji vs kaomoji)
    if (state.emoteTypeFilter && state.emoteTypeFilter !== 'all') {
      filtered = filtered.filter(e => e.type === state.emoteTypeFilter);
    }

    // Filter by category
    if (state.currentEmoteCategory && state.currentEmoteCategory !== 'all') {
      filtered = filtered.filter(e => e.cat === state.currentEmoteCategory);
    }

    // Search query filter
    if (state.emoteSearchQuery.trim()) {
      const q = state.emoteSearchQuery.trim().toLowerCase();
      filtered = filtered.filter(e => {
        const textMatch = e.emote.toLowerCase().includes(q);
        const nameMatch = e.name.toLowerCase().includes(q);
        const tagMatch = e.tags && e.tags.some(t => t.toLowerCase().includes(q));
        return textMatch || nameMatch || tagMatch;
      });
    }

    if (countEl) {
      const unit = state.emoteTypeFilter === 'emoji' ? 'emoji' : (state.emoteTypeFilter === 'kaomoji' ? 'kaomoji' : 'item');
      countEl.textContent = `${filtered.length} ${unit}${filtered.length === 1 ? '' : 's'}`;
    }

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <p>No emojis or emotes found matching your query.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = item.type === 'emoji' ? 'emote-card is-emoji' : 'emote-card';
      card.title = `${item.name} (Click to copy)`;

      const textDiv = document.createElement('div');
      textDiv.className = item.type === 'emoji' ? 'emote-text is-emoji-glyph' : 'emote-text';
      textDiv.textContent = item.emote;

      card.appendChild(textDiv);

      card.addEventListener('click', () => {
        copyToClipboard(item.emote, `Copied: ${item.emote}`);
      });

      grid.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.emoteSearchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = state.emoteSearchQuery ? 'block' : 'none';
      }
      renderEmotes();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        state.emoteSearchQuery = '';
        searchClearBtn.style.display = 'none';
        searchInput.focus();
        renderEmotes();
      }
    });
  }

  buildCategoryDropdown();
  renderEmotes();
}

// ==========================================================================
// SECTION 7: PROMPT MUTATOR (MINIMALIST RANDOMIZED ENGINE)
// ==========================================================================
function setupPromptStation() {
  const input = document.getElementById('promptInput');
  const output = document.getElementById('promptOutput');
  const clearBtn = document.getElementById('promptClearBtn');
  const copyBtn = document.getElementById('promptCopyBtn');
  const inputCount = document.getElementById('promptInputCount');
  const outputCount = document.getElementById('promptOutputCount');
  const slider = document.getElementById('promptSlider');
  const sliderVal = document.getElementById('promptSliderVal');

  if (!input || !output || typeof PromptMutator === 'undefined') return;

  function runMutation() {
    const rawText = input.value || '';
    const pct = slider ? parseInt(slider.value, 10) : 50;

    if (sliderVal) sliderVal.textContent = `${pct}%`;
    if (inputCount) inputCount.textContent = `${rawText.length} character${rawText.length === 1 ? '' : 's'}`;

    if (!rawText) {
      output.value = '';
      if (outputCount) outputCount.textContent = '0 characters';
      return;
    }

    const result = PromptMutator.mutate(rawText, pct);
    output.value = result.outputText;
    if (outputCount) outputCount.textContent = `${result.outputText.length} character${result.outputText.length === 1 ? '' : 's'}`;
  }

  // Input listener
  input.addEventListener('input', runMutation);

  // Slider listener
  if (slider) {
    slider.addEventListener('input', runMutation);
  }

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      input.focus();
      runMutation();
    });
  }

  // Copy button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!output.value) {
        showToast('Nothing to copy');
        return;
      }
      copyToClipboard(output.value, 'Prompt copied');
    });
  }

  // Initial trigger
  runMutation();
}

// Close dropdowns on outside click
document.addEventListener('click', () => {
  document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open'));
});

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  // Tab Navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });

  // Search & Clear
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
      }
      renderGlyphs();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        searchInput.focus();
        renderGlyphs();
      }
    });
  }

  // Modal
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modal = document.getElementById('glyphModal');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const copyCategoryBtn = document.getElementById('copyCategoryBtn');
  if (copyCategoryBtn) {
    copyCategoryBtn.addEventListener('click', () => {
      let filtered = GLYPHS_DATABASE;
      if (state.currentCategory === 'favorites') {
        filtered = filtered.filter(g => state.favorites.includes(g.char));
      } else if (state.currentCategory !== 'all') {
        filtered = filtered.filter(g => g.cat === state.currentCategory);
      }
      const allText = filtered.map(g => g.char).join(' ');
      copyToClipboard(allText, `${filtered.length} characters copied`);
    });
  }

  // Initialize components
  setupCategoryDropdown();
  renderGlyphs();
  setupEncodingsStation();
  setupTranslator();
  setupAnalyzer();
  setupZalgoGenerator();
  setupEmotesStation();
  setupPromptStation();
});
