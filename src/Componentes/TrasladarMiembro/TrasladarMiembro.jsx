import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './TrasladarMiembro.css'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';

class TrasladarMiembro extends Component{
    state = {
        gruposOpciones:[],
        miembrosOpciones:[],
        miembro: [],
        grupo: []
    }

    handleChangeNombre = nombre => {
        this.setState(
            { nombre },     
        );
    };

    handleChangeGrupo = grupo => {
        this.setState(
            { grupo },     
        );
    };

    componentWillMount() {
        var self = this;
        let arrGrup = [];
        let arrPers = [];

        axios.post("/allPersona", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(nombre=>{
                arrPers.push({
                    value:nombre.nombre,
                    label:nombre.nombre
                })
            })   
            this.setState({
                miembrosOpciones:arrPers
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
                gruposOpciones:arrGrup
            })
        })
    }


    onClick = (e) => {
        console.log("CAMBIO GRUPO");
        axios.post("/cambiarMiembroGrup",{
            miembro:this.state.miembro,
            grupo:this.state.grupo
        }).then(res =>{
            if(!res.data.success){
                alert(res.data.err);
            }
            else{
                alert("grupo de miembro modificado correctamente")
            }
        })
    }

    render() {
        return (
            <div>
            <Header></Header>
            <main className = "container">
                <form>
                    <div id="center-section">
                        <h2>Trasladar miembro de grupo</h2>
                        <p></p>
                        <div class="form-group" class="spacing-base">
                            <label for="miembro">Seleccione el miembro que desea trasladar de grupo:</label>
                            <Select components={makeAnimated} name="nombre" value={this.state.miembro} className="basic-multi-select"
                            options={this.state.miembrosOpciones} classNamePrefix="select" onChange={this.handleChangeNombre}/> 
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="grupo">Seleccione el grupo al que desea trasladarlo:</label>
                            <Select components={makeAnimated} name="grupo" value={this.state.grupo} className="basic-multi-select"
                            options={this.state.gruposOpciones} classNamePrefix="select" onChange={this.handleChangeGrupo}/> 
                        </div>
                        <button type="button" class="btn btn-dark" onClick={this.onClick}>Cambiar</button>
                    </div>
                </form>
            </main>
        </div>
        )
    };

}

export default TrasladarMiembro;