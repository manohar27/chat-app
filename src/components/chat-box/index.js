import React, { Component } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const ChatForm = styled.form`
position:absolute;
bottom: 0px;
left: 0px;
right: 0px;
margin: 8px auto;
width: 100%;
max-width: 540px;
align-self:right;
display: flex;
input {
    flex: 4;
}
button {
    flex: 1;
    }`

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            chatMessage: '',
            userNickName: null
        }

    }
    initializeSocket = (userNickName) => {
        this.socket = io('http://localhost:5000');
        this.socket.on('townSquare', (message) => {
            const chats = this.state.chats;
            chats.push(message);
            this.setState({ chats });
        })
        this.socket.emit('townSquare', {
            from: "ADMIN",
            message: `${userNickName} joined the chat room`
        });
        this.setState({ userNickName });
    }

    handleChange = (e) => {
        this.setState({ chatMessage: e.target.value });
    }
    sendMessage = (e) => {
        e.preventDefault();
        this.socket.emit('townSquare', {
            from: this.state.userNickName,
            message: this.state.chatMessage
        });
        this.setState({ chatMessage: '' });
    }
    createUser = (e) => {
        e.preventDefault();
        this.initializeSocket(this.userName.value);
    }
    render() {
        const chatList = this.state.chats.map((chatObject, index) => <li key={"chat" + index}>{`${chatObject.from} says: ${chatObject.message}`}</li>);
        const createUserNickName = this.state.userNickName === null;
        if (createUserNickName) {
            return (<form onSubmit={this.createUser}>
                <input placeholder="Enter a nickname" ref={element => this.userName = element} type="text" />
                <button type="submit">Done!</button>
            </form>)
        }
        return <div>
            <ul>
                {chatList}

            </ul>
            <ChatForm onSubmit={this.sendMessage}>
                <input type="text" onChange={this.handleChange} value={this.state.chatMessage} />
                <button type="submit" disabled={this.state.chatMessage.length == 0} >Send</button>
            </ChatForm>
        </div>
    }
}

export default ChatBox;