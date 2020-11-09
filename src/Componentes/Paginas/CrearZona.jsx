import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import "./Estructura.css"
import Header from '../General/Header';



class CrearZona extends Component {

    state = {
        nombreZona: ""

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onClick = (e) => {
        // e.preventDefault();
        console.log("ENTRE AL evento");
        axios.post("/guardarZona", {
            nombreZona: this.state.nombreZona
        }).then(res => {
            if (!res.data.success) {
                alert(res.data.err);
            }
            else {
                alert("Zona Guardada correctamente")
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
                                    <h1 class="h1">Crear Zona</h1>
                                    <div>
                                        <label> Nombre de la nueva zona</label>
                                        <input type="text" name="nombreZona" autoComplete="on" onChange={this.onChange} tabIndex="1"></input>
                                    </div>
                                </div>
                                <div>
                                    <Button variant="dark" onClick={this.onClick}>Crear zona</Button>
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

export default CrearZona;