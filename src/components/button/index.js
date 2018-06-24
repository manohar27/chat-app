import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
border: 1px solid #88d9e6;
border-radius: 20px;
margin: 4px;
padding: 4px 12px;
font-family: 'Courgette', cursive;
background-color: #6270c1;
color: white;
transition: box-shadow 0.3s ease-in-out;
:focus, :hover {
    box-shadow: 0 0 4px 1px #6270c1;
}`;

export default Button;