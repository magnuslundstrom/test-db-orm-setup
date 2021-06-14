import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement>;
/** An easy factory to create onchange function for your state. Doesn't need to be used, was made more for the challenge. */
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
