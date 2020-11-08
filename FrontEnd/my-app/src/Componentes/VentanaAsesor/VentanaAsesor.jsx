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
        zonas:[],
        ramas:[],
        grupos:[]

    }

    componentWillMount() {
        var self = this;
        let arreglo =[];
        let arrRama = [];
        let arrGrup = [];
        axios.post("/allZonas", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(zona=>{
                arreglo.push({
                    value:zona.nombreZona,
                    label:zona.nombreZona
                })
            })   
            this.setState({
                zonas:arreglo
            })
        })

        axios.post("/allRama", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(rama=>{
                arrRama.push({
                    value:rama.nombreRama,
                    label:rama.nombreRama
                })
            })   
            this.setState({
                ramas:arrRama
            })
        })

        axios.post("/allGrupo", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(grupo=>{
                arrGrup.push({
                    value:grupo.nombreGrupo,
                    label:grupo.nombreGrupo
                })
            })   
            this.setState({
                grupos:arrGrup
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
                                <label for="rama">{this.state.zonas.length}</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Cantidad de ramas:</label>
                                <label for="rama">{this.state.ramas.length}</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Cantidad de grupos:</label>
                                <label for="rama">{this.state.grupos.length}</label>
                            </div>
                        </div>
                        {/* <div className="label-wrapper" >
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Total de personas sin grupo asignado:</label>
                                <label for="rama">30 personas</label>
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Total de grupos sin jefe definido:</label>
                                <label for="rama">6 grupos</label>
                            </div>
                        </div> */}
                        
                        {/* <button type="button" class="btn btn-dark">Atrás</button> */}
                    </div>
                    <div className="label-wrapper">
                    <div className="label-wrapper-right" class="spacing-base-hard">
                        <h2>Estructura del sistema</h2>
                    </div>
                    <div className="label-wrapper" >
                            <div class="form-group" class="spacing-base">
                                {/* <label for="rama">Asignar miembros a los grupos</label> */}
                                <button type="button" class="btn btn-dark" onClick={this.onClick} >Asignar miembros a los grupos</button>
                            </div>
                            <div class="form-group" class="spacing-base">
                                {/* <label for="grupo">Asignar jefes a los grupos</label> */}
                                <button type="button" class="btn btn-dark" onClick={this.onClick} >Registrar nuevo miembro</button>

                            </div>
                        </div>
                        <div className="label-wrapper" >
                            <div class="form-group" class="spacing-base">
                                {/* <label for="rama">Definir estructura organizacional</label> */}
                                <button type="button" class="btn btn-dark" onClick={this.onClick} >Definir estructura organizacional</button>
                            </div>
                            <div class="form-group" class="spacing-base">
                                {/* <label for="grupo">Ver mapa organizacional</label> */}
                                <button type="button" class="btn btn-dark" onClick={this.onClick} >Ver mapa organizacional</button>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    };

}

export default VentanaAsesor;