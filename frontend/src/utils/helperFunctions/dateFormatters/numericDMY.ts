/** Format dates numeric with the structure dd/mm/yyyy and local setting 'en-US' */
export const numericDMY = (date: Date) => {
  const dateArray = new Date(date)
    .toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    })
    .split('/');

  const temp = dateArray[1];
  dateArray[1] = dateArray[0];
  dateArray[0] = temp;

  return dateArray.join('/');
};
