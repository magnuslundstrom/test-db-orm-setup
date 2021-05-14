import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type InputEvent = ChangeEvent<HTMLInputElement>;

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
