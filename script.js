const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const date = document.getElementById('date').value || 'Por definir';
  const city = document.getElementById('city').value.trim() || 'Por definir';
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim() || 'Sin detalles adicionales';

  const message = `Hola DH Productions, soy ${name}. Quiero una cotización.\n\nFecha: ${date}\nCiudad: ${city}\nServicio: ${service}\nDetalles: ${details}`;
  window.open(`https://wa.me/15105866672?text=${encodeURIComponent(message)}`, '_blank');
});
