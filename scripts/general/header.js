import { createLinkEl } from '../../utils/createLink.js';
import { createSvgEl } from '../../utils/createSvg.js';

window.addEventListener('DOMContentLoaded', createNavbar());

document.querySelector('.js-hb-icon').addEventListener('click', () => showSidebar());

function showSidebar() {
  const sidebar = document.querySelector('.js-sidebar-container');

  sidebar.style.display = 'flex';
  document.body.classList.add('stop-y-scroll');
}

function createNavbar() {
  const headerEl = document.querySelector('header');

  const navEl = document.createElement('nav');

  const logoEl = createLinkEl('logo-container', 'index.html');

  const imgEl = document.createElement('img');
  imgEl.src = 'logo/logo.png';
  imgEl.alt = 'logotype image';

  logoEl.appendChild(imgEl);

  const openSbBtn = document.createElement('button');
  openSbBtn.classList.add('js-hb-icon');

  openSbBtn.appendChild(
    createSvgEl('M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z')
  );

  navEl.appendChild(logoEl);
  navEl.appendChild(createLinkEl('header-link', 'explore.html', 'Explore'));
  navEl.appendChild(createLinkEl('header-link', 'vision.html', 'Vision'));
  navEl.appendChild(createLinkEl('header-link', 'faq.html', 'FAQ'));
  navEl.appendChild(createLinkEl('header-link', 'manifest.html', 'Manifest'));

  headerEl.appendChild(navEl);
  headerEl.appendChild(openSbBtn);
}