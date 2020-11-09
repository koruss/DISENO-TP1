import React,{ Component } from 'react'
import './ConsultarCompGrupo.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import axios from 'axios';

class ConsultarComposicionGrupo extends Component{
    state = {
        selectedZona:[],
        selectedRoma:[],
        selectedGrupo:[],
        zonas:[],
        ramas:[],
        grupo:[],
        ramasCompletas: []

    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    handleChangeZona = zona => {
        this.setState(
            { zona },     
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

    handleChangeRama = rama => {
        this.setState(
            { rama },     
        );
        this.limpiarGrupo();
        this.obtenerGrupos(selectedRama);
    };

    limpiarRamas(){
        this.state.selectedGrupo = []
    }

    obtenerGrupos(selectedRama){
        /*const ramasCrudo =this.state.ramasCompletas;
        let arreglo =[];
        ramasCrudo.forEach(rama=>{
            if(rama.nombreRama == selectedRama.value){
                var grupos = rama.jefesGrupo;
                miembros.forEach(miembro=>{
                    arreglo.push({
                       value:miembro.id,
                       label:miembro.nombre + miembro.apellido
                    })
                })
            }
        }) 
        this.setState({
            monitores:arreglo
        })*/
    }

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
                selectedZona:arreglo
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
                selectedRama:arrRama
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
                selectedGrupo:arrGrup
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
                        value={this.state.zona} options={this.state.selectedZona} classNamePrefix="select"/>
                   </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="rama" onChange={this.handleChangeRama} 
                        value={this.state.rama} options={this.state.selectedRama} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Seleccione el grupo:</label>
                        <Select components={makeAnimated} name="grupo" onChange={this.handleChangeGrupo} 
                        value={this.state.grupo} options={this.state.selectedGrupo} classNamePrefix="select"/>
                    </div>
                </div>
                <div id="center-section">
                    <button type="button" class="btn btn-dark">Consultar</button>
                </div>
        </main>
    </div>    
    )
};

}

export default ConsultarComposicionGrupo;