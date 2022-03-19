// importamos la funcion que vamos a testear
import {
  FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, signInWithEmailAndPassword,
  signInWithPopup, createUserWithEmailAndPassword, getAuth, initializeApp,
} from '../src/firebase-imports.js';
import {
  auth, createAccount, signInAccount, signUpGoogle, signUpFacebook, signUpGithub,
} from '../src/firebase';

jest.mock('../src/firebase-imports.js');

describe('ingresa la autenticacion de la app', () => {
  it('debería ser una función que crea el registro de cuenta con email y password', () => {
    expect(typeof auth).toBe('function');
  });
});

describe('ingresa a la cuenta del usuario', () => {
  it('debería ser una función que crea el registro de cuenta con email y password', () => {
    expect(typeof createAccount).toBe('function');
  });
});

describe('ingresa a la cuenta', () => {
  it('debería ser una función que crea el registro de cuenta con email y password', () => {
    expect(typeof signInAccount).toBe('function');
  });
});

describe('crear usuario con google', () => {
  it('debería ser una función que crea el registro de cuenta con email y password', () => {
    expect(typeof signUpGoogle).toBe('function');
  });
});

describe('crear usuario con facebook', () => {
  it('debería ser una función que crea el registro de cuenta con email y password', () => {
    expect(typeof signUpFacebook).toBe('function');
  });
});

describe('crear usuario con github', () => {
  it('debería ser una función que crea el registro de cuenta con email y password', () => {
    expect(typeof signUpGithub).toBe('function');
  });
});

describe('crear usuario con email y password', () => {
  it('debería ser una función que crea el registro de cuenta con email y password', () => {
    expect(typeof createUserWithEmailAndPassword).toBe('function');
  });
});

describe('registrarse con email y password', () => {
  it('debería ser una función que entra a la RS con cuenta con email y password', () => {
    expect(typeof signInWithEmailAndPassword).toBe('function');
  });
});

describe('hace el registro con otros proveedores', () => {
  it('debería ser una función que entra a la RS con otros proveedores', () => {
    expect(typeof signInWithPopup).toBe('function');
  });
});

describe('GoogleAuthProvider', () => {
  it('debería ser una función que lleva a cabo el registro a GoogleAuthProvider', () => {
    expect(typeof GoogleAuthProvider).toBe('function');
  });
});

describe('FacebookAuthProvider', () => {
  it('debería ser una función que lleva a cabo el registro a FacebookAuthProvider', () => {
    expect(typeof FacebookAuthProvider).toBe('function');
  });
});

describe('GithubAuthProvider', () => {
  it('debería ser una función que lleva a cabo el registro a GithubAuthProvider', () => {
    expect(typeof GithubAuthProvider).toBe('function');
  });
});

describe('getAuth', () => {
  it('debería ser una función que lleva a cabo la autentificación/verificación de cuenta', () => {
    expect(typeof getAuth).toBe('function');
  });
});

describe('initializeApp', () => {
  it('debería ser una función que lleva a cabo la vinculación de la app con firebase', () => {
    expect(typeof initializeApp).toBe('function');
  });
});
