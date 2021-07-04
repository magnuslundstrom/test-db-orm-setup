type ReturnType<T> = [T | null, null | string];

/**
 *
 * @param promise
 * @param customError
 * @returns [resolvedData | null, null | string (error)]
 */
export const tryCatch = async <T>(promise: Promise<T>, customError?: string): Promise<ReturnType<T>> => {
  try {
    const data = (await promise) as T;
    console.log(data);
    const placeholder: [T, null] = [data, null];
    return placeholder;
  } catch (error) {
    console.log(error);
    const placeholder: [null, string] = [null, customError || error.message];
    return placeholder;
  }
};
