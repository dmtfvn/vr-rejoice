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
    function hoverModule(obj, txt, name) {
      if (elem === obj) {
        insertName(txt, name);
      }
    }

    hoverModule(module[0], text[0], title[0]);
    hoverModule(module[1], text[1], title[1]);
    hoverModule(module[2], text[2], title[2]);
    hoverModule(module[3], text[3], title[3]);
    hoverModule(module[4], text[4], title[4]);
    hoverModule(module[5], text[5], title[5]);
    hoverModule(module[6], text[6], title[6]);
    hoverModule(module[7], text[7], title[7]);
    hoverModule(module[8], text[8], title[8]);
    hoverModule(module[9], text[9], title[9]);
    hoverModule(module[10], text[10], title[10]);
  });
});

module.forEach(elem => {
  elem.addEventListener('mouseleave', function () {
    text.forEach(item => item.textContent = '');
  });
});