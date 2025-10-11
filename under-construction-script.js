// وظائف صفحة "يتم التعديل"

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    initializeUnderConstructionPage();
});

// تهيئة صفحة يتم التعديل
function initializeUnderConstructionPage() {
    addPageAnimations();
    setupProgressAnimation();
    addInteractiveEffects();
}

// إضافة الرسوم المتحركة للصفحة
function addPageAnimations() {
    const elements = [
        '.page-header',
        '.construction-container'
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
            }, index * 300 + 200);
        }
    });
}

// إعداد رسوم متحركة لشريط التقدم
function setupProgressAnimation() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        // تأثير تدرجي لشريط التقدم
        let progress = 0;
        const targetProgress = 65;
        
        const animateProgress = () => {
            if (progress < targetProgress) {
                progress += 1;
                progressFill.style.width = progress + '%';
                setTimeout(animateProgress, 30);
            }
        };
        
        setTimeout(animateProgress, 1000);
    }
}

// إضافة تأثيرات تفاعلية
function addInteractiveEffects() {
    // تأثير hover للميزات القادمة
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // تأثير نبضة لأيقونة البناء
    const constructionIcon = document.querySelector('.construction-icon');
    if (constructionIcon) {
        setInterval(() => {
            constructionIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                constructionIcon.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
}

// العودة للصفحة الرئيسية
function goBack() {
    // إضافة تأثير انتقال سلس
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// الانتقال لصفحة التواصل
function goToContact() {
    // إضافة تأثير انتقال سلس
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'contact.html';
    }, 300);
}

// إضافة تأثيرات الماوس للخلفية
document.addEventListener('mousemove', function(e) {
    const crescent = document.querySelector('.crescent-background');
    if (crescent) {
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        
        crescent.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    }
});

// تأثير الكتابة المتحركة للنص
function typeWriterEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// إضافة تأثير الجسيمات في الخلفية
function addParticleEffect() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(particleContainer);
    
    // إنشاء جسيمات متحركة
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

// إنشاء جسيم واحد
function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        animation: float ${Math.random() * 3 + 2}s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(particle);
    
    // إزالة الجسيم بعد انتهاء الرسوم المتحركة
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 5000);
}

// تشغيل تأثير الجسيمات عند تحميل الصفحة
setTimeout(addParticleEffect, 1000);

// إضافة أنماط CSS للرسوم المتحركة
const additionalStyles = `
    @keyframes float {
        0% {
            transform: translateY(0px) rotate(0deg);
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
    
    .particles-container {
        overflow: hidden;
    }
    
    .construction-icon {
        transition: transform 0.3s ease;
    }
    
    .feature-item {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .feature-item:hover {
        color: #4a7c59 !important;
    }
    
    .feature-item:hover i {
        transform: scale(1.2);
        transition: transform 0.3s ease;
    }
`;

// إضافة الأنماط الإضافية
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
