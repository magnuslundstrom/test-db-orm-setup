export const numberValidationRegex = /^([1-9]+)$/g;

export const numberValidation = (value: string) => {
  if (value.length === 0) return true;
  return isNaN(value as any);
};
