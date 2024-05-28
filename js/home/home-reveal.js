const btnContainer = document.querySelector('.js-btn-container');
const btnReveal = document.querySelector('.js-btn-reveal');

const circleAll = document.querySelector('.js-circle-total-width');
circleAll.style.display = 'none';

const circle = document.querySelectorAll('.js-circle');
circle.forEach( elem => {
  elem.style.opacity = 0;
});

btnReveal.addEventListener('click', afterClick);

function afterClick() {
  if (circleAll.style.display === 'none') {
    circleAll.style.display = 'flex';
    document.body.offsetHeight;

    showItem(circle[0], '0.5s');
    showItem(circle[1], '2s');
    showItem(circle[2], '3s');
  }

  function showItem(elem, delay) {
    elem.style.opacity = 1;
    elem.style.transition = 'opacity 1s ease-in-out';
    elem.style.transitionDelay = delay;
  }

  btnReveal.removeEventListener('click', afterClick);
  btnReveal.remove();
  btnContainer.remove();
}