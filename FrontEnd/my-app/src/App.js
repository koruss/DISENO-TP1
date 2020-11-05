import React from 'react';
import './App.css';
import './Componentes/General/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/General/Header';
import Login from './Componentes/Login/Login'
import RegistroMiembro from './Componentes/RegistroMiembro/RegistroMiembro'
import TrasladarMiembro from './Componentes/TrasladarMiembro/TrasladarMiembro'
import CambiarNombreGrupo from './Componentes/CambiarNombreGrupo/CambiarNombreGrupo'

function App() {
  return (
    
    <div className="App">
      <div>    
        <Header></Header> 
        <CambiarNombreGrupo></CambiarNombreGrupo>   
        
      </div>

    </div>
  );
}

export default App;
