import { createLinkEl } from './helpers/createLink.js';
import { createSvgEl } from './helpers/createSvg.js';

const headerEl = document.getElementById('header');
headerEl.addEventListener('DOMContentLoaded', createNavbar());

function createNavbar() {
  const linkWrapper = document.createElement('div');
  linkWrapper.className = 'link-container';

  const logoEl = createLinkEl('logo-container', 'index.html');

  const imgEl = document.createElement('img');
  imgEl.className = 'logo';
  imgEl.src = 'logo/logo.png';
  imgEl.alt = 'logotype image';

  logoEl.appendChild(imgEl);

  const openSbBtn = document.createElement('button');
  openSbBtn.classList.add('hb-icon');
  openSbBtn.classList.add('js-hb-icon');

  openSbBtn.appendChild(
    createSvgEl('M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z')
  );

  linkWrapper.appendChild(logoEl);
  linkWrapper.appendChild(createLinkEl('header-link', 'explore.html', 'Explore'));
  linkWrapper.appendChild(createLinkEl('header-link', 'vision.html', 'Vision'));
  linkWrapper.appendChild(createLinkEl('header-link', 'faq.html', 'FAQ'));
  linkWrapper.appendChild(createLinkEl('header-link', 'manifest.html', 'Manifest'));

  headerEl.appendChild(linkWrapper);
  headerEl.appendChild(openSbBtn);
}

document.querySelector('.js-hb-icon').addEventListener('click', () => showSidebar());

function showSidebar() {
  const element = document.querySelector('.js-sidebar-container');

  element.style.display = 'flex';
  document.body.classList.add('stop-y-scroll');
}