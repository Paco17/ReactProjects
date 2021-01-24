import React from 'react';
import styled from '@emotion/styled';
import {mayuscula} from '../helper';
import PropTypes from 'prop-types';

const ContainerResumen = styled.div`
    padding: .5rem 1rem 2rem 1rem;
    text-align: center;
    background-color:  #75C5F1;
    border-radius: 15px;
    margin-top: 2rem;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        
`;


const Resumen = ({datos}) => {
    const {marca, year, nuevo, asegurador} = datos;
    
    if(marca === '' || nuevo === '' || year === '' || asegurador === '')
        return null;
       
    return (  
        <ContainerResumen>       
            <h2>Resumen de Costo</h2>
            <ul>
                <li>Marca: {mayuscula(marca)}</li>
                 <li>Año: {mayuscula(year)}</li>
                <li>Nuevo: {mayuscula(nuevo)}</li>
                <li>Asegurado: {mayuscula(asegurador)}</li>
            </ul>   
        </ContainerResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
 
export default Resumen;