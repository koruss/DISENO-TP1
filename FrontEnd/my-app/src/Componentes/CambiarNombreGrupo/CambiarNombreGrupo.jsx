import React,{ Component } from 'react'
import './CambiarNombreGrupo.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import axios from 'axios';

class CambiarNombreGrupo extends Component{
    state = {
        zonas:[],
        ramas:[],
        grupos:[],
        nombreAnterior : 'NombreAnteriorEjemplo',
        zona:[],
        rama:[],
        grupo:[]
    }

    onChange = (e) => this.setState({[e.target.name]:
        e.target.value}); 

    _handleChangeNombreAnterior(val) {
        return val;
    }

    handleChangeZona = zona => {
        this.setState(
            { zona },     
        );
    };

    handleChangeRama = rama => {
        this.setState(
            { rama },     
        );
    };

    handleChangeGrupo = grupo => {
        this.setState(
            { grupo },     
        );
    };

    componentWillMount() {
        var self = this;
        let arreglo =[];
        let arrRama = [];
        let arrGrup = [];
        axios.post("/allZonas", {}).then(res => {
            const respuesta = res.data;
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

        axios.post("/allRama", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(rama=>{
                arrRama.push({
                    value:rama.nombreRama,
                    label:rama.nombreRama
                })
            })   
            this.setState({
                ramas:arrRama
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
                ramas:arrGrup
            })
        })
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
                        <Select components={makeAnimated} name="zona" onChange={this.handleChangeZona} 
                        value={this.state.zona} options={this.state.zonas} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="rama" onChange={this.handleChangeRama} 
                        value={this.state.rama} options={this.state.ramas} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Seleccione el grupo al que desea cambiarle el nombre:</label>
                        <Select components={makeAnimated} name="grupo" onChange={this.handleChangeGrupo} 
                        value={this.state.grupo} options={this.state.grupos} classNamePrefix="select"/>
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