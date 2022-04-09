// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqQ8Aou1uYUbrTkQtQ-LxP88oIZn4kjgs',
  authDomain: 'ema-john-simple-auth-01.firebaseapp.com',
  projectId: 'ema-john-simple-auth-01',
  storageBucket: 'ema-john-simple-auth-01.appspot.com',
  messagingSenderId: '337706554359',
  appId: '1:337706554359:web:ac711e26995285afaa94f2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
