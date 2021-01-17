import React from 'react';
import styled from '@emotion/styled'

const Campo = styled.div `
    display: flex;
    margin-bottom: 1.5rem;
    align-items: center;
`;

const Label = styled.label `
    flex: 0 1 10rem;
    font-size: 1.1rem;
    
`;

const Select = styled.select `
    display: block;
    width: 80%;
    text-align: center;
    font-style: italic;
    padding: 1rem;
    border: 1px solid #e2e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input `
    margin: 0 1rem 0 2.5rem;
`;

const Boton = styled.button `
    background-color: #bf930d;
    font-size: 20px;
    width: 100%;
    height: 3rem;
    text-transform: uppercase;
    font-weight: 100;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border-radius: 10px;
   
    
`;

const Formulario = () => {
    return(
        <form>
            <Campo>
                <Label>Marca: </Label>
                <Select>
                    <option value = "">Click para Seleccionar</option>
                    <option value = "Ford">Ford</option>
                    <option value = "Ferrari">Ferrari</option>
                    <option value = "BMW">BMW</option>
                    <option value = "Toyota">Toyota</option>
                    <option value = "Mercedes">Mercedes</option>
                    <option value = "Chevrolet">Chevrolet</option>
                </Select>
            </Campo>


            <Campo>
                <Label>Año: </Label>
                <Select>
                    <option value = "">Click para Seleccionar</option>
                    <option value = "2021">2021</option>
                    <option value = "2020">2020</option>
                    <option value = "2019">2019</option>
                    <option value = "2018">2018</option>
                    <option value = "2017">2017</option>
                    <option value = "2016">2016</option>
                    <option value = "2015">2015</option>
                    <option value = "2014">2014</option>
                    <option value = "2013">2013</option>
                    <option value = "2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Nuevo o Semi: </Label>
                <InputRadio
                    type="radio"
                    name="nuevo"
                    value="Nuevo"
                /> Nuevo

                <InputRadio
                    type="radio"
                    name="nuevo"
                    value="Seminuevo"
                /> Seminuevos
            </Campo>

            <Boton type= "button">Facturar</Boton>

        </form>
    );
}

export default Formulario;