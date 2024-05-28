const arrow = document.querySelectorAll('.js-arrow');
const faq = document.querySelectorAll('.js-faq');

arrow.forEach( item => {
  item.addEventListener('click', function () {

    showHideAnswer(arrow[0], faq[0]);
    showHideAnswer(arrow[1], faq[1]);
    showHideAnswer(arrow[2], faq[2]);
    showHideAnswer(arrow[3], faq[3]);
    showHideAnswer(arrow[4], faq[4]);
    showHideAnswer(arrow[5], faq[5]);
    showHideAnswer(arrow[6], faq[6]);
    showHideAnswer(arrow[7], faq[7]);

    function showHideAnswer(arrowIndex, faqIndex) {
      if (item === arrowIndex) {
        set(faqIndex);
      }
    }
  });

  function set(elem) {
    elem.classList.toggle('active');
  }
});