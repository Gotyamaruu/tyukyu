
jQuery(function ($) {

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
});

$('.js-hamburger').click(function () {
  $(this).toggleClass('open');
  if( $(this).hasClass('open') ) {
    $('.js-drawer').fadeIn();
  } else {
    $('.js-drawer').fadeOut();
  }
});

$(window).on('load resize', function(){
  var wid = $(window).width();
  if (wid >= 768) {
    $('.js-drawer').css('display','block');
  } else {
    $('.js-drawer').css('display','none');
  }
});


const swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 3000,
  // loopedSlides: 2,
  slidesPerView:  "auto",
  spaceBetween: 24,
  centeredSlides: true,
  loopAdditionalSlides: 2,
  // allowTouchMove: false,
  autoplay: {
      delay: 1000,
      disableOnInteraction: false
  },
});

$(function () {
  $('.js-accordion-btn').on('click', function () {
    var content = $(this).next('.js-accordion-content');
    content.slideToggle(200);
    $(this).toggleClass('open');
  })
})
