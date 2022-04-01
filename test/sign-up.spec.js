/**
 * @jest-environment jsdom
 */
import { signUpPage } from '../src/pages/sign-up.js';
import { signInWithPopup } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of signUpPage', () => {
  test('render sign up page', () => {
    const renderSignUp = signUpPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSignUp);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });

  test('should render the sign-up form and append it ', () => {
    const renderSignUp = signUpPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSignUp);

    const signUpForm = document.querySelector('.createAccount-container') != null;
    expect(signUpForm).toBe(true);
  });

  test('should call the sign-up with Google function', async () => {
    const googleBtn = document.querySelector('#btn-google');
    googleBtn.dispatchEvent(new Event('click'));
    await signInWithPopup.mockResolvedValue();

    expect(window.location.pathname).toBe('/home');
  });

  test('should call the sign-up with Facebook function', async () => {
    document.body.innerHTML = '<div id="root"><input type="button" id="btn-facebook"></div>';
    const facebookBtn = document.querySelector('#btn-facebook');
    facebookBtn.dispatchEvent(new Event('click'));
    await signInWithPopup.mockResolvedValue();

    expect(window.location.pathname).toBe('/home');
  });

  test('should call the sign-up with GitHub function', async () => {
    document.body.innerHTML = '<div id="root"><input type="button" id="btn-github"></div>';
    const githubBtn = document.querySelector('#btn-github');
    githubBtn.dispatchEvent(new Event('click'));
    await signInWithPopup.mockResolvedValue();

    expect(window.location.pathname).toBe('/home');
  });
});
