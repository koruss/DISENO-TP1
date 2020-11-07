import React, { Component } from 'react'
import './VentanaAsesor.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import axios from 'axios';
// import Card from './CardGrupoResult'

class VentanaAsesor extends Component {
    state = {
        selectedZona: [],
        zonas: [{ value: "norte", label: "norte" }, { value: "sur", label: "Sur" }, { value: "Este", label: "Este" }, { value: "oeste", label: "oeste" }],
        nombreRama: "",

    }

    componentDidMount() {
        var self = this;
        axios.post("/allZonas", {}).then(res => {
            console.log(res)
            self.setState({
                zonas: res.data
            })

        })
    }

    render() {
        return (
            <div>
                <Header></Header>
                <main className="container">
                    <div className="label-wrapper">
                        <div className="label-wrapper" >
                            <label for="imagen">imagen : </label>
                        </div>
                        <div className="label-wrapper">
                            <h2>Ventana Asesor</h2>
                        </div>
                        <div class="form-group" class="spacing-base-hard">
                            <label for="zona">Hola, bienvenido al sistema, a continuación la 
                            estructura actual de organización basada en los movimientos más recientes:</label>
                        </div>
                        <div className="label-wrapper" >
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Cantidad de zonas:</label>
                                <label for="rama">{this.state.selectedZona.length}</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Cantidad de ramas:</label>
                                <label for="rama">X ramas</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Cantidad de grupos:</label>
                                <label for="rama">X grupos</label>
                            </div>
                        </div>
                        <div className="label-wrapper" >
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Total de personas sin grupo asignado:</label>
                                <label for="rama">30 personas</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Total de grupos sin jefe definido:</label>
                                <label for="rama">6 grupos</label>
                            </div>
                        </div>
                        
                        {/* <button type="button" class="btn btn-dark">Atrás</button> */}
                    </div>
                    <div className="label-wrapper">
                    <div className="label-wrapper-right" class="spacing-base-hard">
                        <h2>Estructura del sistema</h2>
                    </div>
                    <div className="label-wrapper" >
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Asignar miembros a los grupos</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Asignar jefes a los grupos</label>
                            </div>
                        </div>
                        <div className="label-wrapper" >
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Definir estructura organizacional</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Ver mapa organizacional</label>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    };

}

export default VentanaAsesor;