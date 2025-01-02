export function toggleSidebar(state) {
  const sidebar = document.querySelector('.js-sidebar-container');

  sidebar.style.display = state;
}