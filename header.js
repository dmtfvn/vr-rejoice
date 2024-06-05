const header = document.getElementById('header');

header.innerHTML = `
  <a class="logo-container" href="index.html">
    <img class="logo" src="logo/logo.png" alt="logotype image">
  </a>
  <div class="link-container">
    <a class="explore-link header-link" href="explore.html">
      Explore
    </a>
    <a class="vision-link header-link" href="vision.html">
      Vision
    </a>
    <a class="faq-link header-link" href="faq.html">
      FAQ
    </a>
  </div>
  <a class="manifest-link header-link" href="manifest.html">
    Manifest
  </a>
  <div class="hb-icon js-hb-icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>  
  </div>
`;

const hbIcon = document.querySelector('.js-hb-icon');

hbIcon.addEventListener('click', function () {
  const element = document.querySelector('.js-sidebar-container');

  element.style.display = 'flex';
});