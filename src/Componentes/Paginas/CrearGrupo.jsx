import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Button from 'react-bootstrap/Button'
import "./Estructura.css"
import Header from '../General/Header';
import axios from 'axios';


export default class CrearGrupo extends Component {

    state = {
        selectedZona: [],
        selectedRama: [],
        selectedMonitor: [],
        zonas: [],
        ramas: [],
        monitores: [],
        nombreGrupo: "",
        nombreRama: ""
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    handleChangeZona = selectedZona => {
        this.setState(
            { selectedZona }
        );
        this.limpiarMonitor();
        this.obtenerRamas();
    }

    cargarRamas() {
        var self = this;
        let arreglo =[];
        axios.post("/allRamas", {}).then(res => {
            const respuesta=res.data;
            console.log(respuesta)
            respuesta.forEach(rama=>{
                arreglo.push({
                    value:rama.nombreZona,
                    label:rama.nombreZona
                })
            })   
            this.setState({
                ramas:arreglo
            })
        })
    }

    componentWillMount() {
        var self = this;
        let arreglo =[];
        axios.post("/allZonas", {}).then(res => {
            const respuesta=res.data;
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
    }

    obtenerRamas(){
        
    }

    limpiarMonitor(){
        console.log("alllo");
        this.state.monitores = []
    }


    render() {
        return (
            <div id="center-section">
                <Header></Header>
                <div id="main-section">
                    <div class="border">
                        <div class="box-container">
                            <div class="spacing-base">
                                <h1 class="h1">Crear Grupo</h1>
                                <div class="spacing-base">
                                    <label> Nombre del Nuevo Grupo</label>
                                    <input type="text" name="nombreGrupo" autoComplete="on" onChange={this.onChange} tabIndex="1"></input>
                                </div>
                                <div className="spacing-base">
                                    <label>Zona a la que pertenece</label>
                                    <Select components={makeAnimated} name="zonas" value={this.state.selectedZona} onChange={this.handleChangeZona} 
                                    options={this.state.zonas} className="basic-multi-select" classNamePrefix="select"/>
                                <div className="spacing-base">
                                    <label>Rama a la que pertenece</label>
                                    <Select components={makeAnimated} name="ramas" value={this.state.selectedRama} onChange={this.handleChange} 
                                    options={this.state.ramas} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                                <div className="spacing-base">
                                    <label>Seleccione el Monitor del Grupo</label>
                                    <Select components={makeAnimated} name="monitores" value={this.state.selectedMonitor} onChange={this.handleChange} 
                                    options={this.state.monitores} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                                <div>
                                    <button type="button" class="btn btn-dark" onClick={this.onClick} >Guardar grupo </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border">
                        <div class="box-container">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    };

}