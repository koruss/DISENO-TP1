import React, { Component } from 'react'
import './ConsultarGrupoResult.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import Card from './CardGrupoResult'
import axios from 'axios';

class ConsultarGrupoResult extends Component {
    state = {
        grupo:  "",
        zona: "",
        rama: "",
        jefe: [],
        monitores: [],
        resultMembers: [
        ]
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });


    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };


    render() {
        return (
            <div>
                <Header></Header>
                <main className="container">
                    <div id="center-section">
                        <h2>Nombre del Grupo: {this.state.grupo}</h2>
                    </div>
                    <div className="label-wrapper">
                        <div class="form-group" class="spacing-base">
                            <label for="zona">Zona a la que pertenece:</label>
                            <label for="zona">{this.state.zona}</label>
                        </div>
                    </div>

                    <div className="label-wrapper">
                        <div class="form-group" class="spacing-base">
                            <label for="rama">Rama a la que pertenece:</label>
                            <label for="rama">{this.state.rama}</label>
                        </div>
                    </div>
                    <div className="label-wrapper">
                        <div class="form-group" class="spacing-base">
                            <label for="jefe">Jefes:</label>
                            {this.state.jefe.map((nombre) => <li>{(nombre)}</li>)}
                        </div>
                    </div>
                    <div className="label-wrapper">
                        <div class="form-group" class="spacing-base">
                            <label for="monitores">Monitores:</label>
                            {this.state.monitores.map((nombre) => <li>{(nombre)}</li>)}
                        </div>
                    </div>
                    {/* <button type="button" class="btn btn-dark">Atrás</button> */}


                    <div className="label-wrapper">
                        <div class="spacing-base-hard">
                            <label for="CantMiembros">Cantidad de usuarios</label>
                            <label for="ResultCantMiembros">{this.state.resultMembers.length}</label>
                            <div class="form-group" class="spacing-base">
                                
                                {this.state.resultMembers.map((p, index) =>
                                    (<Card index={index} miembroData={p} />))
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    };

}

export default ConsultarGrupoResult;