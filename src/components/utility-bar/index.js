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
background: #333;
color: white;
`;

const Logo = styled.header`
flex: 8;
height: 40px;
margin: 8px;
font-size: 1.5em;
line-height: 40px;
align-self: center;`;

export const UtilityBarContainer = props => <UtilityBar>
    <Logo>
        <img height="100%" width="100%" src={logoSVG} />
    </Logo>
</UtilityBar>;