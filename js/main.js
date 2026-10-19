// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

// Close mobile menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Header shadow on scroll =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Contact form (demo only) =====
function handleSubmit(event) {
  event.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = '✓ Thanks! This is a demo — in the live site your message would be sent.';
  event.target.reset();
  setTimeout(() => { note.textContent = ''; }, 5000);
  return false;
}