// Data
const D={
brand:{name:'Hidro & Movimento',tagline:'Academia · Natação · Hidroginástica',sinceYear:1998,rating:4.6,reviews:160,address:'R. Joaquim de Paula Souza, 1033 — Jardim Proença, Campinas/SP',cep:'13100-422',phone:'(19) 3252-1986',whatsapp:'(19) 9 9999-1986',hours:'Seg–Sex 06h–22h · Sáb 08h–13h'},
modalities:[
{id:'natacao-adulta',name:'Natação Adulta',desc:'Aulas em níveis (iniciante, intermediário, avançado), turmas reduzidas, foco técnico e condicionamento.',age:'15+ anos',duration:'50 min'},
{id:'natacao-infantil',name:'Natação Infantil',desc:'Adaptação ao meio líquido, ludicidade e progressão pedagógica acompanhada por professoras especializadas.',age:'3–14 anos',duration:'45 min'},
{id:'pilates-aquatico',name:'Pilates Aquático',desc:'Trabalho de força, mobilidade e respiração na água aquecida — baixo impacto, alta consciência corporal.',age:'16+ anos',duration:'50 min'},
{id:'funcional',name:'Funcional',desc:'Treino em circuito com pesos, bandas e peso do corpo. Foco em condicionamento e mobilidade.',age:'14+ anos',duration:'50 min'},
{id:'musculacao',name:'Musculação',desc:'Sala equipada, planilha personalizada com avaliação física e acompanhamento do professor em tempo integral.',age:'14+ anos',duration:'livre'}
],
schedule:[
{mod:'natacao-adulta',day:'seg',times:['06:00','07:00','08:00','18:00','19:00','20:00']},
{mod:'natacao-adulta',day:'ter',times:['06:00','07:00','18:00','19:00','20:00']},
{mod:'natacao-adulta',day:'qua',times:['06:00','07:00','08:00','18:00','19:00','20:00']},
{mod:'natacao-adulta',day:'qui',times:['06:00','07:00','18:00','19:00','20:00']},
{mod:'natacao-adulta',day:'sex',times:['06:00','07:00','08:00','18:00','19:00']},
{mod:'natacao-adulta',day:'sab',times:['08:00','09:00','10:00']},
{mod:'natacao-infantil',day:'seg',times:['15:00','16:00','17:00','18:00']},
{mod:'natacao-infantil',day:'ter',times:['14:00','15:00','16:00','17:00']},
{mod:'natacao-infantil',day:'qua',times:['15:00','16:00','17:00','18:00']},
{mod:'natacao-infantil',day:'qui',times:['14:00','15:00','16:00','17:00']},
{mod:'natacao-infantil',day:'sex',times:['15:00','16:00','17:00']},
{mod:'natacao-infantil',day:'sab',times:['09:00','10:00','11:00']},
{mod:'pilates-aquatico',day:'seg',times:['09:00','10:00','19:00']},
{mod:'pilates-aquatico',day:'qua',times:['09:00','10:00','19:00']},
{mod:'pilates-aquatico',day:'sex',times:['09:00','10:00']},
{mod:'funcional',day:'seg',times:['07:00','08:00','18:00','19:00']},
{mod:'funcional',day:'ter',times:['07:00','18:00','19:00']},
{mod:'funcional',day:'qua',times:['07:00','08:00','18:00','19:00']},
{mod:'funcional',day:'qui',times:['07:00','18:00','19:00']},
{mod:'funcional',day:'sex',times:['07:00','18:00']},
{mod:'funcional',day:'sab',times:['09:00','10:00']},
{mod:'musculacao',day:'seg',times:['06:00–22:00']},
{mod:'musculacao',day:'ter',times:['06:00–22:00']},
{mod:'musculacao',day:'qua',times:['06:00–22:00']},
{mod:'musculacao',day:'qui',times:['06:00–22:00']},
{mod:'musculacao',day:'sex',times:['06:00–22:00']},
{mod:'musculacao',day:'sab',times:['08:00–13:00']}
],
plans:[
{id:'unica',name:'Plano Único',price:189,desc:'Uma modalidade, 2x por semana.',perks:['1 modalidade','2x por semana','Avaliação física inicial','Acesso aos vestiários']},
{id:'combinado',name:'Plano Combinado',price:269,desc:'Combine natação ou hidro com musculação ou funcional.',perks:['2 modalidades','3x por semana','Avaliação física trimestral','Acesso aos vestiários','Toalha cortesia']},
{id:'livre',name:'Plano Livre',price:349,desc:'Todas as modalidades, todos os dias.',perks:['Todas as modalidades','Acesso ilimitado','Avaliação física mensal','Toalha cortesia','Convidado 1x/mês']}
],
reviews:[
{name:'Gabriela Leoni',rating:5,text:'Atendimento incrível, a academia super acolhedora e familiar. Professores bem qualificados e solícitos.',when:'6 meses atrás'},
{name:'Fernando Gomes',rating:5,text:'Academia de bairro, menos movimentada que as grandes franquias — fator essencial pra mim. Os instrutores ajudam de verdade.',when:'2 anos atrás'},
{name:'Jussara Yara',rating:4,text:'Meu filho fez aula experimental, a professora é muito boa e paciente. Turma em quantidade adequada.',when:'6 meses atrás'}
],
faq:[
{q:'Como funciona a aula experimental?',a:'É gratuita e sem compromisso. Você agenda pelo formulário ou WhatsApp, traz traje de banho e toalha — o resto a gente fornece.'},
{q:'Vocês têm estacionamento?',a:'Vagas rotativas na rua e convênio com estacionamento próximo a 50m da academia.'},
{q:'A piscina é aquecida?',a:'Sim — temperatura controlada entre 29 e 31°C o ano inteiro, com sistema de tratamento sem cloro residual forte.'},
{q:'Posso pausar o plano?',a:'Sim, até 30 dias por ano sem custo, mediante aviso prévio de 5 dias.'},
{q:'Tem desconto família?',a:'Sim — 10% de desconto a partir do segundo membro da mesma residência.'}
],
days:[{id:'seg',label:'Seg'},{id:'ter',label:'Ter'},{id:'qua',label:'Qua'},{id:'qui',label:'Qui'},{id:'sex',label:'Sex'},{id:'sab',label:'Sáb'}]
};

// State
let filter='todas', day='seg', picked=['natacao-adulta'], openFAQ=0, submitted=false;

function stars(v,s=12){return [1,2,3,4,5].map(i=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="${i<=Math.round(v)?'var(--yellow)':'var(--star-off)'}"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>`).join('')}

function getRec(){if(picked.length>=3)return'livre';if(picked.length===2)return'combinado';return'unica'}

function toggleTheme(){
const h=document.documentElement;
h.dataset.theme=h.dataset.theme==='dark'?'light':'dark';
localStorage.setItem('theme',h.dataset.theme);
document.getElementById('theme-icon').innerHTML=h.dataset.theme==='dark'?'☀️':'🌙';
}

// Init theme
(function(){const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t})();

function getSchedule(){return D.schedule.filter(s=>(filter==='todas'||s.mod===filter)&&s.day===day)}

function renderSchedule(){
const rows=getSchedule();
const el=document.getElementById('sched-body');
if(!rows.length){el.innerHTML='<div style="padding:80px;text-align:center" class="mono">// sem aulas para esse filtro</div>';return}
el.innerHTML=rows.map(row=>{
const mod=D.modalities.find(m=>m.id===row.mod);
return `<div class="sched-row"><div><h4>${mod.name}</h4><div class="mono" style="margin-top:4px">${mod.duration} · ${mod.age}</div></div><div class="time-chips">${row.times.map(t=>`<span class="time-chip">${t}</span>`).join('')}</div></div>`;
}).join('');
}

function renderCalc(){
const rec=getRec();const p=D.plans.find(x=>x.id===rec);
document.getElementById('calc-picks').innerHTML=D.modalities.map(m=>{
const on=picked.includes(m.id);
return `<button class="calc-btn${on?' on':''}" data-pick="${m.id}"><span>${m.name}</span><span style="width:20px;height:20px;border-radius:5px;background:${on?'var(--yellow)':'transparent'};border:1.5px solid ${on?'var(--yellow)':'var(--border)'};display:grid;place-items:center">${on?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>':''}</span></button>`;
}).join('');
document.getElementById('calc-result').innerHTML=`<div class="mono" style="color:var(--text-dim)">recomendamos</div><div style="font-family:var(--font-head);font-size:22px;margin-top:6px;color:var(--yellow)">${p.name}</div><div style="font-family:var(--font-head);font-size:36px;margin-top:6px">R$ ${p.price}<span style="font-size:14px;color:var(--text-dim);font-family:var(--font-body);font-weight:500"> /mês</span></div>`;
renderPlans();
}

function renderPlans(){
const rec=getRec();
document.getElementById('plans-grid').innerHTML=D.plans.map(p=>{
const isR=p.id===rec;
return `<article class="plan-card${isR?' rec':''}"><div><div class="mono" style="opacity:0.7">plano</div><h3>${p.name}</h3>${isR?'<span style="display:inline-block;margin-top:10px;padding:4px 10px;border-radius:999px;background:#0a0a0a;color:var(--yellow);font-size:10px;font-family:var(--font-mono);letter-spacing:0.1em;text-transform:uppercase;font-weight:700">★ recomendado</span>':''}</div><ul>${p.perks.map(pk=>`<li><span style="width:4px;height:4px;border-radius:50%;background:currentColor"></span>${pk}</li>`).join('')}</ul><div style="text-align:right"><div class="plan-price">R$${p.price}</div><div style="font-size:12px;opacity:0.7;margin-bottom:14px">por mês · sem fidelidade</div><a href="#aula-gratis" class="btn-cta" style="background:${isR?'#0a0a0a':'var(--yellow)'};color:${isR?'var(--yellow)':'#0a0a0a'}">Quero esse →</a></div></article>`;
}).join('');
}

function render(){
const isDark=document.documentElement.dataset.theme!=='light';
const app=document.getElementById('app');
app.innerHTML=`
<!-- NAV -->
<header class="nav">
<div class="nav-logo"><div class="nav-icon">H</div><div><div class="nav-brand">HIDRO &amp; MOVIMENTO</div><div class="mono">EST. ${D.brand.sinceYear} · CAMPINAS/SP</div></div></div>
<nav class="nav-links">${['Modalidades','Horários','Planos','Avaliações','Localização','Aula Grátis'].map(l=>`<a href="#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}">${l}</a>`).join('')}</nav>
<div class="nav-right"><button class="theme-toggle" onclick="toggleTheme()" title="Alternar tema"><span id="theme-icon">${isDark?'☀️':'🌙'}</span></button><a href="#aula-gratis" class="btn-cta">Aula experimental →</a></div>
</header>

<!-- HERO -->
<section class="hero">
<div class="hero-top mono"><span>01 — A casa</span><span>${D.brand.address}</span><span>${D.brand.hours}</span></div>
<h1>ÁGUA, FORÇA<br>E <span class="accent">BAIRRO.</span></h1>
<div class="hero-grid">
<p class="hero-desc">Há quase três décadas, no Jardim Proença. Natação, hidro, pilates, funcional e musculação — em turmas pequenas, com professoras que ainda lembram o seu nome.</p>
<div class="hero-btns"><a href="#planos" class="btn-cta" style="padding:16px 26px;font-size:15px">Ver planos</a><a href="#horarios" class="btn-outline" style="padding:16px 26px;font-size:15px">Horários da semana</a></div>
</div>
<div class="video-placeholder"><div style="position:absolute;inset:0;display:grid;place-items:center"><div style="display:flex;flex-direction:column;align-items:center;gap:14px"><div class="play-btn"><svg width="26" height="26" viewBox="0 0 24 24" fill="#0a0a0a"><path d="M8 5v14l11-7z"/></svg></div><span class="mono">video loop · 06s · piscina aquecida</span></div></div></div>
<div class="metrics">${[{v:'28',l:'anos no bairro'},{v:'5',l:'modalidades'},{v:'1.200+',l:'alunos ativos'},{v:'4,6',l:'★ no Google · 160 avaliações'}].map(m=>`<div class="metric"><div class="metric-val">${m.v}</div><div class="mono" style="margin-top:8px">${m.l}</div></div>`).join('')}</div>
</section>

<!-- MODALIDADES -->
<section id="modalidades" class="section">
<div class="eyebrow">02 — Modalidades</div>
<h2 class="h2">Cinco caminhos.<br>Uma piscina aquecida.</h2>
<div class="mod-grid">${D.modalities.map((m,i)=>`<article class="mod-card${i===0?' featured':''}"><div class="num">0${i+1}</div><div class="mono">${m.age} · ${m.duration}</div><h3>${m.name}</h3><p style="color:var(--text-dim);font-size:14px;line-height:1.55;max-width:460px">${m.desc}</p><div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px"><span class="mono">/${String(i+1).padStart(2,'0')}_${m.id.toUpperCase()}</span><a href="#horarios" style="font-size:12px;color:var(--yellow);font-weight:700">ver horários →</a></div></article>`).join('')}</div>
</section>

<!-- HORÁRIOS -->
<section id="horarios" class="section" style="background:var(--surface)">
<div class="eyebrow">03 — Horários</div>
<h2 class="h2">A semana<br>desenhada.</h2>
<p style="color:var(--text-dim);font-size:16px;margin-top:18px;max-width:540px">Filtre por modalidade e dia. Vagas atualizadas semanalmente.</p>
<div class="filter-row">${[{id:'todas',name:'Todas'},...D.modalities].map(m=>`<button class="filter-btn${filter===m.id?' active':''}" data-filter="${m.id}">${m.name}</button>`).join('')}</div>
<div class="day-row">${D.days.map(d=>`<button class="day-btn${day===d.id?' active':''}" data-day="${d.id}">${d.label}</button>`).join('')}</div>
<div class="sched-table" id="sched-body"></div>
</section>

<!-- PLANOS -->
<section id="planos" class="section">
<div class="eyebrow">04 — Planos</div>
<h2 class="h2">Monte o seu.<br>Pague só pelo que usa.</h2>
<div class="plans-layout">
<div class="calc-box">
<div class="mono" style="color:var(--yellow);margin-bottom:14px">// CALCULADORA</div>
<h3 style="font-family:var(--font-head);font-size:26px;letter-spacing:-0.02em;margin-bottom:8px">Quais modalidades?</h3>
<p style="color:var(--text-dim);font-size:13px;margin-bottom:22px">Toque para selecionar — recomendamos o plano ideal.</p>
<div id="calc-picks" style="display:flex;flex-direction:column;gap:8px"></div>
<div id="calc-result" class="calc-result"></div>
</div>
<div id="plans-grid" style="display:grid;gap:14px"></div>
</div>
</section>

<!-- AVALIAÇÕES -->
<section id="avaliacoes" class="section" style="background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
<div class="eyebrow">05 — O que dizem</div>
<div class="reviews-header"><h2 class="h2">4,6 estrelas.<br>160 vizinhos<br>concordam.</h2><div><div style="display:flex;align-items:baseline;gap:16px"><span class="review-big">4,6</span><div>${stars(4.6,20)}<div class="mono" style="margin-top:6px">${D.brand.reviews} avaliações no Google</div></div></div></div></div>
<div class="reviews-grid">${D.reviews.map(r=>`<article class="review-card">${stars(r.rating)}<p>"${r.text}"</p><div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:16px"><div><div style="font-weight:700;font-size:14px">${r.name}</div><div class="mono" style="margin-top:2px">${r.when}</div></div><span class="mono">via Google</span></div></article>`).join('')}</div>
</section>

<!-- GALERIA -->
<section class="section">
<div class="eyebrow">06 — A casa por dentro</div>
<div class="gallery-grid">
<div class="big"><div class="photo-slot mono" style="height:100%">piscina aquecida · 25m</div></div>
<div class="photo-slot mono" style="height:180px">recepção</div>
<div class="photo-slot mono" style="height:180px">sala de musculação</div>
<div class="photo-slot mono" style="height:180px">vestiários</div>
<div class="photo-slot mono" style="height:180px">área externa</div>
</div>
</section>

<!-- AULA GRÁTIS -->
<section id="aula-gratis" class="section" style="background:var(--footer-bg);border-top:1px solid var(--border)">
<div class="eyebrow">07 — Vem tomar um banho</div>
<h2 class="h2">Aula experimental,<br>por nossa conta.</h2>
<div class="form-map">
<div class="form-box" id="form-area">
<form id="trial-form" style="display:flex;flex-direction:column;gap:16px">
<div class="field"><label><span class="mono">Seu nome</span><input type="text" placeholder="Ex.: Joana Silva" required></label></div>
<div class="form-row">
<div class="field"><label><span class="mono">WhatsApp</span><input type="tel" placeholder="(19) 9 ____-____"></label></div>
<div class="field"><label><span class="mono">E-mail</span><input type="email" placeholder="voce@email.com"></label></div>
</div>
<div class="field"><label><span class="mono">Modalidade de interesse</span><select>${D.modalities.map(m=>`<option>${m.name}</option>`).join('')}</select></label></div>
<div class="field"><label><span class="mono">Melhor dia/horário</span><input type="text" placeholder="Ex.: terça à noite"></label></div>
<button type="submit" class="btn-cta" style="margin-top:8px;padding:16px 22px;font-size:15px;justify-content:center">Agendar minha aula grátis →</button>
<p class="mono" style="text-align:center">// confirmaremos em até 2h via WhatsApp</p>
</form>
</div>
<div class="map-wrap">
<svg viewBox="0 0 600 480" style="width:100%;height:100%;display:block">
<rect width="600" height="480" fill="var(--map-bg)"/>
<path d="M0 200 L600 220" stroke="var(--map-street)" stroke-width="22" fill="none"/>
<path d="M180 0 L210 480" stroke="var(--map-stroke)" stroke-width="14" fill="none"/>
<path d="M420 0 L440 480" stroke="var(--map-stroke)" stroke-width="14" fill="none"/>
<path d="M0 380 L600 400" stroke="var(--map-stroke)" stroke-width="10" fill="none"/>
${[[40,40,120,140],[230,40,170,140],[460,40,120,140],[40,260,140,100],[230,260,170,100],[460,260,120,100]].map(b=>`<rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}" fill="var(--map-block)" stroke="var(--map-stroke)"/>`).join('')}
<text x="20" y="195" fill="var(--map-label)" font-family="ui-monospace,monospace" font-size="10" letter-spacing="0.1em">R. JOAQUIM DE PAULA SOUZA</text>
<text x="220" y="20" fill="var(--map-label)" font-family="ui-monospace,monospace" font-size="9" letter-spacing="0.1em">AV. PROENÇA</text>
<g transform="translate(300 215)"><circle r="44" fill="oklch(0.86 0.17 95 / 0.18)"/><circle r="22" fill="oklch(0.86 0.17 95 / 0.35)"/><circle r="10" fill="var(--yellow)"/><circle r="3.5" fill="var(--bg)"/></g>
<g transform="translate(320 200)"><rect width="180" height="40" rx="6" fill="#fff"/><text x="14" y="17" fill="#0a0a0a" font-family="Manrope,sans-serif" font-size="11" font-weight="800">HIDRO &amp; MOVIMENTO</text><text x="14" y="32" fill="rgba(0,0,0,0.6)" font-family="ui-monospace,monospace" font-size="9">★ 4,6 · aberto agora</text></g>
</svg>
<div class="map-info"><div><div class="mono" style="color:var(--yellow)">// estamos aqui</div><div style="font-size:13px;margin-top:4px">${D.brand.address}</div></div><a href="#" style="color:var(--yellow);font-weight:700;font-size:13px">Como chegar →</a></div>
</div>
</div>
</section>

<!-- FAQ -->
<section class="section" style="padding-bottom:80px">
<div class="eyebrow">08 — Dúvidas</div>
<h2 class="h2">Antes que pergunte.</h2>
<div class="faq-list">${D.faq.map((f,i)=>`<div class="faq-item"><button class="faq-q" data-faq="${i}"><span>${f.q}</span><span class="faq-toggle${openFAQ===i?' open':''}">${openFAQ===i?'−':'+'}</span></button><div class="faq-a${openFAQ===i?' show':''}">${f.a}</div></div>`).join('')}</div>
</section>

<!-- FOOTER -->
<footer>
<div class="footer-brand">HIDRO &amp; MOVIMENTO</div>
<div class="footer-grid">
<div class="footer-col"><h4 class="mono">Endereço</h4><div>${D.brand.address}<br>CEP ${D.brand.cep}</div></div>
<div class="footer-col"><h4 class="mono">Contato</h4><div>${D.brand.phone}<br>WhatsApp ${D.brand.whatsapp}</div></div>
<div class="footer-col"><h4 class="mono">Horários</h4><div>Seg–Sex 06h–22h<br>Sáb 08h–13h<br>Dom fechado</div></div>
<div class="footer-col"><h4 class="mono">Siga</h4><div>@hidroemovimento<br>fb.com/hidromovimento</div></div>
</div>
<div class="footer-bottom mono"><span>© ${D.brand.sinceYear}–2026 · CNPJ 00.000.000/0001-00</span><span>Empresa de empreendedoras · Campinas/SP</span></div>
</footer>
`;

renderSchedule();
renderCalc();
bindEvents();
}

function bindEvents(){
// Filters
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
filter=b.dataset.filter;
document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x.dataset.filter===filter));
renderSchedule();
}));
// Days
document.querySelectorAll('[data-day]').forEach(b=>b.addEventListener('click',()=>{
day=b.dataset.day;
document.querySelectorAll('[data-day]').forEach(x=>x.classList.toggle('active',x.dataset.day===day));
renderSchedule();
}));
// Calculator picks
document.getElementById('calc-picks').addEventListener('click',e=>{
const btn=e.target.closest('[data-pick]');if(!btn)return;
const id=btn.dataset.pick;
if(picked.includes(id))picked=picked.filter(x=>x!==id);else picked.push(id);
renderCalc();
});
// FAQ
document.querySelectorAll('[data-faq]').forEach(b=>b.addEventListener('click',()=>{
const i=parseInt(b.dataset.faq);
openFAQ=openFAQ===i?-1:i;
document.querySelectorAll('.faq-item').forEach((item,idx)=>{
item.querySelector('.faq-toggle').classList.toggle('open',openFAQ===idx);
item.querySelector('.faq-toggle').textContent=openFAQ===idx?'−':'+';
item.querySelector('.faq-a').classList.toggle('show',openFAQ===idx);
});
}));
// Form
document.getElementById('trial-form')?.addEventListener('submit',e=>{
e.preventDefault();submitted=true;
document.getElementById('form-area').innerHTML='<div class="success"><div class="success-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></div><h3 style="font-family:var(--font-head);font-size:30px;letter-spacing:-0.02em;margin-bottom:12px">Recebemos!</h3><p style="color:var(--text-dim);font-size:15px">Vamos te chamar no WhatsApp em até 2 horas.<br>Já separa o traje de banho 😉</p></div>';
});
}

// GO
document.addEventListener('DOMContentLoaded',render);
