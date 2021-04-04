import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
