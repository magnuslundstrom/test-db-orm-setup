import { generateFormData } from './generateFormData';

const onlyStrings = {
  firstName: 'a',
  lastName: 'b',
};

const withFile = {
  ...onlyStrings,
  file: new File(['foo'], 'foo.txt', {
    type: 'text/plain',
  }),
};

describe('generateFormData helperfunction test', () => {
  test('generate form data with strings only', () => {
    const formData = generateFormData(onlyStrings);
    expect(formData instanceof FormData).toBeTruthy();
    expect(formData.get('firstName')).toBe('a');
    expect(formData.get('lastName')).toBe('b');
  });

  test('generate form data with file too', () => {
    const formData = generateFormData(withFile);
    expect(formData instanceof FormData).toBeTruthy();
    expect(formData.get('firstName')).toBe('a');
    expect(formData.get('lastName')).toBe('b');
    expect(formData.has('file')).toBeTruthy();
    expect(formData.get('file') instanceof File).toBeTruthy();
  });
});
