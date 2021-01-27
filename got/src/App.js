import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;

`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #999999 15%, #e3dfdf 50%, #999999 85%);
  background-size:100%;
  font-family: 'Grenze Gotisch', cursive;
  color: #000000;
  padding: .5rem 2.5rem;
  font-size: 3rem;
  border: 5px solid black;
  border-radius: 10px;  
  margin-top:5rem;
  transition: background-size .5s ease;

  :hover {
    cursor:pointer;
    background-size: 400px;
  }

  @media (min-width: 950px){
    margin-bottom: 5rem;
  }
  
`;


function App () {


  const [frase, setFrase] = useState({
    sentence: "",
    character: {
      name: ""
    }
  });

  const consultarAPI = async () => {
    const api = await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random');
    //Sin async await --- const frase = api.then(callback => callback.json());
  
    //Como se utilizo async await
    const frase = await api.json();
  
    //Accediendo a sus valores Sin Async await
    //frase.then(resultado => console.log(resultado));
    
    setFrase(frase);
    console.log({frase});
  }



  //Cargar una frase
  useEffect( () => {
    consultarAPI()
  }, []);

  return (  
    <Contenedor>
      <Frase
        frase = {frase.sentence}
        author = {frase.character}
      />

      <Boton
        onClick= {() => consultarAPI()} 
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}
 
export default App;
