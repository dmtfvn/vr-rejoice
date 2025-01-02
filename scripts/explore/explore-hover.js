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

function insertName(subj, value) {
  subj.textContent = value;
}

module.forEach(elem => {
  elem.addEventListener('mouseenter', function () {
    function hoverOn(obj, txt, name) {
      if (elem === obj) {
        insertName(txt, name);
      }
    }

    hoverOn(module[0], text[0], title[0]);
    hoverOn(module[1], text[1], title[1]);
    hoverOn(module[2], text[2], title[2]);
    hoverOn(module[3], text[3], title[3]);
    hoverOn(module[4], text[4], title[4]);
    hoverOn(module[5], text[5], title[5]);
    hoverOn(module[6], text[6], title[6]);
    hoverOn(module[7], text[7], title[7]);
    hoverOn(module[8], text[8], title[8]);
    hoverOn(module[9], text[9], title[9]);
    hoverOn(module[10], text[10], title[10]);
  });
});

module.forEach(elem => {
  elem.addEventListener('mouseleave', function () {
    text.forEach(item => item.textContent = '');
  });
});