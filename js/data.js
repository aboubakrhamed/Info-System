// 2. ملف data.js (الـ State ومعالجة البيانات)

let APP_STATE = {
    lang: 'en', // اللغة الافتراضية إنجليزي
    userRole: null, // سيتم تخزين دور المستخدم هنا
    data: [], // بيانات البرامج الأكاديمية
    scholarshipsData: [], // بيانات المنح سيتم تخزينها هنا بعد جلبها من جوجل شيت
    filters: {
        country: new Set(), city: new Set(), university: new Set(), degree: new Set(),
        faculty: new Set(), department: new Set(), language: new Set(), type: new Set(),
        status: new Set(), minPrice: '', maxPrice: ''
    },
    sortBy: '', searchTerm: '', currentPage: 1, itemsPerPage: 10, openDropdown: null, highlightedIndex: -1 
};

// دالة لجلب البيانات بناءً على الصفحة المفتوحة
async function fetchData() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.classList.remove('hidden');
    
    const isProgramsPage = !!document.getElementById('programs-list');
    const urlToFetch = isProgramsPage ? GOOGLE_SHEET_URL : SCHOLARSHIPS_SHEET_URL;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const text = await response.text();
            if (isProgramsPage) {
                processData(text); 
            } else {
                processScholarshipsData(text);
            }
            return;
        }
        throw new Error("Direct fetch failed");
    } catch (error) {
        console.warn("Direct fetch blocked, trying Proxies...");
        try {
            const proxyUrl1 = `https://api.allorigins.win/raw?url=${encodeURIComponent(urlToFetch)}`;
            const response1 = await fetch(proxyUrl1);
            if (response1.ok) {
                const text = await response1.text();
                if (isProgramsPage) {
                    processData(text); 
                } else {
                    processScholarshipsData(text);
                }
                return;
            }
        } catch (err) {
            console.error("All data fetch attempts failed.", err);
            if (!isProgramsPage) {
                const container = document.getElementById('scholarships-container');
                if(container) container.innerHTML = `<div class="col-span-full p-10 text-center text-red-500">Failed to load scholarships data. Please check the Google Sheet link or try again later.</div>`;
            }
        }
    } finally {
        if (spinner) spinner.classList.add('hidden');
    }
}

// ==========================================
// معالجة بيانات البرامج الأكاديمية 
// ==========================================
function processData(text) {
    APP_STATE.data = parseCSV(text);
    applyLanguage(); 
    
    if (document.getElementById('filters-container')) {
        setupFilters();
    }
    if (document.getElementById('programs-list')) {
        renderPrograms();
    }
}

function parseCSV(text) {
    const lines = text.split('\n');
    if (lines.length < 2) return [];

    const splitLine = (row) => {
        const result = [];
        let current = ''; let inQuote = false;
        for (let i = 0; i < row.length; i++) {
            const char = row[i];
            if (char === '"') { inQuote = !inQuote; continue; }
            if (char === ',' && !inQuote) { result.push(current.trim()); current = ''; } 
            else { current += char; }
        }
        result.push(current.trim()); return result;
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
        address: getIdx('campus address'), price: getExactIdx('price'), 
        discountPrice: getIdx('discountprice'), cashPrice: getIdx('cashprice'), years: getIdx('years')
    };

    return lines.slice(1).map((line, index) => {
        const cols = splitLine(line); 
        if (cols.length < 5) return null;

        const getRawVal = (i) => (i > -1 && cols[i]) ? cols[i].replace(/\r/g, '').replace(/\s+/g, ' ').trim() : '';
        
        const getCleanVal = (i, keepParensUpper = false) => {
            const str = getRawVal(i);
            if (!str) return '';
            let cleanStr = str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
            if (keepParensUpper) {
                cleanStr = cleanStr.replace(/\(([^)]+)\)/g, (match) => match.toUpperCase());
            }
            return cleanStr;
        };

        const rawOriginal = getRawVal(idx.price) || "0";
        const rawDiscount = getRawVal(idx.discountPrice);
        const rawCash = getRawVal(idx.cashPrice);

        let effectivePriceStr = (rawDiscount && rawDiscount !== "0") ? rawDiscount : rawOriginal;
        let tuitionPrice = effectivePriceStr; let trainingPrice = null;

        if (effectivePriceStr.includes('+')) {
            const parts = effectivePriceStr.split('+');
            tuitionPrice = parts[0].trim(); trainingPrice = parts[1].trim();
        }

        return {
            id: index, 
            name: { en: getCleanVal(idx.nameEn, true) || "Unnamed", ar: getRawVal(idx.nameAr) || getCleanVal(idx.nameEn, true) },
            university: { en: getCleanVal(idx.uniEn, true), ar: getRawVal(idx.uniAr) || getCleanVal(idx.uniEn, true) }, 
            faculty: { en: getCleanVal(idx.facEn), ar: getRawVal(idx.facAr) || getCleanVal(idx.facEn) },
            degree: { en: getCleanVal(idx.degEn), ar: getRawVal(idx.degAr) || getCleanVal(idx.degEn) }, 
            language: { en: getCleanVal(idx.langEn), ar: getRawVal(idx.langAr) || getCleanVal(idx.langEn) },
            type: { en: getCleanVal(idx.typeEn), ar: getRawVal(idx.typeAr) || getCleanVal(idx.typeEn) }, 
            status: { en: getCleanVal(idx.statEn), ar: getRawVal(idx.statAr) || "متاح" },
            country: { en: getCleanVal(idx.countryEn), ar: getRawVal(idx.countryAr) || getCleanVal(idx.countryEn) }, 
            city: { en: getCleanVal(idx.cityEn), ar: getRawVal(idx.cityAr) || getCleanVal(idx.cityEn) },
            campus: { en: getCleanVal(idx.campusEn), ar: getRawVal(idx.campusAr) || getCleanVal(idx.campusEn) }, 
            address: getRawVal(idx.address),
            price: tuitionPrice, trainingPrice: trainingPrice, originalPrice: rawOriginal, cashPrice: rawCash, years: getRawVal(idx.years)
        };
    }).filter(Boolean);
}

function getFilteredData(excludeKey = null) {
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
            if (key === 'minPrice' || key === 'maxPrice' || key === excludeKey) return true;
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

    if (!excludeKey) {
        if (APP_STATE.sortBy === 'priceAsc') filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        else if (APP_STATE.sortBy === 'priceDesc') filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    return filtered;
}

// ==========================================
// معالجة بيانات المنح الدراسية والفلترة
// ==========================================
function processScholarshipsData(text) {
    const rawLines = text.split('\n');
    if (rawLines.length < 2) return;

    const splitLine = (row) => {
        const result = [];
        let current = ''; let inQuote = false;
        for (let i = 0; i < row.length; i++) {
            const char = row[i];
            if (char === '"') { inQuote = !inQuote; continue; }
            if (char === ',' && !inQuote) { result.push(current.trim()); current = ''; } 
            else { current += char; }
        }
        result.push(current.trim()); return result;
    };

    const headerLine = rawLines[0].toLowerCase().replace(/\r/g, '');
    const headers = splitLine(headerLine);
    
    const getExactIdx = (name) => headers.findIndex(h => h === name.toLowerCase());

    const idx = {
        uniEn: getExactIdx('university-en'), uniAr: getExactIdx('university-ar'),
        depEn: getExactIdx('department-en'), depAr: getExactIdx('department-ar'),
        degEn: getExactIdx('degree-en'), degAr: getExactIdx('degree-ar'),
        langEn: getExactIdx('language-en'), langAr: getExactIdx('language-ar'),
        price: getExactIdx('price'), currency: getExactIdx('currency'),
        seats: getExactIdx('seats'), 
        condEn: getExactIdx('condition-en'), condAr: getExactIdx('condition-ar'),
        countryEn: getExactIdx('country-en'), countryAr: getExactIdx('country-ar'),
        cityEn: getExactIdx('city-en'), cityAr: getExactIdx('city-ar')
    };

    const parsedRows = rawLines.slice(1).map(line => {
        const cols = splitLine(line);
        if (cols.length < 5) return null;
        
        const getRawVal = (i) => (i > -1 && cols[i]) ? cols[i].replace(/\r/g, '').trim() : '';

        const uEn = getRawVal(idx.uniEn);
        if(!uEn) return null;

        return {
            uniEn: uEn,
            uniAr: getRawVal(idx.uniAr) || uEn,
            depEn: getRawVal(idx.depEn),
            depAr: getRawVal(idx.depAr) || getRawVal(idx.depEn),
            degEn: getRawVal(idx.degEn),
            degAr: getRawVal(idx.degAr) || getRawVal(idx.degEn),
            langEn: getRawVal(idx.langEn),
            langAr: getRawVal(idx.langAr) || getRawVal(idx.langEn),
            price: getRawVal(idx.price),
            currency: getRawVal(idx.currency) || "$",
            seats: parseInt(getRawVal(idx.seats)) || 0,
            condEn: getRawVal(idx.condEn),
            condAr: getRawVal(idx.condAr) || getRawVal(idx.condEn),
            countryEn: getRawVal(idx.countryEn),
            countryAr: getRawVal(idx.countryAr) || getRawVal(idx.countryEn),
            cityEn: getRawVal(idx.cityEn),
            cityAr: getRawVal(idx.cityAr) || getRawVal(idx.cityEn)
        };
    }).filter(Boolean);

    const groupedData = {};

    parsedRows.forEach(row => {
        const uniKey = row.uniEn.toUpperCase();
        
        if (!groupedData[uniKey]) {
            groupedData[uniKey] = {
                id: `uni_${Object.keys(groupedData).length}`,
                university: { en: row.uniEn, ar: row.uniAr },
                condition: { en: row.condEn, ar: row.condAr },
                country: { en: row.countryEn, ar: row.countryAr },
                city: { en: row.cityEn, ar: row.cityAr },
                programs: []
            };
        }

        groupedData[uniKey].programs.push({
            name: { en: row.depEn, ar: row.depAr },
            degree: { en: row.degEn, ar: row.degAr },
            language: { en: row.langEn, ar: row.langAr },
            price: row.price,
            currency: row.currency,
            seats: row.seats
        });
    });

    APP_STATE.scholarshipsData = Object.values(groupedData);

    applyLanguage();
    if (document.getElementById('filters-container')) {
        setupFilters();
    }
    if (document.getElementById('scholarships-container')) {
        renderScholarships();
    }
}

// === دالة استخراج بيانات المنح مفلترة ===
function getFilteredScholarshipsData(excludeKey = null) {
    const lang = APP_STATE.lang;
    const term = APP_STATE.searchTerm || '';
    
    let filtered = [];
    
    APP_STATE.scholarshipsData.forEach(uni => {
        const uniNameMatches = (uni.university[lang] || '').toLowerCase().includes(term);
        const countryMatches = uni.country && (uni.country[lang] || '').toLowerCase().includes(term);
        const cityMatches = uni.city && (uni.city[lang] || '').toLowerCase().includes(term);
        const uniLevelMatchesSearch = uniNameMatches || countryMatches || cityMatches;

        let validPrograms = uni.programs.filter(p => {
            // 1. فحص البحث السريع
            const progNameMatches = (p.name[lang] || '').toLowerCase().includes(term);
            if (!uniLevelMatchesSearch && !progNameMatches && term !== '') return false;

            // 2. فحص السعر (يتم تطبيق الفلتر على السعر بعد زيادة الوكيل/الطالب)
            // نستخدم calculateDynamicPrice الموجودة في ui.js
            const dynPriceStr = typeof calculateDynamicPrice === 'function' ? calculateDynamicPrice(p.price, uni.university.en, p.name.en, p.name.ar) : p.price;
            const price = parseFloat(dynPriceStr.toString().replace(/[^0-9.]/g, ''));
            
            const minP = APP_STATE.filters.minPrice ? parseFloat(APP_STATE.filters.minPrice) : 0; 
            const maxP = APP_STATE.filters.maxPrice ? parseFloat(APP_STATE.filters.maxPrice) : Infinity;
            if (!isNaN(price) && (price < minP || price > maxP)) return false;

            // 3. فحص الفلاتر (الدولة، المدينة، التخصص، الدرجة...)
            const matchesFilters = Object.keys(APP_STATE.filters).every(key => {
                if (key === 'minPrice' || key === 'maxPrice' || key === excludeKey) return true;
                const set = APP_STATE.filters[key]; 
                if (set.size === 0) return true;
                
                let dataVal; 
                if (key === 'department') dataVal = p.name[lang]; 
                else if (key === 'degree') dataVal = p.degree[lang]; 
                else if (key === 'language') dataVal = p.language[lang]; 
                else if (key === 'country') dataVal = uni.country ? uni.country[lang] : undefined; 
                else if (key === 'city') dataVal = uni.city ? uni.city[lang] : undefined; 
                else if (key === 'university') dataVal = uni.university[lang]; 
                else return true; // تجاهل الفلاتر غير المتعلقة بالمنح

                return set.has(dataVal);
            });

            return matchesFilters;
        });

        if (validPrograms.length > 0) {
            filtered.push({
                ...uni,
                programs: validPrograms
            });
        }
    });
    
    return filtered;
}