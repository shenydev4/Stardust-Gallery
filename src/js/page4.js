let image_dots = document.querySelectorAll('#suntypes .image-dots img');

const suntypes_swiper = new Swiper('.suntypes-swiper', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 500,
  keyboard: true,
  spaceBetween: 200,

  pagination: {
    el: '.suntypes-swiper-pagination',
  },

  navigation: {
    nextEl: '.suntypes-swiper-button-next',
    prevEl: '.suntypes-swiper-button-prev',
  },

  on: {
    slideChange: e => {
      const i = e.activeIndex;
      switch(i) {
        case 0:
          image_dots[i+1].classList.remove('active');
          image_dots[i].classList.add('active');
          break;
        case 6:
          image_dots[i-1].classList.remove('active');
          image_dots[i].classList.add('active');
          break;
        default:
          if (image_dots[i+1].classList.contains('active')) {
            image_dots[i+1].classList.remove('active');
            image_dots[i].classList.add('active');
          } else if (image_dots[i-1].classList.contains('active')) {
            image_dots[i-1].classList.remove('active');
            image_dots[i].classList.add('active');
          }
          break;
      }
    },
  },
});

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  keyboard: true,

  breakpoints: {
    0: {
      spaceBetween: 200,
    },
    768: {
      spaceBetween: 550,
    },
    1920: {
      spaceBetween: 850,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});