// بيانات الأحاديث النبوية المئة
const hadiths = [
    // أحاديث عن الإيمان والعقيدة (1-20)
    { id: 1, name: "البخاري 0001", title: "حديث جبريل في الإيمان", icon: "fas fa-star-and-crescent", category: "إيمان" },
    { id: 2, name: "مسلم 0001", title: "حديث الأعمال بالنيات", icon: "fas fa-heart", category: "إيمان" },
    { id: 3, name: "البخاري 0002", title: "حديث أركان الإسلام", icon: "fas fa-mosque", category: "إيمان" },
    { id: 4, name: "مسلم 0002", title: "حديث الإيمان بضع وسبعون شعبة", icon: "fas fa-tree", category: "إيمان" },
    { id: 5, name: "الترمذي 0001", title: "حديث حسن الخلق", icon: "fas fa-smile", category: "أخلاق" },
    { id: 6, name: "أبو داود 0001", title: "حديث طلب العلم", icon: "fas fa-book-open", category: "علم" },
    { id: 7, name: "النسائي 0001", title: "حديث الصلاة عماد الدين", icon: "fas fa-pray", category: "عبادة" },
    { id: 8, name: "ابن ماجه 0001", title: "حديث بر الوالدين", icon: "fas fa-users", category: "أخلاق" },
    { id: 9, name: "البخاري 0003", title: "حديث الجنة تحت أقدام الأمهات", icon: "fas fa-female", category: "أخلاق" },
    { id: 10, name: "مسلم 0003", title: "حديث المؤمن للمؤمن كالبنيان", icon: "fas fa-building", category: "أخوة" },
    { id: 11, name: "الترمذي 0002", title: "حديث الرحمة بالحيوان", icon: "fas fa-paw", category: "رحمة" },
    { id: 12, name: "أبو داود 0002", title: "حديث النظافة من الإيمان", icon: "fas fa-tint", category: "طهارة" },
    { id: 13, name: "البخاري 0004", title: "حديث الصدق والكذب", icon: "fas fa-balance-scale", category: "أخلاق" },
    { id: 14, name: "مسلم 0004", title: "حديث الحياء من الإيمان", icon: "fas fa-eye-slash", category: "أخلاق" },
    { id: 15, name: "الترمذي 0003", title: "حديث الابتسامة صدقة", icon: "fas fa-grin", category: "صدقة" },
    { id: 16, name: "النسائي 0002", title: "حديث إكرام الضيف", icon: "fas fa-home", category: "ضيافة" },
    { id: 17, name: "ابن ماجه 0002", title: "حديث العدل والإنصاف", icon: "fas fa-gavel", category: "عدل" },
    { id: 18, name: "البخاري 0005", title: "حديث الصبر والشكر", icon: "fas fa-hands", category: "صبر" },
    { id: 19, name: "مسلم 0005", title: "حديث التوكل على الله", icon: "fas fa-shield-alt", category: "توكل" },
    { id: 20, name: "الترمذي 0004", title: "حديث الدعاء والذكر", icon: "fas fa-praying-hands", category: "دعاء" },

    // أحاديث عن العبادات (21-40)
    { id: 21, name: "البخاري 0006", title: "حديث فضل الصلاة", icon: "fas fa-pray", category: "صلاة" },
    { id: 22, name: "مسلم 0006", title: "حديث أوقات الصلاة", icon: "fas fa-clock", category: "صلاة" },
    { id: 23, name: "أبو داود 0003", title: "حديث الوضوء والطهارة", icon: "fas fa-water", category: "طهارة" },
    { id: 24, name: "الترمذي 0005", title: "حديث قيام الليل", icon: "fas fa-moon", category: "قيام" },
    { id: 25, name: "النسائي 0003", title: "حديث صلاة الجماعة", icon: "fas fa-users", category: "جماعة" },
    { id: 26, name: "ابن ماجه 0003", title: "حديث الأذان والإقامة", icon: "fas fa-volume-up", category: "أذان" },
    { id: 27, name: "البخاري 0007", title: "حديث فضل الزكاة", icon: "fas fa-hand-holding-usd", category: "زكاة" },
    { id: 28, name: "مسلم 0007", title: "حديث صدقة الفطر", icon: "fas fa-gift", category: "صدقة" },
    { id: 29, name: "الترمذي 0006", title: "حديث فضل الصيام", icon: "fas fa-moon", category: "صيام" },
    { id: 30, name: "أبو داود 0004", title: "حديث ليلة القدر", icon: "fas fa-star", category: "قدر" },
    { id: 31, name: "النسائي 0004", title: "حديث الاعتكاف", icon: "fas fa-mosque", category: "اعتكاف" },
    { id: 32, name: "ابن ماجه 0004", title: "حديث فضل الحج", icon: "fas fa-kaaba", category: "حج" },
    { id: 33, name: "البخاري 0008", title: "حديث العمرة", icon: "fas fa-walking", category: "عمرة" },
    { id: 34, name: "مسلم 0008", title: "حديث الطواف", icon: "fas fa-circle-notch", category: "طواف" },
    { id: 35, name: "الترمذي 0007", title: "حديث السعي", icon: "fas fa-running", category: "سعي" },
    { id: 36, name: "أبو داود 0005", title: "حديث الوقوف بعرفة", icon: "fas fa-mountain", category: "عرفة" },
    { id: 37, name: "النسائي 0005", title: "حديث رمي الجمرات", icon: "fas fa-bullseye", category: "رمي" },
    { id: 38, name: "ابن ماجه 0005", title: "حديث الهدي والأضحية", icon: "fas fa-sheep", category: "هدي" },
    { id: 39, name: "البخاري 0009", title: "حديث التلبية", icon: "fas fa-microphone", category: "تلبية" },
    { id: 40, name: "مسلم 0009", title: "حديث آداب الحج", icon: "fas fa-book", category: "آداب" },

    // أحاديث عن المعاملات (41-60)
    { id: 41, name: "البخاري 0010", title: "حديث البيع والشراء", icon: "fas fa-handshake", category: "بيع" },
    { id: 42, name: "مسلم 0010", title: "حديث الربا والفوائد", icon: "fas fa-ban", category: "ربا" },
    { id: 43, name: "الترمذي 0008", title: "حديث الأمانة", icon: "fas fa-shield-check", category: "أمانة" },
    { id: 44, name: "أبو داود 0006", title: "حديث الوفاء بالعهد", icon: "fas fa-handshake", category: "وفاء" },
    { id: 45, name: "النسائي 0006", title: "حديث العدل في القضاء", icon: "fas fa-balance-scale", category: "قضاء" },
    { id: 46, name: "ابن ماجه 0006", title: "حديث الشهادة", icon: "fas fa-eye", category: "شهادة" },
    { id: 47, name: "البخاري 0011", title: "حديث الدين والقرض", icon: "fas fa-coins", category: "دين" },
    { id: 48, name: "مسلم 0011", title: "حديث الكفالة", icon: "fas fa-user-shield", category: "كفالة" },
    { id: 49, name: "الترمذي 0009", title: "حديث الشراكة", icon: "fas fa-users-cog", category: "شراكة" },
    { id: 50, name: "أبو داود 0007", title: "حديث الإجارة", icon: "fas fa-tools", category: "إجارة" },
    { id: 51, name: "النسائي 0007", title: "حديث الوقف", icon: "fas fa-mosque", category: "وقف" },
    { id: 52, name: "ابن ماجه 0007", title: "حديث الهبة والعطية", icon: "fas fa-gift", category: "هبة" },
    { id: 53, name: "البخاري 0012", title: "حديث الوصية", icon: "fas fa-scroll", category: "وصية" },
    { id: 54, name: "مسلم 0012", title: "حديث الميراث", icon: "fas fa-family", category: "ميراث" },
    { id: 55, name: "الترمذي 0010", title: "حديث العتق والولاء", icon: "fas fa-unlock", category: "عتق" },
    { id: 56, name: "أبو داود 0008", title: "حديث الجزية والخراج", icon: "fas fa-coins", category: "جزية" },
    { id: 57, name: "النسائي 0008", title: "حديث الغنيمة والفيء", icon: "fas fa-treasure-chest", category: "غنيمة" },
    { id: 58, name: "ابن ماجه 0008", title: "حديث الصلح", icon: "fas fa-peace", category: "صلح" },
    { id: 59, name: "البخاري 0013", title: "حديث التحكيم", icon: "fas fa-gavel", category: "تحكيم" },
    { id: 60, name: "مسلم 0013", title: "حديث الضمان", icon: "fas fa-shield", category: "ضمان" },

    // أحاديث عن الأسرة والمجتمع (61-80)
    { id: 61, name: "البخاري 0014", title: "حديث النكاح والزواج", icon: "fas fa-ring", category: "نكاح" },
    { id: 62, name: "مسلم 0014", title: "حديث حقوق الزوجين", icon: "fas fa-heart", category: "زواج" },
    { id: 63, name: "الترمذي 0011", title: "حديث تربية الأطفال", icon: "fas fa-child", category: "تربية" },
    { id: 64, name: "أبو داود 0009", title: "حديث بر الوالدين", icon: "fas fa-users", category: "بر" },
    { id: 65, name: "النسائي 0009", title: "حديث صلة الرحم", icon: "fas fa-link", category: "رحم" },
    { id: 66, name: "ابن ماجه 0009", title: "حديث الجار", icon: "fas fa-home", category: "جوار" },
    { id: 67, name: "البخاري 0015", title: "حديث اليتيم", icon: "fas fa-child", category: "يتيم" },
    { id: 68, name: "مسلم 0015", title: "حديث الأرملة والمسكين", icon: "fas fa-hand-holding-heart", category: "إحسان" },
    { id: 69, name: "الترمذي 0012", title: "حديث العدل بين الأولاد", icon: "fas fa-balance-scale", category: "عدل" },
    { id: 70, name: "أبو داود 0010", title: "حديث الطلاق والخلع", icon: "fas fa-unlink", category: "طلاق" },
    { id: 71, name: "النسائي 0010", title: "حديث العدة والاستبراء", icon: "fas fa-calendar", category: "عدة" },
    { id: 72, name: "ابن ماجه 0010", title: "حديث الرضاعة", icon: "fas fa-baby", category: "رضاعة" },
    { id: 73, name: "البخاري 0016", title: "حديث النفقة", icon: "fas fa-coins", category: "نفقة" },
    { id: 74, name: "مسلم 0016", title: "حديث الحضانة", icon: "fas fa-hands-helping", category: "حضانة" },
    { id: 75, name: "الترمذي 0013", title: "حديث الكسوة والسكن", icon: "fas fa-home", category: "سكن" },
    { id: 76, name: "أبو داود 0011", title: "حديث المهر والصداق", icon: "fas fa-gift", category: "مهر" },
    { id: 77, name: "النسائي 0011", title: "حديث الولي والشاهد", icon: "fas fa-user-tie", category: "ولي" },
    { id: 78, name: "ابن ماجه 0011", title: "حديث الخطبة والإعلان", icon: "fas fa-microphone", category: "خطبة" },
    { id: 79, name: "البخاري 0017", title: "حديث الوليمة والعقيقة", icon: "fas fa-utensils", category: "وليمة" },
    { id: 80, name: "مسلم 0017", title: "حديث التسمية والأذان", icon: "fas fa-volume-up", category: "تسمية" },

    // أحاديث عن الآداب والسلوك (81-100)
    { id: 81, name: "البخاري 0018", title: "حديث آداب الطعام", icon: "fas fa-utensils", category: "طعام" },
    { id: 82, name: "مسلم 0018", title: "حديث آداب الشراب", icon: "fas fa-glass-water", category: "شراب" },
    { id: 83, name: "الترمذي 0014", title: "حديث آداب النوم", icon: "fas fa-bed", category: "نوم" },
    { id: 84, name: "أبو داود 0012", title: "حديث آداب الاستيقاظ", icon: "fas fa-sun", category: "استيقاظ" },
    { id: 85, name: "النسائي 0012", title: "حديث آداب دخول البيت", icon: "fas fa-door-open", category: "دخول" },
    { id: 86, name: "ابن ماجه 0012", title: "حديث آداب الخروج", icon: "fas fa-walking", category: "خروج" },
    { id: 87, name: "البخاري 0019", title: "حديث آداب المجلس", icon: "fas fa-chair", category: "مجلس" },
    { id: 88, name: "مسلم 0019", title: "حديث آداب الكلام", icon: "fas fa-comments", category: "كلام" },
    { id: 89, name: "الترمذي 0015", title: "حديث آداب الاستماع", icon: "fas fa-ear", category: "استماع" },
    { id: 90, name: "أبو داود 0013", title: "حديث آداب السفر", icon: "fas fa-suitcase", category: "سفر" },
    { id: 91, name: "النسائي 0013", title: "حديث آداب الضيافة", icon: "fas fa-home", category: "ضيافة" },
    { id: 92, name: "ابن ماجه 0013", title: "حديث آداب العطاس", icon: "fas fa-head-side-mask", category: "عطاس" },
    { id: 93, name: "البخاري 0020", title: "حديث آداب التثاؤب", icon: "fas fa-tired", category: "تثاؤب" },
    { id: 94, name: "مسلم 0020", title: "حديث آداب اللباس", icon: "fas fa-tshirt", category: "لباس" },
    { id: 95, name: "الترمذي 0016", title: "حديث آداب الزينة", icon: "fas fa-gem", category: "زينة" },
    { id: 96, name: "أبو داود 0014", title: "حديث آداب الطهارة", icon: "fas fa-shower", category: "طهارة" },
    { id: 97, name: "النسائي 0014", title: "حديث آداب قضاء الحاجة", icon: "fas fa-restroom", category: "حاجة" },
    { id: 98, name: "ابن ماجه 0014", title: "حديث آداب السلام", icon: "fas fa-handshake", category: "سلام" },
    { id: 99, name: "البخاري 0021", title: "حديث آداب الدعاء", icon: "fas fa-praying-hands", category: "دعاء" },
    { id: 100, name: "مسلم 0021", title: "حديث آداب الذكر", icon: "fas fa-circle-notch", category: "ذكر" }
];

// متغيرات عامة
let filteredHadiths = [...hadiths];
let currentSearchTerm = '';

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeHadithsPage();
});

// تهيئة صفحة الأحاديث
function initializeHadithsPage() {
    // إظهار مؤشر التحميل
    showLoadingIndicator();
    
    // محاكاة تحميل البيانات
    setTimeout(() => {
        hideLoadingIndicator();
        renderHadiths();
        initializeHadithSearch();
        initializeHadithEffects();
        initializePageAnimations();
    }, 1500);
}

// عرض مؤشر التحميل
function showLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const hadithsGrid = document.getElementById('hadithsGrid');
    
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }
    
    if (hadithsGrid) {
        hadithsGrid.style.display = 'none';
    }
}

// إخفاء مؤشر التحميل
function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const hadithsGrid = document.getElementById('hadithsGrid');
    
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
    
    if (hadithsGrid) {
        hadithsGrid.style.display = 'grid';
    }
}

// عرض الأحاديث
function renderHadiths() {
    const hadithsGrid = document.getElementById('hadithsGrid');
    if (!hadithsGrid) return;
    
    hadithsGrid.innerHTML = '';
    
    filteredHadiths.forEach((hadith, index) => {
        const hadithCard = document.createElement('div');
        hadithCard.className = 'hadith-card';
        hadithCard.style.setProperty('--index', index);
        hadithCard.setAttribute('data-hadith-id', hadith.id);
        hadithCard.setAttribute('data-hadith-name', hadith.name.toLowerCase());
        hadithCard.setAttribute('data-hadith-title', hadith.title.toLowerCase());
        hadithCard.setAttribute('data-hadith-category', hadith.category.toLowerCase());
        
        hadithCard.innerHTML = `
            <div class="hadith-icon">
                <i class="${hadith.icon}"></i>
            </div>
            <div class="hadith-content">
                <div class="hadith-name">${hadith.name}</div>
                <h3 class="hadith-title">${hadith.title}</h3>
                <div class="hadith-status">متاح للقراءة</div>
            </div>
        `;
        
        // إضافة حدث النقر
        hadithCard.addEventListener('click', () => {
            navigateToHadith(hadith.id);
        });
        
        hadithsGrid.appendChild(hadithCard);
    });
    
    // تحديث إحصائيات البحث
    updateSearchStats();
}

// الانتقال إلى صفحة الحديث
function navigateToHadith(hadithId) {
    // إضافة تأثير انتقال
    addTransitionEffect();
    
    // في الوقت الحالي، سنعرض رسالة أن الحديث سيتم إضافته قريباً
    setTimeout(() => {
        const hadith = hadiths.find(h => h.id === hadithId);
        if (hadith) {
            // إنشاء صفحة الحديث ديناميكياً
            showHadithModal(hadith);
        }
    }, 300);
}

// عرض نافذة الحديث
function showHadithModal(hadith) {
    // إنشاء النافذة المنبثقة
    const modal = document.createElement('div');
    modal.className = 'hadith-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${hadith.name}</h2>
                <button class="close-modal" onclick="closeHadithModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <h3 class="hadith-title-modal">${hadith.title}</h3>
                <div class="hadith-text-placeholder">
                    <p><strong>الحديث:</strong> قال رسول الله صلى الله عليه وسلم: "سيتم إضافة نص الحديث هنا..."</p>
                    <p><strong>شرح الحديث:</strong> عزيزي القارئ، رسول الله محمد صلى الله عليه وسلم يقول هنا... سيتم إضافة الشرح هنا</p>
                    <p><strong>Dear reader,</strong> Prophet Muhammad (peace be upon him) said here... The explanation will be added here</p>
                </div>
                <div class="hadith-category">
                    <span>التصنيف: ${hadith.category}</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إضافة تأثير الظهور
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// إغلاق نافذة الحديث
function closeHadithModal() {
    const modal = document.querySelector('.hadith-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// تهيئة وظيفة البحث
function initializeHadithSearch() {
    const searchInput = document.getElementById('projectSearch'); // نفس الـ ID للتوافق
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        currentSearchTerm = this.value.toLowerCase().trim();
        filterHadiths();
        
        // إضافة تأثير الكتابة
        const container = this.parentElement;
        container.classList.add('typing');
        
        clearTimeout(this.typingTimeout);
        this.typingTimeout = setTimeout(() => {
            container.classList.remove('typing');
        }, 500);
    });
    
    // تنظيف البحث عند الضغط على Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearHadithSearch();
        }
    });
}

// تصفية الأحاديث
function filterHadiths() {
    if (currentSearchTerm === '') {
        filteredHadiths = [...hadiths];
    } else {
        filteredHadiths = hadiths.filter(hadith => {
            return hadith.name.toLowerCase().includes(currentSearchTerm) ||
                   hadith.title.toLowerCase().includes(currentSearchTerm) ||
                   hadith.category.toLowerCase().includes(currentSearchTerm) ||
                   hadith.id.toString().includes(currentSearchTerm);
        });
    }
    
    renderFilteredHadiths();
    updateSearchStats();
    showNoResultsMessage();
}

// عرض الأحاديث المفلترة
function renderFilteredHadiths() {
    const hadithCards = document.querySelectorAll('.hadith-card');
    
    // إخفاء جميع البطاقات أولاً
    hadithCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    });
    
    // إعادة عرض الأحاديث المفلترة
    setTimeout(() => {
        renderHadiths();
    }, 350);
}

// تحديث إحصائيات البحث
function updateSearchStats() {
    const visibleCountElement = document.getElementById('visibleCount');
    if (visibleCountElement) {
        visibleCountElement.textContent = filteredHadiths.length;
    }
}

// إظهار رسالة عدم وجود نتائج
function showNoResultsMessage() {
    const noResults = document.getElementById('noResults');
    const hadithsGrid = document.getElementById('hadithsGrid');
    
    if (filteredHadiths.length === 0 && currentSearchTerm !== '') {
        if (noResults) {
            noResults.style.display = 'block';
            noResults.style.opacity = '0';
            setTimeout(() => {
                noResults.style.opacity = '1';
            }, 100);
        }
        if (hadithsGrid) {
            hadithsGrid.style.display = 'none';
        }
    } else {
        if (noResults) {
            noResults.style.opacity = '0';
            setTimeout(() => {
                noResults.style.display = 'none';
            }, 300);
        }
        if (hadithsGrid) {
            hadithsGrid.style.display = 'grid';
        }
    }
}

// مسح البحث
function clearHadithSearch() {
    const searchInput = document.getElementById('projectSearch');
    
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    
    currentSearchTerm = '';
    filteredHadiths = [...hadiths];
    renderHadiths();
    showNoResultsMessage();
}

// نفس الوظيفة للتوافق مع الكود القديم
function clearProjectSearch() {
    clearHadithSearch();
}

// تهيئة تأثيرات الأحاديث
function initializeHadithEffects() {
    setTimeout(() => {
        const hadithCards = document.querySelectorAll('.hadith-card');
        
        hadithCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-4px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                }, 150);
            });
        });
    }, 100);
}

// تهيئة الرسوم المتحركة للصفحة
function initializePageAnimations() {
    const elements = [
        '.page-header',
        '.search-section',
        '.page-footer'
    ];
    
    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200 + 100);
        }
    });
}

// إضافة تأثير الانتقال
function addTransitionEffect() {
    const body = document.body;
    body.style.transition = 'opacity 0.3s ease';
    body.style.opacity = '0.8';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 300);
}

// إضافة CSS للنافذة المنبثقة
const modalStyles = `
    .hadith-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .hadith-modal.show {
        opacity: 1;
    }
    
    .modal-content {
        background: white;
        border-radius: 20px;
        max-width: 600px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
        border-bottom: 1px solid #eee;
        background: linear-gradient(135deg, #2d5016 0%, #4a7c59 100%);
        color: white;
        border-radius: 20px 20px 0 0;
    }
    
    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
    }
    
    .close-modal {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .close-modal:hover {
        background: rgba(255,255,255,0.2);
    }
    
    .modal-body {
        padding: 30px;
        text-align: right;
        direction: rtl;
    }
    
    .hadith-title-modal {
        color: #2d5016;
        font-size: 1.4rem;
        margin-bottom: 20px;
        text-align: center;
    }
    
    .hadith-text-placeholder p {
        margin-bottom: 15px;
        line-height: 1.8;
        font-size: 1.1rem;
    }
    
    .hadith-text-placeholder strong {
        color: #4a7c59;
    }
    
    .hadith-category {
        text-align: center;
        margin-top: 20px;
        padding: 10px;
        background: #f8f9fa;
        border-radius: 10px;
        color: #666;
    }
    
    .hadith-card {
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .hadiths-section {
        width: 100%;
        max-width: 1200px;
        margin-bottom: 50px;
    }
    
    .hadiths-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        width: 100%;
    }
    
    .hadith-card {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 15px;
        padding: 25px 20px;
        text-align: center;
        cursor: pointer;
        transition: all 0.4s ease;
        box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        border: 2px solid transparent;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
    }
    
    .hadith-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 12px 30px rgba(0,0,0,0.2);
        border-color: #4a7c59;
    }
    
    .hadith-icon {
        font-size: 2.5rem;
        color: #4a7c59;
        margin-bottom: 15px;
    }
    
    .hadith-name {
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 8px;
        font-weight: 500;
    }
    
    .hadith-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #2d5016;
        margin-bottom: 10px;
        line-height: 1.4;
    }
    
    .hadith-status {
        display: inline-block;
        background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
        color: #2e7d32;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 500;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
