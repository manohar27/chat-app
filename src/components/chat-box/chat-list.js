import React from 'react';
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
    }`;

const UnorderedList = styled.ul`
padding: 0px;`
const ChatList = props => <UnorderedList>
    {props.chats.map((chat, index) => <ChatItem key={'chat-item-' + index}>
        <h6>{chat.from}</h6>
        <p>{chat.message}</p>
    </ChatItem>)}
</UnorderedList>;

export default ChatList;