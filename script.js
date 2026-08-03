
const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('#nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('[data-filter]');
const cards=document.querySelectorAll('.gallery-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  cards.forEach(card=>card.hidden=!(f==='Todos'||card.dataset.category===f));
}));

const lightbox=document.querySelector('#lightbox');
cards.forEach(card=>card.addEventListener('click',()=>{
  lightbox.querySelector('img').src=card.dataset.full;
  lightbox.querySelector('img').alt=card.querySelector('img').alt;
  lightbox.querySelector('p').textContent=card.querySelector('img').alt;
  lightbox.showModal();
}));
lightbox.querySelector('button').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('#quoteForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const msg=`Hola DH Productions, quiero una cotización.%0A%0ANombre: ${encodeURIComponent(d.get('nombre')||'')}%0AFecha: ${encodeURIComponent(d.get('fecha')||'Por confirmar')}%0ACiudad: ${encodeURIComponent(d.get('ciudad')||'')}%0ATipo de evento: ${encodeURIComponent(d.get('evento')||'')}%0AServicios: ${encodeURIComponent(d.get('servicios')||'')}`;
  window.open(`https://wa.me/15105866672?text=${msg}`,'_blank','noopener');
});
