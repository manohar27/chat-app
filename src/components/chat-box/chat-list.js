import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ChatItem = styled.li`
  color: black;
  border: 1px solid #ccc;
  margin: 8px 4px;
  font-family: 'Source Code Pro';
  list-style: none;
  h6 {
    margin: 2px;
    display: inline-block;
    padding: 4px 8px;
    background: #374b4a;
    margin-right: 8px;
    color: white;
    font-size: 16px;
  }
  p {
    margin: 2px;
    display: inline-block;
  }
`;

const UnorderedList = styled.ul`
  @media (max-width: 540px) {
    max-width: 100%;
  }
  height: calc(100vh - 200px);
  max-width: 80%;
  overflow: auto;
  display: block;
  padding: 0px;
`;
class ChatList extends PureComponent {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.chats.length !== this.props.chats.length &&
      this.props.chats.length > 10
    ) {
      const chatList = document.getElementById('chatList');
      chatList.lastChild.scrollIntoView(true);
    }
  }
  render() {
    const chats = this.props.chats;
    return (
      <UnorderedList id="chatList">
        {chats.map((chat, index) => (
          <ChatItem key={'chat-item-' + index} id={'chat-item-' + index}>
            <h6>{chat.from}</h6>
            <p>{chat.message}</p>
          </ChatItem>
        ))}
      </UnorderedList>
    );
  }
}

export default ChatList;
