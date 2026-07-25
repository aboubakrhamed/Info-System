// 1. ملف config.js (الإعدادات والثوابت)

// رابط شيت البرامج الأكاديمية
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQucuUM6H6vqRU5C4lL7yZ4MXsOA2x95rEFeG-DhcGwSljfPh9JObEhQQORg_nI0pWuKC7QDCxK_Vqh/pub?gid=0&single=true&output=csv";

// رابط شيت المنح الدراسية (الجديد) - تم تحويله لصيغة CSV
const SCHOLARSHIPS_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQSPKnRvsa0n4zWLfrBYUd6gq_rzM9Zp6SDJAQYrL11C3LcOXhOt-1JtFlQSuS0KzwWFz5belulghwo/pub?output=csv";

// رابط نظام تسجيل دخول الوكلاء (API)
const AUTH_API_URL = "https://script.google.com/macros/s/AKfycbySohbHAIb59BDmBkRZNfnsvFtEUUM_C1tx5K2pTV9olWwLrgt9zTFxyCAfQL3k0Ku-/exec";


const UNI_LOGOS = {
    "ALTINBAS": "assets/altinbas.png",
    "BAHCESEHIR UNIVERSITY": "assets/bau.png",
    "BAHCESEHIR CYPRUS UNIVERSITY": "assets/bau_cybrus.png",
    "ISTANBUL KENT": "assets/ist_kent.png",
    "AREL": "assets/arel.png",
    "ATLAS": "assets/atlas.png",
    "ISTANBUL AYDIN": "assets/istanbul_aydin.png",
    "CYPRUS AYDIN UNIVERSITY": "assets/cyprus_aydin.png",
    "BEYKENT": "assets/beykent.png",
    "BEYKOZ": "assets/beykoz.png",
    "BIRUNI": "assets/biruni.png",
    "FATIH SULTAN MEHMET": "assets/fatih_sultan_mehmet.png",
    "FENERBAHCE": "assets/fenerbahce.png",
    "FINAL": "assets/final.png",
    "GEDIK": "assets/gedik.png",
    "GELISIM": "assets/gelisim.png",
    "HALIC": "assets/halic.png",
    "IBN HALDUN": "assets/ibn_haldun.png",
    "ISIK": "assets/isik.png",
    "ISTINYE": "assets/istinye.png",
    "KADIR": "assets/kadir.png",
    "KULTUR": "assets/kultur.png",
    "ISTANBUL MEDIPOL": "assets/ist_medipol.png",
    "NISANTASI": "assets/nisantasi.png",
    "OKAN": "assets/okan.png",
    "OZYEGIN": "assets/ozyegin.png",
    "SABAHATTIN": "assets/sabahattin.png",
    "TICARET": "assets/ticaret.png",
    "TOPKAPI": "assets/topkapi.png",
    "USKUDAR": "assets/uskudar.png",
    "YEDITEPE": "assets/yeditepe.png",
    "YENI YUZYIL": "assets/yeni_yuzyil.png",
    "ANKARA MEDIPOL": "assets/ankara_medipol.jpg",
    "ATILIM": "assets/atilim.png",
    "Near East": "assets/Near_East_University.png",
};

const TRANSLATIONS = {
    en: {
        dir: 'ltr', font: 'Inter', appTitle: 'Future Journey', searchPlaceholder: 'Quick Search (University, Program, City...)',
        programsCount: 'Programs', download: 'Download PDF', print: 'Print', colProgram: 'Program', colUniversity: 'University',
        colInfo: 'Information', colAddress: 'Address', lblFaculty: 'Faculty:', lblDegree: 'Degree:', lblPrice: 'Price:', lblCash: 'Cash:', 
        lblYears: 'Years:', viewUni: 'View University', select: 'Select', selected: 'Selected', searchOptions: 'Search options...',
        clearFilters: 'Clear Filters', noOptions: 'No options found', sortBy: 'Sort By', sortLowHigh: 'Price: Low to High',
        sortHighLow: 'Price: High to Low', showing: 'Showing', to: 'to', of: 'of', perPage: 'Per Page', prev: 'Previous', next: 'Next',
        jumpTo: 'Go to page', go: 'Go', langBtn: 'العربية',
        filters: { country: 'Country', city: 'City', university: 'University', degree: 'Degree', faculty: 'Faculty', department: 'Department', language: 'Language', type: 'Course Type', status: 'Status', price: 'Price Range' },
        
        // Navigation and Scholarships
        navPrograms: 'Academic Programs',
        navScholarships: 'Scholarships',
        tabScholarships: 'Available Scholarships',
        totalScholarships: 'Available Seats',
        condition: 'Condition',
        reserve: 'Reserve',
        lblLang: 'Language:',
        lblSeats: 'Seats:'
    },
    ar: {
        dir: 'rtl', font: 'Cairo', appTitle: 'Future Journey', searchPlaceholder: 'بحث سريع (الجامعة، التخصص، المدينة...)',
        programsCount: 'برنامج', download: 'تحميل PDF', print: 'طباعة', colProgram: 'البرنامج', colUniversity: 'الجامعة',
        colInfo: 'تفاصيل', colAddress: 'العنوان', lblFaculty: 'الكلية:', lblDegree: 'الدرجة:', lblPrice: 'السعر:', lblCash: 'كاش:', 
        lblYears: 'سنوات:', viewUni: 'عرض الجامعة', select: 'اختر', selected: 'محدد', searchOptions: 'ابحث في القائمة...',
        clearFilters: 'إلغاء الفلاتر', noOptions: 'لا توجد خيارات', sortBy: 'ترتيب حسب', sortLowHigh: 'السعر: من الأقل للأعلى',
        sortHighLow: 'السعر: من الأعلى للأقل', showing: 'عرض', to: 'إلى', of: 'من أصل', perPage: 'في الصفحة', prev: 'السابق', next: 'التالي',
        jumpTo: 'اذهب لصفحة', go: 'اذهب', langBtn: 'English',
        filters: { country: 'الدولة', city: 'المدينة', university: 'الجامعة', degree: 'الدرجة', faculty: 'الكلية', department: 'التخصص', language: 'اللغة', type: 'نوع الكورس', status: 'الحالة', price: 'نطاق السعر' },
        
        // Navigation and Scholarships
        navPrograms: 'البرامج الأكاديمية',
        navScholarships: 'المنح',
        tabScholarships: 'المنح الدراسية المتاحة',
        totalScholarships: 'إجمالي المنح',
        condition: 'شرط المنحة',
        reserve: 'حجز',
        lblLang: 'اللغة:',
        lblSeats: 'المقاعد:'
    }
};

function getUniversityLogo(uniName) {
    if (!uniName || typeof UNI_LOGOS === 'undefined') return null;
    const upperName = uniName.toUpperCase();
    for (const [key, url] of Object.entries(UNI_LOGOS)) {
        if (upperName.includes(key)) return url;
    }
    return null; 
}