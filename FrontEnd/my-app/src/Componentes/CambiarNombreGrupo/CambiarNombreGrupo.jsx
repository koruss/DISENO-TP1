import React,{ Component } from 'react'
import './CambiarNombreGrupo.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';

class CambiarNombreGrupo extends Component{
    state = {
        options:[
            { value: "chocolate", label: "Chocolate" }
        ],
        nombreAnterior : 'NombreAnteriorEjemplo',
        zona: ''
    }

    onChange = (e) => this.setState({[e.target.name]:
        e.target.value}); 

    _handleChangeNombreAnterior(val) {
        return val;
    }

render() {
    return (
        <div>
        <Header></Header>
        <main className = "container">
                <div id="center-section">
                    <h2>Cambiar nombre grupo</h2>
                    <div class="form-group">
                        <label for="zona">Seleccione la zona a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="zona" onChange={this.onChange} options={this.state.options} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="rama" onChange={this.onChange} options={this.state.options} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Seleccione el grupo al que desea cambiarle el nombre:</label>
                        <Select components={makeAnimated} name="grupo" onChange={this.onChange} options={this.state.options} classNamePrefix="select"/>
                    </div>
                </div>
                <div className="label-wrapper">
                    <label for="nombreAnterior">Nombre anterior:</label>
                    <input type="text" name="nombreAnterior" onChange={()=>{this._handleChangeNombreAnterior(this.state.nombreAnterior);}} 
                                defaultValue={this.state.nombreAnterior}  readOnly = {true}/>
                </div>
                <div className="label-wrapper">
                    <label for="nombreNuevo">Nuevo nombre:</label>
                    <input type="text" name="nombreNuevo" onChange={this.onChange} tabIndex="1" className="input-standar"/>
                </div>
                <button type="button" class="btn btn-dark">Cambiar</button>
        </main>
    </div>    
    )
};

}

export default CambiarNombreGrupo;