// وظائف خاصة بصفحة التواصل

// تهيئة صفحة التواصل
document.addEventListener('DOMContentLoaded', function() {
    initializeContactPage();
});

// تهيئة صفحة التواصل
function initializeContactPage() {
    initializePageAnimations();
    initializeSocialCardEffects();
    initializeCrescentEffect();
    addInteractionFeedback();
}

// تهيئة الرسوم المتحركة للصفحة
function initializePageAnimations() {
    const elements = [
        '.page-header',
        '.contact-intro',
        '.support-notice',
        '.section-title',
        '.contact-footer'
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

// تهيئة تأثيرات بطاقات التواصل الاجتماعي
function initializeSocialCardEffects() {
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            
            // تأثير إضافي للأيقونة
            const icon = this.querySelector('.social-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            // إعادة الأيقونة لوضعها الطبيعي
            const icon = this.querySelector('.social-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
        
        card.addEventListener('click', function(e) {
            // تأثير النقر
            this.style.transform = 'translateY(-4px) scale(0.98)';
            
            // إضافة تأثير الموجة
            addRippleEffect(this, e);
            
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            }, 150);
        });
    });
}

// تأثير تحريك الهلال مع حركة الماوس
function initializeCrescentEffect() {
    document.addEventListener('mousemove', function(e) {
        const crescent = document.querySelector('.crescent-background');
        if (crescent) {
            const x = (e.clientX / window.innerWidth) * 8 - 4;
            const y = (e.clientY / window.innerHeight) * 8 - 4;
            
            crescent.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${x * 0.4}deg)`;
        }
    });
}

// إضافة تأثير الموجة عند النقر
function addRippleEffect(element, event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    // الحصول على اللون المناسب للمنصة
    const socialColor = getComputedStyle(element).getPropertyValue('--social-color');
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: ${socialColor}40;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 1;
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

// إضافة ردود فعل تفاعلية
function addInteractionFeedback() {
    // تأثير النبض للإشعار
    const supportNotice = document.querySelector('.support-notice');
    if (supportNotice) {
        setInterval(() => {
            const icon = supportNotice.querySelector('.notice-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
            }
        }, 3000);
    }
    
    // تأثير التحويم على الأزرار
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
}

// تأثيرات إضافية للتحسين
function addAdvancedEffects() {
    // تأثير الضوء المتحرك على البطاقات
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--mouse-x', x + 'px');
            this.style.setProperty('--mouse-y', y + 'px');
        });
    });
}

// تأثير الكتابة المتحركة للعناوين
function addTypingEffect() {
    const titles = document.querySelectorAll('.title-ar');
    
    titles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            title.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
            }
        }, 100);
    });
}

// تأثير العد التنازلي للإحصائيات (إذا كانت موجودة)
function addCounterEffect() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current);
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 50);
    });
}

// تأثير الجسيمات المتحركة (اختياري)
function addParticleEffect() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: float-particle ${5 + Math.random() * 5}s infinite linear;
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        document.body.appendChild(particle);
    }
}

// إضافة CSS للتأثيرات الإضافية
const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes float-particle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .social-card {
        position: relative;
        overflow: hidden;
    }
    
    .social-card::before {
        content: '';
        position: absolute;
        top: var(--mouse-y, 50%);
        left: var(--mouse-x, 50%);
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
        pointer-events: none;
    }
    
    .social-card:hover::before {
        width: 200px;
        height: 200px;
    }
    
    .notice-icon {
        transition: all 0.3s ease;
    }
    
    .floating-particle {
        animation-timing-function: ease-in-out;
    }
`;

// إضافة الأنماط الإضافية
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// تهيئة التأثيرات المتقدمة
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        addAdvancedEffects();
        addParticleEffect();
    }, 1000);
});

// تأثير التمرير السلس للروابط الداخلية
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// تهيئة التمرير السلس
document.addEventListener('DOMContentLoaded', addSmoothScrolling);
