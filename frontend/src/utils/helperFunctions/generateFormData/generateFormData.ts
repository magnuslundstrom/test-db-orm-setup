type FormDataInputs = string | File;

export const generateFormData = <T>(data: T) => {
  const formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key] as any);
  }

  return formData;
};
