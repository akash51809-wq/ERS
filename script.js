const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$("#year").textContent=new Date().getFullYear();

const header=$(".site-header"),menu=$(".menu");
menu?.addEventListener("click",()=>{header.classList.toggle("mobile-open");menu.textContent=header.classList.contains("mobile-open")?"×":"☰"});
$$('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=$(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"});header.classList.remove("mobile-open");if(menu)menu.textContent="☰"}}));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach((el,i)=>{el.style.transitionDelay=(i%5)*80+"ms";io.observe(el)});

const links=$$(".site-header nav a"), sections=links.map(a=>$(a.getAttribute("href"))).filter(Boolean);
const navIO=new IntersectionObserver(es=>{const hit=es.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(hit){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+hit.target.id))}},{rootMargin:"-35% 0px -55% 0px",threshold:[.05,.2,.5]});
sections.forEach(s=>navIO.observe(s));

const glow=$(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"},{passive:true});

$$("[data-tilt]").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    if(innerWidth<900)return;
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform="perspective(1100px) rotateX("+(-y*7)+"deg) rotateY("+(x*9)+"deg) translateZ(8px)";
  });
  card.addEventListener("pointerleave",()=>card.style.transform="");
});

const stage=$(".hero-stage"),phone=$(".phone");
stage?.addEventListener("pointermove",e=>{if(innerWidth<900)return;const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;phone.style.transform="translate(calc(-50% + "+x*14+"px),calc(-50% + "+y*10+"px)) rotateY("+(-16+x*12)+"deg) rotateX("+(4-y*8)+"deg) rotateZ(1deg)" )});
stage?.addEventListener("pointerleave",()=>phone.style.transform="translate(-50%,-50%) rotateY(-16deg) rotateX(4deg) rotateZ(1deg)");

document.addEventListener("visibilitychange",()=>{if(document.hidden)document.body.classList.add("paused");else document.body.classList.remove("paused")});