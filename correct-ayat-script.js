// بيانات المشاعر والآيات الصحيحة من ملف data.json الأصلي
const correctMoodsData = {
    "happy": {
        "name_ar": "سعيد",
        "name_en": "Happy",
        "color": "#FFC107",
        "icon": "fas fa-smile",
        "verses": [
            {
                "id": 1,
                "title": "الأحقاف ١٤ / Al-Ahqaf 14",
                "verse_text": "الله يقول: ﴿أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلۡجَنَّةِ خَـٰلِدِينَ فِيهَا جَزَآءًۢ بِمَا كَانُوا۟ يَعۡمَلُونَ﴾ [الأحقاف: ١٤]",
                "content": "اسمع يا عزيزي القارئ، هذه الآية تأتي بعد أن ذكر الله حال المؤمنين الذين قالوا: ربنا الله ثم استقاموا، ما التفتوا لغيره ولا بدّلوا ولا انحرفوا. النتيجة التي يعلنها الله لهم هنا هي خلاصة السعادة والطمأنينة: ﴿أُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلۡجَنَّةِ﴾. كلمة \"أصحاب\" مش بس وصف، هي دلالة على الملازمة، يعني هم أهلها الحقيقيون، مقرّون فيها، ليسوا غرباء ولا ضيوف مؤقتين، بل أصحاب.\nثم يضيف: ﴿خَـٰلِدِينَ فِيهَا﴾، هذا الخلود هو ذروة السعادة، لأن أي نعيم في الدنيا ينقصه شيء واحد: أنه مؤقت وزائل. حتى اللحظة الجميلة في الدنيا، مهما بلغت من الروعة، يبقى في قلبك خوف أن تنتهي. أما هنا فالله يرفع هذا الخوف عنك نهائيًا، يقول لك: أنت خالد، لن يزول نعيمك أبدًا.\nثم يبين العدل والكرم معًا: ﴿جَزَآءًۢ بِمَا كَانُوا۟ يَعۡمَلُونَ﴾. لاحظ كيف الكلمة تجمع بين \"الجزاء\" وهو العدل، وبين \"بما كانوا يعملون\" وهو رحمة الله التي ضاعفت لهم الحسنات. عملك القليل في الدنيا، جهادك مع نفسك، صبرك على الطاعة، تركك للحرام، كل هذه الجهود التي قد تراها بسيطة تتحول يوم القيامة إلى جزاء عظيم: جنة وخلود فيها."
            },
            {
                "id": 2,
                "title": "ق ٣٢ / Qaaf 32",
                "verse_text": "الله يقول: ﴿هَـٰذَا مَا تُوعَدُونَ لِكُلِّ أَوَّابٍ حَفِيظٍ﴾ [ق: ٣٢]",
                "content": "اسمع يا عزيزي القارئ، هذه الآية تأتي في مشهد مهيب من مشاهد يوم القيامة، بعدما ذكر الله تعالى الجنة ونعيمها وما أُعِدّ فيها، ثم يخاطب عباده الذين استحقوها بقوله: ﴿هَـٰذَا مَا تُوعَدُونَ﴾، كأن الملائكة يشيرون إلى الجنة ونعيمها ويقولون: هذا الذي كنتم تُوعَدون به في الدنيا، هذا الذي كنتم تسمعون عنه في القرآن والرسالة، وها هو الآن صار حقيقة ماثلة أمامكم.\nلكن لمن هذا الوعد؟ ليس للجميع، بل خصّ الله فئة محددة: ﴿لِكُلِّ أَوَّابٍ حَفِيظٍ﴾. كلمة أواب تعني كثير الرجوع إلى الله، كلما أخطأ تاب، وكلما غفل استيقظ، وكلما انشغل بالدنيا عاد إلى ذكر ربه. الأواب هو الذي لا يستسلم لبُعدٍ عن الله، بل يعود إليه مرارًا وتكرارًا، محمّلًا بندم، مثقلًا باعتذار، لكنه لا يقطع الطريق أبدًا."
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
                "title": "آل عمران ١٣٤ / Aal-E-Imran 134",
                "verse_text": "الله يقول: ﴿وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ ۗ وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾ [آل عمران: ١٣٤]",
                "content": "انظر يا عزيزي القارئ، هذه الآية تأتي في سياق وصف المتقين، وتضع أمامك طريقة التعامل مع الغضب الذي يملأ قلبك أحيانًا. الله يصف المؤمنين بأنهم ﴿الْكَاظِمِينَ الْغَيْظَ﴾، أي الذين يكبتون غضبهم ولا يتركونه ينفجر، يحبسونه في صدورهم ولا يُظهرونه على وجوههم أو ألسنتهم. هذا ليس ضعفًا، بل قوة عظيمة، لأن السيطرة على النفس في لحظة الغضب تحتاج إلى جهاد كبير مع الذات.\nثم يرتقي بهم إلى درجة أعلى: ﴿وَالْعَافِينَ عَنِ النَّاسِ﴾، أي لا يكتفون بكظم الغيظ، بل يتجاوزون ذلك إلى العفو والصفح. يسامحون من أساء إليهم، ويتركون حقهم في الانتقام، ويختارون طريق الرحمة بدلًا من طريق القصاص."
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
                "title": "الطلاق ٢-٣ / At-Talaq 2-3",
                "verse_text": "الله يقول: ﴿وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا * وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ﴾ [الطلاق: ٢-٣]",
                "content": "انظر يا عزيزي القارئ، هذه الآية تأتي كبلسم شافٍ لكل قلب حزين يشعر بأن الأبواب مُغلقة أمامه، وأن المشاكل تحيط به من كل جانب. الله يضع أمامك قاعدة ذهبية: ﴿وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا﴾. التقوى هنا ليست مجرد عبادة، بل منهج حياة: أن تجعل بينك وبين غضب الله حاجزًا من طاعته، أن تتق الله في كل قرار تتخذه، في كل كلمة تقولها، في كل خطوة تخطوها.\nوالمخرج الذي يعد الله به ليس مخرجًا عاديًا، بل مخرج من عنده، مخرج لا تتوقعه، مخرج يأتي من حيث لا تحتسب. قد تكون في ضيق شديد، في حزن عميق، في مشكلة تبدو مستحيلة الحل، لكن الله يقول لك: اتقني، والباقي عليّ."
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
                "title": "الحديد ٤ / Al-Hadid 4",
                "verse_text": "الله يقول: ﴿وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ﴾ [الحديد: ٤]",
                "content": "انظر يا عزيزي القارئ، هذه الآية تخاطب قلبك في لحظات الوحدة والغربة، حين تشعر أن لا أحد يفهمك، ولا أحد يقدر ما تمر به. الله يقول لك بوضوح: ﴿وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ﴾. هذه المعية ليست معية مكان فقط، بل معية علم ورحمة وحفظ ونصرة. أينما كنت، في أي مكان، في أي وقت، في أي حال، الله معك.\nلست وحيدًا في غرفتك، لست وحيدًا في همومك، لست وحيدًا في دموعك، لست وحيدًا في خوفك. الله معك، يعلم ما في قلبك، يسمع دعاءك، يرى حالك، يعرف ضعفك وقوتك، يعرف ما تحتاجه قبل أن تطلبه."
            }
        ]
    },
    "afraid": {
        "name_ar": "خائف",
        "name_en": "Afraid",
        "color": "#212121",
        "icon": "fas fa-exclamation-triangle",
        "verses": [
            {
                "id": 1,
                "title": "البقرة ١١٢ / Al-Baqarah 112",
                "verse_text": "يقول الله تعالى: ﴿بَلَىٰ مَنۡ أَسۡلَمَ وَجۡهَهُۥ لِلَّهِ وَهُوَ مُحۡسِنٞ فَلَهُۥٓ أَجۡرُهُۥ عِندَ رَبِّهِۦۖ وَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ﴾ [البقرة: ١١٢]",
                "content": "انظر يا عزيزي القارئ، هذه الآية تُخاطب القلب الذي يملؤه الخوف من المستقبل أو من الحساب، وتطمئنه أن الطريق إلى الأمن والطمأنينة واضح: أن تُسلم وجهك لله، أي أن تُخضع نفسك كلها له، ظاهرًا وباطنًا، نيةً وعملاً. كلمة \"أسلم وجهه\" فيها معنى الاستسلام الكامل، كأنك تقول: وجهي يا رب، أي ذاتي وهويتي وحياتي كلها لك.\nثم لا يكفي مجرد الاستسلام، بل لا بد أن يكون مع إحسان: أن تعبد الله كأنك تراه، أن تُتقن عملك، أن تُخلص قلبك، أن تُحسن في حق ربك وفي حق الناس. عندها فقط يُبشرك الله: ﴿فَلَهُۥٓ أَجۡرُهُۥ عِندَ رَبِّهِۦ﴾. تخيّل أن أجرك ليس عند بشر، ولا عند مؤسسة، بل عند الله نفسه، رب العالمين، الضامن الذي لا يُضيّع أجر المحسنين."
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
                "title": "الزمر ٥٣ / Az-Zumar 53",
                "verse_text": "الله يقول: ﴿قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ﴾ [الزمر: ٥٣]",
                "content": "انظر يا عزيزي القارئ، هذه الآية تُعتبر من أعظم آيات الرجاء في القرآن كله. تخيّل أن الله يخاطبك مباشرة، يناديك بصفة العبودية التي تحمل معنى القرب والحب: ﴿يَا عِبَادِيَ﴾. ثم يصف حالك بدقة: ﴿الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ﴾، أي الذين تجاوزوا الحد في المعاصي، الذين أكثروا من الذنوب، الذين ظلموا أنفسهم بالبعد عن الله.\nلكن بدلًا من أن يوبخك أو يهددك، يقول لك: ﴿لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ﴾. لا تيأسوا، لا تفقدوا الأمل، لا تظنوا أن الباب مُغلق أمامكم. ثم يأتي بالبشارة العظمى: ﴿إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا﴾. كلمة \"جميعًا\" هنا لا تستثني ذنبًا، مهما عظُم، مهما تكرر، مهما بلغ من القبح."
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
                "title": "الفاتحة ٦ / Al-Fatiha 6",
                "verse_text": "الله يقول: ﴿اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ﴾ [الفاتحة: ٦]",
                "content": "انظر يا عزيزي القارئ، هذه الآية من سورة الفاتحة التي نقرؤها في كل ركعة من صلاتنا، وهي دعاء عظيم علّمنا الله إياه. حين تشعر بالضياع، حين تقف على مفترق طرق ولا تعرف أيها تسلك، حين تتساءل عن معنى حياتك وهدفك، تذكر أن الله علّمك هذا الدعاء: ﴿اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ﴾.\nالهداية هنا ليست مجرد معرفة الطريق، بل التوفيق للسير فيه. والصراط المستقيم ليس مجرد طريق، بل الطريق الذي يوصلك إلى الله، الطريق الذي لا اعوجاج فيه ولا انحراف، الطريق الذي سار عليه الأنبياء والصالحون."
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
                "title": "الإسراء ٨٢ / Al-Isra 82",
                "verse_text": "الله يقول: ﴿وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ ۙ وَلَا يَزِيدُ الظَّالِمِينَ إِلَّا خَسَارًا﴾ [الإسراء: ٨٢]",
                "content": "انظر يا عزيزي القارئ، هذه رسالة خاصة لك من الله عبر كتابه الكريم. الله يخبرك أن القرآن الذي بين يديك ليس مجرد كتاب تقرؤه، بل هو ﴿شِفَاءٌ وَرَحْمَةٌ﴾. شفاء لما في الصدور من هموم وأحزان وقلق، شفاء للقلوب المريضة بالذنوب، شفاء للأرواح التائهة في ظلمات الحياة.\nوهو أيضًا رحمة، رحمة تنزل على قلبك حين تقرؤه، رحمة تغمرك حين تتدبر آياته، رحمة تحيط بك حين تعيش بتعاليمه. لكن هذا الشفاء وهذه الرحمة لمن؟ ﴿لِّلْمُؤْمِنِينَ﴾، للذين آمنوا بالله وصدقوا رسوله وأقبلوا على كتابه بقلوب منكسرة، طالبة للهداية والشفاء."
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
    initializeCorrectAyatPage();
});

// تهيئة الصفحة
function initializeCorrectAyatPage() {
    renderCorrectMoodsGrid();
    initializeCorrectMoodSearch();
    initializeCorrectPageAnimations();
}

// عرض شبكة المشاعر الصحيحة
function renderCorrectMoodsGrid() {
    const moodsGrid = document.getElementById('moodsGrid');
    if (!moodsGrid) return;
    
    moodsGrid.innerHTML = '';
    
    // تحويل البيانات إلى مصفوفة للتصفية
    const moodsArray = Object.entries(correctMoodsData).map(([key, mood]) => ({
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
            selectCorrectMood(mood.key);
        });
        
        moodsGrid.appendChild(moodCard);
    });
    
    // إظهار رسالة عدم وجود نتائج
    showNoMoodsMessage(displayMoods.length === 0 && searchTerm);
}

// اختيار مشعر معين
function selectCorrectMood(moodKey) {
    currentMood = moodKey;
    const mood = correctMoodsData[moodKey];
    
    // إخفاء شبكة المشاعر
    const moodsSection = document.querySelector('.moods-section');
    const versesSection = document.querySelector('.verses-section');
    
    if (moodsSection) moodsSection.style.display = 'none';
    if (versesSection) versesSection.style.display = 'block';
    
    // عرض الآيات للمشعر المختار
    renderCorrectVersesForMood(mood);
}

// عرض آيات المشعر الصحيحة
function renderCorrectVersesForMood(mood) {
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
                    <p class="verse-preview">${verse.verse_text.substring(0, 80)}...</p>
                </div>
                <div class="verse-action">
                    <i class="fas fa-arrow-left"></i>
                </div>
            `;
            
            verseCard.addEventListener('click', () => {
                showCorrectVerseDetails(verse, mood);
            });
            
            versesList.appendChild(verseCard);
        });
    }
}

// عرض تفاصيل الآية الصحيحة
function showCorrectVerseDetails(verse, mood) {
    // إنشاء نافذة منبثقة لعرض الآية
    const modal = document.createElement('div');
    modal.className = 'verse-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header" style="background: ${mood.color}">
                <h2>${verse.title}</h2>
                <button class="close-modal" onclick="closeCorrectVerseModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="verse-text-display">
                    <p class="verse-arabic">${verse.verse_text}</p>
                </div>
                <div class="verse-explanation">
                    <h3>التفسير والشرح</h3>
                    <div class="explanation-text">${verse.content.replace(/\n/g, '<br><br>')}</div>
                </div>
                <div class="verse-actions">
                    <button class="action-btn" onclick="copyCorrectVerse('${verse.verse_text.replace(/'/g, "\\'")}')">
                        <i class="fas fa-copy"></i>
                        نسخ الآية
                    </button>
                    <button class="action-btn" onclick="shareCorrectVerse('${verse.title.replace(/'/g, "\\'")}', '${verse.verse_text.replace(/'/g, "\\'")}')">
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
function closeCorrectVerseModal() {
    const modal = document.querySelector('.verse-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// نسخ الآية
function copyCorrectVerse(verseText) {
    navigator.clipboard.writeText(verseText).then(() => {
        showCorrectNotification('تم نسخ الآية بنجاح');
    });
}

// مشاركة الآية
function shareCorrectVerse(title, verseText) {
    if (navigator.share) {
        navigator.share({
            title: title,
            text: verseText,
            url: window.location.href
        });
    } else {
        copyCorrectVerse(`${title}\n${verseText}`);
        showCorrectNotification('تم نسخ الآية للمشاركة');
    }
}

// إظهار إشعار
function showCorrectNotification(message) {
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
function goBackToCorrectMoods() {
    const moodsSection = document.querySelector('.moods-section');
    const versesSection = document.querySelector('.verses-section');
    
    if (moodsSection) moodsSection.style.display = 'block';
    if (versesSection) versesSection.style.display = 'none';
    
    currentMood = null;
}

// تهيئة البحث في المشاعر
function initializeCorrectMoodSearch() {
    const searchInput = document.getElementById('moodSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        searchTerm = this.value.trim();
        renderCorrectMoodsGrid();
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
function clearCorrectMoodSearch() {
    const searchInput = document.getElementById('moodSearch');
    if (searchInput) {
        searchInput.value = '';
        searchTerm = '';
        renderCorrectMoodsGrid();
    }
}

// تهيئة الرسوم المتحركة
function initializeCorrectPageAnimations() {
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
const correctModalStyles = `
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
    
    .mood-card {
        cursor: pointer;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 15px;
        padding: 25px 20px;
        text-align: center;
        box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        border: 2px solid transparent;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
    }
    
    .mood-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 12px 30px rgba(0,0,0,0.2);
        border-color: var(--mood-color);
    }
    
    .mood-icon {
        font-size: 2.5rem;
        color: var(--mood-color);
        margin-bottom: 15px;
    }
    
    .mood-name-ar {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--mood-color);
        margin-bottom: 8px;
    }
    
    .mood-name-en {
        font-size: 1rem;
        color: #666;
        margin-bottom: 10px;
    }
`;

// إضافة الأنماط إلى الصفحة
if (!document.getElementById('correct-modal-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'correct-modal-styles';
    styleSheet.textContent = correctModalStyles;
    document.head.appendChild(styleSheet);
}
