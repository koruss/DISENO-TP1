import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Button from 'react-bootstrap/Button'
import "./Estructura.css"
import axios from 'axios';

export default class CrearGrupo extends Component {

    state = {
        selectedZona: [],
        selectedRama: [],
        selectedMonitor: [],
        zonas: [{ value: "norte", label: "norte" }, { value: "sur", label: "Sur" }, { value: "Este", label: "Este" }, { value: "oeste", label: "oeste" }],
        ramas: [],
        monitores: [],
        nombreGrupo: ""
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

    selectedZona = selectedZona =>{
        this.setState(
            {selectedZona}
        ).then(axios.post("/ramasDeZona",{selectedZona}).then(res =>{
            const respuesta= res.data;

        }))
    }
    componentDidMount(){
        this.buscarZonas();
    }

    buscarZonas(){
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

    buscar



    render() {
        return (
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
                                    <Select components={makeAnimated} name="zonas" value={this.state.selectedZona} onChange={this.handleChange} options={this.state.zonas} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                                <div className="spacing-base">
                                    <label>Rama a la que pertenece</label>
                                    <Select components={makeAnimated} name="ramas" value={this.state.selectedRama} onChange={this.handleChange} options={this.state.ramas} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                                <div className="spacing-base">
                                    <label>Seleccione el Monitor del Grupo</label>
                                    <Select components={makeAnimated} name="monitores" value={this.state.selectedMonitor} onChange={this.handleChange} options={this.state.monitores} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                                <div>
                                    <Button variant="dark">Dark</Button>{' '}
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


        )
    };

}