const module = document.querySelectorAll('.js-module');
const text = document.querySelectorAll('.js-module-text');

const title = [
  'Grand Canyon',
  'Petra City',
  'Sahara Desert',
  'Mayan Pyramids',
  'Amazonia River',
  'K2 Mountain',
  'South Africa',
  'North Pole',
  'Arenal Volcano',
  'Detian Falls',
  'Devetashka Cave'
];

module.forEach( elem => {
  elem.addEventListener('mouseenter', function () {

    mouseEnter(module[0], text[0], title[0]);
    mouseEnter(module[1], text[1], title[1]);
    mouseEnter(module[2], text[2], title[2]);
    mouseEnter(module[3], text[3], title[3]);
    mouseEnter(module[4], text[4], title[4]);
    mouseEnter(module[5], text[5], title[5]);
    mouseEnter(module[6], text[6], title[6]);
    mouseEnter(module[7], text[7], title[7]);
    mouseEnter(module[8], text[8], title[8]);
    mouseEnter(module[9], text[9], title[9]);
    mouseEnter(module[10], text[10], title[10]);

    function mouseEnter(obj, txt, als) {
      if (elem === obj) {
        insertName(txt, als);
      }
    }
  });

  function insertName(subj, value) {
    subj.innerText = value;
  }
});

module.forEach( elem => {
  elem.addEventListener('mouseleave', function () {
    text.forEach( item => item.innerText = '');
  });
});