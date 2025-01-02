import { createLinkEl } from '../helpers/createLink.js';
import { createSvgEl } from '../helpers/createSvg.js';

window.addEventListener('DOMContentLoaded', createSidebar());

function createSidebar() {
  const sidebarEl = document.getElementById('sidebar');

  const closeSbBtn = document.createElement('button');
  closeSbBtn.classList.add('close-icon');
  closeSbBtn.classList.add('js-close-icon');

  closeSbBtn.appendChild(
    createSvgEl('m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z')
  );

  sidebarEl.appendChild(closeSbBtn);
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'explore.html', 'Explore'));
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'vision.html', 'Vision'));
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'faq.html', 'FAQ'));
  sidebarEl.appendChild(createLinkEl('sidebar-link', 'manifest.html', 'Manifest'));
}

document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => hideSidebar());
});

document.querySelector('.js-close-icon').addEventListener('click', () => hideSidebar());

function hideSidebar() {
  const element = document.querySelector('.js-sidebar-container');

  element.style.display = 'none';
  document.body.classList.remove('stop-y-scroll');
}

window.addEventListener('resize', () => {
  if (innerWidth > 565) {
    hideSidebar();
  }
});