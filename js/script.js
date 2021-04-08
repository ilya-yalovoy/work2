new Swiper('.speaks__slider', {
	navigation: {
    nextEl: '.speak__next',
    prevEl: '.speak__prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },

  simulateTouch: false,
  touchRadio: 2,
  touchAngle: 45,
  grabCursor: false,

  keyboard: {
  	enable: true,
  },

  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  freeMode: true,
  speed: 500,
  breakpoints: {
    1120: {
      slidesPerView: 4,
    },
    880: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
    },
  },
});

new Swiper('.doctors-swiper', {
  watchOverflow: true,
  navigation: {
    nextEl: '.doctor-next',
    prevEl: '.doctor-prev',
  },
  speed:300,
  slidesPerView: 1,

  breakpoints: {
    1120: {
      slidesPerView: 4,
    },
    880: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
    },
  },

});

$(document).ready(function() {
  $('.menu__burger').click(function(event) {
    $('.menu__burger,.menu__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});