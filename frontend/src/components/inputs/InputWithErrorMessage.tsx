import { useState } from 'react';
import { Label, Input } from '@elements';
import styled from 'styled-components';
import { colors, spacing } from '@variables';

/* 
--- DEPRECATED --- 
DON'T USE THIS COMPONENT ANY MORE. USE REACT-HOOK-FORM 
*/

type Event = React.ChangeEvent<HTMLInputElement>;

type ErrorHandler = (...args: any[]) => boolean;

interface Props {
  errorHandler: ErrorHandler;
  errorMessage: string;
  label?: boolean;
  onChange: (e: Event) => void;
  type: string;
  value: string;
  placeholder: string;
}
/**
 * - Note label is a boolean and if provided true then it will show the placeholder value in the label.
 * - Provide errorHandler for more advanced errorHandling like emails as an example.
 * In the errorHandler you will get access to the value of the input and the setDisplayError function.
 */
export const InputWithErrorMessage: React.FC<Props> = ({
  errorMessage,
  label,
  type,
  value,
  placeholder,
  onChange,
  errorHandler,
}) => {
  const [displayError, setDisplayError] = useState(false);

  const validation = () => {
    const error = errorHandler(value);
    if (error) setDisplayError(true);
    else setDisplayError(false);
  };

  return (
    <>
      {label && <Label>{placeholder}</Label>}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={validation}
      />
      {errorMessage && displayError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

const ErrorMessage = styled.p`
  margin: -${spacing.sm} 0px ${spacing.md} 0px;
  color: ${colors.darkRed};
`;
