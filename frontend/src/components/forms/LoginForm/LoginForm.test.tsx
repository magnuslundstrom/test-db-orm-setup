import { screen, render, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { LoginForm } from './LoginForm';

// FIGURE OUT A WAY TO TEST IF THE LOGIN FUNCTIONALITY WORK
// thoughts: we can't really have a database version of a user that we use only for testing purposes, CAN WE?

// email related vars
const emailLabelText = 'Email';
const emailInputPlaceholder = 'Enter email';
const emailErrorTestId = 'email-error';
const wrongEmailValue = 'xxx';
const correctEmailValue = 'a@a.dk';
const enterValidEmailError = 'Please enter a valid email';

// password related vars
const passwordLabelText = 'Password';
const passwordInputPlaceholder = 'Enter password';
const passwordErrorTestId = 'password-error';
const shortPasswordValue = 'a';
const shortPasswordError = 'Password must be atleast 3 characters';
const correctPasswordValue = 'aaa';

// other vars
const loginButtonText = 'Login';

beforeEach(() => {
  render(<LoginForm />);
});

describe('test login form', () => {
  test('submit button enables', () => {
    const emailInput = screen.getByPlaceholderText(emailInputPlaceholder);
    const passwordInput = screen.getByPlaceholderText(passwordInputPlaceholder);
    const loginBtn = screen.getByText(loginButtonText);
    fireEvent.change(emailInput, { target: { value: correctEmailValue } });
    fireEvent.change(passwordInput, { target: { value: correctPasswordValue } });
    expect(loginBtn).not.toBeDisabled;
  });

  test('test if renders correct inputs and labels', () => {
    screen.getByText(emailLabelText);
    screen.getByPlaceholderText(emailInputPlaceholder);
    screen.getByText(passwordLabelText);
    screen.getByPlaceholderText(passwordInputPlaceholder);
  });

  test('ensure login button is disabled by default', () => {
    const loginBtn = screen.getByText(loginButtonText);
    expect(loginBtn).toBeDisabled;
  });

  test('ensure errors are not shown on initial render', () => {
    const emailErrorP = screen.queryByTestId(emailErrorTestId);
    const passwordErrorP = screen.queryByTestId(passwordErrorTestId);
    expect(emailErrorP).toBeNull();
    expect(passwordErrorP).toBeNull();
  });

  test('invalid email with error and correct afterwards ensuring error message disappears', async () => {
    const emailInput = screen.getByPlaceholderText(emailInputPlaceholder);
    emailInput.focus();
    fireEvent.change(emailInput, { target: { value: wrongEmailValue } });
    emailInput.blur();
    await waitFor(() => screen.getByText(enterValidEmailError));
    emailInput.focus();
    fireEvent.change(emailInput, { target: { value: correctEmailValue } });
    await waitForElementToBeRemoved(() => screen.getByText(enterValidEmailError));
  });

  test('invalid password with error and correct afterwards ensuring error message disappears', async () => {
    const passwordInput = screen.getByPlaceholderText(passwordInputPlaceholder);
    passwordInput.focus();
    fireEvent.change(passwordInput, { target: { value: shortPasswordValue } });
    passwordInput.blur();
    await waitFor(() => screen.getByText(shortPasswordError));
    passwordInput.focus();
    fireEvent.change(passwordInput, { target: { value: correctPasswordValue } });
    await waitForElementToBeRemoved(() => screen.getByText(shortPasswordError));
  });
});
