import React from 'react';
import styled from 'styled-components';

const TextField = styled.input`
border: 1px solid #ccc;
height: 20px;
margin: 4px;
padding: 4px;
line-height: 20px;
font-family: 'Source Code Pro', cursive;
transition: box-shadow 0.3s ease-in-out;
:focus, :hover {
    box-shadow: 0 0 4px 1px #526760;
}`;

export default TextField;