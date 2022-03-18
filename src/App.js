import './App.css';
import React from 'react';
import AWSbutton from './AWSbutton';


function App() {

  return (
    <div className="App">
      <div className="Input">
        <h1>Input</h1>
        <AWSbutton input_data="Kings vs. Bucks"/>
      </div>
    </div>
  );
}

export default App;
