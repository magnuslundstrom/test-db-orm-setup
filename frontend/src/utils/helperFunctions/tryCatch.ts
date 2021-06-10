export const tryCatch = async <T>(promise: Promise<T>, customError?: string) => {
  try {
    const data = (await promise) as T;
    const x: [T, null] = [data, null];
    return x;
  } catch (error) {
    console.log(error);
    const x: [null, string] = [null, customError || error.message];
    return x;
  }
};
