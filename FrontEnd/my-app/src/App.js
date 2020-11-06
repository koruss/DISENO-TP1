import React from 'react';
import './App.css';
import './Componentes/General/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/General/Header';
import Login from './Componentes/Login/Login';
import Zona from './Componentes/Paginas/CrearZona';
import Rama from './Componentes/Paginas/CrearRama';

function App() {
  return (
    
    <div className="App">
      <div>    
        <Header></Header> 
        <Rama></Rama>
      </div>



    </div>
  );
}

export default App;
