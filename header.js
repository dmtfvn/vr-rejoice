const headerEl = document.getElementById('header');
headerEl.addEventListener('DOMContentLoaded', createNav());

function createNav() {
  const linkWrapper = document.createElement('div');
  linkWrapper.className = 'link-container';

  const logoEl = createLinkEl('logo-container', 'index.html');

  const imgEl = document.createElement('img');
  imgEl.className = 'logo';
  imgEl.src = 'logo/logo.png';
  imgEl.alt = 'logotype image';

  logoEl.appendChild(imgEl);

  const sidebarBtn = document.createElement('button');
  sidebarBtn.classList.add('hb-icon');
  sidebarBtn.classList.add('js-hb-icon');

  const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIcon.setAttribute('width', '24px');
  svgIcon.setAttribute('height', '24px');
  svgIcon.setAttribute('viewBox', '0 -960 960 960');

  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  svgPath.setAttribute(
    'd',
    'M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z'
  );

  svgIcon.appendChild(svgPath);
  sidebarBtn.appendChild(svgIcon);

  linkWrapper.appendChild(logoEl);
  linkWrapper.appendChild(createLinkEl('header-link', 'explore.html', 'Explore'));
  linkWrapper.appendChild(createLinkEl('header-link', 'vision.html', 'Vision'));
  linkWrapper.appendChild(createLinkEl('header-link', 'faq.html', 'FAQ'));
  linkWrapper.appendChild(createLinkEl('header-link', 'manifest.html', 'Manifest'));

  headerEl.appendChild(linkWrapper);
  headerEl.appendChild(sidebarBtn);

  function createLinkEl(classAttr, hypLink, content) {
    const aTag = document.createElement('a');
    aTag.className = classAttr;
    aTag.href = hypLink;

    if (content) {
      aTag.textContent = content;
    }

    return aTag;
  }
}

document.querySelector('.js-hb-icon').addEventListener('click', () => showSidebar());

function showSidebar() {
  const element = document.querySelector('.js-sidebar-container');

  element.style.display = 'flex';
  document.body.classList.add('stop-y-scroll');
}