/** Set minimum length */
export const lengthValidation = (minLength: number, maxLength: number) => {
  return (value: string) => {
    const length = value.length;
    if (length < minLength || length > maxLength) return true;
    return false;
  };
};
