let page1_bg = document.querySelector('#page1 .background img');

page1_bg.style.bottom = `-${window.scrollY / 15}px`;
page1_bg.style.filter = `hue-rotate(${360 - window.scrollY / 25}deg)`;

window.addEventListener('scroll', () => {
  page1_bg.style.bottom = `-${window.scrollY / 15}px`;
  page1_bg.style.filter = `hue-rotate(${360 - window.scrollY / 25}deg)`;
});