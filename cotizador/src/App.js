import React, {useState} from 'react';

import Header from './components/Header'
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border-style: groove;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      nuevo: '',
      asegurado: ''
    }
  });

  //Extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header 
        titulo='Venta de Vehículos'
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen = {guardarResumen}
        />

       <Resumen
        datos = {datos}
       />

       <Resultado
        cotizacion = {cotizacion}
       />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
