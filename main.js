// --- Configuration ---
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmc2bDu59mtPmAphu6royXethK3nfaEDBiFq_oSMHBKM_84rlIYSOYUl6cv2zIPUh83jSjUtgv4pgd/pub?gid=2139009053&single=true&output=csv";
const LOGO_URL = "";

// --- University Logos Mapping ---
const UNI_LOGOS = {
    // */ --- PRIVATE UNIVERSITIES IN ISTANBUL ---
    "ALTINBAS": "https://www.altinbas.edu.tr/images/logo-tr.png",
    "AREL": "https://www.arel.edu.tr/assets/img/logo.png",
    "ATLAS": "https://www.atlas.edu.tr/images/logo.png",
    "AYDIN": "https://www.aydin.edu.tr/images/logo.png",
    "BAHCESEHIR": "https://bau.edu.tr/images/bau-logo-en.png",
    "BAU": "https://bau.edu.tr/images/bau-logo-en.png", 
    "BEYKENT": "https://www.beykent.edu.tr/assets/images/logo.png",
    "BEYKOZ": "https://www.beykoz.edu.tr/images/logo.png",
    "BEZMIALEM": "https://bezmialem.edu.tr/img/logo.png",
    "BILGI": "https://upload.wikimedia.org/wikipedia/commons/7/79/Istanbul_Bilgi_University_icon.png",
    "BILIM": "https://www.bilim.edu.tr/images/logo.png", 
    "BIRUNI": "https://www.biruni.edu.tr/assets/img/logo.png",
    "DOGUS": "https://www.dogus.edu.tr/images/default-logo.png",
    "ESENYURT": "https://www.esenyurt.edu.tr/assets/img/logo.png",
    "FATIH": "https://www.fsm.edu.tr/assets/img/logo.png", 
    "FENERBAHCE": "https://www.fbu.edu.tr/assets/img/logo.png",
    "GALATA": "https://www.galata.edu.tr/assets/img/logo.png",
    "GEDIK": "https://www.gedik.edu.tr/assets/img/logo.png",
    "GELISIM": "https://gelisim.edu.tr/assets/img/logo.png",
    "HALIC": "https://halic.edu.tr/assets/img/logo.png",
    "IBN": "https://www.ihu.edu.tr/assets/img/logo.png", 
    "ISIK": "https://www.isikun.edu.tr/assets/images/logo.png",
    "ISTINYE": "https://istinye.edu.tr/sites/default/files/logo-en.png",
    "KADIR": "https://www.khas.edu.tr/assets/images/logo.png", 
    "KENT": "https://studysehir.com/wp-content/uploads/2024/06/Istanbul-kent-University-logo.png",
    "KULTUR": "https://www.iku.edu.tr/assets/img/logo.png",
    "MALTEPE": "https://www.maltepe.edu.tr/assets/img/logo.png",
    "MEDIPOL": "https://www.medipol.edu.tr/assets/img/medipol-logo-tr.png", 
    "MEF": "https://www.mef.edu.tr/assets/img/logo.png",
    "NISANTASI": "https://www.nisantasi.edu.tr/Images/Nisantasi_Logolar/nisantasi_logo_tr.png",
    "OKAN": "https://okan.edu.tr/assets/images/logo.png",
    "OZYEGIN": "https://www.ozyegin.edu.tr/assets/img/logo.png",
    "PIRI": "https://www.pirireis.edu.tr/assets/img/logo.png", 
    "SABANCI": "https://www.sabanciuniv.edu/assets/img/logo.png",
    "SABAHATTIN": "https://www.izu.edu.tr/assets/img/logo.png", 
    "TICARET": "https://www.ticaret.edu.tr/uploads/logo/logo.png", 
    "TOPKAPI": "https://www.topkapi.edu.tr/assets/img/logo.png",
    "USKUDAR": "https://uskudar.edu.tr/assets/img/logo-tr.png",
    "YEDITEPE": "https://yeditepe.edu.tr/assets/img/logo.png",
    "YENI": "https://www.yeniyuzyil.edu.tr/assets/img/logo.png", 
    "29": "https://www.29mayis.edu.tr/assets/img/logo.png", 

    // --- PRIVATE UNIVERSITIES IN ANKARA ---
    "ANKARA MEDIPOL": "https://ankaramedipol.edu.tr/wp-content/uploads/2019/07/am-logo.png",
    "BILIM": "https://ankarabilim.edu.tr/assets/img/logo.png",
    "ATILIM": "https://www.atilim.edu.tr/assets/img/logo.png",
    "BASKENT": "https://www.baskent.edu.tr/assets/img/logo.png",
    "BILKENT": "https://w3.bilkent.edu.tr/logo/bilkent-logo.png",
    "CANKAYA": "https://www.cankaya.edu.tr/assets/img/logo.png",
    "LOKMAN": "https://www.lokmanhekim.edu.tr/assets/img/logo.png",
    "OSTIM": "https://www.ostimteknik.edu.tr/assets/img/logo.png",
    "TED": "https://www.tedu.edu.tr/sites/default/files/logo.png",
    "TOBB": "https://www.etu.edu.tr/assets/img/logo.png", 
    "THK": "https://www.thk.edu.tr/assets/img/logo.png", 
    "UFUK": "https://www.ufuk.edu.tr/assets/img/logo.png",
    "YUKSEK": "https://yiu.edu.tr/assets/img/logo.png" 
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
            item.classList.add('bg-indigo-100', 'text-indigo-900');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('bg-indigo-100', 'text-indigo-900');
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
            item.classList.remove('bg-indigo-100', 'text-indigo-900');
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
        tag.className = 'flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md text-xs font-medium group transition-colors hover:bg-slate-200';
        tag.innerHTML = `
            <span>${val}</span>
            <button onclick="event.stopPropagation(); removeTag('${key}', '${val.replace(/'/g, "\\'")}')" class="text-slate-400 hover:text-red-500 outline-none">
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
            ? `<img src="${logoUrl}" alt="${p.university[lang]}" class="w-10 h-10 object-contain p-1 rounded-full border border-slate-200 bg-white shrink-0">`
            : `<div class="w-10 h-10 rounded-full border border-slate-200 bg-white p-2 flex items-center justify-center shrink-0"><i data-lucide="building-2" class="text-slate-400"></i></div>`;

        let priceHtml = '';
        
        // Flight Training Price Logic
        if (p.trainingPrice) {
            priceHtml += `
                <div class="flex flex-col items-start gap-0.5">
                    <div class="flex items-center gap-1">
                        <span class="text-slate-900 font-bold">$${p.price}</span>
                        <span class="text-xs text-slate-500">(${t.lblDegree.replace(':','')})</span>
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-amber-600 font-bold">+ €${p.trainingPrice}</span>
                        <span class="text-xs text-amber-600/80">(Flight)</span>
                    </div>
                </div>
            `;
        } else {
            const showOriginal = p.originalPrice && p.originalPrice !== p.price && !p.originalPrice.includes('+') && p.originalPrice !== "0";
            priceHtml += `
                <div class="flex items-center gap-2">
                    ${showOriginal ? `<span class="line-through text-slate-400 text-xs">$${p.originalPrice}</span>` : ''}
                    <span class="text-red-500 font-bold">$${p.price}</span>
                </div>
            `;
        }

        // --- CASH PRICE LOGIC ---
        if (p.cashPrice && p.cashPrice !== "0" && p.cashPrice !== "") {
            priceHtml += `
                <div class="flex items-center gap-1 mt-1 text-xs">
                    <span class="font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100 flex items-center gap-1">
                        <i data-lucide="banknote" width="12"></i> ${t.lblCash} $${p.cashPrice}
                    </span>
                </div>
            `;
        }

        const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.address)}`;

        const row = document.createElement('div');
        row.className = 'grid grid-cols-12 py-6 px-6 hover:bg-[#F8FAFC] transition-colors border-b border-slate-100 group';
        row.innerHTML = `
            <div class="col-span-3">
                <div class="flex items-center">
                    <h3 class="font-bold text-slate-800 text-[15px] mb-1">${p.name[lang]}</h3>
                </div>
                <p class="text-slate-500 text-sm mb-3">${p.language[lang]}</p>
                <span class="px-3 py-1 rounded text-[10px] font-bold tracking-wide border ${statusColor}">${p.status[lang]}</span>
            </div>
            <div class="col-span-3 flex items-start gap-4">
                ${logoHtml}
                <div class="flex flex-col">
                    <span class="text-indigo-600 font-bold text-sm uppercase mb-1 cursor-pointer hover:underline">${p.university[lang]}</span>
                    <a href="#" class="text-blue-400 text-xs hover:underline truncate max-w-[200px]">${t.viewUni}</a>
                </div>
            </div>
            <div class="col-span-3 space-y-1.5">
                <div class="text-sm"><span class="font-bold text-slate-700">${t.lblFaculty}</span> <span class="text-slate-500">${p.faculty[lang]}</span></div>
                <div class="text-sm"><span class="font-bold text-slate-700">${t.lblDegree}</span> <span class="text-slate-500">${p.degree[lang]}</span></div>
                <div class="text-sm flex flex-col items-start gap-1 mt-1">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-slate-700 self-center">${t.lblPrice}</span> 
                        ${priceHtml}
                    </div>
                </div>
            </div>
            <div class="col-span-3 flex justify-between">
                <div class="space-y-1">
                    <div class="font-bold text-slate-800 text-sm">${p.country[lang]}, ${p.city[lang]}</div>
                    <div class="text-slate-600 text-sm">${p.campus[lang]}</div>
                    <a href="${mapLink}" target="_blank" class="text-slate-400 text-xs mt-1 truncate max-w-[150px] hover:text-indigo-600 hover:underline block" title="View on Google Maps">${p.address}</a>
                </div>
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
                    <input type="number" id="jump-page-input" min="1" max="${totalPages}" class="border border-slate-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-indigo-500 w-16 text-center" placeholder="#">
                    <button onclick="jumpToPage()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-sm transition-colors">${t.go}</button>
                </div>

                <div class="h-4 w-px bg-slate-300 hidden sm:block"></div>

                <div class="flex items-center gap-2">
                    <span class="text-sm text-slate-600 hidden sm:inline">${t.perPage}</span>
                    <select id="items-per-page" class="border border-slate-300 rounded px-2 py-1 text-sm bg-white outline-none focus:border-indigo-500">
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
    // Show spinner
    const spinner = document.getElementById('loading-spinner');
    if(spinner) spinner.classList.remove('hidden');

    try {
        if (!window.jspdf || !window.jspdf.jsPDF) {
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js");
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const filteredData = getFilteredData();

        // 1. Main Future Journey Logo
        const mainLogoBase64 = await getBase64FromUrl(LOGO_URL);
        if (mainLogoBase64) {
            doc.addImage(mainLogoBase64, 'PNG', 14, 10, 40, 10);
        }

        doc.setFontSize(10);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 28);

        // 2. Pre-fetch University Logos
        const uniLogoMap = new Map();
        const uniqueUniNames = [...new Set(filteredData.map(p => p.university.en))];
        
        // Fetch all unique logos in parallel
        await Promise.all(uniqueUniNames.map(async (uniName) => {
            const url = getUniversityLogo(uniName);
            if (url) {
                const base64 = await getBase64FromUrl(url);
                if (base64) uniLogoMap.set(uniName, base64);
            }
        }));

        const headers = [
            ['', 'Program', 'University', 'Faculty', 'Degree', 'Language', 'Price', 'Country'] // Added empty col for Logo
        ];

        const body = filteredData.map(p => {
            let priceStr = p.trainingPrice ? `$${p.price} + €${p.trainingPrice}` : `$${p.price}`;
            
            // Add Cash Price to PDF if available
            if (p.cashPrice && p.cashPrice !== "0" && p.cashPrice !== "") {
                priceStr += `\n(Cash: $${p.cashPrice})`;
            }

            return [
                '', // Placeholder for Logo
                p.name.en, 
                p.university.en,
                p.faculty.en,
                p.degree.en,
                p.language.en,
                priceStr,
                p.country.en
            ];
        });

        doc.autoTable({
            head: headers,
            body: body,
            startY: 32,
            styles: { fontSize: 8, valign: 'middle' },
            headStyles: { fillColor: [46, 51, 70] },
            columnStyles: {
                0: { cellWidth: 15 } // Width for logo column
            },
            didDrawCell: (data) => {
                if (data.section === 'body' && data.column.index === 0) {
                    const uniName = filteredData[data.row.index].university.en;
                    const logoData = uniLogoMap.get(uniName);
                    if (logoData) {
                        // Fit image in cell
                        const dim = data.cell.height - 2;
                        const x = data.cell.x + 1;
                        const y = data.cell.y + 1;
                        doc.addImage(logoData, 'PNG', x, y, dim, dim);
                    }
                }
            }
        });

        doc.save("Future_Journey_Programs.pdf");

    } catch (e) {
        console.error("PDF Generation Error", e);
        alert("Error generating PDF. Please try again.");
    } finally {
        if(spinner) spinner.classList.add('hidden');
    }
}

function getBase64FromUrl(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = url;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL("image/png");
            resolve(dataURL);
        };
        img.onerror = (err) => {
            // resolve null instead of reject to continue pdf generation
            console.error("Failed to load logo", url);
            resolve(null);
        };
    });
}

function loadScript(url) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
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
                 <input type="number" id="filter-minPrice" placeholder="Min" class="w-1/2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-indigo-500 transition-all">
                 <input type="number" id="filter-maxPrice" placeholder="Max" class="w-1/2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-indigo-500 transition-all">
               </div>
            </div>
        </div>
        <div class="flex justify-end gap-3 pt-2 border-t border-slate-100">
             <div class="flex flex-col space-y-1.5 w-48">
                <select id="sort-select" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-indigo-500 cursor-pointer">
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
            
            <div class="w-full min-h-[42px] px-2 py-1.5 bg-white border border-slate-200 rounded-lg flex flex-wrap gap-1 items-center cursor-text focus-within:border-indigo-500 transition-colors" onclick="focusSearch('${key}')">
                
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
        // Skip if already selected
        if(APP_STATE.filters[key].has(val)) return;

        const div = document.createElement('div');
        div.className = 'dropdown-item px-3 py-2 hover:bg-indigo-50 rounded cursor-pointer text-sm text-slate-700 transition-colors truncate';
        div.dataset.value = val;
        div.textContent = val;
        div.onclick = () => selectItem(key, val);
        container.appendChild(div);
    });
    
    renderTags(key);
}