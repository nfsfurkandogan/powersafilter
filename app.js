const products = Array.isArray(window.POWERSA_PRODUCTS)
  ? window.POWERSA_PRODUCTS
  : [];

const state = {
  query: '',
  queryNorm: '',
  kod1: '',
  kod3: '',
  kod4: '',
  brand: '',
  limit: 30,
};

const els = {
  query: document.getElementById('query'),
  kod1: document.getElementById('filter-kod1'),
  kod3: document.getElementById('filter-kod3'),
  kod4: document.getElementById('filter-kod4'),
  brand: document.getElementById('filter-brand'),
  results: document.getElementById('results'),
  count: document.getElementById('result-count'),
  loadMore: document.getElementById('load-more'),
  clear: document.getElementById('clear-btn'),
  activeFilters: document.getElementById('active-filters'),
  quickFilters: document.getElementById('quick-filters'),
};

const labelOverrides = {
  YAG: 'YAĞ',
  BENZIN: 'BENZİN',
  HIDROLIK: 'HİDROLİK',
};

function normalizeKey(value) {
  return (value || '')
    .toString()
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleUpperCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function normalizeSearch(value) {
  return (value || '')
    .toString()
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleUpperCase('tr-TR')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatTag(value) {
  if (!value) return '';
  const normalized = normalizeKey(value);
  if (labelOverrides[normalized]) return labelOverrides[normalized];
  return value.toString().trim().toLocaleUpperCase('tr-TR');
}

function prepareProducts() {
  products.forEach((p) => {
    p._kod1 = normalizeKey(p.kod1);
    p._kod3 = normalizeKey(p.kod3);
    p._kod4 = normalizeKey(p.kod4);
    p._brand = normalizeKey(p.ureticiKodu);
    p._search = normalizeSearch(
      [p.stokKodu, p.ureticiKodu, p.stokIsmi, p.grupIsmi].join(' ')
    );
  });
}

function applyFilters(excludeKey) {
  const result = [];
  for (let i = 0; i < products.length; i += 1) {
    const p = products[i];
    if (excludeKey !== 'query' && state.queryNorm) {
      if (!p._search.includes(state.queryNorm)) continue;
    }
    if (excludeKey !== 'kod1' && state.kod1 && p._kod1 !== state.kod1) {
      continue;
    }
    if (excludeKey !== 'kod3' && state.kod3 && p._kod3 !== state.kod3) {
      continue;
    }
    if (excludeKey !== 'kod4' && state.kod4 && p._kod4 !== state.kod4) {
      continue;
    }
    if (excludeKey !== 'brand' && state.brand && p._brand !== state.brand) {
      continue;
    }
    result.push(p);
  }
  return result;
}

function buildOptions(items, normKey, rawKey) {
  const map = new Map();
  items.forEach((p) => {
    const norm = p[normKey];
    if (!norm) return;
    if (!map.has(norm)) {
      map.set(norm, formatTag(p[rawKey] || norm));
    }
  });
  return Array.from(map.entries())
    .map(([value, label]) => ({ value, label }))
    .sort((a, b) => a.label.localeCompare(b.label, 'tr'));
}

function fillSelect(select, options, placeholder, currentValue) {
  const current = currentValue;
  select.innerHTML = '';
  const emptyOption = document.createElement('option');
  emptyOption.value = '';
  emptyOption.textContent = placeholder;
  select.appendChild(emptyOption);
  options.forEach((opt) => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.label;
    select.appendChild(option);
  });
  if (current && options.some((o) => o.value === current)) {
    select.value = current;
  } else {
    select.value = '';
  }
}

function updateFilters() {
  const kod1Options = buildOptions(applyFilters('kod1'), '_kod1', 'kod1');
  const kod3Options = buildOptions(applyFilters('kod3'), '_kod3', 'kod3');
  const kod4Options = buildOptions(applyFilters('kod4'), '_kod4', 'kod4');
  const brandOptions = buildOptions(applyFilters('brand'), '_brand', 'ureticiKodu');

  fillSelect(els.kod1, kod1Options, 'Tümü', state.kod1);
  fillSelect(els.kod3, kod3Options, 'Tümü', state.kod3);
  fillSelect(els.kod4, kod4Options, 'Tümü', state.kod4);
  fillSelect(els.brand, brandOptions, 'Tümü', state.brand);
}

function renderActiveFilters() {
  const chips = [];
  if (state.queryNorm) {
    chips.push({ label: `Arama: ${state.query}` });
  }
  if (state.kod1) {
    chips.push({ label: `Kod-1: ${formatTag(state.kod1)}` });
  }
  if (state.kod3) {
    chips.push({ label: `Kod-3: ${formatTag(state.kod3)}` });
  }
  if (state.kod4) {
    chips.push({ label: `Kod-4: ${formatTag(state.kod4)}` });
  }
  if (state.brand) {
    chips.push({ label: `Üretici: ${formatTag(state.brand)}` });
  }

  els.activeFilters.innerHTML = '';
  if (chips.length === 0) {
    const empty = document.createElement('span');
    empty.className = 'pill';
    empty.textContent = 'Filtre seçilmedi';
    els.activeFilters.appendChild(empty);
    return;
  }
  chips.forEach((chip) => {
    const el = document.createElement('span');
    el.className = 'pill';
    el.textContent = chip.label;
    els.activeFilters.appendChild(el);
  });
}

function renderResults(list) {
  const shown = list.slice(0, state.limit);
  els.results.innerHTML = '';

  if (list.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'result-empty';
    empty.innerHTML = '<strong>Sonuç bulunamadı.</strong> Filtreleri genişletip tekrar deneyin.';
    els.results.appendChild(empty);
  } else {
    const fragment = document.createDocumentFragment();
    shown.forEach((p) => {
      const row = document.createElement('div');
      row.className = 'result-row';
      row.innerHTML = `
        <div>
          <div class="result-name">${p.stokIsmi || 'Ürün'}</div>
          <div class="result-sub">Grup: ${p.grupIsmi || '-'}</div>
        </div>
        <div>${p.stokKodu || '-'}</div>
        <div>${p.ureticiKodu || '-'}</div>
        <div class="result-tags">
          ${p.kod1 ? `<span class="pill">${formatTag(p.kod1)}</span>` : ''}
          ${p.kod3 ? `<span class="pill">${formatTag(p.kod3)}</span>` : ''}
          ${p.kod4 ? `<span class="pill">${formatTag(p.kod4)}</span>` : ''}
        </div>
        <div class="result-actions">
          <button data-copy="${p.stokKodu || ''}">Stok Kodu Kopyala</button>
        </div>
      `;
      fragment.appendChild(row);
    });
    els.results.appendChild(fragment);
  }

  els.count.textContent = `${list.length.toLocaleString('tr-TR')} ürün bulundu`;
  if (list.length > state.limit) {
    els.loadMore.style.display = 'inline-flex';
  } else {
    els.loadMore.style.display = 'none';
  }
}

function render(options = {}) {
  const { updateOptions = true } = options;
  if (updateOptions) {
    updateFilters();
  }
  renderActiveFilters();
  const filtered = applyFilters('');
  renderResults(filtered);
}

function resetFilters() {
  state.query = '';
  state.queryNorm = '';
  state.kod1 = '';
  state.kod3 = '';
  state.kod4 = '';
  state.brand = '';
  state.limit = 30;
  els.query.value = '';
  render();
}

function attachEvents() {
  let queryTimer;
  els.query.addEventListener('input', (event) => {
    state.query = event.target.value;
    state.queryNorm = normalizeSearch(state.query);
    state.limit = 30;
    clearTimeout(queryTimer);
    queryTimer = setTimeout(() => render({ updateOptions: false }), 180);
  });

  els.kod1.addEventListener('change', (event) => {
    state.kod1 = event.target.value;
    state.limit = 30;
    render({ updateOptions: true });
  });
  els.kod3.addEventListener('change', (event) => {
    state.kod3 = event.target.value;
    state.limit = 30;
    render({ updateOptions: true });
  });
  els.kod4.addEventListener('change', (event) => {
    state.kod4 = event.target.value;
    state.limit = 30;
    render({ updateOptions: true });
  });
  els.brand.addEventListener('change', (event) => {
    state.brand = event.target.value;
    state.limit = 30;
    render({ updateOptions: true });
  });

  els.loadMore.addEventListener('click', () => {
    state.limit += 30;
    render({ updateOptions: false });
  });

  els.clear.addEventListener('click', () => {
    resetFilters();
  });

  if (els.quickFilters) {
    els.quickFilters.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-kod3]');
      if (!button) return;
      const value = button.getAttribute('data-kod3');
      if (!value) return;
      state.kod1 = normalizeKey('FILTRE');
      state.kod3 = normalizeKey(value);
      state.limit = 30;
      render({ updateOptions: true });
    });
  }

  els.results.addEventListener('click', async (event) => {
    const button = event.target.closest('button[data-copy]');
    if (!button) return;
    const value = button.getAttribute('data-copy');
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      button.textContent = 'Kopyalandı';
      setTimeout(() => {
        button.textContent = 'Stok Kodu Kopyala';
      }, 1200);
    } catch (err) {
      button.textContent = 'Kopyalanamadı';
      setTimeout(() => {
        button.textContent = 'Stok Kodu Kopyala';
      }, 1400);
    }
  });
}

prepareProducts();
attachEvents();
render();
