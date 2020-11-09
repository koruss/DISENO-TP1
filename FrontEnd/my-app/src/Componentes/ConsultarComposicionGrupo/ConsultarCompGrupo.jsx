import React,{ Component } from 'react'
import './ConsultarCompGrupo.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Nav,NavDropdown} from 'react-bootstrap';

class ConsultarComposicionGrupo extends Component{
    state = {
        selectedZona:[],
        selectedRama:[],
        selectedGrupo:[],
        zonas:[],
        ramas:[],
        grupos:[],
        ramasCompletas: []

    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    handleChangeZona = selectedZona => {
        this.setState(
            { selectedZona },     
        );
        this.limpiarRamas();
        this.obtenerRamas();
    };

    limpiarRamas(){
        this.state.selectedRama = []
    }

    obtenerRamas(){
        var self = this;
        let arreglo =[];
        axios.post("/allRama", {}).then(res => {
            const respuesta=res.data;
            const zonaNombre = this.state.selectedZona.value;
            respuesta.forEach(rama=>{
                if(rama.zona == zonaNombre){
                    arreglo.push({
                        value:rama.nombreRama,
                        label:rama.nombreRama
                    })
                }
            })   
            this.setState({
                ramas:arreglo
            })
            this.setState({
                ramasCompletas:respuesta
            })
        })
    }

    handleChangeRama = selectedRama => {
        this.setState(
            { selectedRama },     
        );
        this.limpiarGrupo();
        this.obtenerGrupos(selectedRama);
    };

    limpiarGrupo(){
        this.state.selectedGrupo = []
    }


    obtenerGrupos(selectedRama){
        const ramasCrudo =this.state.ramasCompletas;
        let arreglo =[];
        ramasCrudo.forEach(rama=>{
            if(rama.nombreRama == selectedRama.value){
                var grupos = rama.grupos;
                grupos.forEach(grupo=>{
                    arreglo.push({
                       value:grupo.nombre,
                       label:grupo.nombre
                    })
                })
            }
        }) 
        this.setState({
            grupos:arreglo
        })
    }

    handleChangeGrupo = selectedGrupo => {
        this.setState(
            { selectedGrupo },     
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
    }

    

render() {
    return (
        <div>
        <Header></Header>
        <main className = "container">
                <div id="center-section">
                    <h2>Consultar Composicion de Grupo</h2>
                    <div class="form-group">
                        <label for="zona">Seleccione la zona a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="zona" onChange={this.handleChangeZona} 
                        value={this.state.selectedZona} options={this.state.zonas} classNamePrefix="select"/>
                   </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="rama" onChange={this.handleChangeRama} 
                        value={this.state.selectedRama} options={this.state.ramas} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Seleccione el grupo:</label>
                        <Select components={makeAnimated} name="grupo" onChange={this.handleChangeGrupo} 
                        value={this.state.selectedGrupo} options={this.state.grupos} classNamePrefix="select"/>
                    </div>
                </div>
                <button>
                    <Link to = {{ pathname:'/consultarGrupoResult', data:{zona:this.state.selectedZona.value,
                    rama:this.state.selectedRama.value,grupo:this.state.selectedGrupo.value}}}>Consultar</Link>
                </button>
        </main>
    </div>    
    )
};

}

export default ConsultarComposicionGrupo;