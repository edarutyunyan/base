import React from 'react';
import './App.scss';
import Header from './Fragments/Header';
import MenuCreateForm from './Fragments/Forms/MenuCreateForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={'App-content center'}>
        <h1>New Menu Section</h1>
        <MenuCreateForm />
      </div>
    </div>
  );
}

export default App;
