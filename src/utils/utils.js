/** Removes the given element from the DOM. */
export const remove = (el) => el.remove();

/** Clicks the given element. */
export const click = (el) => el.click();

export const hidePage = (options = { delaySeconds: 0.2, blurPx: 8 }) => {
  document.documentElement.style.transition = `filter ease-in-out ${options.delaySeconds}s`;
  document.documentElement.style.filter = `blur(${options.blurPx}px)`;
};

export const showPage = () => {
  document.documentElement.style.filter = 'none';
};
