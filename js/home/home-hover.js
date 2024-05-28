const circle = document.querySelectorAll('.js-circle');

['mouseenter', 'mouseleave'].forEach( evt => {
  circle.forEach( item => {
    item.addEventListener(evt, function () {
      item.classList.toggle('active');
    });
  });
});
