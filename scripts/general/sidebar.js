import { createLinkEl } from '../../utils/createLink.js';
import { createSvgEl } from '../../utils/createSvg.js';

window.addEventListener('DOMContentLoaded', createSidebar());

document.querySelector('.js-x-icon').addEventListener('click', () => hideSidebar());

window.addEventListener('resize', () => {
  if (innerWidth > 565) {
    hideSidebar();
  }
});

document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => hideSidebar());
});

function hideSidebar() {
  const sidebar = document.querySelector('.js-sidebar-container');

  sidebar.style.display = 'none';
  document.body.classList.remove('stop-y-scroll');
}

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