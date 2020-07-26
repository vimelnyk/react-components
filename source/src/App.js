import React from 'react';
import logo from './logo.svg';
import Functional from './Functional';
import Pure from './Pure';
import CreateElem from './CreateElem';
import RegularComponent from './RegularComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <h1>Hello World</h1>
      <Functional name="World" />
      <Pure />
      {CreateElem}
      <RegularComponent />
    </div>
  );
}

export default App;
