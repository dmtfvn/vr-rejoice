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

document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => toggleSidebar('none'));
});

function createSidebar() {
  const sidebarEl = document.querySelector('.js-sidebar-container');

  const closeSbBtn = document.createElement('button');
  closeSbBtn.classList.add('js-x-icon');

  closeSbBtn.appendChild(
    createSvgEl('m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z')
  );

  sidebarEl.appendChild(closeSbBtn);
  sidebarEl.appendChild(createLinkEl('explore.html', 'Explore'));
  sidebarEl.appendChild(createLinkEl('vision.html', 'Vision'));
  sidebarEl.appendChild(createLinkEl('faq.html', 'FAQ'));
  sidebarEl.appendChild(createLinkEl('manifest.html', 'Manifest'));
}