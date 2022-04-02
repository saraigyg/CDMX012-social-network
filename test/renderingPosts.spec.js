/**
 * @jest-environment jsdom
 */
import { createPosts } from '../src/components/renderingPosts.js';
/* import { genericModal } from '../src/components/genericModal.js'; */

jest.mock('../src/firebase-imports.js');

describe('Rendering posts:', () => {
  test('a new post is created and properly rendered', () => {
    const postData = {
      date: '01/04/2022',
      reading: 'Test title',
      text: 'Great book!',
      key: '123456789',
      likes: [],
      uid: 'userUid',
    };
    const name = 'Eli';
    const username = 'DinoEli';
    const currentUid = 'abc1234';

    document.body.innerHTML = '<div id="postsArea"></div>';
    createPosts(postData, currentUid, name, username);
    const postArea = document.querySelector('#postsArea');

    expect(postArea.innerHTML).toMatchSnapshot();
  });

  test('Renders like component of a post that the user has liked before', () => {
    const postData = {
      date: '01/04/2022',
      reading: 'Test title',
      text: 'Great book!',
      key: '123456789',
      likes: ['saraiG'],
      uid: 'userUid',
    };
    const name = 'Eli';
    const username = 'DinoEli';
    const currentUid = 'saraiG';

    document.body.innerHTML = '<div id="postsArea"></div>';
    createPosts(postData, currentUid, name, username);
    const postArea = document.querySelector('#postsArea');

    expect(postArea.innerHTML.includes('./assets/heart.png')).toBe(true);
  });

  test('Dropdown menu shows on click', () => {
    const postData = {
      date: '01/04/2022',
      reading: 'Test title',
      text: 'Great book!',
      key: '123456789',
      likes: [],
      uid: 'saraiG',
    };
    const name = 'Eli';
    const username = 'DinoEli';
    const currentUid = 'saraiG';

    document.body.innerHTML = '<div id="postsArea"></div>';
    createPosts(postData, currentUid, name, username);
    const optionsMenu = document.querySelector('.options-menu');
    optionsMenu.dispatchEvent(new Event('click'));

    const postArea = document.querySelector('#postsArea');

    expect(postArea.innerHTML).toMatchSnapshot();
  });

  test('Modal shows up after click on delete button', () => {
    const postData = {
      date: '01/04/2022',
      reading: 'Test title',
      text: 'Great book!',
      key: '123456789',
      likes: [],
      uid: 'saraiG',
    };
    const name = 'Eli';
    const username = 'DinoEli';
    const currentUid = 'saraiG';

    document.body.innerHTML = '<div id="postsArea"></div>';
    createPosts(postData, currentUid, name, username);
    const deleteOption = document.querySelector('.deletePost');
    deleteOption.dispatchEvent(new Event('click'));

    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('Edit function is executed properly on click', () => {
    const postData = {
      date: '01/04/2022',
      reading: 'Test title',
      text: 'Great book!',
      key: '123456789',
      likes: [],
      uid: 'saraiG',
    };
    const name = 'Eli';
    const username = 'DinoEli';
    const currentUid = 'saraiG';

    document.body.innerHTML = '<div id="postsArea"></div>';
    createPosts(postData, currentUid, name, username);
    const editOption = document.querySelector('.editPost');
    editOption.dispatchEvent(new Event('click'));

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
