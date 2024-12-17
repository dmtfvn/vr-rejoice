const footerEl = document.getElementById('footer');
footerEl.addEventListener('DOMContentLoaded', createFooter());

function createFooter() {
  const copyright = String.fromCodePoint(169);
  const dot = String.fromCharCode(183);

  const paraEl = document.createElement('p');
  paraEl.className = 'copyright';

  const spanEl = document.createElement('span');
  spanEl.className = 'rejoice';
  spanEl.textContent = `${dot} rejoice`;

  paraEl.appendChild(spanEl);

  paraEl.insertAdjacentHTML(
    'afterbegin',
    `Copyright ${copyright} 2024 `
  );

  paraEl.insertAdjacentHTML(
    'beforeend',
    ' Inc. All rights reserved.'
  );

  footerEl.appendChild(paraEl);
}