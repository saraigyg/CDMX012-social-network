/**
 * @jest-environment jsdom
 */
import { landingPage } from '../src/pages/landing-page.js';
// import { onNavigate } from '../src/app.js';

jest.mock('../src/firebase-imports.js');

describe('Tests  of landingPage', () => {
  test('render landingpage', () => {
    const renderLanding = landingPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderLanding);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  test('should render sign-up page', () => {
    const signUpBtn = document.querySelector('.btn-signUp');
    signUpBtn.dispatchEvent(new Event('click'));
    expect(window.location.pathname).toBe('/sign-up');
  });
  test('should render sign-in page', () => {
    const rootDiv = document.getElementById('root');
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
    const renderLanding = landingPage();
    rootDiv.appendChild(renderLanding);
    const signInBtn = document.querySelector('.btn-signIn');
    signInBtn.dispatchEvent(new Event('click'));
    expect(window.location.pathname).toBe('/sign-in');
  });
});
