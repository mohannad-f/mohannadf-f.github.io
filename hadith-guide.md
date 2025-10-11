# دليل إضافة حديث جديد إلى قسم "أحاديث نبوية"

بسم الله الرحمن الرحيم

هذا الدليل يشرح لك خطوة بخطوة كيفية إضافة حديث نبوي جديد إلى موقع **BASIRA IMAN**. العملية بسيطة ولا تتطلب خبرة برمجية عميقة، فقط اتبع الخطوات التالية بعناية.

## الخطوات

### الخطوة الأولى: فتح الملف الصحيح

1.  افتح المجلد الذي يحتوي على ملفات الموقع.
2.  ابحث عن ملف باسم `simple-hadiths.html` وافتحه باستخدام أي محرر نصوص (مثل Notepad على ويندوز أو TextEdit على ماك).

### الخطوة الثانية: العثور على المكان الصحيح لإضافة الكود

1.  داخل الملف، ابحث عن التعليق التالي: `<!-- خيار واحد فقط: يتم التعديل -->`.
2.  ستجد أسفله كود بطاقة "يتم التعديل". يمكنك إما **استبدال** هذا الكود بالحديث الأول، أو **إضافة** كود الحديث الجديد **فوقه** أو **تحته** داخل عنصر `<div class="hadiths-grid">`.

### الخطوة الثالثة: نسخ ولصق قالب الحديث

انسخ الكود التالي بالكامل. هذا هو القالب الذي ستستخدمه لكل حديث جديد. قم بلصقه في المكان الذي حددته في الخطوة الثانية.

```html
<!-- بداية بطاقة الحديث -->
<div class="hadith-category-card" onclick="showHadithDetails(\'hadith-1\')">
    <div class="category-icon">
        <i class="fas fa-book-open"></i>
    </div>
    <div class="category-content">
        <h3 class="category-name-ar">اسم الحديث (مثال: البخاري 0001)</h3>
        <p class="category-name-en">Hadith Name (e.g., Bukhari 0001)</p>
        <p class="category-description">
            نبذة قصيرة عن الحديث أو موضوعه...
        </p>
    </div>
    <div class="category-arrow">
        <i class="fas fa-arrow-left"></i>
    </div>
</div>
<!-- نهاية بطاقة الحديث -->

<!-- بداية تفاصيل الحديث (النافذة المنبثقة) -->
<div id="hadith-1" class="hadith-modal" style="display: none;">
    <div class="modal-content">
        <div class="modal-header">
            <h2>اسم الحديث (مثال: البخاري 0001)</h2>
            <button class="close-modal" onclick="closeHadithDetails(\'hadith-1\')">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="modal-body">
            <div class="hadith-text-display">
                <p class="hadith-arabic">
                    <strong>الحديث:</strong> "قال رسول الله صلى الله عليه وسلم: ..."
                </p>
            </div>
            <div class="hadith-explanation">
                <h3>الشرح والتوضيح</h3>
                <div class="explanation-text">
                    <p><strong>شرح الحديث:</strong> عزيزي القارئ، رسول الله محمد يقول هنا ...</p>
                    <p class="explanation-en"><strong>Dear reader,</strong> Prophet Muhammad said here...</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- نهاية تفاصيل الحديث -->
```

### الخطوة الرابعة: تعديل محتوى الحديث

الآن، قم بتعديل الأجزاء المميزة في القالب الذي نسخته:

1.  **`hadith-1`**: هذا معرف فريد للحديث. لكل حديث جديد، يجب أن تغير الرقم (مثلاً `hadith-2`, `hadith-3` وهكذا). تأكد من تغييره في **ثلاثة أماكن**:
    *   `onclick="showHadithDetails(\'hadith-1\')"`
    *   `id="hadith-1"`
    *   `onclick="closeHadithDetails(\'hadith-1\')"`

2.  **`اسم الحديث`**: استبدل "اسم الحديث (مثال: البخاري 0001)" باسم الحديث الفعلي ورقمه.

3.  **`Hadith Name`**: استبدلها بالترجمة الإنجليزية لاسم الحديث.

4.  **`نبذة قصيرة عن الحديث`**: اكتب هنا وصفاً موجزاً للحديث.

5.  **`نص الحديث`**: داخل `<p class="hadith-arabic">`، استبدل "قال رسول الله صلى الله عليه وسلم: ..." بنص الحديث الشريف كاملاً.

6.  **`شرح الحديث`**: داخل `<div class="explanation-text">`، استبدل النص التوضيحي بالشرح الذي أعددته باللغة العربية.

7.  **`English Explanation`**: استبدل النص التوضيحي بالترجمة الإنجليزية للشرح.

### مثال عملي

لإضافة حديث ثانٍ، ستنسخ القالب مرة أخرى وتضعه تحت كود الحديث الأول، ثم تغير `hadith-1` إلى `hadith-2` وتملأ البيانات الجديدة.

```html
<!-- الحديث الأول -->
<div class="hadith-category-card" onclick="showHadithDetails(\'hadith-1\')">...</div>
<div id="hadith-1" class="hadith-modal" style="display: none;">...</div>

<!-- الحديث الثاني (الجديد) -->
<div class="hadith-category-card" onclick="showHadithDetails(\'hadith-2\')">
    <div class="category-icon">
        <i class="fas fa-book-open"></i>
    </div>
    <div class="category-content">
        <h3 class="category-name-ar">الأربعون النووية: الحديث الأول</h3>
        <p class="category-name-en">Nawawi\'s 40: Hadith 1</p>
        <p class="category-description">
            إنما الأعمال بالنيات...
        </p>
    </div>
    <!-- ... -->
</div>
<div id="hadith-2" class="hadith-modal" style="display: none;">
    <!-- ... (محتوى الحديث الثاني) ... -->
</div>
```

### الخطوة الخامسة: حفظ الملف

بعد الانتهاء من إضافة وتعديل الأحاديث، قم بحفظ ملف `simple-hadiths.html`.

---

بهذه الطريقة، يمكنك إضافة أي عدد من الأحاديث إلى الموقع. فقط تذكر أن تعطي لكل حديث **معرفاً فريداً** (`hadith-1`, `hadith-2`, etc.) وتملأ البيانات الصحيحة.

**ملاحظة هامة:** يجب أيضاً إضافة بعض الأكواد في ملف `simple-hadiths-script.js` لتفعيل النوافذ المنبثقة. لقد قمت بتجهيزها لك في الملفات المحدثة.

وفقك الله.

