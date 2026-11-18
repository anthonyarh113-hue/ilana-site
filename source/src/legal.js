/* ---------- legal documents — v2 (Amendment 13 / IS 5568 / §30A / Bar advertising rules)
   Placeholders in [square brackets] must be filled by Ilana before launch. ---------- */
const OFFICE={
 he:{name:'עו״ד אילנה אונגר',lic:'מ.ר. [מספר רישיון]',addr:'[כתובת המשרד]'},
 ru:{name:'адвокат Илана Унгер',lic:'лицензия № [номер]',addr:'[адрес офиса]'},
 en:{name:'Adv. Ilana Unger',lic:'Bar licence No. [number]',addr:'[office address]'}
};
const MAIL='ilana.unger.law@gmail.com',TEL='052-8445721';
const LEGAL={
he:{
privacy:['מדיניות פרטיות',`
<p class="lead">אנו מכבדים את פרטיותכם. מסמך זה מסביר איזה מידע נאסף באתר, לאילו מטרות, למי הוא מועבר ומהן זכויותיכם, בהתאם לחוק הגנת הפרטיות, התשמ״א-1981 (כולל תיקון 13), לתקנות הגנת הפרטיות (אבטחת מידע), התשע״ז-2017, ובמידת הצורך — לתקנות האירופיות (GDPR).</p>
<h4>1. מי אחראי על המידע</h4><p>בעלת השליטה במאגר: ${OFFICE.he.name}, ${OFFICE.he.lic}, ${OFFICE.he.addr}. טלפון ${TEL}, דוא״ל ${MAIL}. האחראית לפניות בנושא פרטיות: אילנה אונגר, באותם פרטי קשר.</p>
<h4>2. איזה מידע נאסף</h4><ul>
<li><b>מידע שאתם מוסרים ביוזמתכם</b> — בטופס, בצ׳אט או בוואטסאפ: שם, טלפון, דוא״ל ועיר (לא חובה), נושא הפנייה ותיאור קצר.</li>
<li><b>מידע טכני הכרחי</b> — שפה, מצב יום/לילה, הגדרות נגישות ובחירת העוגיות. נשמר בדפדפן שלכם בלבד.</li>
<li><b>יומני שרת</b> — כתובת IP, זמן ודפדפן, אצל ספק האחסון, לצורכי אבטחה בלבד.</li>
<li><b>אנליטיקה ופרסום</b> — רק אם אישרתם זאת בחלון העוגיות.</li></ul>
<h4>3. מטרות השימוש והבסיס לכך</h4><ul>
<li>מענה לפנייה ותיאום פגישת ייעוץ — לבקשתכם.</li>
<li>מתן שירות משפטי — במסגרת הסכם שכר טרחה.</li>
<li>עמידה בחובות על פי דין (לרבות חובות זיהוי, רישום ושמירת מסמכים).</li>
<li>אבטחת האתר ומניעת שימוש לרעה.</li>
<li>אנליטיקה ומדידת פרסום — רק בהסכמתכם.</li>
<li>דברי פרסומת ועדכונים — רק בהסכמה מפורשת ונפרדת, לפי סעיף 30א לחוק התקשורת (בזק ושידורים). אפשר להסיר את ההסכמה בכל עת.</li></ul>
<h4>4. האם חובה למסור מידע</h4><p>אין חובה חוקית למסור מידע. ללא שם וטלפון לא נוכל לחזור אליכם; שדות שמסומנים „לא חובה” ניתן להשאיר ריקים. סירוב לעוגיות אנליטיקה או שיווק אינו פוגע בשימוש באתר.</p>
<h4>5. מידע רגיש — בקשה חשובה</h4><p>פנייה בנושא מעמד עשויה לכלול מידע בעל רגישות מיוחדת (אזרחות, מצב משפחתי ועוד). אנא אל תכתבו בטופס או בצ׳אט פרטים מעבר לנדרש, מספרי תעודות או מסמכים סרוקים — את הפרטים נעבור יחד בפגישה ובדרך מאובטחת. כל מידע שתמסרו מוגן בחובת הסודיות ובחיסיון עורך דין–לקוח (סעיף 90 לחוק לשכת עורכי הדין).</p>
<h4>6. למי מועבר המידע</h4><p>איננו מוכרים או משכירים מידע. המידע מעובד אצל ספקים שמסייעים לנו בלבד: אחסון האתר והטפסים — Netlify, Inc.; דוא״ל — Google; וואטסאפ — Meta Platforms (כשאתם פונים בוואטסאפ); ובהסכמתכם — Google Analytics, Google Ads ו-Meta Pixel. מידע יועבר לרשויות (למשל רשות האוכלוסין וההגירה) רק במסגרת הטיפול בתיק לבקשתכם, או כשהדין מחייב.</p>
<h4>7. העברת מידע לחו״ל</h4><p>חלק מהספקים שומרים מידע מחוץ לישראל (ארה״ב והאיחוד האירופי). ההעברה נעשית בהתאם לתקנות הגנת הפרטיות (העברת מידע למאגרי מידע שמחוץ לגבולות המדינה), התשס״א-2001, ובכפוף להתחייבויות חוזיות של הספקים. ניתן לבקש מאיתנו פרטים על אמצעי ההגנה.</p>
<h4>8. כמה זמן נשמר המידע</h4><p>פנייה שלא הבשילה לטיפול — עד 24 חודשים מהקשר האחרון, ולאחר מכן נמחקת. חומרי תיק של לקוח — לפרק הזמן שנדרש על פי דין ועל פי כללי האתיקה המקצועית. נתוני עוגיות — לפי מדיניות העוגיות.</p>
<h4>9. אבטחת מידע</h4><p>האתר מוצפן (HTTPS), הגישה למידע מוגבלת, ואנו פועלים לפי תקנות אבטחת המידע. במקרה של אירוע אבטחה חמור נודיע לרשות להגנת הפרטיות ובמידת הצורך גם לכם.</p>
<h4>10. הזכויות שלכם</h4><ul>
<li>לעיין במידע עליכם (סעיף 13 לחוק).</li><li>לבקש לתקן או למחוק מידע שגוי, לא שלם או לא מעודכן (סעיף 14).</li>
<li>לבקש הסרה מכל דיוור ולבטל הסכמה בכל עת.</li>
<li>תושבי האיחוד האירופי — גם הזכויות לפי ה-GDPR: מחיקה, הגבלת עיבוד, ניוד והתנגדות.</li></ul>
<p>פנו אלינו בדוא״ל ${MAIL} — נשיב תוך 30 יום. ניתן גם לפנות לרשות להגנת הפרטיות במשרד המשפטים.</p>
<h4>11. הצ׳אט באתר</h4><p>העוזר בצ׳אט מציג תשובות כלליות שנכתבו מראש. הוא אינו מקבל החלטות לגביכם, אינו יוצר פרופיל ואינו מהווה ייעוץ משפטי.</p>
<h4>12. קטינים</h4><p>האתר אינו מיועד לבני פחות מ-18. פנייה בשם קטין תיעשה על ידי הורה או אפוטרופוס.</p>
<h4>13. שינויים</h4><p>המדיניות עשויה להתעדכן. הגרסה העדכנית תמיד באתר, עם תאריך העדכון.</p>`],
cookies:['מדיניות עוגיות',`
<p class="lead">עוגיות (cookies) ואחסון מקומי הם קבצים קטנים שנשמרים בדפדפן. אנו משתמשים רק במה שהכרחי, ובכל השאר — רק אחרי שאישרתם.</p>
<h4>מה אנחנו שומרים</h4>
<table class="ck-t"><thead><tr><th>שם</th><th>מטרה</th><th>סוג</th><th>משך</th></tr></thead><tbody>
<tr><td dir="ltr">iu_consent</td><td>הבחירה שלכם לגבי עוגיות</td><td>הכרחי</td><td>12 חודשים</td></tr>
<tr><td dir="ltr">lang, theme, iu_a11y</td><td>שפה, מצב יום/לילה, הגדרות נגישות</td><td>הכרחי</td><td>עד מחיקה בדפדפן</td></tr>
<tr><td dir="ltr">iu</td><td>אילו חלונות כבר הוצגו לכם</td><td>הכרחי</td><td>עד סגירת הלשונית</td></tr>
<tr><td dir="ltr">_ga, _ga_*</td><td>Google Analytics — סטטיסטיקת ביקורים</td><td>אנליטיקה</td><td>עד 24 חודשים</td></tr>
<tr><td dir="ltr">_gcl_au</td><td>Google Ads — מדידת מודעות</td><td>שיווק</td><td>90 יום</td></tr>
<tr><td dir="ltr">_fbp</td><td>Meta Pixel — מדידת מודעות</td><td>שיווק</td><td>90 יום</td></tr></tbody></table>
<p>כלי אנליטיקה ושיווק נטענים רק לאחר הסכמה (Google Consent Mode במצב „נדחה” כברירת מחדל). לספקים אלה אנחנו לא מעבירים תוכן של טפסים.</p>
<h4>איך משנים בחירה</h4><p>בכל עת דרך „הגדרות עוגיות” בתחתית האתר. אפשר גם למחוק עוגיות בהגדרות הדפדפן. נשאל אתכם שוב כעבור 12 חודשים.</p>
<h4>תכנים חיצוניים</h4><p>קישורים לוואטסאפ, אינסטגרם ופייסבוק מובילים לשירותים של Meta, שחלה עליהם מדיניות הפרטיות שלהם. הגופנים והסרטונים באתר מאוחסנים אצלנו ואינם נטענים משרתים חיצוניים.</p>`],
accessibility:['הצהרת נגישות',`
<p class="lead">אנו רואים חשיבות רבה במתן שירות שוויוני לכל אדם, לרבות אנשים עם מוגבלות. האתר הותאם לפי תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013, ולפי התקן הישראלי ת״י 5568 (המבוסס על WCAG 2.0) ברמה AA.</p>
<h4>מה הותאם באתר</h4><ul>
<li>ניווט מלא באמצעות מקלדת, עם מיקוד נראה וקישור „דלג לתוכן”.</li>
<li>תפריט נגישות: הגדלה והקטנה של טקסט, ניגודיות גבוהה, הדגשת קישורים, עצירת אנימציות, גופן קריא.</li>
<li>טקסט חלופי לתמונות ותוויות לטפסים ולכפתורים.</li>
<li>מבנה כותרות תקין, תמיכה בקוראי מסך (NVDA, VoiceOver) ובכיווניות עברית מימין לשמאל.</li>
<li>התאמה לטלפונים ולטאבלטים, ושמירה על העדפת „הפחתת תנועה” של מערכת ההפעלה.</li></ul>
<p>האתר נבדק בדפדפנים Chrome, Safari, Firefox ו-Edge העדכניים.</p>
<h4>הסתייגויות</h4><p>הסרטונים באתר כוללים כתוביות צרובות, אך עדיין אין להם תמליל מלא. ייתכנו רכיבים נוספים שטרם הונגשו במלואם — אנו ממשיכים לשפר, ונשמח לקבל הערות.</p>
<h4>נגישות המשרד</h4><p>[פרטי הנגישות הפיזית של המשרד: כניסה, מעלית, חניית נכים, שירותים נגישים — יש להשלים]. פגישות אפשר לקיים גם בטלפון או בווידאו.</p>
<h4>רכזת הנגישות</h4><p>אילנה אונגר · טלפון ${TEL} · דוא״ל ${MAIL}. נשיב לכל פנייה בתוך 7 ימי עבודה. אפשר לקבל מאיתנו מידע ושירות גם בדרך חלופית לפי בקשתכם.</p>
<p>תאריך עריכת ההצהרה: 18.11.2026.</p>`],
terms:['תנאי שימוש והבהרות',`
<h4>1. מי אנחנו</h4><p>האתר מופעל על ידי ${OFFICE.he.name}, ${OFFICE.he.lic}, ${OFFICE.he.addr}. טלפון ${TEL}, דוא״ל ${MAIL}.</p>
<h4>2. המידע באתר אינו ייעוץ משפטי</h4><p>התכנים באתר, בסרטונים ובצ׳אט הם מידע כללי בלבד, נכון למועד פרסומו. הם אינם ייעוץ משפטי ואינם תחליף לו. כל מקרה נבחן לגופו, והחקיקה ונוהלי רשות האוכלוסין וההגירה משתנים מעת לעת.</p>
<h4>3. אין יחסי עורך דין–לקוח</h4><p>פנייה דרך האתר, הטופס, הצ׳אט או הוואטסאפ אינה יוצרת יחסי עורך דין–לקוח. יחסים כאלה נוצרים רק לאחר חתימה על הסכם שכר טרחה.</p>
<h4>4. אין הבטחת תוצאה</h4><p>ההחלטות בעניין מעמד מתקבלות על ידי הרשויות המוסמכות. איננו מבטיחים תוצאה, לוח זמנים או אישור. תוצאות קודמות והמלצות אינן מבטיחות תוצאה דומה בתיק אחר.</p>
<h4>5. המלצות לקוחות</h4><p>ההמלצות באתר נכתבו על ידי לקוחות ופורסמו בהסכמתם. המלצות שתורגמו מסומנות ככאלה. הן משקפות חוויה אישית בלבד.</p>
<h4>6. שכר טרחה</h4><p>תנאי פגישת הייעוץ הראשונה מפורטים באתר. שכר הטרחה לטיפול בתיק נקבע מראש ובכתב, בהתאם למורכבות התיק. אגרות ממשלתיות ותשלומים לגורמים שלישיים אינם כלולים, אלא אם נכתב אחרת.</p>
<h4>7. קישורים ושירותים חיצוניים</h4><p>האתר מקשר לוואטסאפ, אינסטגרם ופייסבוק ולאתרים ממשלתיים. איננו אחראים לתוכן או למדיניות של אתרים אלה.</p>
<h4>8. קניין רוחני</h4><p>העיצוב, הטקסטים, התמונות והסרטונים שייכים למשרד או מורשים לו. אין להעתיק או לפרסם אותם ללא אישור בכתב.</p>
<h4>9. אחריות</h4><p>אנו משתדלים שהמידע יהיה מדויק ועדכני, אך האתר ניתן כפי שהוא (AS IS). המשרד לא יישא באחריות לנזק שנגרם מהסתמכות על מידע כללי באתר ללא ייעוץ אישי.</p>
<h4>10. דין וסמכות שיפוט</h4><p>על השימוש באתר חל הדין הישראלי, וסמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים בישראל.</p>
<h4>11. שפות</h4><p>האתר זמין בעברית, ברוסית ובאנגלית. במקרה של סתירה בין הגרסאות — הנוסח העברי קובע.</p>`]},

ru:{
privacy:['Политика конфиденциальности',`
<p class="lead">Мы уважаем вашу приватность. Здесь объясняется, какие данные собирает сайт, зачем, кому они передаются и какие у вас права — в соответствии с израильским Законом о защите частной жизни 1981 г. (включая поправку 13), Правилами о безопасности информации 2017 г. и, где применимо, европейским регламентом GDPR.</p>
<h4>1. Кто отвечает за данные</h4><p>Владелец базы данных: ${OFFICE.ru.name}, ${OFFICE.ru.lic}, ${OFFICE.ru.addr}. Телефон ${TEL}, e-mail ${MAIL}. Ответственное лицо по вопросам приватности — Илана Унгер, по тем же контактам.</p>
<h4>2. Какие данные мы собираем</h4><ul>
<li><b>То, что вы сообщаете сами</b> — в форме, чате или WhatsApp: имя, телефон, e-mail и город (необязательно), тема обращения и короткое описание.</li>
<li><b>Необходимые технические данные</b> — язык, дневной или ночной режим, настройки доступности и ваш выбор cookies. Хранятся только в вашем браузере.</li>
<li><b>Журналы сервера</b> — IP-адрес, время, браузер — у хостинг-провайдера, только для безопасности.</li>
<li><b>Аналитика и реклама</b> — только если вы согласились в окне cookies.</li></ul>
<h4>3. Зачем и на каком основании</h4><ul>
<li>Ответить на обращение и записать на консультацию — по вашей просьбе.</li>
<li>Оказывать юридические услуги — по договору об оплате услуг.</li>
<li>Выполнять обязанности по закону (идентификация клиента, учёт, хранение документов).</li>
<li>Защищать сайт от злоупотреблений.</li>
<li>Аналитика и измерение рекламы — только с вашего согласия.</li>
<li>Рекламные сообщения и новости — только с отдельного явного согласия по ст. 30א Закона о связи. Отписаться можно в любой момент.</li></ul>
<h4>4. Обязаны ли вы давать данные</h4><p>Законной обязанности нет. Без имени и телефона мы не сможем вам ответить; поля «необязательно» можно не заполнять. Отказ от cookies аналитики и рекламы не мешает пользоваться сайтом.</p>
<h4>5. Чувствительная информация — важная просьба</h4><p>Обращение по вопросам статуса может содержать сведения особой чувствительности (гражданство, семейное положение и т. п.). Пожалуйста, не пишите в форме или чате лишних подробностей, номеров документов и не присылайте сканы — детали обсудим на консультации, по защищённому каналу. Всё, что вы сообщаете, защищено адвокатской тайной (ст. 90 Закона о Коллегии адвокатов).</p>
<h4>6. Кому передаются данные</h4><p>Мы не продаём и не сдаём данные. Их обрабатывают только поставщики, которые нам помогают: хостинг и формы — Netlify, Inc.; почта — Google; WhatsApp — Meta Platforms (если вы пишете в WhatsApp); с вашего согласия — Google Analytics, Google Ads и Meta Pixel. Госорганам (например, Управлению по делам населения и иммиграции) данные передаются только в рамках вашего дела по вашему поручению или если этого требует закон.</p>
<h4>7. Передача за границу</h4><p>Часть поставщиков хранит данные за пределами Израиля (США и ЕС). Передача ведётся по Правилам о защите частной жизни (передача информации в базы за границей) 2001 г. и договорным гарантиям поставщиков. Подробности о гарантиях можно запросить у нас.</p>
<h4>8. Сколько храним</h4><p>Обращение, после которого не было договора, — до 24 месяцев с последнего контакта, затем удаляется. Материалы дела клиента — в течение срока, который требуют закон и правила профессиональной этики. Данные cookies — см. Политику cookies.</p>
<h4>9. Безопасность</h4><p>Сайт работает по HTTPS, доступ к данным ограничен, мы соблюдаем Правила о безопасности информации. О серьёзном инциденте сообщим в Управление по защите частной жизни и при необходимости — вам.</p>
<h4>10. Ваши права</h4><ul>
<li>Ознакомиться с данными о себе (ст. 13 Закона).</li><li>Потребовать исправить или удалить неточные, неполные или устаревшие данные (ст. 14).</li>
<li>Отписаться от любых рассылок и отозвать согласие в любой момент.</li>
<li>Жителям ЕС — также права по GDPR: удаление, ограничение обработки, переносимость, возражение.</li></ul>
<p>Пишите на ${MAIL} — ответим в течение 30 дней. Вы также вправе обратиться в Управление по защите частной жизни Министерства юстиции.</p>
<h4>11. Чат на сайте</h4><p>Помощник в чате показывает заранее подготовленные общие ответы. Он не принимает решений о вас, не создаёт профиль и не является юридической консультацией.</p>
<h4>12. Несовершеннолетние</h4><p>Сайт не предназначен для лиц младше 18 лет. Обращение от имени несовершеннолетнего — через родителя или опекуна.</p>
<h4>13. Изменения</h4><p>Политика может обновляться. Актуальная версия всегда на сайте, с датой обновления.</p>`],
cookies:['Политика cookies',`
<p class="lead">Cookies и локальное хранилище — небольшие файлы в вашем браузере. Мы используем только необходимое, а всё остальное — лишь после вашего согласия.</p>
<h4>Что мы сохраняем</h4>
<table class="ck-t"><thead><tr><th>Название</th><th>Зачем</th><th>Тип</th><th>Срок</th></tr></thead><tbody>
<tr><td>iu_consent</td><td>Ваш выбор по cookies</td><td>Необходимые</td><td>12 месяцев</td></tr>
<tr><td>lang, theme, iu_a11y</td><td>Язык, дневной/ночной режим, доступность</td><td>Необходимые</td><td>До очистки браузера</td></tr>
<tr><td>iu</td><td>Какие окна вам уже показаны</td><td>Необходимые</td><td>До закрытия вкладки</td></tr>
<tr><td>_ga, _ga_*</td><td>Google Analytics — статистика посещений</td><td>Аналитика</td><td>До 24 месяцев</td></tr>
<tr><td>_gcl_au</td><td>Google Ads — измерение рекламы</td><td>Маркетинг</td><td>90 дней</td></tr>
<tr><td>_fbp</td><td>Meta Pixel — измерение рекламы</td><td>Маркетинг</td><td>90 дней</td></tr></tbody></table>
<p>Аналитика и реклама загружаются только после согласия (Google Consent Mode по умолчанию в режиме «запрещено»). Содержимое форм этим сервисам не передаётся.</p>
<h4>Как изменить выбор</h4><p>В любой момент — через «Настройки cookies» внизу сайта или в настройках браузера. Через 12 месяцев мы спросим снова.</p>
<h4>Внешние сервисы</h4><p>Ссылки на WhatsApp, Instagram и Facebook ведут на сервисы Meta с их собственной политикой. Шрифты и видео на сайте хранятся у нас и не загружаются с внешних серверов.</p>`],
accessibility:['Заявление о доступности',`
<p class="lead">Мы стремимся, чтобы сайтом мог пользоваться каждый, в том числе люди с инвалидностью. Сайт адаптирован по Правилам о равных правах людей с инвалидностью (адаптация доступности услуг) 2013 г. и израильскому стандарту IS 5568 (на основе WCAG 2.0), уровень AA.</p>
<h4>Что сделано</h4><ul>
<li>Полная навигация с клавиатуры, видимый фокус и ссылка «Перейти к содержанию».</li>
<li>Меню доступности: увеличение и уменьшение текста, высокий контраст, выделение ссылок, остановка анимаций, читаемый шрифт.</li>
<li>Альтернативный текст изображений, подписи полей и кнопок.</li>
<li>Правильная структура заголовков, поддержка экранных дикторов (NVDA, VoiceOver) и иврита справа налево.</li>
<li>Адаптация для телефонов и планшетов, учёт системной настройки «уменьшить движение».</li></ul>
<p>Сайт проверен в актуальных Chrome, Safari, Firefox и Edge.</p>
<h4>Ограничения</h4><p>В видео есть вшитые субтитры, но пока нет полной расшифровки. Некоторые элементы могут быть адаптированы не полностью — мы продолжаем работу и будем рады замечаниям.</p>
<h4>Доступность офиса</h4><p>[Сведения о физической доступности офиса: вход, лифт, парковка для людей с инвалидностью, туалет — заполнить]. Встречу можно провести и по телефону или видеосвязи.</p>
<h4>Координатор по доступности</h4><p>Илана Унгер · ${TEL} · ${MAIL}. Ответим в течение 7 рабочих дней и по просьбе предоставим информацию или услугу другим удобным способом.</p>
<p>Дата составления заявления: 18.11.2026.</p>`],
terms:['Условия использования',`
<h4>1. Кто мы</h4><p>Сайт принадлежит: ${OFFICE.ru.name}, ${OFFICE.ru.lic}, ${OFFICE.ru.addr}. Телефон ${TEL}, e-mail ${MAIL}.</p>
<h4>2. Информация на сайте — не юридическая консультация</h4><p>Тексты, видео и ответы чата — общая информация на дату публикации. Это не юридическая консультация и не её замена. Каждый случай рассматривается индивидуально, а законы и процедуры Управления по делам населения и иммиграции меняются.</p>
<h4>3. Отношения адвокат–клиент</h4><p>Обращение через сайт, форму, чат или WhatsApp не создаёт отношений адвокат–клиент. Они возникают только после подписания договора об оплате услуг.</p>
<h4>4. Без гарантии результата</h4><p>Решения о статусе принимают уполномоченные органы. Мы не гарантируем результат, сроки или одобрение. Прошлые результаты и отзывы не гарантируют такого же результата в другом деле.</p>
<h4>5. Отзывы клиентов</h4><p>Отзывы написаны клиентами и опубликованы с их согласия. Переведённые отзывы помечены. Они отражают только личный опыт.</p>
<h4>6. Стоимость</h4><p>Условия первой консультации указаны на сайте. Стоимость ведения дела согласуется заранее и письменно, в зависимости от сложности. Госпошлины и оплата третьим лицам не включены, если не указано иное.</p>
<h4>7. Ссылки и внешние сервисы</h4><p>Сайт ссылается на WhatsApp, Instagram, Facebook и государственные сайты. Мы не отвечаем за их содержание и политику.</p>
<h4>8. Интеллектуальная собственность</h4><p>Дизайн, тексты, фото и видео принадлежат офису или используются по лицензии. Копирование и публикация — только с письменного разрешения.</p>
<h4>9. Ответственность</h4><p>Мы стараемся, чтобы информация была точной и актуальной, но сайт предоставляется «как есть». Офис не отвечает за ущерб от решений, принятых на основе общей информации без личной консультации.</p>
<h4>10. Право и подсудность</h4><p>Применяется право Израиля; исключительная подсудность — компетентные суды Израиля.</p>
<h4>11. Языки</h4><p>Сайт доступен на иврите, русском и английском. При расхождении версий приоритет у текста на иврите.</p>`]},

en:{
privacy:['Privacy Policy',`
<p class="lead">We respect your privacy. This policy explains what data the site collects, why, who receives it and what your rights are, under Israel’s Protection of Privacy Law, 5741-1981 (including Amendment 13), the Privacy Protection (Data Security) Regulations, 2017 and, where applicable, the EU GDPR.</p>
<h4>1. Who is responsible</h4><p>Database controller: ${OFFICE.en.name}, ${OFFICE.en.lic}, ${OFFICE.en.addr}. Phone ${TEL}, e-mail ${MAIL}. Privacy contact: Ilana Unger, at the same details.</p>
<h4>2. What we collect</h4><ul>
<li><b>Information you give us</b> — via the form, chat or WhatsApp: name, phone, e-mail and city (optional), topic and a short description.</li>
<li><b>Essential technical data</b> — language, day/night mode, accessibility settings and your cookie choice. Stored in your browser only.</li>
<li><b>Server logs</b> — IP address, time and browser, kept by our host for security only.</li>
<li><b>Analytics and advertising</b> — only if you agree in the cookie banner.</li></ul>
<h4>3. Purposes and legal basis</h4><ul>
<li>Replying to you and booking a consultation — at your request.</li>
<li>Providing legal services — under a fee agreement.</li>
<li>Meeting legal obligations (client identification, record-keeping).</li>
<li>Keeping the site secure.</li>
<li>Analytics and ad measurement — only with your consent.</li>
<li>Marketing messages — only with separate, explicit consent under section 30A of the Communications Law. You can withdraw at any time.</li></ul>
<h4>4. Do you have to provide data?</h4><p>There is no legal obligation. Without a name and phone number we cannot reply; fields marked “optional” can be left empty. Refusing analytics or marketing cookies does not affect your use of the site.</p>
<h4>5. Sensitive information — an important request</h4><p>A status enquiry may involve especially sensitive information (citizenship, family status, etc.). Please do not include unnecessary details, ID numbers or scanned documents in the form or chat — we will go through them together at the consultation, over a secure channel. Everything you share is protected by lawyer–client confidentiality and privilege (section 90 of the Israel Bar Association Law).</p>
<h4>6. Who receives your data</h4><p>We never sell or rent data. It is processed only by providers who help us: hosting and forms — Netlify, Inc.; e-mail — Google; WhatsApp — Meta Platforms (when you contact us there); and, with your consent, Google Analytics, Google Ads and Meta Pixel. Data is shared with authorities (such as the Population and Immigration Authority) only as part of your case on your instructions, or where the law requires.</p>
<h4>7. Transfers abroad</h4><p>Some providers store data outside Israel (US and EU). Transfers follow the Privacy Protection (Transfer of Data to Databases Abroad) Regulations, 2001 and the providers’ contractual safeguards. You may ask us for details of the safeguards.</p>
<h4>8. Retention</h4><p>Enquiries that did not become a case — up to 24 months after the last contact, then deleted. Client files — for the period required by law and the rules of professional ethics. Cookie data — see the Cookie Policy.</p>
<h4>9. Security</h4><p>The site uses HTTPS, access to data is restricted, and we follow the Data Security Regulations. We will notify the Privacy Protection Authority — and you, where needed — of any serious incident.</p>
<h4>10. Your rights</h4><ul>
<li>Access your data (section 13 of the Law).</li><li>Ask us to correct or delete inaccurate, incomplete or outdated data (section 14).</li>
<li>Unsubscribe from any messages and withdraw consent at any time.</li>
<li>EU residents also have GDPR rights: erasure, restriction, portability and objection.</li></ul>
<p>E-mail ${MAIL} — we reply within 30 days. You may also contact the Privacy Protection Authority at the Ministry of Justice.</p>
<h4>11. The chat assistant</h4><p>The chat shows pre-written general answers. It makes no decisions about you, builds no profile and is not legal advice.</p>
<h4>12. Minors</h4><p>The site is not intended for under-18s. Enquiries on behalf of a minor should come from a parent or guardian.</p>
<h4>13. Changes</h4><p>This policy may be updated; the current version, with its date, is always on the site.</p>`],
cookies:['Cookie Policy',`
<p class="lead">Cookies and local storage are small files kept in your browser. We use only what is essential — everything else only after you agree.</p>
<h4>What we store</h4>
<table class="ck-t"><thead><tr><th>Name</th><th>Purpose</th><th>Type</th><th>Duration</th></tr></thead><tbody>
<tr><td>iu_consent</td><td>Your cookie choice</td><td>Essential</td><td>12 months</td></tr>
<tr><td>lang, theme, iu_a11y</td><td>Language, day/night mode, accessibility</td><td>Essential</td><td>Until cleared</td></tr>
<tr><td>iu</td><td>Which pop-ups you have already seen</td><td>Essential</td><td>Until the tab closes</td></tr>
<tr><td>_ga, _ga_*</td><td>Google Analytics — visit statistics</td><td>Analytics</td><td>Up to 24 months</td></tr>
<tr><td>_gcl_au</td><td>Google Ads — ad measurement</td><td>Marketing</td><td>90 days</td></tr>
<tr><td>_fbp</td><td>Meta Pixel — ad measurement</td><td>Marketing</td><td>90 days</td></tr></tbody></table>
<p>Analytics and marketing tools load only after consent (Google Consent Mode defaults to “denied”). Form contents are never sent to them.</p>
<h4>Changing your choice</h4><p>Any time via “Cookie settings” at the bottom of the site, or in your browser settings. We will ask again after 12 months.</p>
<h4>External services</h4><p>Links to WhatsApp, Instagram and Facebook lead to Meta services with their own policies. Fonts and videos are hosted by us, not loaded from third-party servers.</p>`],
accessibility:['Accessibility Statement',`
<p class="lead">We want everyone, including people with disabilities, to be able to use this site. It has been adapted under the Equal Rights for Persons with Disabilities (Service Accessibility Adjustments) Regulations, 2013 and Israeli Standard IS 5568 (based on WCAG 2.0) at level AA.</p>
<h4>What we have done</h4><ul>
<li>Full keyboard navigation, visible focus and a “Skip to content” link.</li>
<li>Accessibility menu: larger/smaller text, high contrast, highlighted links, stop animations, readable font.</li>
<li>Alternative text for images and labels for fields and buttons.</li>
<li>Proper heading structure, screen-reader support (NVDA, VoiceOver) and right-to-left Hebrew.</li>
<li>Responsive layout and respect for the system “reduce motion” setting.</li></ul>
<p>Tested in current Chrome, Safari, Firefox and Edge.</p>
<h4>Limitations</h4><p>Videos have burned-in subtitles but no full transcript yet. Some elements may not be fully accessible — we keep improving and welcome feedback.</p>
<h4>Office accessibility</h4><p>[Physical accessibility of the office: entrance, lift, accessible parking, toilets — to be completed]. Meetings can also be held by phone or video.</p>
<h4>Accessibility coordinator</h4><p>Ilana Unger · ${TEL} · ${MAIL}. We reply within 7 business days and can provide information or service in an alternative way on request.</p>
<p>Statement prepared: 18.11.2026.</p>`],
terms:['Terms of Use',`
<h4>1. Who we are</h4><p>This site is operated by ${OFFICE.en.name}, ${OFFICE.en.lic}, ${OFFICE.en.addr}. Phone ${TEL}, e-mail ${MAIL}.</p>
<h4>2. Not legal advice</h4><p>Content on the site, in videos and in the chat is general information as of its publication date. It is not legal advice or a substitute for it. Every case is assessed individually, and laws and Population and Immigration Authority procedures change.</p>
<h4>3. No lawyer–client relationship</h4><p>Contacting us via the site, form, chat or WhatsApp does not create a lawyer–client relationship. That is formed only by a signed fee agreement.</p>
<h4>4. No guaranteed outcome</h4><p>Status decisions are made by the competent authorities. We do not guarantee any outcome, timeline or approval. Past results and reviews do not guarantee a similar result in another case.</p>
<h4>5. Client reviews</h4><p>Reviews were written by clients and are published with their consent. Translated reviews are marked. They reflect personal experience only.</p>
<h4>6. Fees</h4><p>The terms of the first consultation are stated on the site. Fees for handling a case are agreed in advance and in writing, according to complexity. Government fees and third-party costs are not included unless stated.</p>
<h4>7. Links and external services</h4><p>The site links to WhatsApp, Instagram, Facebook and government websites. We are not responsible for their content or policies.</p>
<h4>8. Intellectual property</h4><p>Design, text, photos and videos belong to the office or are used under licence. Do not copy or publish them without written permission.</p>
<h4>9. Liability</h4><p>We aim for accurate, current information, but the site is provided “as is”. The office is not liable for loss arising from reliance on general information without personal advice.</p>
<h4>10. Law and jurisdiction</h4><p>Israeli law applies; the competent courts of Israel have exclusive jurisdiction.</p>
<h4>11. Languages</h4><p>The site is available in Hebrew, Russian and English. If versions differ, the Hebrew text prevails.</p>`]}
};
