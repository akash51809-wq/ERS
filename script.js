const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const reveal=document.querySelectorAll('.service,.stats-grid>div,.flow-node,.why-list article,.model-grid article,.quote,.contact-card');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});
reveal.forEach((el,i)=>{el.style.transitionDelay=(i%5)*70+'ms';io.observe(el)});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});document.querySelector('.navbar')?.classList.remove('mobile-open')}}));
const menu=document.querySelector('.menu');const navbar=document.querySelector('.navbar');
if(menu&&navbar){menu.addEventListener('click',()=>{navbar.classList.toggle('mobile-open');menu.textContent=navbar.classList.contains('mobile-open')?'×':'☰'})}