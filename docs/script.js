document.querySelector('[data-year]')?.replaceChildren(String(new Date().getFullYear()));

const slides = [...document.querySelectorAll('.research-slide')];
const dots = [...document.querySelectorAll('.slide-dot')];
if (slides.length && dots.length) {
  let current = 0;
  let timer;
  const showSlide = (index) => {
    current = index;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-pressed', String(i === current));
    });
  };
  const start = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearInterval(timer);
    timer = setInterval(() => showSlide((current + 1) % slides.length), 5500);
  };
  dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); start(); }));
  document.querySelector('.research-slides')?.addEventListener('mouseenter', () => clearInterval(timer));
  document.querySelector('.research-slides')?.addEventListener('mouseleave', start);
  start();
}
