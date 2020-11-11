import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import "./Estructura.css"
import Header from '../General/Header.jsx';



class CrearZona extends Component {

    constructor(props){
        super(props);
        this.zonaRef=React.createRef();
    }

    state = {
        nombreZona: ""

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onClick = (e) => {
        if(this.state.nombreZona != ""){
            console.log("ENTRE AL evento");
            axios.post("/guardarZona", {
                nombreZona: this.state.nombreZona
            }).then(res => {
                if (!res.data.success) {
                    alert(res.data.error);
                }
                else {
                    alert("Zona Guardada correctamente")
                    this.zonaRef.current.value="";
                }
            })
        }
        else{
            alert("Ingrese todo los datos")
        }
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
                                        <input ref={this.zonaRef} type="text" name="nombreZona" autoComplete="on" onChange={this.onChange} tabIndex="1"></input>
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