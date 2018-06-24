import React from 'react';
import styled from 'styled-components';
import logoSVG from '../../logo.svg';

const LeftIconButton = styled.button`
display: none;
background: transparent;
outline: none;
border: 1px solid blue;
`;

const RightIconButton = styled.button`
flex: 0.75;
background: transparent;
outline: none;`;

const UtilityBar = styled.div`
display: flex;
background: linear-gradient(to right, #374b4a, #526760);
color: white;
`;

const Logo = styled.header`
flex: 8;
height: 40px;
margin: 8px;
font-size: 1.5em;
cursor: pointer;
line-height: 40px;
a {
    text-decoration: none;
    color: white;
}
.logo-half-1 {
    font-family: 'Source Code Pro';
    }
.logo-half-2 {
    font-family: 'Courgette';
    }`;

export const UtilityBarContainer = props => <UtilityBar>
    <Logo>
        <a href="/">
            <span className="logo-half-1">Sock</span>
            <span className="logo-half-2">Chat</span>
        </a>
    </Logo>
</UtilityBar>;