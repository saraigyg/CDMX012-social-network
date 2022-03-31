/**
 * @jest-environment jsdom
 */
import { menu } from '../src/components/menu.js';
import { getDoc } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe('Sign out btn in hamburger menu', () => {
  document.body.innerHTML = '<div id="root"><div class="readingPage"></div></div>';
  getDoc.mockResolvedValue({
    exists: () => true,
    data: () => ({
      name: 'Name1',
      username: 'username1',
      bio: 'texto',
    }),
  });
  const feedDiv = document.querySelector('.readingPage');
  const menuHam = menu();
  feedDiv.append(menuHam);
  it('When clicking "Sign out" in should navigate to homepage', () => {
    const signout = document.querySelector('#out');
    signout.dispatchEvent(new Event('click'));
    const hasChild = document.querySelector('.lp-content') != null;
    console.log(hasChild);
  });
});
