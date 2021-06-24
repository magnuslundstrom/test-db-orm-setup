import { useState, useEffect } from 'react';

/*
  return properties:
  1) Should return a disabled prop, that will tell wether the form button is disabled
  -> this should be evaluated each time the state changes using useEffect
  1.1) What do we need to make this happen?
  -> We must be able to grab validator functions passed to the useForm

  2) Should return the formState and setFormState
*/

export const useForm = (state: Props) => {
  const [formState, setFormState] = useState(grabProperties(state, 'property'));
  const [disabled, setDisabled] = useState(true);

  const checkIfDisabled = () => {
    let disabled = false;
    return [
      (bool: boolean) => {
        if (bool) disabled = true;
        else false;
      },
      disabled,
    ];
  };

  useEffect(() => {
    checkIfDisabled();
  }, [formState]);

  return {
    formState,
    setFormState,
    disabled,
  };
};

type Property = string | File | null;
type Validator = (value: string) => void;

type PropertyAndValidator = {
  property: Property;
  validator: Validator;
};

interface Props {
  [key: string]: PropertyAndValidator;
}

export function grabProperties<T extends Props, K extends keyof PropertyAndValidator>(
  obj: T,
  objKey: K
) {
  const newObj = {} as { [key: string]: PropertyAndValidator[K] };
  for (let key in obj) {
    newObj[key] = obj[key][objKey];
  }
  return newObj;
}
