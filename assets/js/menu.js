'use strict';

const swiper = new Swiper(".swiper", {
  loop: true,
  breakpoints: {
  // 768px以上の場合
  100: {
    slidesPerView: 4,
  },
},
// ナビボタンが必要なら追加
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
}
});