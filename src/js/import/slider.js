import Swiper from 'swiper';


//Слайдер на главной
let homeSwiper = new Swiper ('.home-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

//Слайдер AFC
let afcSwiper = new Swiper ('.afc-slider', {
  direction: 'vertical',
  slidesPerView: 3,
  speed: 1000,
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      direction: 'horizontal',
    }
  }
});


//Слайдер для отзывов(миниаютюры)
let reviewSwiper = new Swiper ('.review-slider', {
  slidesPerView: 4,
  speed: 200,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Слайдер для отзывов(миниаютюры, мобилка)
let reviewSwiperM = new Swiper ('.review-slider-mobile', {
  slidesPerView: 1,
  speed: 200,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Лендинг .applying__1
let applyingSwiper = new Swiper ('.applying-slider-top', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

//Лендинг .applying__2
let applyingSliderBottom = new Swiper ('.applying-slider-bottom', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
});

//Лендинг AFC, IBC .use
let swiperUse = new Swiper ('.use-swiper', {
  slidesPerView: 3,
  pagination: {
    el: '.pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
    },
  },
});
$('.use__pagination--1').on('click', function() {
  swiperUse.slideTo(0);
  active($(this));
});
$('.use__pagination--2').on('click', function() {
  swiperUse.slideTo(1);
  active($(this));
});
$('.use__pagination--3').on('click', function() {
  swiperUse.slideTo(2);
  active($(this));
});

swiperUse.on('slideChange', function() {
  if(swiperUse.realIndex === 0) {
    active($('.use__pagination--1'));
  } else if(swiperUse.realIndex === 1) {
    active($('.use__pagination--2'));
  } else if(swiperUse.realIndex === 2) {
    active($('.use__pagination--3'));
  }
});

function active(crr) {
  $('.use__pagination__block').removeClass('active');
  crr.addClass('active');
};

// табы ACF
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').fadeOut(1).removeClass('active').eq($(this).index()).fadeIn(600).addClass('active');
});


 

