const sidebar = document.getElementById('sidebar');

sidebar.innerHTML = `
  <button class="close-icon js-close-icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  </button>
  <a class="sb-explore-link" href="explore.html">
    Explore
  </a>
  <a class="sb-vision-link" href="vision.html">
    Vision
  </a>
  <a class="sb-faq-link" href="faq.html">
    FAQ
  </a>
  <a class="sb-manifest-link" href="manifest.html">
    Manifest
  </a>
`;

const xIcon = document.querySelector('.js-close-icon');

function hideSidebar() {
  const element = document.querySelector('.js-sidebar-container');

  element.style.display = 'none';
  // document.body.classList.remove('stop-y-scroll');
}

xIcon.addEventListener('click', () => hideSidebar());

window.addEventListener('resize', function () {
  if (this.window.innerWidth > 565) {
    hideSidebar();
  }
});