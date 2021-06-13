/** Format dates numeric with the structure dd/mm/yyyy and local setting 'en-US' */
export const DateNumericDMYFormatter = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });
};
