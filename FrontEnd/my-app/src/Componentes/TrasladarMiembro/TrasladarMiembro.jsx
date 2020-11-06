import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './TrasladarMiembro.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
class TrasladarMiembro extends Component{
    state = {
        gruposOpciones:[
            { value: "grupo1", label: "grupo1" }
        ],
        miembrosOpciones:[
            { value: "miembro1", label: "miembro1" }
        ],
        miembro: "",
        grupo: ""
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
                            <Select components={makeAnimated} name="miembro" onChange={this.handleChange} options={this.state.gruposOpciones} classNamePrefix="select"/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="grupo">Seleccione el grupo al que desea trasladarlo:</label>
                            <Select components={makeAnimated} name="grupo" onChange={this.handleChange} options={this.state.miembrosOpciones} classNamePrefix="select"/>
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