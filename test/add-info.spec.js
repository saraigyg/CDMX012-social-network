/**
 * @jest-environment jsdom
 */
import { addInfoPage } from '../src/pages/add-info.js';
import { isValidField } from '../src/lib/saveInfo.js';

jest.mock('../src/firebase-imports.js');

describe('Tests of addInfoPage', () => {
  it('render addInfoPage', () => {
    const renderAddInfo = addInfoPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderAddInfo);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});

describe('Tests of addInfoPage on keyup', () => {
  it('render addInfoPage', () => {
    const renderAddInfo = addInfoPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderAddInfo);
    const inp = document.querySelector('#txtusername');
    inp.dispatchEvent(new Event('keyup'));
    expect(renderAddInfo).toBeDefined();
  });
});

describe('Tests of addInfoPage on click', () => {
  it('render addInfoPage', () => {
    const renderAddInfo = addInfoPage();
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.getElementById('root');
    rootDiv.appendChild(renderAddInfo);
    const btn = document.querySelector('#btn-accept');
    btn.dispatchEvent(new Event('click'));
    expect(renderAddInfo).toBeDefined();
  });
});
