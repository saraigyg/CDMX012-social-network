/**
 * @jest-environment jsdom
 */
import {
  signUpGoogle, signUpFacebook, signUpGithub, askMoreInfo,
} from '../src/lib/auth.js';
import { signInWithPopup, getAdditionalUserInfo } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

document.body.innerHTML = '<div id="root"></div>';

describe('askMoreInfo function', () => {
  test('Navigates to the add-info page', () => {
    getAdditionalUserInfo.mockResolvedValue({
      isNewUser: true,
      providerId: 'google.com',
      user: { displayName: 'Ana' },
    });
    const result = getAdditionalUserInfo;

    askMoreInfo(result);
    expect(window.location.pathname).toBe('/add-info');
  });
});

describe('Sign up with Google', () => {
  test('Successful sign up process', async () => {
    signInWithPopup.mockResolvedValue();
    const createAcc = await signUpGoogle();
    expect(createAcc).toBe(true);
  });

  test('Homepage is rendered after user is signed-up', async () => {
    await signUpGoogle();

    expect(window.location.pathname).toBe('/home');
  });

  test('Failed sign up process', async () => {
    signInWithPopup.mockRejectedValue();
    const createAcc = await signUpGoogle();
    expect(createAcc).toBe(false);
  });
});

describe('Sign up with Facebook', () => {
  test('Successful sign up process', async () => {
    signInWithPopup.mockResolvedValue();
    const createAcc = await signUpFacebook();
    expect(createAcc).toBe(true);
  });

  test('Homepage is rendered after user is signed-up', async () => {
    await signUpFacebook();

    expect(window.location.pathname).toBe('/home');
  });

  test('Failed sign up process', async () => {
    signInWithPopup.mockRejectedValue();
    const createAcc = await signUpFacebook();
    expect(createAcc).toBe(false);
  });
});

describe('Sign up with GitHub', () => {
  test('Successful sign up process', async () => {
    signInWithPopup.mockResolvedValue();
    const createAcc = await signUpGithub();
    expect(createAcc).toBe(true);
  });

  test('Homepage is rendered after user is signed-up', async () => {
    await signUpGithub();

    expect(window.location.pathname).toBe('/home');
  });

  test('Failed sign up process', async () => {
    signInWithPopup.mockRejectedValue();
    const createAcc = await signUpGithub();
    expect(createAcc).toBe(false);
  });
});
