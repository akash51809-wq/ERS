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