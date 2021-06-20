type FormDataInputs = string | File;

export const generateFormData = <T>(data: { [Key in keyof T]: FormDataInputs }) => {
  const formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }

  return formData;
};
