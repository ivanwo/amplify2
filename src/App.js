import React from 'react';
import './App.css';
import bowie from './bowie.mp4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bowie Zone</h1>
        <video src={bowie} autoPlay="true" loop="infinite" ></video>
        <p>
          ? ? ? ?
        </p>
      </header>
    </div>
  );
}

export default App;
