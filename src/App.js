import React, { Component } from 'react';
import Formulaire from './component/Formulaire';
import Message from './component/Message';

import './App.css';

class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  addMessage = message => {
    const messages = { ... this.state.messages}
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  render() {
    return (
      <div className="box">
        <div className='messages'>
          <Message />
          <Message />
          <Message />
        </div>
        <Formulaire
        pseudo={this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default App;
