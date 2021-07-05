import { ChangeEvent, Dispatch, SetStateAction } from 'react';

/*
-> DEPRECATED, DON'T USE.
-> Use the react-hook-form library instead.
*/

type InputEvent = ChangeEvent<HTMLInputElement>;
/** An easy factory to create onchange function for your state. */
export function onChangeFactory<T extends { [key: string]: any }>(
  state: T,
  setState: Dispatch<SetStateAction<T>>
) {
  return function (key: keyof T) {
    return function (e: InputEvent) {
      setState({ ...state, [key]: e.target.value });
    };
  };
}
