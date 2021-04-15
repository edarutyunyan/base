import React from 'react';
import './App.scss';
import Header from './Fragments/Header';
import { MenuEditPage } from './Pages/MenuEditPage';
import { LoginPage } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={'App-content center'}>
        {/*<MenuEditPage />*/}
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
