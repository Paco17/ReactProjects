import React from 'react';
import styled from '@emotion/styled';

const Mensaje  = styled.p`
    background-color:rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`
const ResultadoPago= styled.div`
    text-align: center;
    padding: .1rem;
    border-radius: 15px;
    background-color:rgb(127, 224, 237);
    margin-top: 2rem;
    position: relative;

`

const TextoPago = styled.p `
    padding: 1rem;
    font-size: 20px;
    color: white;
    text-transform: uppercase;
    font-style:italic;
`

const Resultado = ({cotizacion}) => {
    
    return(
        (cotizacion === 0) ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
        : (
        <ResultadoPago>
            <TextoPago>
                El total a pagar es: ${cotizacion}
            </TextoPago>
        </ResultadoPago>)
    );
}
 
export default Resultado;