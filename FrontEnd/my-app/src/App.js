import React from 'react';
import './App.css';
import './Componentes/General/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/General/Header';
import Login from './Componentes/Login/Login'

function App() {
  return (
    
    <div className="App">
      <div>    
        <Header></Header> 
        <Login></Login>
      </div>



    </div>
  );
}

export default App;
