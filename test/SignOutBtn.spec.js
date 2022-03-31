/* eslint-disable jest/no-focused-tests */
/**
 * @jest-environment jsdom
 */
// import { onNavigate } from '../src/app.js';
import { onNavigate } from '../src/app.js';
import { menu } from '../src/components/menu.js';
import { getDoc } from '../src/firebase-imports.js';

jest.mock('../src/firebase-imports.js');

describe.only('Sign out btn in hamburger menu', () => {
  it.only('When clicking "Sign out" in should navigate to homepage', () => {
    document.body.innerHTML = '<div id="root"><div class="readingPage"></div></div>';

    expect.assertions(2);

    onNavigate('/home');
    expect(window.location.pathname).toBe('/home'); // nos aseguramos q estemos en home

    getDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({
        name: 'Name1',
        username: 'username1',
        bio: 'texto',
      }),
    });

    // pisamos la implementacion de pushState para poder realizar assetions
    // sobre su uso
    window.history.pushState = function pushState(...args) {
      expect(args[1]).toBe('/');
      // Necesitamos usar la interfaz History, no se puede llamar `pushState`
      // sobre algo q no sea un History válido
      History.prototype.pushState.apply(window.history, args);
    };

    const feedDiv = document.querySelector('.readingPage');
    const menuHam = menu();
    feedDiv.append(menuHam);
    const signout = document.querySelector('#out');
    signout.dispatchEvent(new Event('click'));
  });
});
