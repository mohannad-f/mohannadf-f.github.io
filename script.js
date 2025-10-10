// وظائف التنقل للصفحة الرئيسية

// الانتقال إلى صفحة الآيات
function navigateToAyat() {
    // إضافة تأثير انتقال سلس
    addTransitionEffect();
    
    setTimeout(() => {
        window.location.href = 'ayat.html';
    }, 300);
}

// الانتقال إلى صفحة قيد الإنشاء
function navigateToConstruction() {
    // إضافة تأثير انتقال سلس
    addTransitionEffect();
    
    setTimeout(() => {
        window.location.href = 'construction.html';
    }, 300);
}

// الانتقال إلى صفحة التواصل
function navigateToContact() {
    // إضافة تأثير انتقال سلس
    addTransitionEffect();
    
    setTimeout(() => {
        window.location.href = 'contact.html';
    }, 300);
}

// إضافة تأثير انتقال سلس
function addTransitionEffect() {
    const body = document.body;
    body.style.transition = 'opacity 0.3s ease-out';
    body.style.opacity = '0.7';
}

// تأثيرات إضافية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تأثير ظهور تدريجي للعناصر
    const elements = document.querySelectorAll('.option-card, .main-header, .main-footer');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200 + 300);
    });
    
    // تأثير للهلال
    const crescent = document.querySelector('.crescent-background');
    if (crescent) {
        crescent.style.opacity = '0';
        setTimeout(() => {
            crescent.style.transition = 'opacity 2s ease-in-out';
            crescent.style.opacity = '1';
        }, 1000);
    }
});

// تأثيرات تفاعلية إضافية
document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // تأثير صوتي بصري عند المرور
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    card.addEventListener('click', function() {
        // تأثير النقر
        this.style.transform = 'translateY(-10px) scale(0.98)';
        
        setTimeout(() => {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        }, 150);
    });
});

// تأثير تحريك الهلال مع حركة الماوس
document.addEventListener('mousemove', function(e) {
    const crescent = document.querySelector('.crescent-background');
    if (crescent) {
        const x = (e.clientX / window.innerWidth) * 10 - 5;
        const y = (e.clientY / window.innerHeight) * 10 - 5;
        
        crescent.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    }
});

// وظيفة للعودة إلى الصفحة الرئيسية (ستُستخدم في الصفحات الأخرى)
function goHome() {
    addTransitionEffect();
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// وظائف مساعدة للصفحات الأخرى
function initializeSearchFunction(searchInputId, itemsSelector) {
    const searchInput = document.getElementById(searchInputId);
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const items = document.querySelectorAll(itemsSelector);
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    if (item.style.opacity === '0') {
                        item.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        // إظهار رسالة عدم وجود نتائج
        const visibleItems = Array.from(items).filter(item => 
            item.style.display !== 'none'
        );
        
        let noResultsMsg = document.querySelector('.no-results-message');
        if (visibleItems.length === 0 && searchTerm !== '') {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <p style="text-align: center; color: #666; font-size: 1.2rem; margin: 40px 0;">
                        لا توجد نتائج مطابقة للبحث "${searchTerm}"
                    </p>
                    <p style="text-align: center; color: #888; font-size: 1rem;">
                        No results found for "${searchTerm}"
                    </p>
                `;
                document.querySelector(itemsSelector).parentNode.appendChild(noResultsMsg);
            }
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    });
}

// تأثير تحميل الصفحة
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});
