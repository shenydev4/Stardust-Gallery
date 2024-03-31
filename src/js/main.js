// custom cursor

let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");

document.addEventListener('mousemove', function(e) {

  setTimeout(() => {
    cursor.style.left = `${e.clientX }px`; 
    cursor.style.top = `${e.clientY }px`;
  }, 80)
  
  cursor2.style.cssText = `left: ${e.clientX }px; top: ${e.clientY}px`;
});


// back to top

function backToTop () {
  document.querySelector('body').scrollIntoView({ behavior: 'smooth' }); 
}

let btt_btn = document.querySelector('.btt-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY >= window.innerHeight) {

    btt_btn.style.display = 'flex';
    setTimeout(() => {
      btt_btn.style.opacity = '1';
    }, 10);

  } else if (window.scrollY < window.innerHeight && btt_btn.style.display == 'flex') {

    btt_btn.style.opacity = '0';
    setTimeout(() => {
      btt_btn.style.display = 'none';
    }, 250);
  }
})


// header

let body = document.querySelector('body');
let header = document.querySelector('#header');
let nav_btn = document.querySelector('#header .nav-btn');
let mobile_nav = document.querySelector('#header .active-mobile-nav');
let animation_circle = document.querySelector('#header .animation-circle');

function navBtnHandler() {

  if (!nav_btn.classList.contains('active')) {

    body.style.overflow = 'hidden';
    animation_circle.style.transform = 'scale(60)';
    nav_btn.style.transform = 'rotate(180deg)';
    
    setTimeout(() => {
      nav_btn.classList.add('active');
    }, 150);

    setTimeout(() => {
      mobile_nav.style.display = 'flex';
      header.style.height = '100vh';

      setTimeout(() => {
        mobile_nav.style.opacity = '1';
      }, 10)
    }, 700);

  } else {

    mobile_nav.style.opacity = '0';
    body.style.overflow = 'visible';
    animation_circle.style.transform = 'scale(0)';
    nav_btn.style.transform = 'rotate(0deg)';

    setTimeout(() => {
      nav_btn.classList.remove('active');
    }, 150);

    setTimeout(() => {
      mobile_nav.style.display = 'none';
      header.style.height = '50px';
      setTimeout(() => {
      }, 10)
    }, 200);
  }
}


// newsletter

function handleSubmit(e) {
  
  event.preventDefault();

  let newsletter = document.getElementById('newsletter');
  newsletter.style.display = 'none';

  let p = document.createElement('p');
  p.innerText = 'just joking :)';
  let video = '<img src="/src/img/never-gonna.gif" style="width: 100px;"></img>';

  let newsletterBox = document.querySelector('#footer .footer-upper-newsletter');
  newsletterBox.prepend(p);
  newsletterBox.insertAdjacentHTML('beforeend', video);
}