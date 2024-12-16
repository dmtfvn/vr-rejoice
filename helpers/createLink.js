export function createLinkEl(classAttr, hypLink, content) {
  const aTag = document.createElement('a');
  aTag.className = classAttr;
  aTag.href = hypLink;

  if (content) {
    aTag.textContent = content;
  }

  return aTag;
}