import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UtilityBarContainer } from './components/utility-bar';
import ChatBox from './components/chat-box';
import './App.css';
import { createNick } from './state/actions/users';
import { newChat } from './state/actions/chats';

class App extends Component {
  render() {
    return (
      <div>
        <UtilityBarContainer />
        <ChatBox
          chats={this.props.chats}
          recieveChat={this.props.recieveChat}
          nickname={this.props.nickname}
          createUserNick={this.props.createUserNick}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createUserNick: username => dispatch(createNick(username)),
  recieveChat: chatItem => dispatch(newChat(chatItem))
});

const mapStateToProps = state => ({
  nickname: state.users.userConnected,
  chats: state.messages.chats
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
