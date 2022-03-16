import { app } from '../firebase-config';
import { doc, getDoc, collection, setDoc, onSnapshot, getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
/* combinación de dos métodos: para la creacion de posts usar el formato de collection y set doc y para traernos los posts
//ya guardados tenemos que hacer uso de query snapshot*/ 

export const postsReading = () => {
  const readingPage = document.createElement('div');
  readingPage.setAttribute('class', 'readingPage');

  const readingForm = document.createElement('form');
  readingForm.setAttribute('class', 'readingForm');
  readingForm.setAttribute('id', 'readingForm');

  const readingTitle = document.createElement('div');
  readingTitle.innerHTML = `<label for="reading" class="reading">Reading:</label>`;

  const readingBook = document.createElement('input');
  readingBook.setAttribute('class', 'readingBook');
  readingBook.setAttribute('id', 'readingBook');
  readingBook.setAttribute('type', 'text');
  readingBook.setAttribute('placeholder', 'Insert the book you are reading here');

  const readingDescription = document.createElement('input');
  readingDescription.setAttribute('class', 'readingDescription');
  readingDescription.setAttribute('id', 'readingDescription');
  readingDescription.setAttribute('type', 'text');
  readingDescription.setAttribute('placeholder', 'Insert your post here');
};