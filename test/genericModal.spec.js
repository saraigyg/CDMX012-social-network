/**
 * @jest-environment jsdom
 */
import { genericModal } from '../src/components/genericModal.js';

jest.mock('../src/firebase-imports.js');

describe('the function giveLike modify the list of likes', () => {
  test('render a modified list', () => {
    const funOne = () => {};
    const param = [];
    const textModal = '';
    const elements = [funOne, param, textModal];
    genericModal(...elements);
    const modal = document.querySelector('modal');
    expect(modal).toBeDefined();
  });
});
