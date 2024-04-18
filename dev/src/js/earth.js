const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 100,

  pagination: {
    type: 'fraction',
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

lightGallery(document.querySelector('.gallery1'));
lightGallery(document.querySelector('.gallery2'));