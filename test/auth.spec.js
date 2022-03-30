/**
 * @jest-environment jsdom
 */
import { signUpGoogle } from '../src/lib/auth.js';
import { signInWithPopup } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

/* const home = () => {
  const feed = document.createElement('div');
  feed.innerHTML = 'Home page';
  const content = document.createElement('p');
  content.innerHTML = 'child node';
  feed.append(content);
  return feed;
};

const mockRoutes = {
  '/home': home,
}; */

describe('Sign up with Google', () => {
  test('Successful sign up process', async () => {
    signInWithPopup.mockResolvedValue();
    const createAcc = await signUpGoogle();
    expect(createAcc).toBe(true);
  });
});
