import React,{ Component } from 'react';
import Cabecera from './components/Cabecera';
import './App.css';

const manejaClick = texto =>{
  console.log(texto)
}

function App() {

  const miau='Bienvenido miau'
  const guau='Bienvenido guau'

  return (
    
    <div className="App">
      <Cabecera miau={miau} manejaClick={manejaClick}/>
      <Cabecera miau={guau} manejaClick={manejaClick}/>
      
      <p className="App-intro">
          Hola mundo
        </p>
    </div>
  );
}

//export const hola = 'hola'

export default App;
