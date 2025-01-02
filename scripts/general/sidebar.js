import { createLinkEl } from '../../utils/createLink.js';
import { createSvgEl } from '../../utils/createSvg.js';
import { toggleSidebar } from '../../utils/toggleSidebar.js';

window.addEventListener('DOMContentLoaded', createSidebar());

document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => toggleSidebar('none'));
});

window.addEventListener('resize', () => {
  if (innerWidth > 565) {
    toggleSidebar('none');
  }
});

document.querySelector('.js-x-icon').addEventListener('click', () => toggleSidebar('none'));

function createSidebar() {
  const sidebarEl = document.querySelector('.js-sidebar-container');

  const closeSbBtn = document.createElement('button');
  closeSbBtn.classList.add('js-x-icon');

  closeSbBtn.appendChild(
    createSvgEl('m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z')
  );

  sidebarEl.appendChild(closeSbBtn);
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'explore.html', 'Explore'));
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'vision.html', 'Vision'));
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'faq.html', 'FAQ'));
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'manifest.html', 'Manifest'));
}