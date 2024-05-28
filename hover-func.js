export function hover(elem) {
  ['mouseenter', 'mouseleave'].forEach( evt => {
    elem.forEach( item => {
      item.addEventListener(evt, function () {
        item.classList.toggle('active');
      });
    });
  });
}