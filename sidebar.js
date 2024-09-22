const sidebar = document.getElementById('sidebar');

sidebar.innerHTML = `
  <button class="close-icon js-close-icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  </button>
  <a class="sidebar-link" href="explore.html">
    Explore
  </a>
  <a class="sidebar-link" href="vision.html">
    Vision
  </a>
  <a class="sidebar-link" href="faq.html">
    FAQ
  </a>
  <a class="sidebar-link" href="manifest.html">
    Manifest
  </a>
`;

const links = document.querySelectorAll('.sidebar-link');
links.forEach(link => {
  link.addEventListener('click', () => {
    hideSidebar();
  });
});

const xIcon = document.querySelector('.js-close-icon');

function hideSidebar() {
  const element = document.querySelector('.js-sidebar-container');

  element.style.display = 'none';
  document.body.classList.remove('stop-y-scroll');
}

xIcon.addEventListener('click', () => hideSidebar());

window.addEventListener('resize', () => {
  if (this.innerWidth > 565) {
    hideSidebar();
  }
});