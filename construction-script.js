// بيانات المشاريع المئة
const projects = [
    // مشاريع إسلامية وروحانية (1-25)
    { id: 1, name: "تطبيق الأذكار اليومية", icon: "fas fa-pray", category: "إسلامي" },
    { id: 2, name: "موسوعة الأحاديث النبوية", icon: "fas fa-book", category: "إسلامي" },
    { id: 3, name: "دليل المساجد القريبة", icon: "fas fa-mosque", category: "إسلامي" },
    { id: 4, name: "تطبيق أوقات الصلاة", icon: "fas fa-clock", category: "إسلامي" },
    { id: 5, name: "مكتبة التفسير الرقمية", icon: "fas fa-quran", category: "إسلامي" },
    { id: 6, name: "دروس تجويد القرآن", icon: "fas fa-microphone", category: "تعليمي" },
    { id: 7, name: "تطبيق الحج والعمرة", icon: "fas fa-kaaba", category: "إسلامي" },
    { id: 8, name: "موسوعة الفقه الإسلامي", icon: "fas fa-gavel", category: "إسلامي" },
    { id: 9, name: "تطبيق الزكاة والصدقات", icon: "fas fa-hand-holding-heart", category: "إسلامي" },
    { id: 10, name: "دليل الأسماء الحسنى", icon: "fas fa-star-and-crescent", category: "إسلامي" },
    { id: 11, name: "تطبيق الرقية الشرعية", icon: "fas fa-shield-alt", category: "إسلامي" },
    { id: 12, name: "موسوعة السيرة النبوية", icon: "fas fa-user-circle", category: "إسلامي" },
    { id: 13, name: "تطبيق الدعاء والتسبيح", icon: "fas fa-hands", category: "إسلامي" },
    { id: 14, name: "دليل الصيام والإفطار", icon: "fas fa-moon", category: "إسلامي" },
    { id: 15, name: "تطبيق القبلة والاتجاه", icon: "fas fa-compass", category: "إسلامي" },
    { id: 16, name: "موسوعة الأدعية المأثورة", icon: "fas fa-praying-hands", category: "إسلامي" },
    { id: 17, name: "تطبيق التقويم الهجري", icon: "fas fa-calendar-alt", category: "إسلامي" },
    { id: 18, name: "دليل الأخلاق الإسلامية", icon: "fas fa-heart", category: "إسلامي" },
    { id: 19, name: "تطبيق الوضوء والطهارة", icon: "fas fa-tint", category: "إسلامي" },
    { id: 20, name: "موسوعة الصحابة الكرام", icon: "fas fa-users", category: "إسلامي" },
    { id: 21, name: "تطبيق الاستغفار والتوبة", icon: "fas fa-dove", category: "إسلامي" },
    { id: 22, name: "دليل المناسبات الإسلامية", icon: "fas fa-calendar-check", category: "إسلامي" },
    { id: 23, name: "تطبيق الذكر والتهليل", icon: "fas fa-circle-notch", category: "إسلامي" },
    { id: 24, name: "موسوعة الإعجاز العلمي", icon: "fas fa-atom", category: "علمي" },
    { id: 25, name: "تطبيق الحكم والمواعظ", icon: "fas fa-lightbulb", category: "إسلامي" },

    // مشاريع تعليمية وثقافية (26-50)
    { id: 26, name: "منصة تعلم اللغة العربية", icon: "fas fa-language", category: "تعليمي" },
    { id: 27, name: "تطبيق تعلم الخط العربي", icon: "fas fa-pen-fancy", category: "تعليمي" },
    { id: 28, name: "موسوعة التاريخ الإسلامي", icon: "fas fa-landmark", category: "تاريخي" },
    { id: 29, name: "تطبيق تعلم النحو والصرف", icon: "fas fa-spell-check", category: "تعليمي" },
    { id: 30, name: "مكتبة الأدب العربي", icon: "fas fa-feather-alt", category: "أدبي" },
    { id: 31, name: "تطبيق تعلم البلاغة", icon: "fas fa-quote-right", category: "تعليمي" },
    { id: 32, name: "موسوعة الشعر العربي", icon: "fas fa-scroll", category: "أدبي" },
    { id: 33, name: "تطبيق تعلم العروض", icon: "fas fa-music", category: "تعليمي" },
    { id: 34, name: "دليل المكتبات العربية", icon: "fas fa-building", category: "ثقافي" },
    { id: 35, name: "تطبيق الألغاز والحكم", icon: "fas fa-puzzle-piece", category: "ترفيهي" },
    { id: 36, name: "موسوعة الأمثال العربية", icon: "fas fa-comments", category: "ثقافي" },
    { id: 37, name: "تطبيق تعلم الخطابة", icon: "fas fa-microphone-alt", category: "تعليمي" },
    { id: 38, name: "دليل المؤتمرات العلمية", icon: "fas fa-chalkboard-teacher", category: "أكاديمي" },
    { id: 39, name: "تطبيق البحث العلمي", icon: "fas fa-search", category: "أكاديمي" },
    { id: 40, name: "موسوعة العلوم الشرعية", icon: "fas fa-graduation-cap", category: "تعليمي" },
    { id: 41, name: "تطبيق تعلم المنطق", icon: "fas fa-brain", category: "فلسفي" },
    { id: 42, name: "دليل الجامعات العربية", icon: "fas fa-university", category: "تعليمي" },
    { id: 43, name: "تطبيق الترجمة الفورية", icon: "fas fa-globe", category: "تقني" },
    { id: 44, name: "موسوعة الحضارة العربية", icon: "fas fa-chess-rook", category: "تاريخي" },
    { id: 45, name: "تطبيق تعلم الفلسفة", icon: "fas fa-thinking", category: "فلسفي" },
    { id: 46, name: "دليل المتاحف العربية", icon: "fas fa-archway", category: "ثقافي" },
    { id: 47, name: "تطبيق النقد الأدبي", icon: "fas fa-edit", category: "أدبي" },
    { id: 48, name: "موسوعة الجغرافيا العربية", icon: "fas fa-map", category: "جغرافي" },
    { id: 49, name: "تطبيق تعلم الرياضيات", icon: "fas fa-calculator", category: "تعليمي" },
    { id: 50, name: "دليل المراكز الثقافية", icon: "fas fa-theater-masks", category: "ثقافي" },

    // مشاريع تقنية ورقمية (51-75)
    { id: 51, name: "منصة التجارة الإلكترونية", icon: "fas fa-shopping-cart", category: "تجاري" },
    { id: 52, name: "تطبيق إدارة المشاريع", icon: "fas fa-tasks", category: "إداري" },
    { id: 53, name: "نظام إدارة المحتوى", icon: "fas fa-cogs", category: "تقني" },
    { id: 54, name: "تطبيق التواصل الاجتماعي", icon: "fas fa-share-alt", category: "اجتماعي" },
    { id: 55, name: "منصة التعلم الإلكتروني", icon: "fas fa-laptop", category: "تعليمي" },
    { id: 56, name: "تطبيق إدارة الوقت", icon: "fas fa-stopwatch", category: "إنتاجي" },
    { id: 57, name: "نظام إدارة العملاء", icon: "fas fa-user-tie", category: "تجاري" },
    { id: 58, name: "تطبيق الذكاء الاصطناعي", icon: "fas fa-robot", category: "تقني" },
    { id: 59, name: "منصة البث المباشر", icon: "fas fa-video", category: "إعلامي" },
    { id: 60, name: "تطبيق الأمن السيبراني", icon: "fas fa-shield-virus", category: "أمني" },
    { id: 61, name: "نظام إدارة البيانات", icon: "fas fa-database", category: "تقني" },
    { id: 62, name: "تطبيق الواقع المعزز", icon: "fas fa-vr-cardboard", category: "تقني" },
    { id: 63, name: "منصة التحليل الإحصائي", icon: "fas fa-chart-line", category: "تحليلي" },
    { id: 64, name: "تطبيق إنترنت الأشياء", icon: "fas fa-wifi", category: "تقني" },
    { id: 65, name: "نظام إدارة الملفات", icon: "fas fa-folder-open", category: "تقني" },
    { id: 66, name: "تطبيق البلوك تشين", icon: "fas fa-link", category: "تقني" },
    { id: 67, name: "منصة الحوسبة السحابية", icon: "fas fa-cloud", category: "تقني" },
    { id: 68, name: "تطبيق التشفير المتقدم", icon: "fas fa-key", category: "أمني" },
    { id: 69, name: "نظام إدارة الشبكات", icon: "fas fa-network-wired", category: "تقني" },
    { id: 70, name: "تطبيق التعلم الآلي", icon: "fas fa-brain", category: "تقني" },
    { id: 71, name: "منصة التطوير السريع", icon: "fas fa-rocket", category: "تطويري" },
    { id: 72, name: "تطبيق الأتمتة الذكية", icon: "fas fa-magic", category: "تقني" },
    { id: 73, name: "نظام إدارة الخوادم", icon: "fas fa-server", category: "تقني" },
    { id: 74, name: "تطبيق التحليل الضوئي", icon: "fas fa-eye", category: "تقني" },
    { id: 75, name: "منصة التطبيقات المحمولة", icon: "fas fa-mobile-alt", category: "تقني" },

    // مشاريع اجتماعية وخيرية (76-100)
    { id: 76, name: "منصة العمل التطوعي", icon: "fas fa-hands-helping", category: "خيري" },
    { id: 77, name: "تطبيق مساعدة المحتاجين", icon: "fas fa-hand-holding-usd", category: "خيري" },
    { id: 78, name: "نظام إدارة الجمعيات", icon: "fas fa-sitemap", category: "إداري" },
    { id: 79, name: "تطبيق رعاية الأيتام", icon: "fas fa-child", category: "خيري" },
    { id: 80, name: "منصة التبرعات الذكية", icon: "fas fa-donate", category: "خيري" },
    { id: 81, name: "تطبيق كفالة الأسر", icon: "fas fa-home", category: "خيري" },
    { id: 82, name: "نظام إدارة المساعدات", icon: "fas fa-box", category: "إداري" },
    { id: 83, name: "تطبيق الإغاثة السريعة", icon: "fas fa-ambulance", category: "طوارئ" },
    { id: 84, name: "منصة التواصل المجتمعي", icon: "fas fa-users", category: "اجتماعي" },
    { id: 85, name: "تطبيق رعاية المسنين", icon: "fas fa-user-clock", category: "اجتماعي" },
    { id: 86, name: "نظام إدارة المتطوعين", icon: "fas fa-user-friends", category: "إداري" },
    { id: 87, name: "تطبيق الدعم النفسي", icon: "fas fa-heart", category: "صحي" },
    { id: 88, name: "منصة التأهيل المهني", icon: "fas fa-tools", category: "تدريبي" },
    { id: 89, name: "تطبيق الرعاية الصحية", icon: "fas fa-stethoscope", category: "صحي" },
    { id: 90, name: "نظام إدارة الأزمات", icon: "fas fa-exclamation-triangle", category: "طوارئ" },
    { id: 91, name: "تطبيق التوعية المجتمعية", icon: "fas fa-bullhorn", category: "توعوي" },
    { id: 92, name: "منصة الشراكات الخيرية", icon: "fas fa-handshake", category: "خيري" },
    { id: 93, name: "تطبيق حماية البيئة", icon: "fas fa-leaf", category: "بيئي" },
    { id: 94, name: "نظام إدارة الموارد", icon: "fas fa-warehouse", category: "إداري" },
    { id: 95, name: "تطبيق التنمية المستدامة", icon: "fas fa-seedling", category: "تنموي" },
    { id: 96, name: "منصة العدالة الاجتماعية", icon: "fas fa-balance-scale", category: "قانوني" },
    { id: 97, name: "تطبيق حقوق الإنسان", icon: "fas fa-fist-raised", category: "حقوقي" },
    { id: 98, name: "نظام إدارة الكوارث", icon: "fas fa-fire-extinguisher", category: "طوارئ" },
    { id: 99, name: "تطبيق التضامن المجتمعي", icon: "fas fa-people-carry", category: "اجتماعي" },
    { id: 100, name: "منصة بناء المستقبل", icon: "fas fa-city", category: "تنموي" }
];

// متغيرات عامة
let filteredProjects = [...projects];
let currentSearchTerm = '';

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectsPage();
});

// تهيئة صفحة المشاريع
function initializeProjectsPage() {
    // إظهار مؤشر التحميل
    showLoadingIndicator();
    
    // محاكاة تحميل البيانات
    setTimeout(() => {
        hideLoadingIndicator();
        renderProjects();
        initializeProjectSearch();
        initializeProjectEffects();
        initializePageAnimations();
    }, 1500);
}

// عرض مؤشر التحميل
function showLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (loadingIndicator) {
        loadingIndicator.style.display = 'block';
    }
    
    if (projectsGrid) {
        projectsGrid.style.display = 'none';
    }
}

// إخفاء مؤشر التحميل
function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
    
    if (projectsGrid) {
        projectsGrid.style.display = 'grid';
    }
}

// عرض المشاريع
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.setProperty('--index', index);
        projectCard.setAttribute('data-project-id', project.id);
        projectCard.setAttribute('data-project-name', project.name.toLowerCase());
        projectCard.setAttribute('data-project-category', project.category.toLowerCase());
        
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <div class="project-number">مشروع رقم ${project.id}</div>
                <h3>${project.name}</h3>
                <div class="project-status">قيد التطوير</div>
            </div>
        `;
        
        // إضافة حدث النقر
        projectCard.addEventListener('click', () => {
            navigateToProject(project.id);
        });
        
        projectsGrid.appendChild(projectCard);
    });
    
    // تحديث إحصائيات البحث
    updateSearchStats();
}

// الانتقال إلى صفحة المشروع
function navigateToProject(projectId) {
    // إضافة تأثير انتقال
    addTransitionEffect();
    
    // في الوقت الحالي، سنعرض رسالة أن المشروع قيد التطوير
    setTimeout(() => {
        alert(`المشروع رقم ${projectId} قيد التطوير وسيكون متاحاً قريباً إن شاء الله`);
    }, 300);
}

// تهيئة وظيفة البحث
function initializeProjectSearch() {
    const searchInput = document.getElementById('projectSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        currentSearchTerm = this.value.toLowerCase().trim();
        filterProjects();
        
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
            clearProjectSearch();
        }
    });
}

// تصفية المشاريع
function filterProjects() {
    if (currentSearchTerm === '') {
        filteredProjects = [...projects];
    } else {
        filteredProjects = projects.filter(project => {
            return project.name.toLowerCase().includes(currentSearchTerm) ||
                   project.category.toLowerCase().includes(currentSearchTerm) ||
                   project.id.toString().includes(currentSearchTerm);
        });
    }
    
    renderFilteredProjects();
    updateSearchStats();
    showNoResultsMessage();
}

// عرض المشاريع المفلترة
function renderFilteredProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectsGrid = document.getElementById('projectsGrid');
    
    // إخفاء جميع البطاقات أولاً
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    });
    
    // إعادة عرض المشاريع المفلترة
    setTimeout(() => {
        renderProjects();
    }, 350);
}

// تحديث إحصائيات البحث
function updateSearchStats() {
    const visibleCountElement = document.getElementById('visibleCount');
    if (visibleCountElement) {
        visibleCountElement.textContent = filteredProjects.length;
    }
}

// إظهار رسالة عدم وجود نتائج
function showNoResultsMessage() {
    const noResults = document.getElementById('noResults');
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (filteredProjects.length === 0 && currentSearchTerm !== '') {
        if (noResults) {
            noResults.style.display = 'block';
            noResults.style.opacity = '0';
            setTimeout(() => {
                noResults.style.opacity = '1';
            }, 100);
        }
        if (projectsGrid) {
            projectsGrid.style.display = 'none';
        }
    } else {
        if (noResults) {
            noResults.style.opacity = '0';
            setTimeout(() => {
                noResults.style.display = 'none';
            }, 300);
        }
        if (projectsGrid) {
            projectsGrid.style.display = 'grid';
        }
    }
}

// مسح البحث
function clearProjectSearch() {
    const searchInput = document.getElementById('projectSearch');
    
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    
    currentSearchTerm = '';
    filteredProjects = [...projects];
    renderProjects();
    showNoResultsMessage();
}

// تهيئة تأثيرات المشاريع
function initializeProjectEffects() {
    // سيتم إضافة التأثيرات عند عرض المشاريع
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            card.addEventListener('click', function() {
                // تأثير النقر
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

// تأثير تحريك الهلال مع حركة الماوس
document.addEventListener('mousemove', function(e) {
    const crescent = document.querySelector('.crescent-background');
    if (crescent) {
        const x = (e.clientX / window.innerWidth) * 6 - 3;
        const y = (e.clientY / window.innerHeight) * 6 - 3;
        
        crescent.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${x * 0.3}deg)`;
    }
});

// وظائف إضافية للتحسين

// إضافة تأثير الموجة عند النقر
function addRippleEffect(element, event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(245, 124, 0, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// إضافة CSS للتأثيرات الإضافية
const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
