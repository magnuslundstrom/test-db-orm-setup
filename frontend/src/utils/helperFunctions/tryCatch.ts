export const tryCatch = async <T>(promise: Promise<T>, customError?: string) => {
  try {
    const data = (await promise) as T;
    const placeholder: [T, null] = [data, null];
    return placeholder;
  } catch (error) {
    console.log(error);
    const placeholder: [null, string] = [null, customError || error.message];
    return placeholder;
  }
};
