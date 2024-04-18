const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 70,

  pagination: {
    type: 'fraction',
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

for (let i = 0; i <= 8; i++) {
  lightGallery(document.querySelector(`.gallery${i}`));
}


// animation

let planets_3d = document.querySelectorAll('.planet-3d-bg video');
let clickbox_infocards = document.querySelectorAll('.planet-clickbox .planet-clickbox-infocard');
let prevIndex;

function planetClickHandler(clickedIndex, planet) {
  if (prevIndex == undefined && window.innerWidth > 1023) {

    planetary.style.marginLeft = '40%';
    clickbox_infocards[clickedIndex].classList.add('active');
    planets_3d[clickedIndex].classList.add('active-3d');
    prevIndex = clickedIndex;

    setTimeout(() => {
      clickbox.style.opacity = '1';
    }, 250)

  } else if (prevIndex != undefined && window.innerWidth > 1023) {

    setTimeout(() => {
      clickbox_infocards[prevIndex].classList.remove('active');
      clickbox_infocards[clickedIndex].classList.add('active');
      planets_3d[prevIndex].classList.remove('active-3d');
      planets_3d[clickedIndex].classList.add('active-3d');
      prevIndex = clickedIndex;
    }, 150);

  } else if (window.innerWidth <= 1023) {
    document.getElementById(`infotab-${planet}`).scrollIntoView({ behavior: 'smooth' }); 
  }
};

function clickboxBtnHandler(e) {
  let elmntToView = document.getElementById(`infotab-${e}`);
  elmntToView.scrollIntoView({ behavior: 'smooth' }); 
}

function clickboxBtnClose() {
  clickbox.style.opacity = '0';
  planetary.style.marginLeft = '50%';
  clickbox_infocards[prevIndex].classList.remove('active');
  planets_3d[prevIndex].classList.remove('active-3d');
  
  prevIndex = undefined;
}


// bottom corner data text

const accelerationFactor = 1503360000;  
const startDate = new Date('2024-03-30');               
let initDate = Date.now();
let realTime = document.getElementById('realTime');
let simulatedTime = document.getElementById('simulatedTime');
let realDate = document.getElementById('realDate');
let simulatedDate = document.getElementById('simulatedDate');

function acceleratedDate(startDate, accelerationFactor) {
  
  const currentDate = Date.now();

  const realTimePassed = (currentDate - initDate) / 1000; // seconds
  const simulatedTimePassed = ((currentDate - initDate) +  realTimePassed * accelerationFactor) / 86400000; // days

  realTime.innerText = `${Math.round((realTimePassed / 60) * 100) / 100} min`;
  simulatedTime.innerText = `${Math.round((simulatedTimePassed / 365.25) * 100) / 100} earth yrs`;

  realDate.innerText = `${new Date(startDate + realTimePassed * 1000).toLocaleDateString('de-DE')}`;
  simulatedDate.innerText = `${new Date(startDate + simulatedTimePassed * 86400000).toLocaleDateString('de-DE')}`;

  setTimeout(() => {
    acceleratedDate(startDate, accelerationFactor); 
  }, 2000);
}

acceleratedDate(startDate.getTime(), accelerationFactor); 