export function toggleSidebar(state) {
  const sidebarEl = document.querySelector('.js-sidebar-container');

  sidebarEl.style.display = state;

  if (state === 'flex') {
    document.body.style.overflowY = 'hidden';
  }

  if (state === 'none') {
    document.body.style.overflowY = 'auto';
  }
}