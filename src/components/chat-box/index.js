import React, { Component } from 'react';
import io from 'socket.io-client';
import TextField from '../text-field';
import Button from '../button';
import UserNickForm from '../user-nick-form';
import ChatList from './chat-list';
import styled from 'styled-components';

const ChatForm = styled.form`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: 8px auto;
  width: 100%;
  max-width: 540px;
  align-self: right;
  display: flex;
  input {
    flex: 4;
  }
  button {
    flex: 1;
  }
`;

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      chatMessage: '',
      userNickName: null
    };
  }
  initializeSocket = userNickName => {
    this.socket = io(window.location.href);
    this.socket.on('townSquare', message => {
      const chats = this.state.chats;
      chats.push(message);
      this.setState({ chats });
    });
    this.socket.emit('townSquare', {
      from: 'ADMIN',
      message: `${userNickName} joined the chat room`
    });
    this.setState({ userNickName });
  };

  handleChange = e => {
    this.setState({ chatMessage: e.target.value });
  };
  sendMessage = e => {
    e.preventDefault();
    this.socket.emit('townSquare', {
      from: this.state.userNickName,
      message: this.state.chatMessage
    });
    this.setState({ chatMessage: '' });
  };
  render() {
    const createUserNickName = this.state.userNickName === null;
    if (createUserNickName) {
      return <UserNickForm onSubmit={this.initializeSocket} />;
    }
    return (
      <div>
        <ChatList chats={this.state.chats} />
        <ChatForm onSubmit={this.sendMessage}>
          <TextField
            type="text"
            onChange={this.handleChange}
            value={this.state.chatMessage}
          />
          <Button type="submit" disabled={this.state.chatMessage.length === 0}>
            Send
          </Button>
        </ChatForm>
      </div>
    );
  }
}

export default ChatBox;
