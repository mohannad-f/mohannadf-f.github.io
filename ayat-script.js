// وظائف خاصة بصفحة الآيات

// الانتقال إلى صفحة شعور معين
function navigateToFeeling(feelingType) {
    // إضافة تأثير انتقال
    addTransitionEffect();
    
    setTimeout(() => {
        window.location.href = `verses.html?feeling=${feelingType}`;
    }, 300);
}

// وظيفة البحث في المشاعر
function initializeFeelingSearch() {
    const searchInput = document.getElementById('feelingSearch');
    const feelingCards = document.querySelectorAll('.feeling-card');
    const noResults = document.getElementById('noResults');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        let visibleCount = 0;
        
        feelingCards.forEach((card, index) => {
            const feelingName = card.getAttribute('data-feeling').toLowerCase();
            const arabicText = card.querySelector('.feeling-name-ar').textContent.toLowerCase();
            const englishText = card.querySelector('.feeling-name-en').textContent.toLowerCase();
            const description = card.querySelector('.feeling-description').textContent.toLowerCase();
            
            const isMatch = feelingName.includes(searchTerm) || 
                           arabicText.includes(searchTerm) || 
                           englishText.includes(searchTerm) || 
                           description.includes(searchTerm);
            
            if (isMatch || searchTerm === '') {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
                
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px)';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // إظهار/إخفاء رسالة عدم وجود نتائج
        if (visibleCount === 0 && searchTerm !== '') {
            noResults.style.display = 'block';
            noResults.style.opacity = '0';
            setTimeout(() => {
                noResults.style.opacity = '1';
            }, 100);
        } else {
            noResults.style.opacity = '0';
            setTimeout(() => {
                noResults.style.display = 'none';
            }, 300);
        }
    });
    
    // تنظيف البحث عند الضغط على Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
}

// مسح البحث
function clearSearch() {
    const searchInput = document.getElementById('feelingSearch');
    const feelingCards = document.querySelectorAll('.feeling-card');
    const noResults = document.getElementById('noResults');
    
    if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
    }
    
    // إظهار جميع البطاقات
    feelingCards.forEach((card, index) => {
        card.style.display = 'block';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
    
    // إخفاء رسالة عدم وجود نتائج
    noResults.style.display = 'none';
}

// تأثيرات تفاعلية للبطاقات
function initializeFeelingCardEffects() {
    const feelingCards = document.querySelectorAll('.feeling-card');
    
    feelingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('click', function() {
            // تأثير النقر
            this.style.transform = 'translateY(-5px) scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });
}

// تأثير تحريك الهلال مع حركة الماوس (مخصص لهذه الصفحة)
function initializeCrescentEffect() {
    document.addEventListener('mousemove', function(e) {
        const crescent = document.querySelector('.crescent-background');
        if (crescent) {
            const x = (e.clientX / window.innerWidth) * 8 - 4;
            const y = (e.clientY / window.innerHeight) * 8 - 4;
            
            crescent.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${x * 0.5}deg)`;
        }
    });
}

// تأثير الظهور التدريجي للعناصر
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

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة وظيفة البحث
    initializeFeelingSearch();
    
    // تهيئة تأثيرات البطاقات
    initializeFeelingCardEffects();
    
    // تهيئة تأثير الهلال
    initializeCrescentEffect();
    
    // تهيئة الرسوم المتحركة
    initializePageAnimations();
    
    // تركيز على حقل البحث (اختياري)
    const searchInput = document.getElementById('feelingSearch');
    if (searchInput) {
        setTimeout(() => {
            searchInput.focus();
        }, 1000);
    }
});

// وظائف إضافية للتحسين

// تأثير الكتابة في شريط البحث
function addTypingEffect() {
    const searchInput = document.getElementById('feelingSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const container = this.parentElement;
        container.classList.add('typing');
        
        clearTimeout(this.typingTimeout);
        this.typingTimeout = setTimeout(() => {
            container.classList.remove('typing');
        }, 500);
    });
}

// إضافة أصوات تفاعلية (بدون صوت فعلي، فقط تأثيرات بصرية)
function addInteractionFeedback() {
    const feelingCards = document.querySelectorAll('.feeling-card');
    
    feelingCards.forEach(card => {
        card.addEventListener('click', function() {
            // إضافة تأثير موجة عند النقر
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// إضافة CSS للتأثيرات الإضافية
const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .search-container.typing {
        transform: scale(1.02);
        box-shadow: 0 8px 25px rgba(46, 125, 50, 0.4);
    }
    
    .feeling-card {
        position: relative;
        overflow: hidden;
    }
`;

// إضافة الأنماط الإضافية
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// تهيئة التأثيرات الإضافية
document.addEventListener('DOMContentLoaded', function() {
    addTypingEffect();
    addInteractionFeedback();
});
