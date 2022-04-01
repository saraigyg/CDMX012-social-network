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

  test('Name value in the user object is shown as the name in the form', () => {
    document.body.innerHTML = `<div id="root">
      <form id="signUpForm">
      <input name="name" id="nameUser"> </form> </div>`;

    const userInfo = {
      isNewUser: true,
      providerId: 'google.com',
      user: { displayName: 'Ana' },
    };

    askMoreInfo(userInfo);
    const nameInForm = document.querySelector('#nameUser');
    console.log(nameInForm.innerHTML);

    expect(nameInForm.value).toBe('Ana');
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

  /* test('If the user is new, they are sent to the add-info page', async () => {
    const rootDiv = document.getElementById('root');
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
    /* document.body.innerHTML = `<div id="root">
      <form id="signUpForm">
      <input name="name"> </form> </div>`;
    jest.clearAllMocks();

    getAdditionalUserInfo.mockResolvedValue({
      isNewUser: true,
      providerId: 'google.com',
      user: { displayName: 'Ana' },
    });
    const result = getAdditionalUserInfo;

    const askInfo = jest.fn(askMoreInfo(result));

    await signUpGoogle();

    /* expect(askInfo).toBeCalled();
    expect(window.location.pathname).toBe('/add-info');
  }); */

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

  test('Failed sign up process', async () => {
    signInWithPopup.mockRejectedValue();
    const createAcc = await signUpGithub();
    expect(createAcc).toBe(false);
  });
});
