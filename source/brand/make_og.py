import asyncio,base64
from pathlib import Path as P
from playwright.async_api import async_playwright
R=P(__file__).resolve().parent.parent
b64=lambda p,m:f'data:{m};base64,'+base64.b64encode(P(p).read_bytes()).decode()
tex=b64(R/'img/tex_night_own.webp','image/webp');photo=b64(R/'img/ilana_full.webp','image/webp')
fonts='<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@400&family=Noto+Serif+Hebrew:wght@400;500&family=IBM+Plex+Sans:wght@500&family=IBM+Plex+Sans+Hebrew:wght@500&display=swap" rel="stylesheet">'
T={'he':('עו״ד אילנה אונגר','מעמד בישראל לבני זוג','הליך מדורג, ידועים בציבור, ראיון וערר','rtl'),
   'ru':('Адвокат Илана Унгер','Статус в Израиле для пар','Ступенчатая процедура, собеседование, обжалование','ltr'),
   'en':('Adv. Ilana Unger','Israeli status for couples','Graduated procedure, interviews and appeals','ltr')}
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch();pg=await b.new_page(viewport={'width':1200,'height':630})
    for l,(n,h,s,d) in T.items():
      await pg.set_content(f'''<html dir="{d}"><head>{fonts}<style>body{{margin:0;width:1200px;height:630px;background:#2c3128 url({tex}) center/cover;font-family:'IBM Plex Sans','IBM Plex Sans Hebrew';color:#eeebe4;display:flex;overflow:hidden}}
      .t{{flex:1;padding:70px 64px;display:flex;flex-direction:column;justify-content:center}}.k{{font-size:20px;letter-spacing:.24em;text-transform:uppercase;color:#cbaa78}}
      h1{{font-family:'Noto Serif Display','Noto Serif Hebrew';font-weight:400;font-size:66px;line-height:1.05;margin:18px 0;background:linear-gradient(100deg,#f3e8d4,#cbaa78);-webkit-background-clip:text;color:transparent}}
      p{{font-size:24px;color:rgba(226,223,214,.8);margin:0}}.ph{{width:430px;background:url({photo}) center top/cover}}
      .ln{{height:2px;width:120px;background:linear-gradient(90deg,#cbaa78,transparent);margin:26px 0}}</style></head>
      <body><div class="t"><div class="k">{n}</div><h1>{h}</h1><div class="ln"></div><p>{s}</p><p style="margin-top:14px;font-size:20px;color:#cbaa78">עברית&ensp; Русский&ensp; English</p></div><div class="ph"></div></body></html>''')
      await pg.wait_for_timeout(1500);await pg.screenshot(path=str(R/f'brand/og-{l}.jpg'),type='jpeg',quality=88)
    await b.close()
asyncio.run(main())
