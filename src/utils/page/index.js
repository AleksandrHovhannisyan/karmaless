export const hidePage = () => {
  document.documentElement.style.transition = 'filter ease-in-out 0.2s';
  document.documentElement.style.filter = 'blur(8px)';
};

export const showPage = () => {
  document.documentElement.style.filter = 'none';
};
