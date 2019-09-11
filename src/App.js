import React, { Component } from 'react';
import Formulaire from './component/Formulaire';
import Message from './component/Message';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="box">
        <div className='messages'>
          <Message />
        </div>
        <Formulaire />
      </div>
    );
  }
}

export default App;
