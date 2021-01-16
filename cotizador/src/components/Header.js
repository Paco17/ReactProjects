import React from 'react';
import Styled from '@emotion/styled';

const ContenedorHeader = Styled.header`
    background: linear-gradient(to right, #e0e0e0, #cccccc); 
    padding: 10px;
    font-weight: 300;
`;

const TextoHeader = Styled.h1`
    font-size: 2.5rem;
    margin: 5px;
    font-family: 'Slabo 27px', serif;
    text-align: center;
    
`;

const Header = ({titulo}) => {
    return  (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    );
}

export default Header;