/* ============================ APP ============================ */
const PHONE='972528445721';
const VIDEOS={he:['{{VID:ilana_he}}','{{POSTER:poster_he}}'],ru:['{{VID:ilana_ru}}','{{POSTER:poster_ru}}']};VIDEOS.en=VIDEOS.he; // Netlify: ['/vid/ilana_he.mp4','/img/poster_he.jpg']
let LANG='he';
const FACE='{{IMG:face}}';
const PROD=!!document.documentElement.dataset.base;
const LANG_URL={he:'/',ru:'/ru/',en:'/en/'};
const SVC_URL=window.SVC_URL||{};
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const S=k=>I18N[LANG][k];
const LS={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),seg=(p,a,b)=>clamp((p-a)/(b-a));
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const fmt=s=>isFinite(s)?Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0'):'0:00';
let sess={};try{sess=JSON.parse(sessionStorage.getItem('iu')||'{}')}catch(e){}
const saveSess=()=>{try{sessionStorage.setItem('iu',JSON.stringify(sess))}catch(e){}};
function track(ev,p){p=p||{};try{window.gtag&&gtag('event',ev,p)}catch(e){}
  try{if(window.fbq){const m={generate_lead:['track','Lead'],contact_whatsapp:['track','Contact'],contact_phone:['track','Contact'],contact_email:['track','Contact'],video_play:['trackCustom','VideoPlay']}[ev];m&&fbq(m[0],m[1],{content_name:p.source||ev,language:LANG})}}catch(e){}}
/* click tracking on every contact link */
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href]');if(!a)return;const h=a.getAttribute('href')||'';
  if(/wa\.me|whatsapp/i.test(h))track('contact_whatsapp',{source:a.dataset.track||a.className||'link'});
  else if(h.startsWith('tel:'))track('contact_phone',{source:a.dataset.track||'link'});
  else if(h.startsWith('mailto:'))track('contact_email',{source:'link'});
  else if(/instagram\.com/.test(h))track('social_click',{network:'instagram'})},true);
document.addEventListener('click',e=>{const a=e.target.closest('[data-track]');if(a)track(a.dataset.track)});

/* ---------------- language ---------------- */
function setLang(l,first){
  LANG=l;const h=document.documentElement;h.lang=l;h.dir=l==='he'?'rtl':'ltr';if(!PROD)document.title=S('title');
  $$('[data-i18n]').forEach(el=>{const v=S(el.dataset.i18n);if(typeof v==='string')el.innerHTML=v});
  $$('[data-i18n-ph]').forEach(e=>e.placeholder=S(e.dataset.i18nPh));$$('[data-i18n-sk]').forEach(el=>{el.textContent=S('sk')[+el.dataset.i18nSk]});
  $$('.langs button').forEach(b=>b.classList.toggle('on',b.dataset.lang===l));
  $('#cbI').placeholder=S('cbPh');$('#leadForm [name=lang]').value=l;
  $('#theme').setAttribute('aria-label',S(isDay()?'thNight':'thDay'));
  renderReviews();renderFaq();renderPvc();buildPassport();setupFilm();setupVideo();setWa();if($('#lgOvl').classList.contains('open'))renderLegal(curDoc);
  LS.set('lang',l);$$('.smst').forEach(e=>{const st=(S('sst')||[])[+e.dataset.sst]||[];e.innerHTML=st.map(x=>`<span>${x}</span>`).join('<i aria-hidden="true"></i>')});$$('.smore').forEach(a=>{const u=SVC_URL[a.dataset.svc];if(u&&u[l])a.href=u[l]});if(!first&&!PROD){try{history.replaceState(null,'','#'+l)}catch(e){}}
}
$$('.langs button').forEach(b=>b.onclick=()=>{if(PROD){if(b.dataset.lang!==LANG){LS.set('lang',b.dataset.lang);location.href=LANG_URL[b.dataset.lang]+location.hash}}else setLang(b.dataset.lang)});

/* ---------------- theme: day / night ---------------- */
const isDay=()=>document.documentElement.dataset.theme==='day';
function setTheme(t){document.documentElement.dataset.theme=t;$('#theme').setAttribute('aria-checked',String(t==='day'));$('#theme').setAttribute('aria-label',S(t==='day'?'thNight':'thDay'));LS.set('theme',t);
  const m=document.querySelector('meta[name=theme-color]');if(m)m.content=t==='day'?'#ECE9E2':'#0b0c0a'}
$('#theme').addEventListener('click',()=>setTheme(isDay()?'night':'day'));

/* ---------------- in-page links ---------------- */
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a||a.hasAttribute('data-legal'))return;const id=a.getAttribute('href').slice(1);const el=id==='top'?document.body:document.getElementById(id);if(!el)return;e.preventDefault();
  $('#mnav').classList.remove('open');$('#burger').classList.remove('x-on');document.body.classList.remove('menu-open');document.body.style.overflow='';
  const y=id==='top'?0:el.getBoundingClientRect().top+scrollY-(id==='contact'?20:70);window.scrollTo({top:y,behavior:'smooth'})});
/* ---------------- header / nav ---------------- */
$('#burger').onclick=()=>{const o=$('#mnav').classList.toggle('open');$('#burger').classList.toggle('x-on',o);document.body.classList.toggle('menu-open',o);document.body.style.overflow=o?'hidden':''};
$$('#mnav a').forEach(a=>a.addEventListener('click',()=>{$('#mnav').classList.remove('open');$('#burger').classList.remove('x-on');document.body.style.overflow=''}));

/* ---------------- reveal + card spotlight ---------------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
$$('.rv').forEach(el=>{const cs=$$('#cards .card');const i=cs.indexOf(el);if(i>=0)el.style.transitionDelay=(i%3*.09)+'s';io.observe(el)});
$$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform=`perspective(900px) rotateY(${(x-.5)*6}deg) rotateX(${-(y-.5)*6}deg) translateY(-4px)`});
  c.addEventListener('pointerleave',()=>{c.style.transform=''})});

let heroP=0;

/* ---------------- film block ---------------- */
const fm=$('#fmain'),fb=$('#fbg'),ff=$('#fframe');let filmPlaying=false;
function setupFilm(){const V=VIDEOS[LANG];if(!V||fm.dataset.l===LANG)return;fm.dataset.l=LANG;pauseFilm();fm.src=V[0];fm.poster=V[1];fb.src=V[0];fb.poster=V[1];const fl=$('#fmLang');if(fl)fl.textContent=LANG==='ru'?'RU':'HE'}
fm.addEventListener('loadedmetadata',()=>$$('.fmDur').forEach(e=>e.textContent=fmt(fm.duration)));
function playFilm(){sess.vid=1;saveSess();hideBub();fm.muted=false;fm.play().then(()=>{ff.classList.add('playing');filmPlaying=true;try{fb.currentTime=fm.currentTime;fb.play()}catch(e){}}).catch(()=>{fm.muted=true;fm.play().catch(()=>{});ff.classList.add('playing');filmPlaying=true});track('video_play')}
function pauseFilm(){fm.pause();fb.pause();ff.classList.remove('playing');filmPlaying=false}
ff.addEventListener('click',e=>{if(e.target.closest('#ffull,#fbar'))return;filmPlaying?pauseFilm():playFilm()});
$$('[data-filmplay]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();playFilm()}));
fm.addEventListener('timeupdate',()=>{$('#fprog').style.width=(fm.currentTime/fm.duration*100||0)+'%';$('#fcur').textContent=fmt(fm.currentTime)});
fm.addEventListener('ended',()=>{pauseFilm();afterVideo()});
$('#fbar').addEventListener('click',e=>{const r=e.currentTarget.getBoundingClientRect();fm.currentTime=(e.clientX-r.left)/r.width*fm.duration;try{fb.currentTime=fm.currentTime}catch(_){}});
$('#ffull').addEventListener('click',e=>{e.stopPropagation();try{(ff.requestFullscreen?ff.requestFullscreen():fm.webkitEnterFullscreen())}catch(_){}});
$$('[data-film]').forEach(b=>b.addEventListener('click',()=>{$('#mnav').classList.remove('open');$('#burger').classList.remove('x-on');$('#film').scrollIntoView({behavior:'smooth',block:'center'});setTimeout(playFilm,700)}));

/* ---------------- process: passport stamps ---------------- */
const STAMP_POS=[{p:'L',x:12,y:12,w:62,r:-9},{p:'L',x:16,y:52,w:76,r:6},{p:'R',x:9,y:9,w:78,r:-4},{p:'R',x:30,y:37,w:62,r:10},{p:'R',x:12,y:57,w:76,r:-6}];
function fitFs(txt,maxW,base){return Math.min(base,maxW/(Math.max(3,txt.length)*.66))}
function stampSVG(i,title){
  const T=title.toUpperCase?(LANG==='he'?title:title.toUpperCase()):title,n='0'+(i+1);
  if(i===0)return `<svg viewBox="0 0 160 160"><g filter="url(#ink)"><circle class="s" cx="80" cy="80" r="74" stroke-width="5"/><circle class="s" cx="80" cy="80" r="62" stroke-width="1.6"/><text x="80" y="54" font-size="12" letter-spacing="3">STEP</text><text x="80" y="92" font-size="38">${n}</text><text class="t" x="80" y="118" font-size="${fitFs(T,100,15)}">${T}</text><text x="80" y="136" font-size="9" letter-spacing="2">★ ★ ★</text></g></svg>`;
  if(i===1)return `<svg viewBox="0 0 220 130"><g filter="url(#ink)"><rect class="s" x="4" y="4" width="212" height="122" rx="12" stroke-width="5"/><rect class="s" x="14" y="14" width="192" height="102" rx="6" stroke-width="1.4" stroke-dasharray="5 4"/><text x="110" y="40" font-size="12" letter-spacing="4">№ ${n} · DOCS</text><text class="t" x="110" y="80" font-size="${fitFs(T,170,30)}">${T}</text><text x="110" y="104" font-size="11" letter-spacing="3">✓ VERIFIED</text></g></svg>`;
  if(i===2)return `<svg viewBox="0 0 220 140"><g filter="url(#ink)"><ellipse class="s" cx="110" cy="70" rx="104" ry="64" stroke-width="5"/><ellipse class="s" cx="110" cy="70" rx="90" ry="51" stroke-width="1.4"/><text x="110" y="46" font-size="12" letter-spacing="4">ENTRY ${n}</text><text class="t" x="110" y="82" font-size="${fitFs(T,150,26)}">${T}</text><text x="110" y="104" font-size="10" letter-spacing="3">POPULATION AUTH.</text></g></svg>`;
  if(i===3)return `<svg viewBox="0 0 200 130"><g filter="url(#ink)"><path class="s" d="M8 8h150l34 57-34 57H8z" stroke-width="5"/><path class="s" d="M20 20h132l26 45-26 45H20z" stroke-width="1.4"/><text x="88" y="46" font-size="12" letter-spacing="3">${n} · MEETING</text><text class="t" x="88" y="82" font-size="${fitFs(T,130,26)}">${T}</text><text x="88" y="102" font-size="10" letter-spacing="3">APPROVED</text></g></svg>`;
  let rays='';for(let k=0;k<24;k++){const a=k/24*Math.PI*2,x1=110+Math.cos(a)*92,y1=110+Math.sin(a)*92,x2=110+Math.cos(a)*104,y2=110+Math.sin(a)*104;rays+=`<line class="s" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="3"/>`}
  return `<svg viewBox="0 0 220 220"><g filter="url(#ink)">${rays}<circle class="s" cx="110" cy="110" r="86" stroke-width="5"/><circle class="s" cx="110" cy="110" r="74" stroke-width="1.6"/><path class="s" d="M110 46l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" stroke-width="1.8"/><text class="t" x="110" y="124" font-size="${fitFs(T,130,32)}">${T}</text><text x="110" y="150" font-size="12" letter-spacing="4">${n} · ISRAEL</text><text x="110" y="168" font-size="10" letter-spacing="3">ישראל · ИЗРАИЛЬ</text></g></svg>`;
}
let PS={els:[],act:-2};
function buildPassport(){
  const st=S('steps');$('#stL').innerHTML='';$('#stR').innerHTML='';
  PS.els=st.map((s,i)=>{const P=STAMP_POS[i],d=document.createElement('div');d.className='stamp-el'+(i===4?' final':'');
    d.style.cssText=`left:${P.x}%;top:${P.y}%;width:${P.w}%;--r:${P.r}deg;color:var(--st${i+1})`;d.innerHTML=stampSVG(i,s[0]);$(P.p==='L'?'#stL':'#stR').appendChild(d);return d});
    PS.act=-2;setStage(-1);
}
function guilloche(){const c='rgba(140,110,70,.55)';let p='';
  for(let k=0;k<26;k++){let d='';for(let t=0;t<=360;t+=3){const a=t*Math.PI/180,r=120+18*Math.sin(7*a+k*.24)+10*Math.cos(13*a-k*.3);d+=(t?'L':'M')+(200+Math.cos(a)*r*(1+k*.012)).toFixed(1)+' '+(280+Math.sin(a)*r*(1+k*.012)).toFixed(1)}p+=`<path d="${d}Z"/>`}
  for(let k=0;k<14;k++){let d='';for(let x=0;x<=400;x+=8){d+=(x?'L':'M')+x+' '+(40+k*36+Math.sin(x/38+k)*6).toFixed(1)}p+=`<path d="${d}"/>`}
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 560'><g fill='none' stroke='${c}' stroke-width='.5'>${p}</g></svg>`;
  document.documentElement.style.setProperty('--guil',`url("data:image/svg+xml,${encodeURIComponent(svg)}")`)}
guilloche();
function setStage(a){
  if(a===PS.act)return;const prev=PS.act;PS.act=a;
  PS.els.forEach((e,i)=>e.classList.toggle('on',i<=a));
  if(a>prev&&a>=0){const pp=$('#pp');pp.classList.remove('thud');void pp.offsetWidth;pp.classList.add('thud')}
  const st=S('steps'),i=Math.max(0,a),box=$('#prStep');box.classList.add('swap');
  setTimeout(()=>{$('#prT').textContent=st[i][0];$('#prD').textContent=st[i][1];box.classList.remove('swap')},a===prev?0:230);
  $$('#prBars b').forEach((b,k)=>b.style.transform=`scaleX(${k<=a?1:0})`);
}

/* ---------------- reviews slider ---------------- */
function renderPvc(){const C=PVC[LANG],el=$('#pvc');if(!el)return;
  const ck='<svg viewBox="0 0 16 16"><path d="M3 8.5l3 3 7-7"/></svg>';
  el.innerHTML=`<div class="pvc-h"><span class="pvc-seal">IU</span><div><b>${C.org}</b><small class="ltr">${C.no}</small></div></div>
  <div class="pvc-b">
   <div class="pvs s1"><h4>${C.s1.t}</h4><ul>${C.s1.items.map(x=>`<li><i>${ck}</i>${x}</li>`).join('')}</ul><p class="pvc-more">${C.s1.more}</p><ul class="add">${C.s1.add.map(x=>`<li><i>+</i>${x}</li>`).join('')}</ul></div>
   <div class="pvs s2"><h4>${C.s2.t}</h4><p class="pvc-r">${C.s2.r}<svg viewBox="0 0 300 20" preserveAspectRatio="none"><path d="M2 14 C 60 6, 120 18, 180 10 S 270 8, 298 12"/></svg></p><p class="pvc-why">${C.s2.why}</p><p class="pvc-note">${C.s2.note}</p></div>
   <div class="pvs s3"><h4>${C.s3.t}</h4><div class="pvc-date"><b>${C.s3.d}</b><div><span>${C.s3.m}</span><span class="ltr">${C.s3.time}</span></div></div><p class="pvc-note">${C.s3.note}</p></div>
   <div class="pvs s4"><h4>${C.s4.t}</h4><p class="pvc-st">${C.s4.st}</p><div class="pvc-load"><i></i></div><p class="pvc-days"><b class="ltr" id="pvcDays">1 128</b> ${C.s4.days}</p><p class="pvc-note">${C.s4.note}</p></div>
   <div class="pvs sf"><h4>${C.f.t}</h4><ul>${C.f.items.map(x=>`<li><i>${ck}</i>${x}</li>`).join('')}</ul></div>
  </div>`;PVA=-1}
let PVA=-1,PVD=1128,PVT=0;
/* Reviewer photos/names need each client's written consent (Bar advertising rules 3(יא)/(ט)).
   photos:false shows initials; add a client's key to hide[] to remove a review. */
const REV_CFG={photos:false,hide:['freddy']};
const ini=n=>n.split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
function renderReviews(){
  const tr=$('#revTrack'),list=REVIEWS[LANG].filter(r=>!REV_CFG.hide.includes(r.a)),trm=TR[LANG]||{};
  tr.innerHTML=list.map(r=>`<figure class="rev"><span class="stars">★★★★★</span><q>${r.q}</q><figcaption class="who">${REV_CFG.photos?`<img src="${AV[r.a]}" alt="" loading="lazy" width="50" height="50">`:`<span class="rv-ini" aria-hidden="true">${ini(r.n)}</span>`}<span><b>${r.n}</b><small><svg width="12" height="12" fill="currentColor"><use href="#i-fb"/></svg>${S('fbRec')}, ${r.d}</small></span></figcaption>${r.t&&trm[r.t]?`<span class="tr">${trm[r.t]}</span>`:''}</figure>`).join('');
  $('#revDots').innerHTML=list.map((_,i)=>`<button aria-label="${i+1}"></button>`).join('');
  $$('#revDots button').forEach((b,i)=>b.onclick=()=>goRev(i));
  tr.scrollLeft=0;requestAnimationFrame(revState);
}
function revCards(){return $$('#revTrack .rev')}
function revIdx(){const tr=$('#revTrack'),r=tr.getBoundingClientRect(),pad=parseFloat(getComputedStyle(tr).scrollPaddingInlineStart)||0,rtl=LANG==='he';
  const edge=rtl?r.right-pad:r.left+pad;let best=0,bd=1e9;revCards().forEach((c,i)=>{const cr=c.getBoundingClientRect(),d=Math.abs((rtl?cr.right:cr.left)-edge);if(d<bd){bd=d;best=i}});return best}
function goRev(i){const cs=revCards();i=clamp(i,0,cs.length-1);cs[i].scrollIntoView({behavior:'smooth',inline:'start',block:'nearest'})}
function revState(){const i=revIdx(),cs=revCards(),tr=$('#revTrack');$$('#revDots button').forEach((b,k)=>b.classList.toggle('on',k===i));
  const max=tr.scrollWidth-tr.clientWidth,sl=Math.abs(tr.scrollLeft);$('#rPrev').disabled=sl<4;$('#rNext').disabled=sl>max-4}
$('#revTrack').addEventListener('scroll',()=>{clearTimeout(window.__rs);window.__rs=setTimeout(revState,60)},{passive:true});
$('#rPrev').onclick=()=>goRev(revIdx()-1);$('#rNext').onclick=()=>goRev(revIdx()+1);

/* ---------------- FAQ: chat with Ilana ---------------- */
let faqTimer;
function renderFaq(){
  const f=S('faq');$('#qlist').innerHTML=f.map((q,i)=>`<button class="qbtn" data-q="${i}"><span>${q[0]}</span><span class="qa" aria-hidden="true"></span></button>`).join('');
  $$('#qlist .qbtn').forEach(b=>b.onclick=()=>{askFaq(+b.dataset.q,true)});
  const fa=$('#faqAll');if(fa)fa.innerHTML=f.map(q=>`<dt>${q[0]}</dt><dd>${q[1]}</dd>`).join('');
  askFaq(0,false);
}
function askFaq(i,anim){
  const q=S('faq')[i],B=$('#fcB');clearTimeout(faqTimer);
  $$('#qlist .qbtn').forEach((b,k)=>b.classList.toggle('on',k===i));
  B.innerHTML=`<div class="bub me">${q[0]}</div>`;
  const ans=()=>{B.querySelector('.typing')?.remove();const d=document.createElement('div');d.className='bub her';d.innerHTML=`<small>${S('faqName')}</small>${q[1]}`;B.appendChild(d)};
  if(!anim)return ans();
  const t=document.createElement('div');t.className='bub her typing';t.innerHTML='<i></i><i></i><i></i>';B.appendChild(t);faqTimer=setTimeout(ans,900);
  if(innerWidth<1060){const r=$('#fc').getBoundingClientRect();if(r.top>innerHeight*.6||r.bottom<0)$('#fc').scrollIntoView({behavior:'smooth',block:'center'})}
}
$('#faqAsk').onclick=()=>openChat();

/* ---------------- scroll loop ---------------- */
let PV=null,SR=null,SA=-1;
function secP(el){const r=el.getBoundingClientRect();return clamp(-r.top/(el.offsetHeight-innerHeight))}
function onFrame(){
  const hdr=$('#hdr');if(scrollY>60)hdr.classList.add('solid');else if(scrollY<12)hdr.classList.remove('solid');
  const hr=$('#hero').getBoundingClientRect();heroP=clamp(-hr.top/hr.height);
  document.documentElement.style.setProperty('--atm',Math.max(.18,1-scrollY/(innerHeight*1.1)).toFixed(3));
  // hero portrait + about photo parallax
  // problem: one statement at a time
  const pp=secP($('#problem')),L=PV||(PV=$$('#pvLines .pv-line')),N=L.length,fin=ease(seg(pp,.86,.97));let act=0;
  L.forEach((el,i)=>{const a=.03+i*.205,t=seg(pp,a,a+.205),inn=ease(seg(t,0,.4)),out=i<N-1?ease(seg(t,.74,1)):fin;
    if(inn>.5&&out<.5)act=i;
    el.style.opacity=(inn*(1-out)).toFixed(3);
    el.style.transform=`translate3d(0,${((1-inn)*70-out*50).toFixed(1)}px,0)`;
    el.style.filter=`blur(${((1-inn)*6+out*8).toFixed(2)}px)`;
    el.style.clipPath=`inset(${(out*10).toFixed(1)}% 0 ${((1-inn)*100).toFixed(1)}% 0)`;
    const pb=$$('#pvProg b')[i];if(pb)pb.style.transform=`scaleX(${seg(t,0,.8).toFixed(3)})`});
  const pst=fin>.5?4:act;if(pst!==PVA){PVA=pst;$$('#pvc .pvs').forEach((s,i)=>s.classList.toggle('on',i===pst));$('#pvc')&&$('#pvc').classList.toggle('pvfin',pst===4)}
  if(pst===3){const n=performance.now();if(n-PVT>90){PVT=n;PVD++;const d=$('#pvcDays');if(d)d.textContent=PVD.toLocaleString('ru-RU')}}
  $$('#pvNum span').forEach((s,i)=>s.classList.toggle('on',i===act&&fin<.5));
  const pf=$('#pvFinal');pf.style.opacity=fin;pf.style.transform=`translate3d(0,${((1-fin)*50).toFixed(1)}px,0)`;pf.style.filter=`blur(${((1-fin)*6).toFixed(2)}px)`;pf.style.pointerEvents=fin>.5?'auto':'none';
  // services: active row nearest viewport centre
  const rows=SR||(SR=$$('#slist .srow'));let best=0,bd=1e9;rows.forEach((r,i)=>{const b=r.getBoundingClientRect(),c=b.top+Math.min(b.height,innerHeight*.4)/2,d=Math.abs(c-innerHeight*.45);if(d<bd){bd=d;best=i}});
  if(best!==SA){SA=best;rows.forEach((r,i)=>r.classList.toggle('on',i===best));$$('#smWords .smw').forEach((s,i)=>s.classList.toggle('on',i===best));$('#smBar').style.transform=`scaleX(${(best+1)/rows.length})`}
  // process: passport opens, then stamps
  const q=secP($('#process')),op=ease(seg(q,.02,.16));$('#pp').style.setProperty('--open',op.toFixed(3));
  const q2=seg(q,.18,.94);setStage(q2<=0?-1:Math.min(4,Math.floor(q2*5)));
  requestAnimationFrame(onFrame);
}

/* ---------------- overlays ---------------- */
function openOvl(el){el.classList.add('open');document.body.style.overflow='hidden'}
function closeOvl(el){el.classList.remove('open');if(!$('.ovl.open'))document.body.style.overflow='';const v=$('video',el);if(v)v.pause();if(el.id==='lgOvl'){try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}}}
$$('.ovl').forEach(o=>o.addEventListener('click',e=>{if(e.target===o||e.target.closest('[data-close]')){closeOvl(o);if(o.id==='vOvl')afterVideo()}}));
addEventListener('keydown',e=>{if(e.key==='Escape'){$$('.ovl.open').forEach(o=>{closeOvl(o);if(o.id==='vOvl')afterVideo()});$('#a11yP').classList.remove('open')}});

/* video modal */
function setupVideo(){const V=VIDEOS[LANG];const w=$('#vwrap'),old=$('video',w);if(old&&old.dataset.l===LANG)return;w.innerHTML='';const v=document.createElement('video');v.dataset.l=LANG;v.src=V[0];v.poster=V[1];v.controls=true;v.playsInline=true;v.preload='metadata';w.appendChild(v);
  const u=document.createElement('button');u.className='unmute';u.textContent='🔊 '+S('unmute');u.onclick=()=>{v.muted=false;v.play();u.remove()};v._u=u;
  v.addEventListener('ended',()=>{const o=$('#vOvl');if(o.classList.contains('open')){closeOvl(o);afterVideo()}})}
function openVideo(){sess.vid=1;saveSess();hideBub();if(filmPlaying)pauseFilm();openOvl($('#vOvl'));track('video_open');const v=$('#vwrap video');if(v){v.muted=false;v.play().catch(()=>{v.muted=true;v.play().catch(()=>{});$('#vwrap').appendChild(v._u)})}}
$$('[data-open-video]').forEach(b=>b.addEventListener('click',e=>{if(e.target.id==='vbubX')return;openVideo()}));
function afterVideo(){if(sess.cbAuto)return;sess.cbAuto=1;saveSess();setTimeout(()=>openChat(),700)}
const bub=$('#vbub');function hideBub(){bub.classList.remove('show')}
$('#vbubX').addEventListener('click',e=>{e.stopPropagation();hideBub();sess.bub=1;saveSess()});
let popupsStarted=false;
function startPopups(){if(popupsStarted)return;popupsStarted=true;
  setTimeout(()=>{if(!sess.lp&&!filmPlaying&&!$('.ovl.open')&&!$('#cb').classList.contains('open'))openLp()},5000);
  setTimeout(()=>{if(!sess.bub&&!sess.vid&&!filmPlaying&&!$('#lp').classList.contains('show'))bub.classList.add('show')},25000)}
function openLp(){$('#lp').classList.add('show');sess.lp=1;try{sessionStorage.setItem('iu',JSON.stringify(sess))}catch(e){}track('popup_lead_view')}
function closeLp(){$('#lp').classList.remove('show')}

/* legal sheet */
const DOCS=['privacy','cookies','accessibility','terms'];let curDoc='privacy';
function renderLegal(d){curDoc=d;const L=LEGAL[LANG];$('#lgTabs').innerHTML=DOCS.map(k=>`<button data-doc="${k}" class="${k===d?'on':''}">${L[k][0]}</button>`).join('');
  $$('#lgTabs button').forEach(b=>b.onclick=()=>renderLegal(b.dataset.doc));
  $('#lgBody').innerHTML=`<h3>${L[d][0]}</h3><p class="upd">${S('legalUpd')}</p>${L[d][1]}`;$('#lgBody').scrollTop=0}
function openLegal(d){renderLegal(DOCS.includes(d)?d:'privacy');openOvl($('#lgOvl'));$('#a11yP').classList.remove('open')}
document.addEventListener('click',e=>{const b=e.target.closest('[data-legal]');if(b){e.preventDefault();openLegal(b.dataset.legal)}});
function hashRoute(){const h=(location.hash||'').slice(1);if(DOCS.includes(h))openLegal(h)}
addEventListener('hashchange',hashRoute);

/* cookies (consent) */
function getConsent(){try{const c=JSON.parse(LS.get('iu_consent')||'null');if(c&&(!c.ts||Date.now()-c.ts>365*864e5))return null;return c}catch(e){return null}}
const ANA=window.ANALYTICS||{};let gaLoaded=false,pxLoaded=false;
function loadGA(){if(gaLoaded||!ANA.ga4)return;gaLoaded=true;const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+ANA.ga4;document.head.appendChild(s);gtag('js',new Date());gtag('config',ANA.ga4,{anonymize_ip:true});ANA.ads&&gtag('config',ANA.ads)}
function loadPixel(){if(pxLoaded||!ANA.pixel)return;pxLoaded=true;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',ANA.pixel);fbq('track','PageView')}
function applyConsent(c){if(c.an||c.mk)loadGA();if(c.mk)loadPixel();try{window.gtag&&gtag('consent','update',{analytics_storage:c.an?'granted':'denied',ad_storage:c.mk?'granted':'denied',ad_user_data:c.mk?'granted':'denied',ad_personalization:c.mk?'granted':'denied'})}catch(e){}window.__consent=c}
function saveConsent(an,mk){const c={nec:1,an:+an,mk:+mk,ts:Date.now()};LS.set('iu_consent',JSON.stringify(c));applyConsent(c);$('#ck').classList.remove('show','set');setTimeout(startPopups,600)}
$('#ckAll').onclick=()=>saveConsent(1,1);
$('#ckNec').onclick=()=>saveConsent(0,0);
$('#ckSet').onclick=()=>{const ck=$('#ck');if(ck.classList.contains('set'))saveConsent($('#ckAn').checked,$('#ckMk').checked);else{ck.classList.add('set');$('#ckSet').textContent=S('ckSave')}};
$$('[data-cookie-settings]').forEach(b=>b.onclick=()=>{const c=getConsent()||{};$('#ckAn').checked=!!c.an;$('#ckMk').checked=!!c.mk;$('#ck').classList.add('show','set');$('#ckSet').textContent=S('ckSave')});

/* accessibility */
const A11Y=['t1','t-1','contrast','links','motion','font'];
function applyA11y(set){const h=document.documentElement;A11Y.forEach(k=>h.classList.toggle('a-'+k,set.includes(k)));$$('#a11yP [data-a]').forEach(b=>b.classList.toggle('on',set.includes(b.dataset.a)));LS.set('iu_a11y',JSON.stringify(set))}
let a11ySet=[];try{a11ySet=JSON.parse(LS.get('iu_a11y')||'[]')}catch(e){}
$('#a11yB').onclick=()=>$('#a11yP').classList.toggle('open');
$$('#a11yP [data-a]').forEach(b=>b.onclick=()=>{const k=b.dataset.a;if(k==='reset')a11ySet=[];else{if(a11ySet.includes(k))a11ySet=a11ySet.filter(x=>x!==k);else{a11ySet.push(k);if(k==='t1')a11ySet=a11ySet.filter(x=>x!=='t-1');if(k==='t-1')a11ySet=a11ySet.filter(x=>x!=='t1')}}applyA11y(a11ySet)});

/* ---------------- WhatsApp + leads ---------------- */
function waLink(n,t){const m=n?S('wa').replace('{n}',n).replace('{t}',t||''):S('waDef');return `https://wa.me/${PHONE}?text=${encodeURIComponent(m)}`}
function setWa(){$$('[data-wa]').forEach(a=>a.href=waLink())}
async function sendLead(data){data['form-name']='lead';data.lang=LANG;data.page=location.pathname;
  const src={form:'טופס',chat:'צ׳אט'}[data.source]||data.source;
  data.subject=`Заявка с сайта · ${{chat:'чат',popup:'всплывающее окно'}[data.source]||'форма'} · ${data.name||''} ${data.phone||''} · ${LANG.toUpperCase()}`.replace(/\s+/g,' ').trim();
  try{const u=new URLSearchParams(location.search);['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(k=>u.get(k)&&(data[k]=u.get(k)))}catch(e){}
  try{await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(data).toString()})}catch(e){}
  track('generate_lead',{source:data.source,lead_lang:LANG,topic:data.topic||''})}
const validPhone=v=>v.replace(/\D/g,'').length>=9;
$('#leadForm').addEventListener('submit',e=>{e.preventDefault();const f=e.target,name=f.name.value.trim(),phone=f.phone.value.trim();let bad=false;
  [['name',!name],['phone',!validPhone(phone)],['topic',!f.topic.value]].forEach(([k,b])=>{f[k].closest('.fld').classList.toggle('err',b);if(b)bad=true});
  $('.consent',f).classList.toggle('err',!f.consent.checked);if(!f.consent.checked)bad=true;
  if(bad){const er=$('.err',f);er&&er.scrollIntoView({behavior:'smooth',block:'center'});return}
  const topic=f.topic.options[f.topic.selectedIndex].text;$('#okWa').href=waLink(name,topic);openOvl($('#okOvl'));
  sendLead({name,phone,topic,message:f.message.value,source:'form',consent_service:'yes',consent_marketing:f.marketing&&f.marketing.checked?'yes':'no',consent_ts:new Date().toISOString(),consent_text_ver:'2026-11-18'});f.reset()});
$$('#leadForm input,#leadForm select').forEach(i=>i.addEventListener('input',()=>{i.closest('.fld')?.classList.remove('err');i.closest('.consent')?.classList.remove('err')}));

/* ---------------- chatbot ---------------- */
const cb=$('#cb'),cbB=$('#cbB'),cbI=$('#cbI');let chat={step:0},chatStarted=false;
function openChat(){cb.classList.add('open');$('#cbL').classList.add('open-state');$('#cbTip').classList.remove('show');$('.dotn')&&$('.dotn').remove();if(!chatStarted){chatStarted=true;startChat()}}
$('#cbL').onclick=()=>cb.classList.contains('open')?cb.classList.remove('open'):openChat();
$('#cbX').onclick=()=>cb.classList.remove('open');
function add(html,who){const m=document.createElement('div');m.className='msg '+who;m.innerHTML=html;cbB.appendChild(m);cbB.scrollTop=1e6;return m}
function bot(html,cb2){const ty=add('<span class="typing"><i></i><i></i><i></i></span>','bot');ty.style.padding='0';setTimeout(()=>{ty.style.padding='';ty.innerHTML=html;cbB.scrollTop=1e6;cb2&&cb2()},800)}
function startChat(){chat={step:1};bot(S('b1'),()=>{const o=document.createElement('div');o.className='opts';o.innerHTML=['o1','o2','o3','o4'].map(k=>`<button>${S(k)}</button>`).join('');cbB.appendChild(o);cbB.scrollTop=1e6;
  $$('button',o).forEach(b=>b.onclick=()=>{o.remove();chat.topic=b.textContent;add(b.textContent,'me');chat.step=2;bot(S('b2'))})})}
$('#cbF').addEventListener('submit',e=>{e.preventDefault();const v=cbI.value.trim();if(!v)return;cbI.value='';
  if(chat.step<=1){chat.topic=v;add(v,'me');chat.step=2;bot(S('b2'));return}
  if(chat.step===2){chat.name=v;add(v,'me');chat.step=3;cbI.type='tel';bot(S('b3').replace('{n}',v)+'<br>'+S('bPriv'));return}
  if(chat.step===3){add(v,'me');if(!validPhone(v)){bot(S('bErr'));return}chat.phone=v;chat.step=4;cbI.type='text';
    sendLead({name:chat.name,phone:v,topic:chat.topic||'',source:'chat',consent_service:'chat-notice',consent_ts:new Date().toISOString(),consent_text_ver:'2026-11-18'});
    bot(S('b4'),()=>{const o=document.createElement('div');o.className='opts';o.style.flexDirection='column';o.style.alignItems='stretch';
      o.innerHTML=`<a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(chat.name,chat.topic)}" data-track="contact_whatsapp"><svg class="ico" fill="#fff"><use href="#i-wa"/></svg>${S('okWa')}</a><a class="btn btn-g" href="tel:+${PHONE}" data-track="contact_phone"><svg class="ico" fill="currentColor"><use href="#i-ph"/></svg>${S('call')} · <span class="ltr">052-8445721</span></a>`;cbB.appendChild(o);cbB.scrollTop=1e6});return}
  add(v,'me');bot(S('b4'))});
(function(){const tip=$('#cbTip');let closed=false;
  $('#cbTipX').addEventListener('click',e=>{e.stopPropagation();closed=true;tip.classList.remove('show')});
  tip.addEventListener('click',()=>openChat());
  const pulse=()=>{if(closed||cb.classList.contains('open')||$('.ovl.open')||$('#ck').classList.contains('show'))return;tip.classList.add('show');setTimeout(()=>tip.classList.remove('show'),innerWidth<640?5000:8000)};
  setTimeout(pulse,14000);setInterval(pulse,45000)})();

/* ---------------- init ---------------- */
(function(){
  const t=LS.get('theme');if(t==='day'||t==='night')document.documentElement.dataset.theme=t;
  const h=(location.hash||'').slice(1);let l;if(PROD){l=document.documentElement.lang;if(['he','ru','en'].includes(h)&&h!==l){location.replace(LANG_URL[h]);return}}else{l=['he','ru','en'].includes(h)?h:(LS.get('lang')||'he')}if(!I18N[l])l='he';
  setLang(l,true);setTheme(document.documentElement.dataset.theme);applyA11y(a11ySet);
  const c=getConsent();if(c){applyConsent(c);startPopups()}else setTimeout(()=>$('#ck').classList.add('show'),1200);
  hashRoute();
  addEventListener('resize',()=>{clearTimeout(window.__rz);window.__rz=setTimeout(()=>{setStage(PS.act===-2?-1:PS.act);revState()},150)});
  requestAnimationFrame(onFrame);
})();

/* film 3D tilt */
(function(){const f=$('#fframe'),sec=$('#film');if(!f||!sec||matchMedia('(hover:none)').matches)return;
 let tx=0,ty=0,cx=0,cy=0,run=false;
 sec.addEventListener('mousemove',e=>{const r=f.getBoundingClientRect();tx=clamp((e.clientX-(r.left+r.width/2))/(r.width/2)*1+0,-1,1);ty=clamp((e.clientY-(r.top+r.height/2))/(r.height/2),-1,1);if(!run){run=true;requestAnimationFrame(loop)}});
 sec.addEventListener('mouseleave',()=>{tx=0;ty=0;if(!run){run=true;requestAnimationFrame(loop)}});
 function loop(){if(document.documentElement.classList.contains('a-motion')){tx=ty=0}
  cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;
  f.style.setProperty('--ry',(cx*9).toFixed(2)+'deg');f.style.setProperty('--rx',(-cy*6).toFixed(2)+'deg');f.style.setProperty('--ry-n',cx.toFixed(3));
  f.style.setProperty('--gx',(50+cx*40).toFixed(1)+'%');f.style.setProperty('--gy',(30+cy*30).toFixed(1)+'%');
  if(Math.abs(tx-cx)>.002||Math.abs(ty-cy)>.002)requestAnimationFrame(loop);else run=false}
})();


/* lead popup */
(function(){const f=$('#lpF');if(!f)return;$('#lpX').onclick=closeLp;
 f.addEventListener('submit',e=>{e.preventDefault();const ph=f.phone.value.trim();let bad=false;
  if(!validPhone(ph)){f.phone.classList.add('err');bad=true}else f.phone.classList.remove('err');
  $('.lp-c',f).classList.toggle('err',!f.consent.checked);if(!f.consent.checked)bad=true;if(bad)return;
  sendLead({name:'',phone:ph,topic:'popup',source:'popup',consent_service:'yes',consent_ts:new Date().toISOString(),consent_text_ver:'2026-11-18'});
  $('#lp').classList.add('done');$('#lpT').textContent=S('lpOk');setTimeout(closeLp,2600)});
 f.phone.addEventListener('input',()=>f.phone.classList.remove('err'))})();
/* section word lights up only once you have arrived */
(function(){const secs=[...document.querySelectorAll('section')].filter(s=>s.querySelector('.sword,.kword'));let t=0;
 function upd(){t=0;const hh=90;secs.forEach(s=>{const r=s.getBoundingClientRect();s.classList.toggle('lit',r.top<=hh+40&&r.bottom>innerHeight*.55)})}
 addEventListener('scroll',()=>{if(!t)t=requestAnimationFrame(upd)},{passive:true});addEventListener('resize',upd);upd()})();
