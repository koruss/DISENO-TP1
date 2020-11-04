import React, { Component } from 'react'
import "./Estructura.css"
export default class CrearZona extends Component {

    state = {

    }

    render() {

        return (
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