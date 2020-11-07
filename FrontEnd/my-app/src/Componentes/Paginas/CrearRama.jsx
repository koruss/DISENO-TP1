import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import "./Estructura.css"
import Header from '../General/Header';

export default class CrearRama extends Component {

    state = {
        selectedZona: [],
        zonas: [],
        nombreRama: ""
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });


    handleChange = selectedZona => {
        this.setState(
            { selectedZona },     
        );
    };

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

    //Funcion para manejar los eventos de un boton
    onClick = (e) => {
        axios.post("/guardarRama",{
            nombreRama:this.state.nombreRama,
            selectedZona:this.state.selectedZona
        }).then(res =>{
            if(!res.data.success){
                alert(res.data.err);
            }
            else{
                alert("Rama guardada correctamente")
            }
        })
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
                                <h1 class="h1">Crear Rama</h1>
                                <div class="spacing-base">
                                    <label> Nombre de la nueva Rama</label>
                                    <input type="text" name="nombreRama" autoComplete="on" onChange={this.onChange} tabIndex="1"></input>
                                </div>
                                <div className="spacing-base">
                                    <label>Zona a la que pertenece</label>
                                    <Select components={makeAnimated} name="selectedZona" value={this.state.selectedZona} 
                                    onChange={this.handleChange} options={this.state.zonas} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-dark" onClick={this.onClick} >Guardar rama</button>
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