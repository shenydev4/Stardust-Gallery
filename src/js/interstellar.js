let image_dots = document.querySelector('#suntypes .image-dots img');
let prev_type = types[0].fileName;

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
      image_dots.classList.replace(`image-dots-${prev_type}`, `image-dots-${types[i].fileName}`);
      image_dots.setAttribute('src', `./../src/img/interstellar/${types[i].fileName}.png`);
      image_dots.setAttribute('alt', `${types[i].fileName} dots`);
      prev_type = types[i].fileName;
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