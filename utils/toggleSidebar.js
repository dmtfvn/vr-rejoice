export function toggleSidebar(state) {
  const sidebar = document.querySelector('aside');

  sidebar.style.display = state;
}