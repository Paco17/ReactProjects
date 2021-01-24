import React from 'react';
import styled from '@emotion/styled';
import  {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

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
            <TransitionGroup
                component= "span"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter: 500, exit:500}}
                >
                    <TextoPago>
                        El total a pagar es: $<span>{cotizacion}</span>
                    </TextoPago>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoPago>)
    );
}
 
Resultado.propTypes  = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;