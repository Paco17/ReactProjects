import React, {useState} from 'react';
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
    background-color: #75C5F1;
    font-size: 20px;
    width: 100%;
    height: 3rem;
    text-transform: uppercase;
    font-weight: 100;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border-radius: 10px;
    transition: background-color .3s ease;
   
    &:hover{
        background-color: #45A8DF;
        cursor: pointer;
    }
`;

const Error = styled.div `
    background-color: #F45451;
    width: 95%;
    padding: 1rem;
    color: white;
    margin-bottom: 1.5rem;
    text-align: center;
    border-radius: 10px;
    font-style:italic;
    font-weight: 550;

`;

const Formulario = () => {

    //Error
    const [error, guardarError] = useState(false);
    
    //Creando los diferentes campos de este formulario
    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        nuevo: 'Nuevo',
        asegurado: 'Si'
    });

    //Extraer los valores del State
    const {marca, year, nuevo, asegurado} = datos;

    //Leer los datos del Formulario y colocarlos en el State
    const onbtenerInfo = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const facturar = e => {
        e.preventDefault();
        
        if(marca.trim() === '' || year.trim() === '' || 
           nuevo.trim() === '' || asegurado.trim() === ''){
               guardarError(true);
               return;
           }

           guardarError(false);
    }

    return(
        <form
            onSubmit={facturar}
        >
            {error ? <Error>Uno o más campos no tienen valor</Error>: null}

            <Campo>
                <Label>Marca: </Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange = {onbtenerInfo}
                >
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
                <Select
                    name="year"
                    value={year}
                    onChange = {onbtenerInfo}
                >
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
                    checked= {nuevo === "Nuevo"}
                    onChange = {onbtenerInfo}
                /> Nuevo

                <InputRadio
                    type="radio"
                    name="nuevo"
                    value="Seminuevo"
                    checked= {nuevo === "Seminuevo"}
                    onChange = {onbtenerInfo}
                /> Seminuevos
            </Campo>

            <Campo>
                <Label>Asegurado: </Label>
                <InputRadio
                    type="radio"
                    name="Asegurado"
                    value="Si"
                    checked= {asegurado === "Si"}
                    onChange = {onbtenerInfo}
                /> Sí

                <InputRadio
                    type="radio"
                    name="NoAsegurado"
                    value="No"
                    checked= {asegurado === "No"}
                    onChange = {onbtenerInfo}
                /> No
            </Campo>

            <Boton type= "submit">Facturar</Boton>

        </form>
    );
}

export default Formulario;