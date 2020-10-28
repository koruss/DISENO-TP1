import React from 'react';
import './App.css';
import './Componentes/General/Header'
import Header from './Componentes/General/Header';
import Login from './Componentes/Login/Login';
import A from './Componentes/Consultas/miembrosXelemento';
import Card from './Componentes/Consultas/Card1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <div>    
        <Header></Header> 
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
