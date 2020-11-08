import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Button from 'react-bootstrap/Button'
import "./Estructura.css"
import Header from '../General/Header';
import axios from 'axios';


export default class CrearGrupo extends Component {

    state = {
        ramasCompletas: [],
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
        this.limpiarRamas();
        this.obtenerRamas();
        this.limpiarMonitor();
    }

    /*handleChangeRama = selectedRama => {
        this.setState(
            { selectedRama }
        )
    }*/

    /*async handleChangeRama (e) {
        var self = this;
        console.log(e)
        self.setState(
            { selectedRama : e}
        )
        this.limpiarMonitorSeleccionado()
        this.obtenerMonitores(e)
    }*/

    handleChangeMonitor = selectedMonitor => {
        this.setState(
            { selectedMonitor }
        );

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
        var self = this;
        let arreglo =[];
        axios.post("/allRama", {}).then(res => {
            const respuesta=res.data;
            const zonaNombre = this.state.selectedZona.value;
            respuesta.forEach(rama=>{
                if(rama.zona == zonaNombre){
                    arreglo.push({
                        value:rama.nombreRama,
                        label:rama.nombreRama
                    })
                }
            })   
            this.setState({
                ramas:arreglo
            })
            this.setState({
                ramasCompletas:respuesta
            })
        })
    }

    async obtenerMonitores(){
        var self = this;
        const ramasCrudo =this.state.ramasCompletas;
        const ramaNombre = this.state.selectedRama;
        console.log(ramaNombre);
        let arreglo =[];
        ramasCrudo.forEach(rama=>{
            if(rama.nombreRama == ramaNombre){
                var miembros = rama.jefesGrupo;
                console.log("caca",miembros);
                miembros.forEach(miembro=>{
                    //arreglo.push({
                   //     value:miembro.id,
                   //     label:miembro.nombre + miembro.apellido
                    //})
                })
            }
        }) 
        this.setState({
            monitores:arreglo
        })
    }

    async limpiarMonitor(){
        this.state.monitores = []
    }

    limpiarRamas(){
        this.state.selectedRama = []
    }

    async limpiarMonitorSeleccionado(){
        this.state.selectedMonitor = []
    }

    render() {
        return (
           <div>
            <Header></Header>
            <div id="center-section">
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
                                    <Select components={makeAnimated} name="ramas" value={this.state.selectedRama} onChange={this.handleChangeRama} 
                                    options={this.state.ramas} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                                <div className="spacing-base">
                                    <label>Seleccione el Monitor del Grupo</label>
                                    <Select components={makeAnimated} name="monitores" value={this.state.selectedMonitor} onChange={this.handleChangeMonitor} 
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
        </div>
        )
    };

}