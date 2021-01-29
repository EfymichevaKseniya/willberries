const swiper = new Swiper('.swiper-container', {
    loop: true,
      
    // Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });