/* eslint-disable import/no-cycle */
// Import the functions you need from the SDKs you need
import {
  getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
  FacebookAuthProvider, GithubAuthProvider, getAdditionalUserInfo, signInWithEmailAndPassword,
  signOut,
} from '../firebase-imports.js';
import { app } from './firebase-config.js';
import { onNavigate } from '../app.js';
import { showSignUpError } from '../components/ui.js';

// Navigate to add-info page
function askMoreInfo(result) {
  onNavigate('/add-info');

  const moreInfoUser = document.querySelector('#signUpForm');

  if (result.providerId === 'google.com' || result.providerId === 'facebook.com') {
    moreInfoUser.name.value = result.user.displayName;
  }
}

// Sign up with email and password
export const createAccount = (email, pass) => {
  const auth = getAuth(app);
  const errorA = document.getElementById('errorArea');

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      askMoreInfo(userCredential);
      errorA.innerHTML = '';
    })
    .catch((error) => {
      showSignUpError(error);
    });
};

// Sign up with Google
export const signUpGoogle = async () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  let userCreatedGoogle;

  await signInWithPopup(auth, googleProvider)
    .then((result) => {
      if (getAdditionalUserInfo(result).isNewUser) {
        askMoreInfo(result);
      } else {
        onNavigate('/home');
      }
      userCreatedGoogle = true;
    }).catch((error) => {
      /* const errorMessage = error.message; */
      console.log(error);
      userCreatedGoogle = false;
    });

  return userCreatedGoogle;
};

// Sign up with Facebook
export const signUpFacebook = () => {
  const auth = getAuth(app);
  const facebookProvider = new FacebookAuthProvider();

  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      if (getAdditionalUserInfo(result).isNewUser) {
        askMoreInfo(result);
      } else {
        onNavigate('/home');
      }
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// Sign up with Github
export const signUpGithub = () => {
  const auth = getAuth(app);
  const githubProvider = new GithubAuthProvider();

  signInWithPopup(auth, githubProvider)
    .then((result) => {
      if (getAdditionalUserInfo(result).isNewUser) {
        askMoreInfo(result);
      } else {
        onNavigate('/home');
      }
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// Sign in with email and password
export async function signInAccount(email, pass) {
  const auth = getAuth(app);
  await signInWithEmailAndPassword(auth, email, pass);
}

// Sign Out
export const signOutBR = () => {
  const auth = getAuth(app);
  signOut(auth);
};

// Revisar
/* const auth = getAuth(app); // Init firebase app

// Current user id
let currentUserUid = '';
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;

    currentUserUid = uid;
    console.log(`${displayName} - ${email} - ${uid}`);
  } else {
    // User is signed out
    console.log('User signed out');
    onNavigate('/');
  }
}); */
