import React from 'react';
import './App.css';
import './Componentes/General/Header'
import Header from './Componentes/General/Header';
import Login from './Componentes/Login/Login'
import RegistroMiembro from './Componentes/RegistroMiembro/RegistroMiembro'

function App() {
  return (
    
    <div className="App">
      <div>    
        <Header></Header> 
        <RegistroMiembro></RegistroMiembro>   
        
      </div>

    </div>
  );
}

export default App;
