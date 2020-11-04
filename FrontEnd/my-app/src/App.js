import React from 'react';
import './App.css';
import './Componentes/General/Header'
import Header from './Componentes/General/Header';
import Login from './Componentes/Login/Login';
import A from './Componentes/Consultas/miembrosXelemento';
import Card from './Componentes/Consultas/Card1';
import Zona from './Componentes/Paginas/CrearZona';
import Rama from './Componentes/Paginas/CrearRama'
import Grupo from './Componentes/Paginas/CrearGrupo'
import Contacto from './Componentes/Contacto/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import miembroXelemento from './Componentes/Consultas/miembrosXelemento';
import GrupoRolesXMiembro from './Componentes/Consultas/GrupoRolesXMiembro';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Rama></Rama>
      <Grupo></Grupo> */}
    
      {/* <Login></Login> */}
      {/* <Contacto></Contacto> */}
      <GrupoRolesXMiembro></GrupoRolesXMiembro>
      {/* <miembroXelemento></miembroXelemento> */}
      
    </div>
  );
}

export default App;
