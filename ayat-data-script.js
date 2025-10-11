// بيانات المشاعر والآيات الأصلية
const moodsData = {
    "happy": {
        "name_ar": "سعيد",
        "name_en": "Happy",
        "color": "#4CAF50",
        "icon": "fas fa-smile",
        "verses": [
            {
                "id": 1,
                "title": "آية الفرح والسرور",
                "verse_text": "قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ",
                "content": "هذه الآية الكريمة تدعونا للفرح بفضل الله ورحمته، فهو خير من كل ما نجمعه في الدنيا. الفرح الحقيقي يأتي من القرب من الله والشعور برحمته وفضله علينا."
            },
            {
                "id": 2,
                "title": "آية البشرى للمؤمنين",
                "verse_text": "وَبَشِّرِ الْمُؤْمِنِينَ بِأَنَّ لَهُم مِّنَ اللَّهِ فَضْلًا كَبِيرًا",
                "content": "بشارة عظيمة للمؤمنين بأن لهم من الله فضلاً كبيراً. هذا الفضل يشمل الدنيا والآخرة، ويملأ قلب المؤمن بالسعادة والطمأنينة."
            }
        ]
    },
    "angry": {
        "name_ar": "غاضب",
        "name_en": "Angry",
        "color": "#F44336",
        "icon": "fas fa-angry",
        "verses": [
            {
                "id": 1,
                "title": "آية كظم الغيظ",
                "verse_text": "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
                "content": "هذه الآية تعلمنا كيف نتعامل مع الغضب. كظم الغيظ والعفو عن الناس من صفات المحسنين الذين يحبهم الله. الغضب طبيعة بشرية، لكن السيطرة عليه والعفو أعظم."
            },
            {
                "id": 2,
                "title": "آية الصبر والتحكم",
                "verse_text": "وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنْ عَزْمِ الْأُمُورِ",
                "content": "الصبر والمغفرة من عزم الأمور، أي من الأمور التي تحتاج إلى قوة وعزيمة. عندما نغضب، نحتاج إلى تذكر هذه الآية والتحلي بالصبر."
            }
        ]
    },
    "sad": {
        "name_ar": "حزين",
        "name_en": "Sad",
        "color": "#2196F3",
        "icon": "fas fa-sad-tear",
        "verses": [
            {
                "id": 1,
                "title": "آية تفريج الهموم",
                "verse_text": "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
                "content": "هذه الآية بشارة لكل من يمر بضيق أو حزن. من يتقي الله ويلتزم بأوامره، سيجعل الله له مخرجاً من كل ضيق ومشكلة. الحزن مؤقت والفرج قادم بإذن الله."
            },
            {
                "id": 2,
                "title": "آية الصبر الجميل",
                "verse_text": "فَصَبْرٌ جَمِيلٌ ۖ وَاللَّهُ الْمُسْتَعَانُ عَلَىٰ مَا تَصِفُونَ",
                "content": "الصبر الجميل هو الصبر بدون شكوى أو جزع. عندما نحزن، نتذكر أن الله هو المستعان، وأن الحزن امتحان من الله لنا، والصبر عليه يؤجر عليه المؤمن."
            }
        ]
    },
    "lonely": {
        "name_ar": "وحيد",
        "name_en": "Lonely",
        "color": "#9C27B0",
        "icon": "fas fa-user",
        "verses": [
            {
                "id": 1,
                "title": "آية معية الله",
                "verse_text": "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
                "content": "لست وحيداً أبداً، فالله معك أينما كنت. هذه الآية تذكرنا بأن الله يرانا ويعلم حالنا، وهو معنا في كل لحظة. الشعور بالوحدة يزول عندما نتذكر هذه المعية الإلهية."
            },
            {
                "id": 2,
                "title": "آية القرب من الله",
                "verse_text": "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
                "content": "الله قريب منا، يسمع دعاءنا ويجيبه. عندما تشعر بالوحدة، ادع الله واعلم أنه قريب منك، يسمعك ويعلم ما في قلبك."
            }
        ]
    },
    "scared": {
        "name_ar": "خائف",
        "name_en": "Scared",
        "color": "#FF9800",
        "icon": "fas fa-exclamation-triangle",
        "verses": [
            {
                "id": 1,
                "title": "آية الأمان والطمأنينة",
                "verse_text": "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
                "content": "ذكر الله هو الدواء الشافي للخوف والقلق. عندما تخاف، اذكر الله كثيراً، فبذكره تطمئن القلوب وتزول المخاوف. الإيمان والذكر يجلبان السكينة والأمان."
            },
            {
                "id": 2,
                "title": "آية التوكل على الله",
                "verse_text": "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ",
                "content": "التوكل على الله يطرد الخوف من القلب. من يتوكل على الله فالله كافيه ومدبر أموره. ثق بالله واعلم أنه سيحميك ويكفيك شر ما تخاف منه."
            }
        ]
    },
    "repentant": {
        "name_ar": "تائب",
        "name_en": "Repentant",
        "color": "#8BC34A",
        "icon": "fas fa-praying-hands",
        "verses": [
            {
                "id": 1,
                "title": "آية قبول التوبة",
                "verse_text": "وَهُوَ الَّذِي يَقْبَلُ التَّوْبَةَ عَنْ عِبَادِهِ وَيَعْفُو عَنِ السَّيِّئَاتِ وَيَعْلَمُ مَا تَفْعَلُونَ",
                "content": "الله يقبل التوبة من عباده ويعفو عن السيئات. مهما كانت ذنوبك، فالله غفور رحيم، يقبل توبتك الصادقة ويمحو سيئاتك. لا تيأس من رحمة الله."
            },
            {
                "id": 2,
                "title": "آية رحمة الله الواسعة",
                "verse_text": "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
                "content": "هذه الآية بشارة عظيمة لكل تائب. مهما عظمت الذنوب، فرحمة الله أعظم. الله يغفر الذنوب جميعاً لمن تاب إليه بصدق. لا تقنط من رحمة الله أبداً."
            }
        ]
    },
    "lost": {
        "name_ar": "ضائع",
        "name_en": "Lost",
        "color": "#795548",
        "icon": "fas fa-compass",
        "verses": [
            {
                "id": 1,
                "title": "آية الهداية والإرشاد",
                "verse_text": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                "content": "هذا الدعاء من سورة الفاتحة نردده في كل صلاة. عندما تشعر بالضياع، ادع الله أن يهديك الصراط المستقيم. الله هو الهادي إلى سواء السبيل."
            },
            {
                "id": 2,
                "title": "آية النور والهداية",
                "verse_text": "وَمَن لَّمْ يَجْعَلِ اللَّهُ لَهُ نُورًا فَمَا لَهُ مِن نُّورٍ",
                "content": "النور الحقيقي يأتي من الله. عندما تضيع في ظلمات الحياة، اطلب من الله أن ينير لك الطريق. بدون نور الله، لا يمكن للإنسان أن يهتدي."
            }
        ]
    },
    "special": {
        "name_ar": "رسالة خاصة",
        "name_en": "Special Message",
        "color": "#E91E63",
        "icon": "fas fa-envelope-open-text",
        "verses": [
            {
                "id": 1,
                "title": "رسالة من القرآن الكريم",
                "verse_text": "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ",
                "content": "القرآن الكريم شفاء ورحمة للمؤمنين. هذه رسالة خاصة لك: مهما كانت حالتك، اقرأ القرآن واستمع إليه، فهو شفاء لما في الصدور ونور للقلوب."
            },
            {
                "id": 2,
                "title": "آية المحبة الإلهية",
                "verse_text": "فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ",
                "content": "هذه رسالة محبة من الله إليك. الله يحب عباده المؤمنين، وهم يحبونه. كن من هؤلاء الذين يحبهم الله ويحبونه، بالطاعة والعبادة والتقوى."
            }
        ]
    }
};

// متغيرات عامة
let currentMood = null;
let currentVerse = null;
let filteredMoods = [];
let searchTerm = '';

// تهيئة صفحة الآيات
document.addEventListener('DOMContentLoaded', function() {
    initializeAyatPage();
});

// تهيئة الصفحة
function initializeAyatPage() {
    renderMoodsGrid();
    initializeMoodSearch();
    initializePageAnimations();
}

// عرض شبكة المشاعر
function renderMoodsGrid() {
    const moodsGrid = document.getElementById('moodsGrid');
    if (!moodsGrid) return;
    
    moodsGrid.innerHTML = '';
    
    // تحويل البيانات إلى مصفوفة للتصفية
    const moodsArray = Object.entries(moodsData).map(([key, mood]) => ({
        key,
        ...mood
    }));
    
    // تطبيق التصفية إذا كان هناك بحث
    const displayMoods = searchTerm ? 
        moodsArray.filter(mood => 
            mood.name_ar.includes(searchTerm) || 
            mood.name_en.toLowerCase().includes(searchTerm.toLowerCase())
        ) : moodsArray;
    
    displayMoods.forEach((mood, index) => {
        const moodCard = document.createElement('div');
        moodCard.className = 'mood-card';
        moodCard.style.setProperty('--mood-color', mood.color);
        moodCard.style.setProperty('--index', index);
        
        moodCard.innerHTML = `
            <div class="mood-icon">
                <i class="${mood.icon}"></i>
            </div>
            <div class="mood-content">
                <h3 class="mood-name-ar">${mood.name_ar}؟</h3>
                <p class="mood-name-en">?${mood.name_en}</p>
                <div class="verses-count">${mood.verses.length} آيات</div>
            </div>
        `;
        
        moodCard.addEventListener('click', () => {
            selectMood(mood.key);
        });
        
        moodsGrid.appendChild(moodCard);
    });
    
    // إظهار رسالة عدم وجود نتائج
    showNoMoodsMessage(displayMoods.length === 0 && searchTerm);
}

// اختيار مشعر معين
function selectMood(moodKey) {
    currentMood = moodKey;
    const mood = moodsData[moodKey];
    
    // إخفاء شبكة المشاعر
    const moodsSection = document.querySelector('.moods-section');
    const versesSection = document.querySelector('.verses-section');
    
    if (moodsSection) moodsSection.style.display = 'none';
    if (versesSection) versesSection.style.display = 'block';
    
    // عرض الآيات للمشعر المختار
    renderVersesForMood(mood);
}

// عرض آيات المشعر
function renderVersesForMood(mood) {
    // تحديث العنوان
    const selectedMoodTitle = document.querySelector('.selected-mood-title');
    if (selectedMoodTitle) {
        selectedMoodTitle.innerHTML = `
            <h2 class="mood-title-ar">اخترت: ${mood.name_ar}</h2>
            <p class="mood-title-en">You chose: ${mood.name_en}</p>
        `;
        selectedMoodTitle.style.setProperty('--mood-color', mood.color);
    }
    
    // عرض قائمة الآيات
    const versesList = document.querySelector('.verses-list');
    if (versesList) {
        versesList.innerHTML = '';
        
        mood.verses.forEach((verse, index) => {
            const verseCard = document.createElement('div');
            verseCard.className = 'verse-card';
            verseCard.style.setProperty('--index', index);
            verseCard.style.setProperty('--mood-color', mood.color);
            
            verseCard.innerHTML = `
                <div class="verse-number">${verse.id}</div>
                <div class="verse-content">
                    <h3 class="verse-title">${verse.title}</h3>
                    <p class="verse-preview">${verse.verse_text.substring(0, 50)}...</p>
                </div>
                <div class="verse-action">
                    <i class="fas fa-arrow-left"></i>
                </div>
            `;
            
            verseCard.addEventListener('click', () => {
                showVerseDetails(verse, mood);
            });
            
            versesList.appendChild(verseCard);
        });
    }
}

// عرض تفاصيل الآية
function showVerseDetails(verse, mood) {
    // إنشاء نافذة منبثقة لعرض الآية
    const modal = document.createElement('div');
    modal.className = 'verse-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header" style="background: ${mood.color}">
                <h2>${verse.title}</h2>
                <button class="close-modal" onclick="closeVerseModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="verse-text-display">
                    <p class="verse-arabic">${verse.verse_text}</p>
                </div>
                <div class="verse-explanation">
                    <h3>التفسير والشرح</h3>
                    <p class="explanation-text">${verse.content}</p>
                </div>
                <div class="verse-actions">
                    <button class="action-btn" onclick="copyVerse('${verse.verse_text}')">
                        <i class="fas fa-copy"></i>
                        نسخ الآية
                    </button>
                    <button class="action-btn" onclick="shareVerse('${verse.title}', '${verse.verse_text}')">
                        <i class="fas fa-share"></i>
                        مشاركة
                    </button>
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

// إغلاق نافذة الآية
function closeVerseModal() {
    const modal = document.querySelector('.verse-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// نسخ الآية
function copyVerse(verseText) {
    navigator.clipboard.writeText(verseText).then(() => {
        showNotification('تم نسخ الآية بنجاح');
    });
}

// مشاركة الآية
function shareVerse(title, verseText) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: verseText,
            url: window.location.href
        });
    } else {
        copyVerse(`${title}\n${verseText}`);
        showNotification('تم نسخ الآية للمشاركة');
    }
}

// إظهار إشعار
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// العودة لشبكة المشاعر
function goBackToMoods() {
    const moodsSection = document.querySelector('.moods-section');
    const versesSection = document.querySelector('.verses-section');
    
    if (moodsSection) moodsSection.style.display = 'block';
    if (versesSection) versesSection.style.display = 'none';
    
    currentMood = null;
}

// تهيئة البحث في المشاعر
function initializeMoodSearch() {
    const searchInput = document.getElementById('moodSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        searchTerm = this.value.trim();
        renderMoodsGrid();
    });
}

// إظهار رسالة عدم وجود مشاعر
function showNoMoodsMessage(show) {
    const noResults = document.getElementById('noMoodsResults');
    if (noResults) {
        noResults.style.display = show ? 'block' : 'none';
    }
}

// مسح البحث
function clearMoodSearch() {
    const searchInput = document.getElementById('moodSearch');
    if (searchInput) {
        searchInput.value = '';
        searchTerm = '';
        renderMoodsGrid();
    }
}

// تهيئة الرسوم المتحركة
function initializePageAnimations() {
    const elements = [
        '.page-header',
        '.search-section',
        '.moods-section'
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

// إضافة الأنماط للنافذة المنبثقة
const modalStyles = `
    .verse-modal {
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
    
    .verse-modal.show {
        opacity: 1;
    }
    
    .verse-modal .modal-content {
        background: white;
        border-radius: 20px;
        max-width: 700px;
        width: 90%;
        max-height: 80%;
        overflow-y: auto;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    
    .verse-modal .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
        color: white;
        border-radius: 20px 20px 0 0;
    }
    
    .verse-modal .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
    }
    
    .verse-modal .close-modal {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .verse-modal .close-modal:hover {
        background: rgba(255,255,255,0.2);
    }
    
    .verse-modal .modal-body {
        padding: 30px;
        text-align: right;
        direction: rtl;
    }
    
    .verse-text-display {
        background: #f8f9fa;
        padding: 20px;
        border-radius: 15px;
        margin-bottom: 20px;
        border-right: 4px solid #4a7c59;
    }
    
    .verse-arabic {
        font-size: 1.4rem;
        line-height: 2;
        color: #2d5016;
        font-weight: 600;
        margin: 0;
    }
    
    .verse-explanation h3 {
        color: #4a7c59;
        font-size: 1.3rem;
        margin-bottom: 15px;
    }
    
    .explanation-text {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #333;
        margin: 0;
    }
    
    .verse-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 25px;
        flex-wrap: wrap;
    }
    
    .action-btn {
        background: linear-gradient(135deg, #4a7c59 0%, #2d5016 100%);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    }
    
    .action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(74, 124, 89, 0.3);
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1001;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
    }
    
    .notification.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .verses-count {
        font-size: 0.9rem;
        color: #666;
        margin-top: 5px;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
