const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&","<":"<",">":">",'"':"""}[c]));
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* chapters */
$("#chs").innerHTML=CHAPTERS.map((c,i)=>`<div class="ch"><div class="n">0${i+1}</div><div class="tx rv"><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></div><div class="ph zoom rv" data-img="c${i+1}" data-cap="Editorial · ${esc(c[0])}" style="--h:${20+i*5}"></div></div>`).join("");
/* image slots */
function fill(el,src,alt){el.classList.remove("has");el.innerHTML="";el.setAttribute("role","img");el.setAttribute("aria-label":"Image placeholder: "+(el.dataset.cap||""));
 if(!src)return;const im=new Image();im.alt=alt||"";im.loading="lazy";im.decoding="async";im.style.opacity=0;
 im.onload=()=>{im.style.opacity="";el.classList.add("has");el.removeAttribute("role");el.removeAttribute("aria-label")};im.onerror=()=>im.remove();im.src=src;el.append(im)}
$$("[data-img]").forEach(el=>fill(el,IMAGES[el.dataset.img],el.dataset.cap));
/* phone */
if(CONFIG.phone){const t="tel:"+CONFIG.phone;["#callRow","#callOpt","#callBar"].forEach(s=>{const a=$(s);if(!a)return;a.href=t;a.hidden=false;a.removeAttribute("aria-disabled");a.classList.remove("off");const m=a.querySelector("small");if(m)m.textContent=a.id==="callOpt"?"Phone":"Call now"})}
/* menu */
let cat="All",term="";const cats=["All",...new Set(MENU.map(m=>m.category))];
const draw=()=>{$("#chips").innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c===cat}" data-c="${esc(c)}">${esc(c)}<sup>${c==="All"?MENU.length:MENU.filter(m=>m.category===c).length}</sup></button>`).join("");
 const L=MENU.map((m,i)=>[m,i]).filter(([m])=>(cat==="All"||m.category===cat)&&(m.name+m.description+m.status).toLowerCase().includes(term));
 $("#grid").innerHTML=L.length?L.map(([m,i])=>`<button class="card" data-i="${i}"><span class="fr zoom"><span class="c">${esc(m.category)}</span><span class="ph" data-m="${i}" data-cap="Dish photo" style="--h:${20+(i*7)%20}"></span><span class="pr">${esc(m.price)}</span><span class="vw">View dish +</span>${m.status?`<span class="st">${esc(m.status)}</span>`:""}</span><h3>${esc(m.name)}</h3><p>${esc(m.description)}</p>${m.tags&&m.tags.length?`<span class="tg">${m.tags.map(t=>`<i>${esc(t)}</i>`).join("")}</span>`:""}</button>`).join(""):`<p>No dishes match “${esc(term)}”.</p>`;
 $$("[data-m]").forEach(el=>fill(el,MENU[el.dataset.m].image,MENU[el.dataset.m].name))};
$("#chips").onclick=e=>{const b=e.target.closest(".chip");if(b){cat=b.dataset.c;draw()}};
$("#q").oninput=e=>{term=e.target.value.toLowerCase();draw()};
$$(".tile[data-cat]").forEach(t=>t.addEventListener("click",()=>{cat=t.dataset.cat;draw()}));
$("#grid").onclick=e=>{const c=e.target.closest(".card");if(!c)return;const m=MENU[c.dataset.i];$("#dc").textContent=m.category;$("#dt").textContent=m.name;$("#dd").textContent=m.description;$("#dp").textContent=[m.price,m.status].filter(Boolean).join(" · ");$("#di").dataset.cap="Dish photo";fill($("#di"),m.image,m.name);$("#dlg").showModal()};
$("#dx").onclick=()=>$("#dlg").close();$("#dlg").onclick=e=>{if(e.target.id==="dlg")e.target.close()};
draw();
/* subscription cards */
if(typeof SUBSCRIPTION!=="undefined"&&$("#subGrid")){
 $("#subGrid").innerHTML=SUBSCRIPTION.map((s,i)=>`<article class="sub-card rv">
  <div class="ph" data-sub="${i}" style="--h:${22+i*6}"></div>
  <div class="sub-body">
   <span class="eb">${esc(s.name)}</span>
   <h3>${esc(s.price)}</h3>
   <small>${esc(s.period)}</small>
   <p>${esc(s.desc)}</p>
   <div class="tg">${(s.tags||[]).map(t=>`<i>${esc(t)}</i>`).join("")}</div>
   <a class="pill f" href="https://wa.me/916385153008?text=Hi%2C%20I%27d%20like%20the%20${encodeURIComponent(s.name)}%20plan" target="_blank" rel="noopener">Subscribe on WhatsApp</a>
  </div>
 </article>`).join("");
 $$("[data-sub]").forEach(el=>fill(el,SUBSCRIPTION[el.dataset.sub].image,SUBSCRIPTION[el.dataset.sub].name));
}
/* nav */
const ov=$("#ov"),mb=$("#mb"),nav=o=>{ov.classList.toggle("on",o);mb.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":"";(o?$("#cl"):mb).focus()};
mb.onclick=()=>nav(true);$("#cl").onclick=()=>nav(false);ov.onclick=e=>{if(e.target.closest("a.big"))nav(false)};
addEventListener("keydown",e=>{if(e.key==="Escape"&&ov.classList.contains("on"))nav(false)});
const hd=$("#hd"),P=$$("[data-p]");
const onS=()=>{hd.classList.toggle("s",scrollY>innerHeight*.6);if(!rm)P.forEach(el=>{const r=el.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)el.style.transform=`translateY(${(r.top+r.height/2-innerHeight/2)*-.1}px)`})};
addEventListener("scroll",()=>requestAnimationFrame(onS),{passive:true});onS();
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.1});$$(".rv").forEach(el=>io.observe(el));
/* desktop cursor + magnetic arrow */
if(!rm&&matchMedia("(pointer:fine)").matches){const c=$(".cur"),g=$("#mag"),a=$(".dc");
 addEventListener("pointermove",e=>{c.style.opacity=1;c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;c.classList.toggle("big",!!e.target.closest("a,button"))});
 if(a&&g){a.onmousemove=e=>{const r=g.getBoundingClientRect();g.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.2}px)`};a.onmouseleave=()=>g.style.transform=""}}

/* palettes */
const PALS={ivory:["Ivory & Copper","#f6f0e6","#9a5f33"],terracotta:["Cream & Terracotta","#f4ebdd","#a53f22"],forest:["Sage & Gold","#eef0e6","#7f6420"],midnight:["Charcoal & Brass","#14110f","#c9a15b"],oxblood:["Blush & Oxblood","#f5ece8","#8b2f3a"]};
const setPal=p=>{if(!PALS[p])p="ivory";document.documentElement.dataset.palette=p;$$(".pal button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.p===p))};
if(CONFIG.paletteSwitcher){const d=document.createElement("div");d.className="pal";d.setAttribute("role","group");d.setAttribute("aria-label","Colour palette");
 d.innerHTML=Object.entries(PALS).map(([k,v])=>`<button data-p="${k}" aria-label="${v[0]}" title="${v[0]}" style="--c1:${v[1]};--c2:${v[2]}"></button>`).join("");
 d.onclick=e=>{const b=e.target.closest("button");if(b)setPal(b.dataset.p)};document.body.append(d)}
setPal(new URLSearchParams(location.search).get("palette")||CONFIG.palette);
