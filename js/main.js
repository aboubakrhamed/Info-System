// 5. ملف main.js (تهيئة النظام والأحداث)
(function setFavicon() {
    document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());
    let favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = './assets/logo.png?v=' + new Date().getTime();
    document.head.appendChild(favicon);
})();

// === نظام تسجيل الدخول ===
function checkAuthAndInit() {
    const savedRole = localStorage.getItem('fj_userRole');
    if (savedRole) {
        APP_STATE.userRole = savedRole;
        updateHeaderForUser();
        fetchData();
    } else {
        injectAuthModal();
    }
}

function injectAuthModal() {
    const modal = document.createElement('div');
    modal.id = 'auth-modal';
    modal.className = 'fixed inset-0 bg-fjNavy/95 z-50 flex items-center justify-center p-4 backdrop-blur-md';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-[fadeIn_0.3s_ease-out] flex flex-col max-h-[90vh]">
            <div class="bg-fjNavy p-6 text-center border-b border-fjGold/20 shrink-0">
                <i class="fa-solid fa-graduation-cap text-fjGold text-4xl mb-2 drop-shadow-md"></i>
                <h2 class="text-2xl font-black text-fjGold uppercase tracking-tight">Future Journey</h2>
                <p class="text-fjGold/70 text-xs mt-1 uppercase tracking-widest">Portal Access</p>
            </div>
            <div class="p-6 space-y-4 overflow-y-auto custom-scrollbar">
                <div id="login-msg" class="hidden text-sm p-3 rounded-lg border text-center font-semibold"></div>
                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-1">Username / اسم المستخدم</label>
                    <input type="text" id="auth-user" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-fjGold outline-none bg-slate-50 focus:bg-white transition-colors" dir="ltr">
                </div>
                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-1">Password / كلمة المرور</label>
                    <input type="password" id="auth-pass" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-fjGold outline-none bg-slate-50 focus:bg-white transition-colors" dir="ltr" onkeydown="if(event.key === 'Enter') handleLogin()">
                </div>
                <button onclick="handleLogin()" id="btn-login" class="w-full bg-fjNavy hover:bg-slate-800 text-fjGold font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-md">
                    <i class="fa-solid fa-right-to-bracket"></i> Login (دخول)
                </button>
                
                <div class="relative flex items-center py-2">
                    <div class="flex-grow border-t border-slate-200"></div>
                    <span class="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase">OR</span>
                    <div class="flex-grow border-t border-slate-200"></div>
                </div>
                
                <button onclick="continueAsStudent()" class="w-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-bold py-3 rounded-lg transition-colors flex justify-center items-center gap-2">
                    <i class="fa-solid fa-user-graduate"></i> Continue as Student (متابعة كطالب)
                </button>

                <!-- قسم طلب حساب وكيل جديد (Sign Up) -->
                <div class="mt-4 pt-4 border-t border-slate-100 text-center">
                    <p class="text-xs text-slate-500 mb-2">Don't have an account? / ليس لديك حساب؟</p>
                    <button onclick="requestAgentAccount()" class="text-fjGold hover:text-yellow-600 font-bold text-sm transition-colors flex items-center justify-center gap-1.5 mx-auto">
                        <i class="fa-solid fa-user-plus"></i> Request Account (طلب حساب)
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

window.requestAgentAccount = function() {
    const msg = APP_STATE.lang === 'ar'
        ? "مرحباً، أود طلب إنشاء حساب وكيل جديد في منصة Future Journey."
        : "Hello, I would like to request a new account on the Future Journey platform.";
    const phone = "905526406104"; 
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
};

async function handleLogin() {
    const user = document.getElementById('auth-user').value.trim();
    const pass = document.getElementById('auth-pass').value.trim();
    const msgBox = document.getElementById('login-msg');
    const btn = document.getElementById('btn-login');

    if(!user || !pass) return;

    btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...`;
    btn.disabled = true;
    msgBox.classList.add('hidden');

    try {
        const response = await fetch(`${AUTH_API_URL}?username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`);
        const data = await response.json();

        if(data.success) {
            APP_STATE.userRole = data.type; // A, B, C, admin
            localStorage.setItem('fj_userRole', data.type);
            document.getElementById('auth-modal').remove();
            updateHeaderForUser();
            fetchData();
        } else {
            msgBox.className = 'text-sm p-3 rounded-lg border text-center font-semibold bg-red-50 text-red-600 border-red-200 block';
            msgBox.innerText = APP_STATE.lang === 'en' ? 'Invalid Username or Password' : 'اسم المستخدم أو كلمة المرور غير صحيحة';
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Login (دخول)`;
        }
    } catch (e) {
        msgBox.className = 'text-sm p-3 rounded-lg border text-center font-semibold bg-red-50 text-red-600 border-red-200 block';
        msgBox.innerText = 'Connection Error. Please try again.';
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Login (دخول)`;
    }
}

function continueAsStudent() {
    APP_STATE.userRole = 'student';
    localStorage.setItem('fj_userRole', 'student');
    document.getElementById('auth-modal').remove();
    updateHeaderForUser();
    fetchData();
}

function updateHeaderForUser() {
    const role = APP_STATE.userRole;
    const headerActions = document.querySelector('header .flex.items-center.gap-2.shrink-0') || document.querySelector('header .flex.items-center.gap-1\\.5.shrink-0');
    
    if (headerActions && !document.getElementById('logout-btn')) {
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'logout-btn';
        logoutBtn.onclick = () => { localStorage.removeItem('fj_userRole'); location.reload(); };
        
        if (role === 'student') {
            // زر خروج للطالب
            logoutBtn.className = 'ml-2 rtl:mr-2 rtl:ml-0 flex items-center justify-center px-2 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all text-xs font-bold text-slate-700 gap-1.5 shadow-sm';
            logoutBtn.innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket"></i> <span class="hidden sm:inline">Exit Student Mode</span>`;
        } else {
            // زر خروج للوكيل / الأدمن
            logoutBtn.className = 'ml-2 rtl:mr-2 rtl:ml-0 flex items-center justify-center px-2 py-1.5 rounded-lg bg-red-50 hover:bg-red-500 hover:text-white border border-red-200 hover:border-red-500 transition-all text-xs font-bold text-red-600 gap-1.5 shadow-sm';
            const displayRole = role === 'admin' ? 'Admin' : `Agent ${role}`;
            logoutBtn.innerHTML = `<i class="fa-solid fa-power-off"></i> <span class="hidden sm:inline">Logout</span>`;
        }
        
        headerActions.appendChild(logoutBtn);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    
    const isProgramsPage = !!document.getElementById('programs-list');
    const isScholarshipsPage = !!document.getElementById('scholarships-container');

    if (isProgramsPage) {
        checkAuthAndInit(); 
        
        document.getElementById('search-input').addEventListener('input', (e) => {
            APP_STATE.searchTerm = e.target.value.toLowerCase();
            APP_STATE.currentPage = 1;
            updateAllDropdowns(); 
            renderPrograms();
        });

        const downloadBtn = document.querySelector('[data-action="download"]');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', downloadPDF);
            
            const printBtn = document.createElement('button');
            printBtn.className = 'flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-fjNavy hover:text-fjGold hover:border-fjNavy transition-all shadow-sm';
            printBtn.innerHTML = `<i data-lucide="printer" width="16"></i> <span data-i18n="print">${TRANSLATIONS[APP_STATE.lang].print}</span>`;
            printBtn.onclick = executePrint;
            downloadBtn.parentNode.insertBefore(printBtn, downloadBtn);
            lucide.createIcons({root: printBtn}); 
        }
    } else if (isScholarshipsPage) {
        checkAuthAndInit(); 
    }

    // Handle global clicks (e.g. for closing dropdowns)
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-multiselect') && APP_STATE.openDropdown) {
            closeDropdown(APP_STATE.openDropdown);
        }
    });
});