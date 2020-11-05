import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './App.css';
import './Componentes/General/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/General/Header';
import Login from './Componentes/Login/Login';
import CrearGrupo from './Componentes/Paginas/CrearGrupo';
import CrearRama from './Componentes/Paginas/CrearRama';
import CrearZona from './Componentes/Paginas/CrearZona';
import MenuEstructura from './Componentes/Paginas/MenuEstructuras';
import RegistroMiembro from './Componentes/RegistroMiembro/RegistroMiembro';
import TrasladarMiembro from './Componentes/TrasladarMiembro/TrasladarMiembro';
import TreeContainer from './Componentes/Tree/TreeContainer';
import CambiarNombreGrupo from './Componentes/CambiarNombreGrupo/CambiarNombreGrupo';
import MiembroXElemento from './Componentes/Consultas/miembrosXelemento';

class App extends Component{
//function App() {
  render(){
    return (
    <Router>
      <div className="App">
        <Switch>    
          <Route exact path="/" component={Login}/>;
          <Route path="login" component={Login}/> 
          <Route path="registroMiembro" component={RegistroMiembro}/> 
          <Route path="trasladoMiembro" component={TrasladarMiembro}/> 
          <Route path="creacionZona" component={CrearZona}/> 
          <Route path="creacionRama" component={CrearRama}/> 
          <Route path="creacionGrupo" component={CrearGrupo}/> 
          <Route path="estructura" component={MenuEstructura}/> 
          <Route path="edicionGrupo" component={CambiarNombreGrupo}/> 
          <Route path="consultaMiembrosPorElemento" component={MiembroXElemento}/> 
          <Route path="arbolEstructural" component={TreeContainer}/> 
        </Switch>
      </div>
    </Router>
    );
  }
}
export default App;
