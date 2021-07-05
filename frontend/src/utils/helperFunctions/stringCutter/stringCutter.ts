/** Used to short strings with more than 1 word. Will append '...' */
export const stringCutter = (input: string, maxLength: number): string => {
  if (maxLength <= 0) throw new Error('maxLength cannot be 0 or less');
  if (input.length <= maxLength) return input;

  const inputArray = input.split(' ');
  if (inputArray.length === 1) {
    return input;
  }

  const cuttedInputArray = [];
  let count = 0;

  for (let i in inputArray) {
    const word = inputArray[i];
    const wordLength = word.length;
    if (count + wordLength >= maxLength) break;
    cuttedInputArray.push(word);
    count += wordLength;
  }

  cuttedInputArray[cuttedInputArray.length - 1] += '...';

  return cuttedInputArray.join(' ');
};
