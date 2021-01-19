import React, {useState} from 'react';
import styled from '@emotion/styled'
import {obtenerDifYear, obtenerPrecioMarca, nuevo_Semi, aseguradoFunction} from '../helper';

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
        aseguradora: 'Si'
    });

    //Extraer los valores del State
    const {marca, year, nuevo, aseguradora} = datos;

    //Leer los datos del Formulario y colocarlos en el State
    const obtenerInfo = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const facturar = e => {
        e.preventDefault();
        
        if(marca.trim() === '' || year.trim() === '' || 
           nuevo.trim() === '' || aseguradora.trim() === ''){
               guardarError(true);
               return;
        }

        guardarError(false);            
            
        let resultado = 100000; //cien mil precio base
        const difYears = obtenerDifYear(year);
        const valorMarca = obtenerPrecioMarca(marca);
        const vehiculoNuevo = nuevo_Semi(nuevo);
        const vehiculoAsegurado = aseguradoFunction(aseguradora);
        
        //Obtener la diferenci de años
        //1.- Por cada año restar el 10%
        
        resultado -= ((difYears * 10) * resultado/100);
        
        /*2.- Ferrari, BMW, Mercedes 40%
        Toyota, Ford 25%
        Chevrolet 15%*/

        resultado += (resultado*valorMarca)/100;


        //3.- Nuevo Aumenta un 30% --- Seminuevo un 15%
        resultado += (resultado*vehiculoNuevo)/100;
                
        //4.- Asegurado 20%
        resultado += (resultado*vehiculoAsegurado)/100;

        //5.- TotaL 
        console.log(resultado);
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
                    onChange = {obtenerInfo}
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
                    onChange = {obtenerInfo}
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
                    onChange = {obtenerInfo}
                /> Nuevo

                <InputRadio
                    type="radio"
                    name="nuevo"
                    value="Seminuevo"
                    checked= {nuevo === "Seminuevo"}
                    onChange = {obtenerInfo}
                /> Seminuevos
            </Campo>

            <Campo>
                <Label>Asegurado: </Label>
                <InputRadio
                    type="radio"
                    name="aseguradora"
                    value="Si"
                    checked= {aseguradora === "Si"}
                    onChange = {obtenerInfo}
                /> Sí

                <InputRadio
                    type="radio"
                    name="aseguradora"
                    value="No"
                    checked= {aseguradora === "No"}
                    onChange = {obtenerInfo}
                /> No
            </Campo>

            <Boton type= "submit">Facturar</Boton>

        </form>
    );
}

export default Formulario;