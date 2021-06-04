/**
 * Pass a regex that matches anything that SHOULD'NT be in the input
 * - As an example if I don't wan't numbers then i pass in \D because it matches anything expect numbers.
 * - The reason for this is that we can easily test the string against anything but numbers. Is there a match then we fail.
 */

export const validateInputOppositeRegex = (
  reg: RegExp,
  input: string,
  customMessage?: string
): void => {
  if (reg.test(input)) {
    throw new Error(customMessage || '');
  }
};
