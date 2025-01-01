export function toggleSidebar(state) {
  const sidebarEl = document.querySelector('.js-sidebar-container');

  sidebarEl.style.display = state;

  if (state === 'flex') {
    document.body.classList.add('stop-y-scroll');
  }

  if (state === 'none') {
    document.body.classList.remove('stop-y-scroll');
  }
}