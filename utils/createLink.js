export function createLinkEl(hypLink, content) {
  const aTag = document.createElement('a');
  aTag.href = hypLink;

  if (content) {
    aTag.textContent = content;
  }

  return aTag;
}