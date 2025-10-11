// وظائف صفحة الأحاديث النبوية المبسطة

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    initializeSimpleHadithsPage();
});

// تهيئة صفحة الأحاديث المبسطة
function initializeSimpleHadithsPage() {
    addPageAnimations();
    addInteractiveEffects();
    setupHoverEffects();
}

// إضافة الرسوم المتحركة للصفحة
function addPageAnimations() {
    const elements = [
        '.page-header',
        '.section-intro',
        '.hadiths-grid',
        '.additional-info'
    ];
    
    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease-out';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200 + 100);
        }
    });
}

// إضافة تأثيرات تفاعلية
function addInteractiveEffects() {
    // تأثير hover لبطاقة الفئة
    const categoryCard = document.querySelector('.hadith-category-card');
    if (categoryCard) {
        categoryCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        categoryCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // تأثير نبضة لشارة الحالة
    const statusBadge = document.querySelector('.status-badge');
    if (statusBadge) {
        setInterval(() => {
            statusBadge.style.transform = 'scale(1.1)';
            setTimeout(() => {
                statusBadge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
}

// إعداد تأثيرات الماوس
function setupHoverEffects() {
    // تأثير hover لعناصر القائمة
    const listItems = document.querySelectorAll('.info-content li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.color = '#4a7c59';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '#555';
        });
    });
}

// العودة للصفحة الرئيسية
function goBackToHome() {
    // إضافة تأثير انتقال سلس
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// الانتقال لصفحة "يتم التعديل"
function goToUnderConstruction() {
    // إضافة تأثير انتقال سلس
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'under-construction.html';
    }, 300);
}

// إضافة تأثيرات الماوس للخلفية
document.addEventListener('mousemove', function(e) {
    const crescent = document.querySelector('.crescent-background');
    if (crescent) {
        const x = (e.clientX / window.innerWidth) * 5;
        const y = (e.clientY / window.innerHeight) * 5;
        
        crescent.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    }
});

// إضافة تأثير الجسيمات المتحركة
function addFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'floating-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    // إنشاء جسيمات متحركة
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingParticle(particleContainer);
        }, i * 500);
    }
}

// إنشاء جسيم متحرك
function createFloatingParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 6 + 2;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        animation: floatUp ${Math.random() * 4 + 3}s linear infinite;
        left: ${Math.random() * 100}%;
        bottom: -10px;
    `;
    
    container.appendChild(particle);
    
    // إزالة الجسيم بعد انتهاء الرسوم المتحركة
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
        // إنشاء جسيم جديد
        createFloatingParticle(container);
    }, 7000);
}

// تشغيل تأثير الجسيمات
setTimeout(addFloatingParticles, 1000);

// إضافة أنماط CSS للرسوم المتحركة
const floatingStyles = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .hadith-category-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .category-icon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .category-arrow {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .status-badge {
        transition: all 0.3s ease;
    }
    
    .info-content li {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .floating-particles {
        overflow: hidden;
    }
`;

// إضافة الأنماط الإضافية
const styleSheet = document.createElement('style');
styleSheet.textContent = floatingStyles;
document.head.appendChild(styleSheet);

// إضافة تأثير الكتابة المتحركة للعنوان
function typeWriterEffect() {
    const titleElement = document.querySelector('.intro-title-ar');
    if (titleElement) {
        const originalText = titleElement.textContent;
        titleElement.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < originalText.length) {
                titleElement.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }
}

// تشغيل تأثير الكتابة بعد تحميل الصفحة
setTimeout(typeWriterEffect, 1500);
