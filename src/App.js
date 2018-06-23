import React, { Component } from 'react';
import {UtilityBarContainer} from './components/utility-bar';
import ChatBox from './components/chat-box';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <UtilityBarContainer />
        <ChatBox />
      </div>
    );
  }
}

export default App;
