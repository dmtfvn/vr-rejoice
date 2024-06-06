const image = document.querySelectorAll('.js-future-module-image');
const title = document.querySelectorAll('.js-future-module-title');
const line = document.querySelectorAll('.js-future-module-line');
const text = document.querySelectorAll('.js-future-module-text');

const btn = document.querySelectorAll('.js-btn-toggle');

const fullOpac = 1;
const lessOpac = 0.2;
const zeroOpac = 0;

const darkGray = 'hsl(0, 3%, 60%)';
const lightGray = 'hsl(0, 7%, 80%)';

function displayMore(img, title, sprt, txt) {
  img.style.opacity = lessOpac;
  img.style.transition = 'opacity 0.5s ease-out';

  title.style.opacity = fullOpac;

  sprt.style.opacity = fullOpac;
  sprt.style.transition = 'opacity 1s ease-in-out';
  sprt.style.transitionDelay = '1s';

  txt.style.opacity = fullOpac;
  txt.style.transition = 'opacity 1.5s ease-in-out';
  txt.style.transitionDelay = '2s';
}

function displayLess(img, title, sprt, txt) {
  img.style.opacity = fullOpac;

  title.style.opacity = zeroOpac;

  sprt.style.opacity = zeroOpac;
  sprt.style.transition = 'none';

  txt.style.opacity = zeroOpac;
  txt.style.transition = 'none';
}

function swapColor(btnLeft, btnRight) {
  btnLeft.style.backgroundColor = darkGray;
  btnRight.style.backgroundColor = lightGray;
}

btn[1].addEventListener('click', function () {
  displayMore(image[0], title[0], line[0], text[0]);
  swapColor(btn[1], btn[0]);
});

btn[0].addEventListener('click', function () {
  displayLess(image[0], title[0], line[0], text[0]);
  swapColor(btn[0], btn[1]);
});

btn[3].addEventListener('click', function () {
  displayMore(image[1], title[1], line[1], text[1]);
  swapColor(btn[3], btn[2]);
});

btn[2].addEventListener('click', function () {
  displayLess(image[1], title[1], line[1], text[1]);
  swapColor(btn[2], btn[3]);
});