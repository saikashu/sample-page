'use strict';

const swiper = new Swiper(".swiper", {
  loop: true, //ループさせる
      effect: "fade", //フェードのエフェクト
      autoplay: {
        delay: 4000, //４秒後に次の画像へ
        disableOnInteraction: false //ユーザー操作後に自動再生を再開する
      },
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$(document).ready(function(){
  $('.slide2').slick({
  slidesToShow: 4,
  SlidesToScroll: 1, 
  });
});