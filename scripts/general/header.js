import { createLiEl } from '../../utils/createLi.js';
import { createLinkEl } from '../../utils/createLink.js';
import { createSvgEl } from '../../utils/createSvg.js';
import { toggleSidebar } from '../../utils/toggleSidebar.js';

window.addEventListener('DOMContentLoaded', createNavbar());

document.querySelector('.js-hb-icon').addEventListener('click', () => toggleSidebar('flex'));

function createNavbar() {
  const headerEl = document.querySelector('header');

  const navEl = document.createElement('nav');

  const ulEl = document.createElement('ul');

  const logoEl = createLinkEl('index.html');

  const imgEl = document.createElement('img');
  imgEl.src = 'logo/logo.png';
  imgEl.alt = 'logotype image';

  logoEl.appendChild(imgEl);

  const openSbBtn = document.createElement('button');
  openSbBtn.classList.add('js-hb-icon');

  openSbBtn.appendChild(
    createSvgEl('M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z')
  );

  ulEl.appendChild(createLiEl(logoEl));
  ulEl.appendChild(createLiEl(createLinkEl('explore.html', 'Explore')));
  ulEl.appendChild(createLiEl(createLinkEl('vision.html', 'Vision')));
  ulEl.appendChild(createLiEl(createLinkEl('faq.html', 'FAQ')));
  ulEl.appendChild(createLiEl(createLinkEl('manifest.html', 'Manifest')));

  navEl.appendChild(ulEl);

  headerEl.appendChild(navEl);
  headerEl.appendChild(openSbBtn);
}