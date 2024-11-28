export const later = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const laterRaf = () => {
  if (typeof requestAnimationFrame === 'undefined') return later(0);
  return new Promise((resolve) => requestAnimationFrame(resolve));
};
