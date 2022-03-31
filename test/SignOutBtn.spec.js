/* eslint-disable jest/no-focused-tests */
/**
 * @jest-environment jsdom
 */
// import { onNavigate } from '../src/app.js';
import { menu } from '../src/components/menu.js';
import { getDoc } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe.only('Sign out btn in hamburger menu', (done) => {
  it.only('When clicking "Sign out" in should navigate to homepage', () => {
    document.body.innerHTML = '<div id="root"><div class="readingPage"></div></div>';

    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({
        name: 'Name1',
        username: 'username1',
        bio: 'texto',
      }),
    });

    // expect.assertions(1);

    window.history.pushState = jest.fn();

    const feedDiv = document.querySelector('.readingPage');
    const menuHam = menu();
    feedDiv.append(menuHam);
    const signout = document.querySelector('#out');
    signout.dispatchEvent(new Event('click'));
    const hasChild = document.querySelector('.lp-content') != null; // it will return true if lp-content exists in div root
    console.log(hasChild);

    setTimeout(() => {
      console.log('aaaaaaaaaaaaaaaaaaaaa', window.history.pushState.mock.calls);
      done();
    }, 1000);

    // expect(hasChild).toBe(true);
  });
});
