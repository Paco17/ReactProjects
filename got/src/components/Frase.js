import React from 'react';
import styled from '@emotion/styled';

const ContenidoFrase = styled.div `
    padding: 2rem;
    background-color: white;
    border-radius: 15px;
    max-width: 800px;
    border: 10px solid #716c6d;
    
    @media (min-width: 950px){
        margin-top: 10rem;
    }

    h1 {
        font-family: 'Grenze Gotisch', cursive;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 5rem;
            color:black;
            position: absolute;
            left: 2rem;
            top: -2.2rem;
        }
    }


    p{
        font-family: 'Grenze Gotisch', cursive;
        font-size: 1.6rem;
        text-align: right;
        color: #777;
        margin-top: .5rem;
        margin-right: 1rem;
        font-style:italic;
    
    }
`;

const Frase = ({frase, author}) => {

   

    return (  
        <ContenidoFrase>
            <h1>{frase}</h1>
            <p>- {author.name}</p>
        </ContenidoFrase>
    );
}
 
export default Frase;