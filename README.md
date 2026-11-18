# Сайт адвоката Иланы Унгер

Статический сайт на трёх языках: иврит (основной, `/`), русский (`/ru/`) и английский (`/en/`). Для каждого языка есть 6 страниц услуг. Хостинг — Netlify.

## Структура
- `site/` — готовый сайт. Netlify публикует именно эту папку.
- `source/` — исходники:
  - `src/v5.html` — шаблон главной страницы (CSS внутри);
  - `src/i18n.js` — тексты на трёх языках;
  - `src/legal.js` — политики;
  - `src/app5.js` — скрипты;
  - `src/services.py` — тексты страниц услуг;
  - `src/svc.css` — стиль страниц услуг;
  - `site.config.json` — домен, контакты, адрес;
  - `build_prod.py` — сборка.

## Сборка
```bash
cd source
npm install          # шрифты Google Fonts, которые хранятся на самом сайте
python3 build_prod.py   # пересобирает ../site
```
Нужны Python 3.12+, Node.js и ffmpeg (ffprobe).

## Перед запуском
1. Поменять `url` в `source/site.config.json` на настоящий домен и пересобрать. От него зависят canonical, hreflang, sitemap и schema.
2. Заполнить в `source/site.config.json` адрес офиса (`address`), а также `geo` и `opening_hours`, если они есть.
3. В `src/i18n.js` и `src/legal.js` заменить `[номер]`, `[מספר רישיון]`, `[адрес]` и описание доступности офиса.
4. Полный чек-лист — в `docs/LAUNCH_CHECKLIST.md`.
