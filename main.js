// ---------- Splash / logo de abertura ----------
const splash = document.getElementById('splash');
const splashLabel = document.getElementById('splashLabel');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.body.style.overflow = 'hidden';
if(reducedMotion){ splash.classList.add('reduced'); }

const bootDuration = reducedMotion ? 250 : 1700;
const holdDuration = reducedMotion ? 100 : 350;

setTimeout(()=>{
  splashLabel.textContent = 'sistema pronto';
  splashLabel.classList.add('ready');
}, bootDuration);

setTimeout(()=>{
  splash.classList.add('hide');
  splash.setAttribute('aria-hidden', 'true');
}, bootDuration + holdDuration);

function closeSplash(){
  if(splash.style.display === 'none') return;
  splash.style.display = 'none';
  document.body.style.overflow = '';
  initSite();
}
splash.addEventListener('transitionend', (e)=>{ if(e.propertyName === 'opacity') closeSplash(); });
// fallback caso a transição não dispare (ex: reduced motion)
setTimeout(closeSplash, bootDuration + holdDuration + 700);

// ---------- Terminal typing effect ----------
const typeline = document.getElementById('typeline');
const phrases = ["suporte técnico > TI operacional", "infraestrutura de rede > lojas Atacadão", "ferramentas internas > uso diário"];
let pIdx = 0, cIdx = 0, deleting = false;
function typeLoop(){
  const current = phrases[pIdx];
  if(!deleting){
    cIdx++;
    if(cIdx > current.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
  } else {
    cIdx--;
    if(cIdx === 0){ deleting = false; pIdx = (pIdx+1) % phrases.length; }
  }
  typeline.innerHTML = current.slice(0, cIdx) + '<span class="type-cursor"></span>';
  setTimeout(typeLoop, deleting ? 30 : 55);
}

// ---------- Uptime counter ----------
function startUptime(){
  const start = Date.now();
  function pad(n){ return String(n).padStart(2,'0'); }
  setInterval(()=>{
    const s = Math.floor((Date.now()-start)/1000);
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60;
    document.getElementById('uptime').textContent = `uptime ${pad(h)}:${pad(m)}:${pad(sec)}`;
  }, 1000);
}

// ---------- Dispara animações do site só depois da splash sumir ----------
function initSite(){
  typeLoop();
  startUptime();
}

// ---------- Topology diagram ----------
const nodes = [
  { id:'center', x:360, y:130, r:30, label:'VOCÊ', center:true,
    detail:'Ponto central de contato entre operação, rede e desenvolvimento interno.' },
  { id:'rede', x:150, y:60, r:24, label:'REDE',
    detail:'Diagnóstico de rede: ARP, OUI, switches Intelbras/Cisco, resolução de conectividade em lojas.' },
  { id:'sup', x:150, y:210, r:24, label:'SUPORTE',
    detail:'Suporte técnico direto: hardware, boot, instalação e recuperação de sistemas.' },
  { id:'dev', x:590, y:60, r:24, label:'DEV',
    detail:'Ferramentas internas em HTML/CSS/JS: controle de rádios, gestão de escalas.' },
  { id:'ops', x:590, y:210, r:24, label:'OPS',
    detail:'Ambiente local (XAMPP/PHP) e automações que dão suporte à operação do dia a dia.' },
];
const links = [ ['center','rede'], ['center','sup'], ['center','dev'], ['center','ops'] ];

const linkG = document.getElementById('topoLinks');
const nodeG = document.getElementById('topoNodes');
const byId = Object.fromEntries(nodes.map(n=>[n.id,n]));

links.forEach(([a,b], i)=>{
  const na = byId[a], nb = byId[b];
  const path = document.createElementNS('http://www.w3.org/2000/svg','path');
  const d = `M ${na.x} ${na.y} L ${nb.x} ${nb.y}`;
  path.setAttribute('d', d);
  path.setAttribute('class','topo-link');
  linkG.appendChild(path);

  // traveling pulse
  const pulse = document.createElementNS('http://www.w3.org/2000/svg','circle');
  pulse.setAttribute('r', 2.6);
  pulse.setAttribute('class','topo-pulse');
  const anim = document.createElementNS('http://www.w3.org/2000/svg','animateMotion');
  anim.setAttribute('dur', (3 + i*0.6) + 's');
  anim.setAttribute('repeatCount','indefinite');
  anim.setAttribute('path', d);
  anim.setAttribute('begin', (i*0.5)+'s');
  pulse.appendChild(anim);
  linkG.appendChild(pulse);
});

const detailBox = document.getElementById('topoDetail');
nodes.forEach(n=>{
  const g = document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('class', 'topo-node' + (n.center ? ' center' : ''));
  g.setAttribute('tabindex','0');
  g.innerHTML = `
    <circle class="ring" cx="${n.x}" cy="${n.y}" r="${n.r}"></circle>
    <text x="${n.x}" y="${n.y+4}">${n.label}</text>
  `;
  function activate(){
    document.querySelectorAll('.topo-node').forEach(el=>el.classList.remove('active'));
    g.classList.add('active');
    detailBox.innerHTML = `<strong>${n.label}</strong><span>${n.detail}</span>`;
  }
  g.addEventListener('mouseenter', activate);
  g.addEventListener('focus', activate);
  g.addEventListener('click', activate);
  nodeG.appendChild(g);
});

// ---------- Case studies (accordion) ----------
const cases = [
  {
    year: '2026', tag: 'uso diário',
    title: 'Controle de Equipamentos de Rádio',
    desc: 'Sistema de check-in/check-out de rádios comunicadores para a operação da loja. Login multiusuário por PIN, rastreamento de status em tempo real, auditoria por turno, alertas de devolução atrasada e exportação em CSV para conferência. Dados persistidos localmente, sem depender de servidor.',
    stack: ['HTML/CSS/JS','localStorage','multiusuário','exportação CSV']
  },
  {
    year: '2026', tag: 'uso diário',
    title: 'Gerenciador de Escala Semanal',
    desc: 'Ferramenta para montagem e conferência de escalas de trabalho, com verificação de intervalo mínimo de descanso conforme regras da CLT — evita erro manual e reduz risco de não conformidade na montagem da escala.',
    stack: ['HTML/CSS/JS','regras CLT','validação automática']
  }
];

const caseList = document.getElementById('caseList');
cases.forEach((c, i)=>{
  const el = document.createElement('div');
  el.className = 'case';
  el.innerHTML = `
    <button class="case-trigger" aria-expanded="false">
      <span class="case-year">${c.year}</span>
      <span class="case-title">${c.title}<span class="tag">${c.tag}</span></span>
      <span class="case-chevron">+</span>
    </button>
    <div class="case-panel">
      <div class="case-panel-inner">
        <p>${c.desc}</p>
        <div class="case-stack">${c.stack.map(s=>`<span class="chip">${s}</span>`).join('')}</div>
      </div>
    </div>
  `;
  caseList.appendChild(el);

  const trigger = el.querySelector('.case-trigger');
  const panel = el.querySelector('.case-panel');
  trigger.addEventListener('click', ()=>{
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.case').forEach(c2=>{
      c2.classList.remove('open');
      c2.querySelector('.case-panel').style.maxHeight = null;
      c2.querySelector('.case-trigger').setAttribute('aria-expanded','false');
    });
    if(!isOpen){
      el.classList.add('open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
      trigger.setAttribute('aria-expanded','true');
    }
  });
  if(i===0){ trigger.click(); }
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el=>io.observe(el));

// ---------- Mobile nav ----------
const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');
burger.addEventListener('click', ()=>{
  const open = navlinks.classList.toggle('mobile-open');
  burger.setAttribute('aria-expanded', open);
});
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  navlinks.classList.remove('mobile-open');
}));

// ---------- Copy email ----------
const emailBtn = document.getElementById('emailBtn');
emailBtn.addEventListener('click', ()=>{
  navigator.clipboard?.writeText(emailBtn.dataset.email).catch(()=>{});
  const original = emailBtn.textContent;
  emailBtn.textContent = '✓ copiado!';
  emailBtn.classList.add('copied');
  setTimeout(()=>{ emailBtn.textContent = original; emailBtn.classList.remove('copied'); }, 1600);
});
