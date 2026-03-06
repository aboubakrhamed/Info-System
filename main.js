// --- Configuration ---
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmc2bDu59mtPmAphu6royXethK3nfaEDBiFq_oSMHBKM_84rlIYSOYUl6cv2zIPUh83jSjUtgv4pgd/pub?gid=2139009053&single=true&output=csv";

// --- University Logos Mapping (Local Assets) ---
const UNI_LOGOS = {
    "ALTINBAS": "assets/altinbas.png",
    "BAHCESEHIR": "assets/bau.png",
    "BILGI": "assets/bilgi.png",
    "KENT": "assets/istanbul_kent.png",
    "AREL": "assets/arel.png",
    "ATLAS": "assets/atlas.png",
    "AYDIN": "assets/aydin.png",
    "BAU": "assets/bau.png", 
    "BEYKENT": "assets/beykent.png",
    "BEYKOZ": "assets/beykoz.png",
    "BEZMIALEM": "assets/bezmialem.png",
    "BILIM": "assets/bilim.png", 
    "BIRUNI": "assets/biruni.png",
    "DOGUS": "assets/dogus.png",
    "ESENYURT": "assets/esenyurt.png",
    "FATIH": "assets/fatih.png", 
    "FENERBAHCE": "assets/fenerbahce.png",
    "GALATA": "assets/galata.png",
    "GEDIK": "assets/gedik.png",
    "GELISIM": "assets/gelisim.png",
    "HALIC": "assets/halic.png",
    "IBN": "assets/ibn.png", 
    "ISIK": "assets/isik.png",
    "ISTINYE": "assets/istinye.png",
    "KADIR": "assets/kadir.png", 
    "KULTUR": "assets/kultur.png",
    "MALTEPE": "assets/maltepe.png",
    "MEDIPOL": "assets/medipol.png", 
    "MEF": "assets/mef.png",
    "NISANTASI": "assets/nisantasi.png",
    "OKAN": "assets/okan.png",
    "OZYEGIN": "assets/ozyegin.png",
    "PIRI": "assets/piri.png", 
    "SABANCI": "assets/sabanci.png",
    "SABAHATTIN": "assets/sabahattin.png", 
    "TICARET": "assets/ticaret.png", 
    "TOPKAPI": "assets/topkapi.png",
    "USKUDAR": "assets/uskudar.png",
    "YEDITEPE": "assets/yeditepe.png",
    "YENI": "assets/yeni.png", 
    "29": "assets/29.png", 
    "ANKARA MEDIPOL": "assets/ankaramedipol.png",
    "ATILIM": "assets/atilim.png",
    "BASKENT": "assets/baskent.png",
    "BILKENT": "assets/bilkent.png",
    "CANKAYA": "assets/cankaya.png",
    "LOKMAN": "assets/lokman.png",
    "OSTIM": "assets/ostim.png",
    "TED": "assets/ted.png",
    "TOBB": "assets/tobb.png", 
    "THK": "assets/thk.png", 
    "UFUK": "assets/ufuk.png",
    "YUKSEK": "assets/yuksek.png"
};

// --- Translations ---
const TRANSLATIONS = {
    en: {
        dir: 'ltr',
        font: 'Inter',
        appTitle: 'Future Journey',
        searchPlaceholder: 'Quick Search (University, Program, City...)',
        programsCount: 'Programs',
        download: 'Download PDF',
        print: 'Print',
        colProgram: 'Program',
        colUniversity: 'University',
        colInfo: 'Information',
        colAddress: 'Address',
        lblFaculty: 'Faculty:',
        lblDegree: 'Degree:',
        lblPrice: 'Price:',
        lblCash: 'Cash:', 
        lblYears: 'Years:',
        viewUni: 'View University',
        select: 'Select',
        selected: 'Selected',
        searchOptions: 'Search options...',
        clearFilters: 'Clear Filters',
        noOptions: 'No options found',
        sortBy: 'Sort By',
        sortLowHigh: 'Price: Low to High',
        sortHighLow: 'Price: High to Low',
        showing: 'Showing',
        to: 'to',
        of: 'of',
        perPage: 'Per Page',
        prev: 'Previous',
        next: 'Next',
        jumpTo: 'Go to page',
        go: 'Go',
        filters: {
            country: 'Country',
            city: 'City',
            university: 'University',
            degree: 'Degree',
            faculty: 'Faculty',
            department: 'Department',
            language: 'Language',
            type: 'Course Type',
            status: 'Status',
            price: 'Price Range'
        },
        langBtn: 'العربية'
    },
    ar: {
        dir: 'rtl',
        font: 'Cairo',
        appTitle: 'Future Journey',
        searchPlaceholder: 'بحث سريع (الجامعة، التخصص، المدينة...)',
        programsCount: 'برنامج',
        download: 'تحميل PDF',
        print: 'طباعة',
        colProgram: 'البرنامج',
        colUniversity: 'الجامعة',
        colInfo: 'تفاصيل',
        colAddress: 'العنوان',
        lblFaculty: 'الكلية:',
        lblDegree: 'الدرجة:',
        lblPrice: 'السعر:',
        lblCash: 'كاش:', 
        lblYears: 'سنوات:',
        viewUni: 'عرض الجامعة',
        select: 'اختر',
        selected: 'محدد',
        searchOptions: 'ابحث في القائمة...',
        clearFilters: 'إلغاء الفلاتر',
        noOptions: 'لا توجد خيارات',
        sortBy: 'ترتيب حسب',
        sortLowHigh: 'السعر: من الأقل للأعلى',
        sortHighLow: 'السعر: من الأعلى للأقل',
        showing: 'عرض',
        to: 'إلى',
        of: 'من أصل',
        perPage: 'في الصفحة',
        prev: 'السابق',
        next: 'التالي',
        jumpTo: 'اذهب لصفحة',
        go: 'اذهب',
        filters: {
            country: 'الدولة',
            city: 'المدينة',
            university: 'الجامعة',
            degree: 'الدرجة',
            faculty: 'الكلية',
            department: 'التخصص',
            language: 'اللغة',
            type: 'نوع الكورس',
            status: 'الحالة',
            price: 'نطاق السعر'
        },
        langBtn: 'English'
    }
};

// --- State ---
let APP_STATE = {
    lang: 'en',
    data: [],
    filters: {
        country: new Set(),
        city: new Set(),
        university: new Set(),
        degree: new Set(),
        faculty: new Set(),
        department: new Set(),
        language: new Set(),
        type: new Set(),
        status: new Set(),
        minPrice: '', 
        maxPrice: ''
    },
    sortBy: '', 
    searchTerm: '',
    currentPage: 1,
    itemsPerPage: 10,
    openDropdown: null,
    highlightedIndex: -1 
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Set Tab Icon (Favicon) ---
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = 'assets/logo.png';
    document.head.appendChild(favicon);

    lucide.createIcons();
    fetchData();
    
    // Global Search
    document.getElementById('search-input').addEventListener('input', (e) => {
        APP_STATE.searchTerm = e.target.value.toLowerCase();
        APP_STATE.currentPage = 1;
        renderPrograms();
    });

    // Close dropdowns
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-multiselect') && APP_STATE.openDropdown) {
            closeDropdown(APP_STATE.openDropdown);
        }
    });

    // Action Buttons
    const downloadBtn = document.querySelector('[data-action="download"]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadPDF);
    }
});

// --- Helper: Get Logo ---
function getUniversityLogo(uniName) {
    if (!uniName || typeof UNI_LOGOS === 'undefined') return null;
    const upperName = uniName.toUpperCase();
    for (const [key, url] of Object.entries(UNI_LOGOS)) {
        if (upperName.includes(key)) {
            return url;
        }
    }
    return null; 
}

// --- UI Logic for Tag-Based Multi-Select ---
function focusSearch(key) {
    const input = document.getElementById(`input-${key}`);
    if (input) {
        input.focus();
        openDropdown(key);
    }
}

function openDropdown(key) {
    const dropdown = document.getElementById(`dropdown-${key}`);
    const input = document.getElementById(`input-${key}`);
    
    if (APP_STATE.openDropdown && APP_STATE.openDropdown !== key) {
        closeDropdown(APP_STATE.openDropdown);
    }

    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        APP_STATE.openDropdown = key;
        APP_STATE.highlightedIndex = -1;
        filterDropdownOptions(key, input.value);
    }
}

function closeDropdown(key) {
    const dropdown = document.getElementById(`dropdown-${key}`);
    const input = document.getElementById(`input-${key}`);
    if (dropdown) {
        dropdown.classList.add('hidden');
    }
    if(input) input.value = '';
    
    APP_STATE.openDropdown = null;
    APP_STATE.highlightedIndex = -1;
}

function handleDropdownKeydown(e, key) {
    const container = document.getElementById(`options-${key}`);
    const items = Array.from(container.querySelectorAll('.dropdown-item:not(.hidden)'));
    
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        APP_STATE.highlightedIndex++;
        if (APP_STATE.highlightedIndex >= items.length) APP_STATE.highlightedIndex = 0;
        updateHighlight(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        APP_STATE.highlightedIndex--;
        if (APP_STATE.highlightedIndex < 0) APP_STATE.highlightedIndex = items.length - 1;
        updateHighlight(items);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (APP_STATE.highlightedIndex > -1 && items[APP_STATE.highlightedIndex]) {
            items[APP_STATE.highlightedIndex].click();
        }
    }
}

function updateHighlight(items) {
    items.forEach((item, index) => {
        if (index === APP_STATE.highlightedIndex) {
            item.classList.add('bg-fjNavy', 'text-fjGold');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('bg-fjNavy', 'text-fjGold');
        }
    });
}

function filterDropdownOptions(key, query) {
    const container = document.getElementById(`options-${key}`);
    const items = container.querySelectorAll('.dropdown-item');
    const lowerQuery = query.toLowerCase();
    let hasVisible = false;

    APP_STATE.highlightedIndex = -1;

    items.forEach(item => {
        const value = item.dataset.value;
        const text = item.textContent.toLowerCase();
        const isSelected = APP_STATE.filters[key].has(value);

        if (text.includes(lowerQuery) && !isSelected) {
            item.classList.remove('hidden');
            item.classList.remove('bg-fjNavy', 'text-fjGold');
            hasVisible = true;
        } else {
            item.classList.add('hidden');
        }
    });

    let noOptMsg = container.querySelector('.no-options-msg');
    if (!hasVisible) {
        if(!noOptMsg) {
            noOptMsg = document.createElement('div');
            noOptMsg.className = 'no-options-msg p-2 text-sm text-slate-400 text-center';
            noOptMsg.innerText = TRANSLATIONS[APP_STATE.lang].noOptions;
            container.appendChild(noOptMsg);
        }
    } else if (noOptMsg) {
        noOptMsg.remove();
    }
}

function selectItem(key, value) {
    APP_STATE.filters[key].add(value);
    renderTags(key);
    const input = document.getElementById(`input-${key}`);
    input.focus();
    filterDropdownOptions(key, input.value);
    APP_STATE.currentPage = 1;
    renderPrograms();
}

function removeTag(key, value) {
    APP_STATE.filters[key].delete(value);
    renderTags(key);
    if (APP_STATE.openDropdown === key) {
        const input = document.getElementById(`input-${key}`);
        filterDropdownOptions(key, input.value);
    }
    APP_STATE.currentPage = 1;
    renderPrograms();
}

function renderTags(key) {
    const container = document.getElementById(`tags-${key}`);
    container.innerHTML = '';
    
    APP_STATE.filters[key].forEach(val => {
        const tag = document.createElement('div');
        tag.className = 'flex items-center gap-1 bg-fjNavy text-fjGold border border-fjGold/30 px-2 py-0.5 rounded-md text-xs font-medium group transition-colors hover:bg-fjGold hover:text-fjNavy';
        tag.innerHTML = `
            <span>${val}</span>
            <button onclick="event.stopPropagation(); removeTag('${key}', '${val.replace(/'/g, "\\'")}')" class="text-fjGold/70 hover:text-current outline-none">
                <i data-lucide="x" width="12"></i>
            </button>
        `;
        container.appendChild(tag);
    });
    lucide.createIcons();
}

// --- Language & Data Logic ---
function toggleLanguage() {
    APP_STATE.lang = APP_STATE.lang === 'en' ? 'ar' : 'en';
    applyLanguage();
    setupFilters(); 
    renderPrograms(); 
}

function applyLanguage() {
    const t = TRANSLATIONS[APP_STATE.lang];
    const html = document.documentElement;
    const langLabel = document.getElementById('lang-label');
    const searchInput = document.getElementById('search-input');

    html.setAttribute('dir', t.dir);
    html.setAttribute('lang', APP_STATE.lang);
    document.body.style.fontFamily = `"${t.font}", sans-serif`;
    langLabel.innerText = t.langBtn;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerText = t[key];
    });

    searchInput.placeholder = t.searchPlaceholder;
}

async function fetchData() {
    const spinner = document.getElementById('loading-spinner');
    spinner.classList.remove('hidden');
    
    const isValidData = (text) => text && text.length > 50 && (text.includes(',') || text.includes('University'));

    try {
        const response = await fetch(GOOGLE_SHEET_URL);
        if (response.ok) {
            const text = await response.text();
            if (isValidData(text)) { processData(text); return; }
        }
        throw new Error("Direct fetch failed");
    } catch (error) {
        console.warn("Direct fetch blocked, trying Proxies...");
        try {
            const proxyUrl1 = `https://api.allorigins.win/raw?url=${encodeURIComponent(GOOGLE_SHEET_URL)}`;
            const response1 = await fetch(proxyUrl1);
            if (response1.ok) {
                const text = await response1.text();
                if (isValidData(text)) { processData(text); return; }
            }
            throw new Error("Proxy 1 failed");
        } catch (err1) {
            try {
                const proxyUrl2 = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(GOOGLE_SHEET_URL)}`;
                const response2 = await fetch(proxyUrl2);
                if (response2.ok) {
                    const text = await response2.text();
                    if (isValidData(text)) { processData(text); return; }
                }
                throw new Error("Proxy 2 failed");
            } catch (err2) {
                 try {
                    const proxyUrl3 = `https://corsproxy.io/?${encodeURIComponent(GOOGLE_SHEET_URL)}`;
                    const response3 = await fetch(proxyUrl3);
                    if (response3.ok) {
                        const text = await response3.text();
                        if (isValidData(text)) { processData(text); return; }
                    }
                    throw new Error("Proxy 3 failed");
                 } catch (err3) {
                    console.error("All proxies failed.");
                    alert("Connection Error. Please check internet.");
                 }
            }
        }
    } finally {
        spinner.classList.add('hidden');
    }
}

function processData(text) {
    APP_STATE.data = parseCSV(text);
    applyLanguage(); 
    setupFilters();
    renderPrograms();
}

function parseCSV(text) {
    const lines = text.split('\n');
    if (lines.length < 2) return [];

    const splitLine = (row) => {
        const result = [];
        let current = '';
        let inQuote = false;
        for (let i = 0; i < row.length; i++) {
            const char = row[i];
            if (char === '"') { inQuote = !inQuote; continue; }
            if (char === ',' && !inQuote) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        result.push(current.trim());
        return result;
    };

    const headerLine = lines[0].toLowerCase().replace(/\r/g, '');
    const headers = splitLine(headerLine);
    const getIdx = (name) => headers.findIndex(h => h.includes(name.toLowerCase()));
    const getExactIdx = (name) => headers.findIndex(h => h === name.toLowerCase());

    const idx = {
        nameEn: getIdx('department-en'), nameAr: getIdx('department-ar'),
        uniEn: getIdx('university-en'), uniAr: getIdx('university-ar'),
        facEn: getIdx('faculty-en'), facAr: getIdx('faculty-ar'),
        degEn: getIdx('degree-en'), degAr: getIdx('degree-ar'),
        langEn: getIdx('language-en'), langAr: getIdx('language-ar'),
        statEn: getIdx('program status-en'), statAr: getIdx('program status-ar'),
        typeEn: getIdx('course type-en'), typeAr: getIdx('course type-ar'), 
        countryEn: getIdx('country-en'), countryAr: getIdx('country-ar'),
        cityEn: getIdx('city-en'), cityAr: getIdx('city-ar'),
        campusEn: getIdx('campus-en'), campusAr: getIdx('campus-ar'),
        address: getIdx('campus address'),
        price: getExactIdx('price'),            
        discountPrice: getIdx('discountprice'), 
        cashPrice: getIdx('cashprice'), 
        years: getIdx('years')
    };

    return lines.slice(1).map((line, index) => {
        const cols = splitLine(line); 
        if (cols.length < 5) return null;
        const val = (i) => (i > -1 && cols[i]) ? cols[i].replace(/\r/g, '') : '';
        
        const rawOriginal = val(idx.price) || "0";
        const rawDiscount = val(idx.discountPrice);
        const rawCash = val(idx.cashPrice);

        let effectivePriceStr = (rawDiscount && rawDiscount !== "0") ? rawDiscount : rawOriginal;
        let tuitionPrice = effectivePriceStr;
        let trainingPrice = null;

        if (effectivePriceStr.includes('+')) {
            const parts = effectivePriceStr.split('+');
            tuitionPrice = parts[0].trim();
            trainingPrice = parts[1].trim();
        }

        return {
            id: index,
            name: { en: val(idx.nameEn) || "Unnamed", ar: val(idx.nameAr) || val(idx.nameEn) },
            university: { en: val(idx.uniEn), ar: val(idx.uniAr) || val(idx.uniEn) },
            faculty: { en: val(idx.facEn), ar: val(idx.facAr) || val(idx.facEn) },
            degree: { en: val(idx.degEn), ar: val(idx.degAr) || val(idx.degEn) },
            language: { en: val(idx.langEn), ar: val(idx.langAr) || val(idx.langEn) },
            type: { en: val(idx.typeEn), ar: val(idx.typeAr) || val(idx.typeEn) }, 
            status: { en: val(idx.statEn) || "AVAILABLE", ar: val(idx.statAr) || "متاح" },
            country: { en: val(idx.countryEn), ar: val(idx.countryAr) || val(idx.countryEn) },
            city: { en: val(idx.cityEn), ar: val(idx.cityAr) || val(idx.cityEn) },
            campus: { en: val(idx.campusEn), ar: val(idx.campusAr) || val(idx.campusEn) },
            address: val(idx.address),
            price: tuitionPrice,
            trainingPrice: trainingPrice,
            originalPrice: rawOriginal,
            cashPrice: rawCash, 
            years: val(idx.years)
        };
    }).filter(Boolean);
}

// --- Data Helper ---
function getFilteredData() {
    const lang = APP_STATE.lang;
    let filtered = APP_STATE.data.filter(p => {
        const name = (p.name[lang] || '').toLowerCase();
        const uni = (p.university[lang] || '').toLowerCase();
        const term = APP_STATE.searchTerm;
        const matchesSearch = name.includes(term) || uni.includes(term);
        
        const price = parseFloat(p.price);
        const minP = APP_STATE.filters.minPrice ? parseFloat(APP_STATE.filters.minPrice) : 0;
        const maxP = APP_STATE.filters.maxPrice ? parseFloat(APP_STATE.filters.maxPrice) : Infinity;
        const matchesPrice = (!isNaN(price) ? (price >= minP && price <= maxP) : true);

        const matchesFilters = Object.keys(APP_STATE.filters).every(key => {
            if (key === 'minPrice' || key === 'maxPrice') return true;
            const set = APP_STATE.filters[key];
            if (set.size === 0) return true;
            
            let dataVal;
            if (key === 'department') dataVal = p.name[lang];
            else if(p[key] && p[key][lang]) dataVal = p[key][lang];
            else return true;

            return set.has(dataVal);
        });

        return matchesSearch && matchesPrice && matchesFilters;
    });

    if (APP_STATE.sortBy === 'priceAsc') filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    else if (APP_STATE.sortBy === 'priceDesc') filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    return filtered;
}

// --- Rendering ---
function renderPrograms() {
    const list = document.getElementById('programs-list');
    const countLabel = document.getElementById('program-count');
    const lang = APP_STATE.lang;
    const t = TRANSLATIONS[lang];

    list.innerHTML = '';

    const filtered = getFilteredData();

    countLabel.innerText = `${filtered.length} ${t.programsCount}`;

    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / APP_STATE.itemsPerPage);
    if (APP_STATE.currentPage > totalPages) APP_STATE.currentPage = totalPages > 0 ? totalPages : 1;
    if (APP_STATE.currentPage < 1) APP_STATE.currentPage = 1;

    const startIdx = (APP_STATE.currentPage - 1) * APP_STATE.itemsPerPage;
    const endIdx = startIdx + APP_STATE.itemsPerPage;
    const paginatedItems = filtered.slice(startIdx, endIdx);

    if (totalItems === 0) {
        list.innerHTML = `<div class="p-10 text-center text-slate-400">${lang === 'en' ? 'No programs found.' : 'لا توجد نتائج.'}</div>`;
    }

    paginatedItems.forEach(p => {
        const isClosed = p.status.en.toUpperCase().includes('CLOSED') || p.status.ar.includes('مغلق');
        const statusColor = isClosed ? 'bg-red-100 text-red-700 border-red-200' : 'bg-green-100 text-green-700 border-green-200';
        
        // --- LOGO LOGIC ---
        const logoUrl = getUniversityLogo(p.university.en);
        const logoHtml = logoUrl 
            ? `<img src="${logoUrl}" alt="${p.university[lang]}" class="w-12 h-12 md:w-10 md:h-10 object-contain p-1 rounded-full border border-slate-200 bg-white shrink-0 shadow-sm">`
            : `<div class="w-12 h-12 md:w-10 md:h-10 rounded-full border border-slate-200 bg-white p-2 flex items-center justify-center shrink-0 shadow-sm"><i data-lucide="building-2" class="text-slate-400"></i></div>`;

        let priceHtml = `
            <div class="flex flex-wrap items-center gap-2">
                ${(p.originalPrice && p.originalPrice !== p.price && !p.originalPrice.includes('+') && p.originalPrice !== "0") ? `<span class="line-through text-slate-400 text-xs">$${p.originalPrice}</span>` : ''}
                <span class="text-red-600 font-bold text-[15px]">$${p.price}</span>
            </div>
        `;

        if (p.trainingPrice) {
            priceHtml = `
                <div class="flex flex-col items-start gap-0.5">
                    <div class="flex items-center gap-1">
                        <span class="text-slate-900 font-bold">$${p.price}</span>
                        <span class="text-[11px] text-slate-500">(${t.lblDegree.replace(':','')})</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-amber-600 font-bold">+ €${p.trainingPrice}</span>
                        <span class="text-[11px] text-amber-600/80">(Flight)</span>
                    </div>
                </div>
            `;
        }

        // --- CASH PRICE LOGIC ---
        if (p.cashPrice && p.cashPrice !== "0" && p.cashPrice !== "") {
            priceHtml += `
                <div class="mt-1">
                    <span class="font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200 inline-flex items-center gap-1 text-[11px]">
                        <i data-lucide="banknote" width="12"></i> ${t.lblCash} $${p.cashPrice}
                    </span>
                </div>
            `;
        }

        const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`;

        const row = document.createElement('div');
        
        // Mobile-First Custom Layout
        row.className = 'flex flex-col md:grid md:grid-cols-12 gap-0 md:gap-4 py-5 px-4 md:px-5 hover:bg-slate-50/80 transition-colors border-b border-slate-200 group';
        row.innerHTML = `
            <!-- University (Col 2 Desktop, Top Mobile) -->
            <div class="md:col-span-3 flex items-start md:items-center gap-3 order-1 md:order-2 border-b border-slate-100 md:border-none pb-4 md:pb-0 mb-4 md:mb-0">
                ${logoHtml}
                <div class="flex flex-col">
                    <span class="text-fjNavy font-extrabold text-[16px] md:text-[15px] uppercase mb-1 leading-tight">${p.university[lang]}</span>
                    <a href="#" class="text-fjGold text-[12px] hover:underline">${t.viewUni}</a>
                </div>
            </div>

            <!-- Split Container -->
            <div class="grid grid-cols-2 gap-4 md:contents order-2 md:order-none">
                
                <!-- Program (Col 1 Desktop, Left Mobile) -->
                <div class="md:col-span-3 flex flex-col justify-center order-1">
                    <h3 class="font-bold text-slate-800 text-[16px] md:text-[15px] leading-snug mb-1">${p.name[lang]}</h3>
                    <p class="text-slate-500 text-[13px] md:text-sm mb-2">${p.language[lang]}</p>
                    <div>
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide border ${statusColor}">${p.status[lang]}</span>
                    </div>
                </div>
                
                <!-- Info (Col 3 Desktop, Right Mobile) -->
                <div class="md:col-span-3 flex flex-col justify-center space-y-2 order-2 md:order-3">
                    <div class="text-[13px] md:text-sm"><span class="font-bold text-slate-700">${t.lblFaculty}</span> <span class="text-slate-600 block sm:inline">${p.faculty[lang]}</span></div>
                    <div class="text-[13px] md:text-sm"><span class="font-bold text-slate-700">${t.lblDegree}</span> <span class="text-slate-600">${p.degree[lang]}</span></div>
                    <div class="text-[13px] md:text-sm flex flex-col items-start gap-1 mt-1">
                        <span class="font-bold text-slate-700">${t.lblPrice}</span> 
                        ${priceHtml}
                    </div>
                </div>

            </div>
            
            <!-- Address (Col 4 Desktop, Bottom Mobile) -->
            <div class="md:col-span-3 flex flex-col justify-center order-3 md:order-4 border-t border-slate-100 md:border-none pt-4 md:pt-0 mt-4 md:mt-0">
                <div class="font-bold text-slate-800 text-sm mb-1">${p.country[lang]}, ${p.city[lang]}</div>
                <div class="text-slate-600 text-xs mb-1">${p.campus[lang]}</div>
                <a href="${mapLink}" target="_blank" class="text-slate-500 text-[11px] md:text-xs hover:text-fjNavy hover:underline whitespace-normal break-words leading-relaxed" title="View on Google Maps">${p.address}</a>
            </div>
        `;
        list.appendChild(row);
    });

    renderPaginationFooter(totalItems, startIdx, Math.min(endIdx, totalItems));
    lucide.createIcons();
}

function renderPaginationFooter(totalItems, start, end) {
    const t = TRANSLATIONS[APP_STATE.lang];
    const totalPages = Math.ceil(totalItems / APP_STATE.itemsPerPage);
    let footer = document.getElementById('pagination-footer');
    
    if (!footer) {
        footer = document.createElement('div');
        footer.id = 'pagination-footer';
        footer.className = 'px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4';
        const listParent = document.getElementById('programs-list').parentElement;
        listParent.appendChild(footer);
    }

    if (totalItems === 0) { footer.innerHTML = ''; return; }

    const prevDisabled = APP_STATE.currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-200';
    const nextDisabled = APP_STATE.currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-200';

    footer.innerHTML = `
        <div class="flex flex-col sm:flex-row items-center gap-4 w-full justify-between">
            <div class="flex items-center gap-2 text-sm text-slate-600">
                <span>${t.showing}</span> <span class="font-bold text-slate-900">${start + 1}</span>
                <span>${t.to}</span> <span class="font-bold text-slate-900">${end}</span>
                <span>${t.of}</span> <span class="font-bold text-slate-900">${totalItems}</span>
            </div>
            
            <div class="flex items-center gap-4">
                <!-- Jump To Page Input -->
                <div class="flex items-center gap-2">
                    <span class="text-sm text-slate-600 hidden sm:inline">${t.jumpTo}</span>
                    <input type="number" id="jump-page-input" min="1" max="${totalPages}" class="border border-slate-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-fjGold w-16 text-center" placeholder="#">
                    <button onclick="jumpToPage()" class="bg-fjNavy hover:bg-fjGold text-fjGold hover:text-fjNavy px-3 py-1 rounded text-sm transition-colors">${t.go}</button>
                </div>

                <div class="h-4 w-px bg-slate-300 hidden sm:block"></div>

                <div class="flex items-center gap-2">
                    <span class="text-sm text-slate-600 hidden sm:inline">${t.perPage}</span>
                    <select id="items-per-page" class="border border-slate-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-fjGold">
                        <option value="10" ${APP_STATE.itemsPerPage == 10 ? 'selected' : ''}>10</option>
                        <option value="20" ${APP_STATE.itemsPerPage == 20 ? 'selected' : ''}>20</option>
                        <option value="50" ${APP_STATE.itemsPerPage == 50 ? 'selected' : ''}>50</option>
                        <option value="100" ${APP_STATE.itemsPerPage == 100 ? 'selected' : ''}>100</option>
                    </select>
                </div>
                <div class="flex gap-2">
                    <button onclick="changePage(-1)" class="p-2 bg-white border border-slate-300 rounded-lg text-slate-600 transition-colors ${prevDisabled}" ${APP_STATE.currentPage === 1 ? 'disabled' : ''}><i data-lucide="chevron-left" width="16"></i></button>
                    <div class="flex items-center justify-center px-3 py-1 bg-white border border-slate-300 rounded-lg text-sm font-medium">${APP_STATE.currentPage} / ${totalPages}</div>
                    <button onclick="changePage(1)" class="p-2 bg-white border border-slate-300 rounded-lg text-slate-600 transition-colors ${nextDisabled}" ${APP_STATE.currentPage === totalPages ? 'disabled' : ''}><i data-lucide="chevron-right" width="16"></i></button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('items-per-page').addEventListener('change', (e) => {
        APP_STATE.itemsPerPage = parseInt(e.target.value);
        APP_STATE.currentPage = 1;
        renderPrograms();
    });
    
    // Add Enter key listener for jump input
    const jumpInput = document.getElementById('jump-page-input');
    if(jumpInput) {
        jumpInput.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') jumpToPage();
        });
    }
}

function changePage(delta) {
    APP_STATE.currentPage += delta;
    renderPrograms();
}

function jumpToPage() {
    const input = document.getElementById('jump-page-input');
    const pageNum = parseInt(input.value);
    const filtered = getFilteredData();
    const totalPages = Math.ceil(filtered.length / APP_STATE.itemsPerPage);

    if (pageNum >= 1 && pageNum <= totalPages) {
        APP_STATE.currentPage = pageNum;
        renderPrograms();
    } else {
        alert(APP_STATE.lang === 'en' ? `Please enter a valid page number (1-${totalPages})` : `الرجاء إدخال رقم صفحة صحيح (1-${totalPages})`);
    }
}

// --- PDF Generation Logic ---
async function downloadPDF() {
    const spinner = document.getElementById('loading-spinner');
    if(spinner) spinner.classList.remove('hidden');

    try {
        if (typeof window.jspdf === 'undefined') {
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
        }
        window.jsPDF = window.jspdf.jsPDF;
        
        if (typeof window.jsPDF.API.autoTable === 'undefined') {
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js");
        }

        const doc = new window.jsPDF();
        const filteredData = getFilteredData();

        const navyColor = [11, 17, 32];
        const goldColor = [197, 160, 89];

        // Pre-fetch University Logos safely
        const uniLogoMap = new Map();
        const uniqueUniNames = [...new Set(filteredData.map(p => p?.university?.en).filter(Boolean))];
        
        await Promise.all(uniqueUniNames.map(async (uniName) => {
            const url = getUniversityLogo(uniName);
            if (url) {
                const base64 = await getBase64FromUrl(url);
                if (base64) uniLogoMap.set(uniName, base64);
            }
        }));

        const headers = [
            ['', 'University', 'Program', 'Faculty', 'Degree', 'Language', 'Price', 'Location']
        ];

        const body = filteredData.map(p => {
            let priceStr = p.trainingPrice ? `$${p.price} + €${p.trainingPrice}` : `$${p.price}`;
            
            // استخدام \n للنزول سطر، و \xA0 (Non-breaking space) لربط كلمة Cash بالسعر ككلمة واحدة عشان متتفصلش
            if (p.cashPrice && p.cashPrice !== "0" && p.cashPrice !== "") {
                priceStr += `\nCash:\xA0$${p.cashPrice}`;
            }

            return [
                '', 
                p?.university?.en || '',
                p?.name?.en || '', 
                p?.faculty?.en || '',
                p?.degree?.en || '',
                p?.language?.en || '',
                priceStr || '',
                p?.country?.en || ''
            ];
        });

        doc.autoTable({
            head: headers,
            body: body,
            startY: 45,
            margin: { top: 45, bottom: 20 },
            rowPageBreak: 'avoid',
            styles: { fontSize: 8, valign: 'middle', font: 'helvetica' },
            headStyles: { fillColor: navyColor, textColor: goldColor, fontStyle: 'bold' },
            columnStyles: {
                0: { cellWidth: 15, halign: 'center' },
                6: { cellWidth: 'wrap' } // إضافة الـ wrap عشان تأكد عدم ضغط أو كسر الكلمات جوه عمود السعر
            },
            didDrawPage: (data) => {
                doc.setFillColor(...navyColor);
                doc.rect(0, 0, 210, 40, 'F');
                doc.setTextColor(...goldColor);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(24);
                doc.text("FUTURE JOURNEY", 14, 25);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(9);
                doc.text("YOUR PATH TO YOUR PASSION", 14, 32);
            },
            didDrawCell: (data) => {
                if (data.section === 'body' && data.column.index === 0) {
                    const uniName = data.row.raw[1];
                    if (!uniName) return;

                    const logoData = uniLogoMap.get(uniName);
                    if (logoData) {
                        const padding = 2;
                        const dim = data.cell.height - (padding * 2);
                        if (dim > 0) {
                            const x = data.cell.x + (data.cell.width / 2) - (dim / 2);
                            const y = data.cell.y + padding;
                            doc.addImage(logoData, 'PNG', x, y, dim, dim);
                        }
                    }
                }
            }
        });

        doc.save("Future_Journey_Programs.pdf");

    } catch (e) {
        console.error("PDF Generation Error", e);
        alert(`Error generating PDF:\n${e.message || e}\n\nPlease check the console for details.`);
    } finally {
        if(spinner) spinner.classList.add('hidden');
    }
}

// دالة مبسطة جداً لسحب الصور المحلية بدون بروكسي أو تعطيل للسرعة
function getBase64FromUrl(url) {
    return new Promise((resolve) => {
        if (!url || url.trim() === "") return resolve(null);

        const img = new Image();
        
        img.onload = () => {
            try {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL("image/png"));
            } catch (e) {
                resolve(null); 
            }
        };
        
        img.onerror = () => {
            resolve(null); // تجاهل أي خطأ فوراً لتسريع الطباعة
        };

        img.src = url;
    });
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.querySelector(`script[src="${url}"]`);
        if (script) {
            if (script.getAttribute('data-loaded') === 'true') {
                return resolve();
            }
            script.addEventListener('load', resolve);
            script.addEventListener('error', reject);
            return;
        }
        
        script = document.createElement('script');
        script.src = url;
        
        const timeout = setTimeout(() => reject(new Error("Script load timeout")), 10000);

        script.onload = () => {
            clearTimeout(timeout);
            script.setAttribute('data-loaded', 'true');
            resolve();
        };
        script.onerror = () => {
            clearTimeout(timeout);
            reject(new Error("Failed to load script"));
        };
        document.head.appendChild(script);
    });
}

function setupFilters() {
    const container = document.getElementById('filters-container');
    const t = TRANSLATIONS[APP_STATE.lang].filters;
    const langT = TRANSLATIONS[APP_STATE.lang];

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            ${createMultiSelectHtml(t.country, 'country')}
            ${createMultiSelectHtml(t.city, 'city')}
            ${createMultiSelectHtml(t.university, 'university')}
            ${createMultiSelectHtml(t.degree, 'degree')}
            ${createMultiSelectHtml(t.faculty, 'faculty')}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            ${createMultiSelectHtml(t.department, 'department')}
            ${createMultiSelectHtml(t.language, 'language')}
            ${createMultiSelectHtml(t.type, 'type')}
            ${createMultiSelectHtml(t.status, 'status')}
            
            <div class="flex flex-col space-y-1.5 w-full">
               <label class="text-xs font-semibold text-slate-500 uppercase tracking-wider">${t.price}</label>
               <div class="flex gap-2">
                 <input type="number" id="filter-minPrice" placeholder="Min" class="w-1/2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-fjGold transition-all">
                 <input type="number" id="filter-maxPrice" placeholder="Max" class="w-1/2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-fjGold transition-all">
               </div>
            </div>
        </div>
        <div class="flex justify-end gap-3 pt-2 border-t border-slate-100">
             <div class="flex flex-col space-y-1.5 w-48">
                <select id="sort-select" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-fjGold cursor-pointer">
                    <option value="">${langT.sortBy}</option>
                    <option value="priceAsc">${langT.sortLowHigh}</option>
                    <option value="priceDesc">${langT.sortHighLow}</option>
                </select>
             </div>
             <button onclick="clearFilters()" class="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors flex items-center gap-2">
                <i data-lucide="x" width="16"></i> ${langT.clearFilters}
             </button>
        </div>
    `;

    ['country', 'city', 'university', 'degree', 'faculty', 'department', 'language', 'type', 'status'].forEach(key => populateMultiSelect(key));

    ['minPrice', 'maxPrice'].forEach(key => {
        const el = document.getElementById(`filter-${key}`);
        if(el) {
            el.value = APP_STATE.filters[key];
            el.addEventListener('input', (e) => {
                APP_STATE.filters[key] = e.target.value;
                APP_STATE.currentPage = 1;
                renderPrograms();
            });
        }
    });

    const sortEl = document.getElementById('sort-select');
    if(sortEl) {
        sortEl.value = APP_STATE.sortBy;
        sortEl.addEventListener('change', (e) => {
            APP_STATE.sortBy = e.target.value;
            APP_STATE.currentPage = 1;
            renderPrograms();
        });
    }
}

function clearFilters() {
    Object.keys(APP_STATE.filters).forEach(key => {
        if(APP_STATE.filters[key] instanceof Set) APP_STATE.filters[key].clear();
        else APP_STATE.filters[key] = '';
    });
    APP_STATE.sortBy = '';
    APP_STATE.currentPage = 1;
    setupFilters();
    renderPrograms();
}

// --- New Multi-Select HTML Generator ---
function createMultiSelectHtml(label, key) {
    const t = TRANSLATIONS[APP_STATE.lang];
    return `
        <div class="custom-multiselect relative w-full" id="group-${key}">
            <label class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">${label}</label>
            
            <div class="w-full min-h-[42px] px-2 py-1.5 bg-white border border-slate-200 rounded-lg flex flex-wrap gap-1 items-center cursor-text focus-within:border-fjGold transition-colors" onclick="focusSearch('${key}')">
                
                <!-- Selected Tags -->
                <div id="tags-${key}" class="flex flex-wrap gap-1"></div>
                
                <!-- Input -->
                <input type="text" id="input-${key}" class="flex-1 min-w-[60px] outline-none text-sm bg-transparent h-7 text-slate-700 placeholder-slate-400" 
                    placeholder="${t.select}..." 
                    oninput="openDropdown('${key}'); filterDropdownOptions('${key}', this.value)" 
                    onfocus="openDropdown('${key}')"
                    onkeydown="handleDropdownKeydown(event, '${key}')">
            </div>

            <!-- Dropdown -->
            <div id="dropdown-${key}" class="hidden absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                <div id="options-${key}" class="p-1 space-y-0.5 custom-scrollbar"></div>
            </div>
        </div>
    `;
}

function populateMultiSelect(key) {
    const lang = APP_STATE.lang;
    const container = document.getElementById(`options-${key}`);
    const dataKey = key === 'department' ? 'name' : key;
    
    const uniqueValues = Array.from(new Set(APP_STATE.data.map(p => p[dataKey][lang]).filter(Boolean))).sort();
    
    container.innerHTML = '';
    uniqueValues.forEach(val => {
        if(APP_STATE.filters[key].has(val)) return;

        const div = document.createElement('div');
        div.className = 'dropdown-item px-3 py-2 hover:bg-fjGold/10 rounded cursor-pointer text-sm text-slate-700 transition-colors truncate';
        div.dataset.value = val;
        div.textContent = val;
        div.onclick = () => selectItem(key, val);
        container.appendChild(div);
    });
    
    renderTags(key);
}