import React,{ Component } from 'react'
import './RegistroMiembro.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';


class RegistroMiembro extends Component{
    state = {
        options:[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" }
        ]
    }
    

    render() {
        return (
            <div>
            <Header></Header>
            <form onSubmit={this.registroFunc}> 
                <div class="box-container-yellow">
                    <h1>Afiliar nuevo miembro a la organizacion</h1>
                        <div class="label-container">
                            <div className="label-wrapper">
                                <label for="identificacion">Identificacion : </label>
                                <input type="text" name="identificacion" onChange={this.onChange} tabIndex="1" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="correo">Correo Electronico: </label>
                                <input type="text" name="correo" onChange={this.onChange} tabIndex="2" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="nombre">Nombre: </label>
                                <input type="text" name="nombre" onChange={this.onChange} tabIndex="3" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="celular">Celular Personal: </label>
                                <input type="text" name="celular" onChange={this.onChange} tabIndex="4" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="apellido1">Apellido1: </label>
                                <input type="text" name="apellido1" onChange={this.onChange} tabIndex="5" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="apellido2">Apellido2: </label>
                                <input type="text" name="apellido2" onChange={this.onChange} tabIndex="5" className="input-standar"/>
                            </div>
                        </div>
                        
                        <div class="label-container">
                            <div className="label-wrapper">
                            <label for="pais">Pais: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="pais" onChange={this.handleChange} options={this.state.options} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="provincia">Provincia: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="provincia" onChange={this.handleChange} options={this.state.options} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="canton">Canton: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="Canton" onChange={this.handleChange} options={this.state.options} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="distrito">Distrito: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="Canton" onChange={this.handleChange} options={this.state.options} classNamePrefix="select" width="200px"/>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-dark">Afiliar miembro</button>
                </div>      
            </form>
            </div>
        )
    };

}

export default RegistroMiembro;