/** Used to short strings with more than 1 word. Will append '...' */
export const stringCutter = (input: string, maxLength: number): string => {
  if (input.length <= maxLength) return input;

  const inputArray = input.split(' ');

  if (inputArray.length <= 1) {
    throw new Error(
      'This function cannot short single words at this time. Please extend it if you need  to'
    );
  }

  const cuttedInputArray = [];
  let count = 0;
  let idx = 0;

  while (count < maxLength && idx <= inputArray.length) {
    const word = inputArray[idx];
    cuttedInputArray.push(word);
    count += word.length;
    idx++;
  }

  cuttedInputArray[cuttedInputArray.length - 1] += '...';
  return cuttedInputArray.join(' ');
};
