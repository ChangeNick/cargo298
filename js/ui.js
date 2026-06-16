// ui.js — прогресс-бар, кнопка «наверх», scrollspy в меню

// прогресс прокрутки + кнопка «наверх»
const scrollBtn = document.getElementById('scrollTop');
const progress = document.getElementById('progress');
function onScroll(){
  const h = document.documentElement, sc = h.scrollTop, max = h.scrollHeight - h.clientHeight;
  progress.style.width = (max > 0 ? (sc/max*100) : 0) + '%';
  scrollBtn.classList.toggle('visible', sc > 500);
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// подсветка активного пункта меню
const navLinks = [...document.querySelectorAll('.nav-links a')];
const spy = new IntersectionObserver((ents) => {
  ents.forEach(en => {
    if (en.isIntersecting){
      const id = en.target.id;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id));
    }
  });
}, {rootMargin: '-45% 0px -50% 0px'});
['about','persons','offices','chats','evidence','victims','contacts'].forEach(id => {
  const s = document.getElementById(id); if (s) spy.observe(s);
});
