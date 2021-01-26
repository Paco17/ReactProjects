import React from 'react';
import styled from '@emotion/styled';


const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;

`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #999999 15%, #e3dfdf 50%, #999999 85%);
  background-size:100%;
  font-family: 'Grenze Gotisch', cursive;
  color: #000000;
  margin-top:1rem;
  padding: .5rem 2.5rem;
  font-size: 3rem;
  border: 5px solid black;
  border-radius: 10px;  
  cursor: pointer;
`;

const consultarAPI = () => {
  console.log('Consultando')
}

const App = () => {
  return (  
    <Contenedor>
      <Boton
        onClick= {() => consultarAPI()} 
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}
 
export default App;
