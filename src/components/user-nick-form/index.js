import React from 'react';
import styled from 'styled-components';
import TextField from '../text-field';
import Button from '../button';

const StyledUserForm = styled.form`
width: 80%;
padding: 20px;
max-height: 400px;
max-width: 540px;
position: absolute;
top:50%;
left: 50%;
text-align: center;
transform: translate(-50%, -50%);
margin: 0 auto;
border: 1px solid #ccc;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
background-color: #ccc;
`;

export default class UserNickForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.userName.value);
    }
    render() {
        return (<StyledUserForm onSubmit={this.onSubmit}>
            <TextField maxLength="16" placeholder="Enter a nickname" innerRef={element => this.userName = element} type="text" />
            <Button type="submit">Let's Chat</Button>
        </StyledUserForm>)
    }
}