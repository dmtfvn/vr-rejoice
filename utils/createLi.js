export function createLiEl(aTag) {
  const liEl = document.createElement('li');

  liEl.appendChild(aTag);

  return liEl;
}