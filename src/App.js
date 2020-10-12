import React from 'react';
import './App.css';
import bowie from './bowie.gif';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bowie Zone</h1>
        <img src={bowie} />
        <p>
          ? ? ? ?
        </p>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
