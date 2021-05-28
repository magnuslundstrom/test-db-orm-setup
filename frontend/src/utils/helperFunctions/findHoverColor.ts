import { colors } from '@variables';

export function findHoverColor(color: keyof typeof colors) {
  const index = firstUpperCaseLetterIndex(color);
  const baseColor = color.slice(index, color.length);
  const nuance = color.slice(0, index);

  let newNuance = '';
  if (nuance === 'light') newNuance = 'mid';
  else if (nuance === 'mid') newNuance = 'dark';

  const key = `${newNuance}${baseColor}`;

  if (colorsHasKey(key)) return colors[key];
  return colors[color];
}

function colorsHasKey(key: string): key is keyof typeof colors {
  return colors.hasOwnProperty(key);
}

function firstUpperCaseLetterIndex(str: string) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) return i;
  }
  return 0;
}
