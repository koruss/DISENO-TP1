import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import "./Estructura.css"
export default class CrearRama extends Component {

    state = {
        selectedZona: [],
        zonas: [{ value: "norte", label: "norte" }, { value: "sur", label: "Sur" }, { value: "Este", label: "Este" }, { value: "oeste", label: "oeste" }],
        nombreRama: ""

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
                                    <Select components={makeAnimated} name="ramas" value={this.state.selectedRama} onChange={this.handleChange} options={this.state.zonas} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div>
                                <Button variant="dark">Dark</Button>{' '}
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