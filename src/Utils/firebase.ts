import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyApsDvWA6jwEjfwVVHwnTqdp8mjuDlMEGM',
  authDomain: 'ed-artn-lunch-project.firebaseapp.com',
  projectId: 'ed-artn-lunch-project',
  storageBucket: 'ed-artn-lunch-project.appspot.com',
  messagingSenderId: '925652061868',
  appId: '1:925652061868:web:6fea5113b47154e3e79909',
  measurementId: 'G-MHDECTZVMJ',
});

export const database = firebase.database();
