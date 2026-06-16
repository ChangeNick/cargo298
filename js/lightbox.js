// lightbox.js — просмотр изображений (галерея + одиночные фото)

const allImgs = ["images/img_015.png?v=2","images/img_017.png","images/img_009.png","images/img_006.png","images/img_010.png","images/img_019.png","images/img_007.png","images/img_002.png","images/img_004.png","images/img_008.png","images/img_020.png","images/img_011.png","images/img_003.png","images/img_013.png","images/img_012.png","images/img_016.png","images/img_018.png","images/img_014.png?v=2","images/img_001.png","images/photo_2026-06-17_01-07-23.jpg","images/photo_2026-06-17_01-07-41.jpg"];
let lbIdx = 0;
const lb = id => document.getElementById(id);

function renderLb(){ lb('lb-img').src = allImgs[lbIdx]; lb('lb-counter').textContent = (lbIdx+1)+' / '+allImgs.length; }

function openLightbox(src, idx){
  lbIdx = (idx !== undefined) ? idx : allImgs.indexOf(src);
  if (lbIdx < 0){ lb('lb-img').src = src; lb('lb-counter').textContent = ''; }
  else { renderLb(); }
  lb('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){ lb('lightbox').classList.remove('active'); document.body.style.overflow = ''; }
function closeLightboxBg(e){ if (e.target === lb('lightbox')) closeLightbox(); }
function lbPrev(e){ e && e.stopPropagation(); if (lbIdx < 0) return; lbIdx = (lbIdx-1+allImgs.length)%allImgs.length; renderLb(); }
function lbNext(e){ e && e.stopPropagation(); if (lbIdx < 0) return; lbIdx = (lbIdx+1)%allImgs.length; renderLb(); }

document.addEventListener('keydown', e => {
  if (!lb('lightbox').classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbPrev(e);
  if (e.key === 'ArrowRight') lbNext(e);
});

// активация кликабельных изображений с клавиатуры
document.querySelectorAll('[role=button]').forEach(el => {
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); } });
});
