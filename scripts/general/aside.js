import { createLiEl } from '../../utils/createLi.js';
import { createLinkEl } from '../../utils/createLink.js';
import { createSvgEl } from '../../utils/createSvg.js';
import { toggleSidebar } from '../../utils/toggleSidebar.js';

window.addEventListener('DOMContentLoaded', createSidebar());

document.querySelector('.js-x-icon').addEventListener('click', () => toggleSidebar('none'));

window.addEventListener('resize', () => {
  if (innerWidth > 565) {
    toggleSidebar('none');
  }
});

document.querySelectorAll('aside a').forEach(link => {
  link.addEventListener('click', () => toggleSidebar('none'));
});

function createSidebar() {
  const sidebarEl = document.querySelector('aside');

  const closeSbBtn = document.createElement('button');
  closeSbBtn.classList.add('js-x-icon');

  closeSbBtn.appendChild(
    createSvgEl('m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z')
  );

  const navEl = document.createElement('nav');

  const ulEl = document.createElement('ul');

  ulEl.appendChild(createLiEl(createLinkEl('explore.html', 'Explore')));
  ulEl.appendChild(createLiEl(createLinkEl('vision.html', 'Vision')));
  ulEl.appendChild(createLiEl(createLinkEl('faq.html', 'FAQ')));
  ulEl.appendChild(createLiEl(createLinkEl('manifest.html', 'Manifest')));

  navEl.appendChild(ulEl);

  sidebarEl.appendChild(closeSbBtn);
  sidebarEl.appendChild(navEl);
}