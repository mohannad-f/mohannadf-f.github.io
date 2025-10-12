// بيانات الموقع
let websiteData = {};

// تحميل البيانات
async function loadData() {
    try {
        const response = await fetch('data.json');
        websiteData = await response.json();
        initializePage();
    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
    }
}

// تهيئة الصفحة
function initializePage() {
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
        case 'index':
            renderMoodsGrid();
            break;
        case 'verses':
            renderVersesPage();
            break;
        case 'content':
            renderContentPage();
            break;
    }
}

// تحديد الصفحة الحالية
function getCurrentPage() {
    const path = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('mood')) {
        if (params.has('verse')) {
            return 'content';
        }
        return 'verses';
    }
    return 'index';
}

// عرض شبكة الحالات المزاجية
function renderMoodsGrid() {
    const moodsGrid = document.getElementById('moodsGrid');
    if (!moodsGrid) return;
    
    moodsGrid.innerHTML = '';
    
    Object.entries(websiteData.moods).forEach(([key, mood]) => {
        const moodCard = document.createElement('div');
        moodCard.className = `mood-card mood-${key}`;
        moodCard.innerHTML = `
            <div class="mood-name-ar">${mood.name_ar}؟</div>
            <div class="mood-name-en">?${mood.name_en}</div>
        `;
        
        moodCard.addEventListener('click', () => {
            if (mood.type === 'contact') {
                window.location.href = 'contact.html';
            } else {
                navigateToMood(key);
            }
        });
        
        moodsGrid.appendChild(moodCard);
    });
}

// الانتقال لصفحة الحالة المزاجية
function navigateToMood(moodKey) {
    window.location.href = `verses.html?mood=${moodKey}`;
}

// عرض صفحة الآيات
function renderVersesPage() {
    const params = new URLSearchParams(window.location.search);
    const moodKey = params.get('mood');
    
    if (!moodKey || !websiteData.moods[moodKey]) {
        window.location.href = 'index.html';
        return;
    }
    
    const mood = websiteData.moods[moodKey];
    
    // تحديث العنوان
    document.title = `${mood.name_ar} - آية لكل شعور`;
    
    // تحديث متغير CSS للون
    document.documentElement.style.setProperty('--mood-color', mood.color);
    
    // عرض اسم الحالة المزاجية
    const selectedMood = document.querySelector('.selected-mood');
    const selectedMoodEn = document.querySelector('.selected-mood-en');
    
    if (selectedMood) {
        selectedMood.textContent = `اخترت: ${mood.name_ar}`;
    }
    if (selectedMoodEn) {
        selectedMoodEn.textContent = `You chose: ${mood.name_en}`;
    }
    
    // عرض قائمة الآيات
    const versesList = document.querySelector('.verses-list');
    if (versesList && mood.verses) {
        versesList.innerHTML = '';
        
        mood.verses.forEach(verse => {
            const verseCard = document.createElement('div');
            verseCard.className = 'verse-card';
            verseCard.innerHTML = `
                <div class="verse-title">${verse.title}</div>
            `;
            
            verseCard.addEventListener('click', () => {
                navigateToVerse(moodKey, verse.id);
            });
            
            versesList.appendChild(verseCard);
        });
    }
}

// الانتقال لصفحة المحتوى
function navigateToVerse(moodKey, verseId) {
    window.location.href = `content.html?mood=${moodKey}&verse=${verseId}`;
}

// عرض صفحة المحتوى
function renderContentPage() {
    const params = new URLSearchParams(window.location.search);
    const moodKey = params.get('mood');
    const verseId = parseInt(params.get('verse'));
    
    if (!moodKey || !verseId || !websiteData.moods[moodKey]) {
        window.location.href = 'index.html';
        return;
    }
    
    const mood = websiteData.moods[moodKey];
    const verse = mood.verses.find(v => v.id === verseId);
    
    if (!verse) {
        window.location.href = `verses.html?mood=${moodKey}`;
        return;
    }
    
    // تحديث العنوان
    document.title = `${verse.title} - آية لكل شعور`;
    
    // تحديث متغير CSS للون
    document.documentElement.style.setProperty('--mood-color', mood.color);
    
    // عرض المحتوى
    const verseTitle = document.querySelector('.verse-title-display');
    const verseText = document.querySelector('.verse-text');
    const contentText = document.querySelector('.content-text');
    
    if (verseTitle) {
        verseTitle.textContent = verse.title;
    }
    
    if (verseText && verse.verse_text) {
        verseText.textContent = verse.verse_text;
    }
    
    if (contentText) {
        contentText.textContent = verse.content;
    }
    
    // تحديث روابط العودة
    const backToVerses = document.querySelector('.back-to-verses');
    const backToHome = document.querySelector('.back-to-home');
    
    if (backToVerses) {
        backToVerses.href = `verses.html?mood=${moodKey}`;
    }
    
    if (backToHome) {
        backToHome.href = 'index.html';
    }
}

// تحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadData);

