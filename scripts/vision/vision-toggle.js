const img1 = document.querySelector('.js-future-1>img');
const title1 = document.querySelector('.js-future-1>h6');
const text1 = document.querySelector('.js-future-1>p');

const img2 = document.querySelector('.js-future-2>img');
const title2 = document.querySelector('.js-future-2>h6');
const text2 = document.querySelector('.js-future-2>p');

const fullOpac = 1;
const lessOpac = 0.2;
const zeroOpac = 0;

document.querySelector('.js-future-container').addEventListener('change', (e) => {
  if (e.target.id === 'switch-1-content') {
    displayMore(img1, title1, text1);
  }

  if (e.target.id === 'switch-1-blank') {
    displayLess(img1, title1, text1);
  }

  if (e.target.id === 'switch-2-content') {
    displayMore(img2, title2, text2);
  }

  if (e.target.id === 'switch-2-blank') {
    displayLess(img2, title2, text2);
  }
});

function displayMore(img, title, text) {
  img.style.opacity = lessOpac;
  img.style.transition = 'opacity 0.5s ease';

  title.style.opacity = fullOpac;

  text.style.opacity = fullOpac;
  text.style.transition = 'opacity 1.5s ease';
  text.style.transitionDelay = '0.8s';
}

function displayLess(img, title, text) {
  img.style.opacity = fullOpac;

  title.style.opacity = zeroOpac;

  text.style.opacity = zeroOpac;
  text.style.transition = 'none';
}