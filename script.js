const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const reveal=document.querySelectorAll('.service,.stats-grid>div,.flow-node,.why-list article,.model-grid article,.quote,.contact-card');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});
reveal.forEach((el,i)=>{el.style.transitionDelay=(i%5)*70+'ms';io.observe(el)});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});document.querySelector('.site-header')?.classList.remove('mobile-open')}}));
const menu=document.querySelector('.menu');const navbar=document.querySelector('.site-header');
if(menu&&navbar){menu.addEventListener('click',()=>{navbar.classList.toggle('mobile-open');menu.textContent=navbar.classList.contains('mobile-open')?'×':'☰'})}
const bubbleLinks=document.querySelectorAll(".main-nav a[href^=\"#\"]");
const setBubble=(link)=>{bubbleLinks.forEach(item=>item.classList.remove("active"));link.classList.add("active")};
bubbleLinks.forEach(link=>link.addEventListener("click",()=>setBubble(link)));
const sections=[...bubbleLinks].map(link=>document.querySelector(link.getAttribute("href"))).filter(Boolean);
const bubbleObserver=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible){const link=document.querySelector(`.main-nav a[href="#${visible.target.id}"]`);if(link)setBubble(link)}},{rootMargin:"-35% 0px -55% 0px",threshold:[0,.25,.5]});
sections.forEach(section=>bubbleObserver.observe(section));
/* ERS visual-only 3D enhancement — no content/layout replacement */
(()=>{const s=document.createElement('style');s.textContent=\`
.hero-image,.editorial-image,.service-visual-strip figure,.service-feature-image,.company-visual,.use-hero-image,.desipe-image,.contact-photo,.hero-panel,.api-console,.desipe-board,.use-grid article,.product-notes>div,.capability-list article,.workflow-row article{transform-style:preserve-3d;will-change:transform}
.hero-image,.editorial-image,.service-feature-image,.company-visual,.use-hero-image,.desipe-image,.contact-photo{box-shadow:0 22px 45px rgba(5,26,45,.16),0 5px 12px rgba(5,26,45,.08);transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s ease}
.hero-image:hover,.editorial-image:hover,.service-feature-image:hover,.company-visual:hover,.use-hero-image:hover,.desipe-image:hover,.contact-photo:hover{transform:translateY(-7px) perspective(1200px) rotateX(1deg);box-shadow:0 30px 60px rgba(5,26,45,.22),0 8px 18px rgba(5,26,45,.10)}
.hero-panel,.api-console,.desipe-board{box-shadow:14px 18px 32px rgba(5,26,45,.16),0 3px 8px rgba(5,26,45,.08)}
.hero-panel:hover,.api-console:hover,.desipe-board:hover{box-shadow:20px 26px 45px rgba(5,26,45,.22),0 6px 12px rgba(5,26,45,.10)}
.service-visual-strip figure,.use-grid article,.product-notes>div,.capability-list article,.workflow-row article{box-shadow:0 10px 24px rgba(5,26,45,.07)}
.service-visual-strip figure:hover,.use-grid article:hover,.product-notes>div:hover,.capability-list article:hover,.workflow-row article:hover{transform:translateY(-6px) translateZ(8px);box-shadow:0 20px 38px rgba(5,26,45,.14)}
.service-visual-strip figure img,.hero-image img,.editorial-image img,.service-feature-image img,.company-visual img,.use-hero-image img,.desipe-image img,.contact-photo img{transition:transform .7s cubic-bezier(.2,.8,.2,1),filter .5s ease}
.service-visual-strip figure:hover img,.hero-image:hover img,.editorial-image:hover img,.service-feature-image:hover img,.company-visual:hover img,.use-hero-image:hover img,.desipe-image:hover img,.contact-photo:hover img{transform:scale(1.035) translateZ(5px)}
.hero-panel,.desipe-board{animation:ersFloat3d 6s ease-in-out infinite}
@keyframes ersFloat3d{0%,100%{transform:translateY(0) rotateX(0) rotateY(0)}50%{transform:translateY(-7px) rotateX(.6deg) rotateY(-.7deg)}}
@media(max-width:900px){.hero-panel,.desipe-board{animation:none}.hero-image:hover,.editorial-image:hover,.service-feature-image:hover,.company-visual:hover,.use-hero-image:hover,.desipe-image:hover,.contact-photo:hover,.service-visual-strip figure:hover,.use-grid article:hover,.product-notes>div:hover,.capability-list article:hover,.workflow-row article:hover{transform:translateY(-3px)}}
@media(prefers-reduced-motion:reduce){.hero-panel,.desipe-board{animation:none}}
\`;document.head.appendChild(s)})();
