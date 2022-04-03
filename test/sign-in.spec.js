/**
 * @jest-environment jsdom
 */
import { signInPage } from '../src/pages/sign-in.js';
import { signInWithPopup } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of signInPage', () => {
  it('render signInPage', () => {
    const renderSignIn = signInPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSignIn);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});

test('should call the sign-in with Google function', async () => {
  const googleIcon = document.querySelector('#btn-google2');
  googleIcon.dispatchEvent(new Event('click'));
  await signInWithPopup.mockResolvedValue();

  expect(window.location.pathname).toBe('/home');
});

test('should call the sign-in with Facebook function', async () => {
  document.body.innerHTML = '<div id="root"><input type="button" id="btn-facebook2"></div>';
  const facebookIcon = document.querySelector('#btn-facebook2');
  facebookIcon.dispatchEvent(new Event('click'));
  await signInWithPopup.mockResolvedValue();

  expect(window.location.pathname).toBe('/home');
});

test('should call the sign-in with GitHub function', async () => {
  document.body.innerHTML = '<div id="root"><input type="button" id="btn-github2"></div>';
  const githubIcon = document.querySelector('#btn-github2');
  githubIcon.dispatchEvent(new Event('click'));
  await signInWithPopup.mockResolvedValue();

  expect(window.location.pathname).toBe('/home');
});

describe('Tests of signInPage with signInAccount function', () => {
  it('render signInPage', () => {
    const renderSignIn = signInPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderSignIn);
    const btn = document.querySelector('#btn-signInWelcome');
    btn.dispatchEvent(new Event('click'));
    expect(renderSignIn).toBeDefined();
  });
});
