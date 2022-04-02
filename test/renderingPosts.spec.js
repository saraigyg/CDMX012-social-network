/**
 * @jest-environment jsdom
 */
import { createPosts } from '../src/components/renderingPosts.js';
// import { onNavigate } from '../src/app.js';

jest.mock('../src/firebase-imports.js');

describe('Tests the creation of a post', () => {
  test('render post', () => {postData, currentUid, name, username
    const postData = {
      date: '01/04/2022',
      reading: 'Test title',
      text: 'Great book!',
      key: '1234',
      likes: [],
      uid: 'userUid',
    }

    const name = 'Eli';
    const username = 'DinoEli';
    const currentUid = 'abc1234';
    
    document.body.innerHTML = '<div id="postsArea"></div>';
    const post = createPosts();
    
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
