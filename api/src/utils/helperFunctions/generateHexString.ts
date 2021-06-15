export const generateHexString = () => {
  const hex = '0123456789ABCDEF';
  let output = '';
  for (let i = 0; i <= 14; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
};
