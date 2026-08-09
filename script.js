// =========================================================
// ADVOCACIA ROVINA — interações
// =========================================================
document.addEventListener('DOMContentLoaded', () => {

  // Ano dinâmico no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header muda de estilo ao rolar a página
  const header = document.getElementById('siteHeader');
  const whatsappFab = document.getElementById('whatsappFab');

  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('is-scrolled', scrolled);
    whatsappFab.classList.toggle('is-visible', window.scrollY > 500);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fecha o menu mobile ao clicar em um link
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Animação de revelação ao rolar a página
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Sem suporte ao IntersectionObserver: apenas mostra tudo
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

});
