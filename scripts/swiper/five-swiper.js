const swiperFive = new Swiper('.swiper-container', {
  spaceBetween: 10,
  freeMode: false,
  loop: true,
  grabCursor: true,
  navigation: {
    prevEl: '.bottom-slider-button-prev',
    nextEl: '.bottom-slider-button-next',
  },
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
