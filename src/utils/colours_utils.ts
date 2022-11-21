export const parseRgba = (hex: string, alpha: number) => {
  const hexRegExp = new RegExp(/^#([A-z]|[a-z]|\d){6}$/);
  const shortRegExp = new RegExp(/^#([A-z]|[a-z]|\d){3}$/);
  if (shortRegExp.test(hex)) hex = '#' + hex.slice(1).split('').map((e) => Array(2).fill(e).join('')).join('');
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}