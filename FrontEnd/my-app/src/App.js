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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Rama></Rama>
      <Grupo></Grupo>
    </div>
  );
}

export default App;
