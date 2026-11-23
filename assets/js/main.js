/* Menu mobile */
const hb = document.getElementById('hamburger'), menu = document.getElementById('mobile-menu');
const setMenu = open => {
  menu.classList.toggle('open', open);
  hb.setAttribute('aria-expanded', open);
  hb.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  document.getElementById('hb1').style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
  document.getElementById('hb2').style.opacity = open ? '0' : '1';
  document.getElementById('hb3').style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
};
hb.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

/* Link ativo na navegação conforme o scroll */
const links = document.querySelectorAll('.nav-link');
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  links.forEach(l => l.toggleAttribute('aria-current', l.getAttribute('href') === '#' + e.target.id));
}), { threshold: 0.3 });
document.querySelectorAll('header[id], section[id], footer[id]').forEach(s => io.observe(s));
