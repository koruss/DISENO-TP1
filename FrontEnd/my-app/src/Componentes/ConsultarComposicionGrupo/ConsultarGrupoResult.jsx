import React,{ Component } from 'react'
import './ConsultarGrupoResult.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import Card from './CardGrupoResult'

class ConsultarGrupoResult extends Component{
state = {
    resultMembers:[{nombre: "steven"},{nombre: "kenito"},{nombre: "yochi"},
                {nombre: "steven"},{nombre: "kenito"},{nombre: "yochi"},
                {nombre: "steven"},{nombre: "kenito"},{nombre: "yochi"}
                  ]
}

onChange = (e) => this.setState({[e.target.name]:
    e.target.value}); 

_handleChangeNombreAnterior(val) {
    return val;
  }

render() {
    return (
        <div>
        <Header></Header>
        <main className = "container">
                <div id="center-section">
                    <h2>Nombre del Grupo: </h2>
                </div>
                <div className="label-wrapper">
                    <div class="form-group" class="spacing-base">
                        <label for="zona">Zona a la que pertenece:</label>
                        <label for="zona">Zona</label>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Rama a la que pertenece:</label>
                        <label for="zona">Rama</label>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Jefes:</label>
                        <label for="zona">Jefes</label>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Monitores:</label>
                        <label for="zona">Monitores</label>
                    </div>
                    <button type="button" class="btn btn-dark">Atrás</button>
                </div>
                <div className="label-wrapper" class="spacing-base">
                    <label for="nombreNuevo">Cantidad de usuarios</label>
                    <label for="zona">24</label>
                    <div class="form-group" class="spacing-base">
                    {this.state.resultMembers.map((p, index) =>
                                                (<Card index={index} miembroData={p} />))
                    }
                    </div>
                </div>
        </main>
    </div>    
    )
};

}

export default ConsultarGrupoResult;