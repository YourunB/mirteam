const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
      delay: 10000,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  