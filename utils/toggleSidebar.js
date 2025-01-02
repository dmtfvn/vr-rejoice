export function toggleSidebar(state) {
  const sidebarEl = document.querySelector('.js-sidebar-container');

  sidebarEl.style.display = state;

  if (sidebarEl.style.display === 'flex') {
    document.body.style.overflowY = 'hidden';
  }

  if (sidebarEl.style.display === 'none') {
    document.body.style.overflowY = 'auto';
  }
}