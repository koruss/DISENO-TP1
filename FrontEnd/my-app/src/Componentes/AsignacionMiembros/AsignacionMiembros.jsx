import React,{ Component } from 'react'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';
import './AsignacionMiembros.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

class AsignacionMiembros extends Component{
    state = {
        selectedNombre:[],
        selectedZona:[],
        selectedRoma:[],
        selectedGrupo:[],
        nombre:[],
        zonas:[],
        ramas:[],
        grupo:[]
    }

    handleChangeNombre = nombre => {
        this.setState(
            { nombre },     
        );
    };

    handleChangeZonas = zonas => {
        this.setState(
            { zonas },     
        );
    };

    handleChangeRamas = ramas => {
        this.setState(
            { ramas },     
        );
    };

    handleChangeGrupo = grupo => {
        this.setState(
            { grupo },     
        );
    };

    componentWillMount() {
        var self = this;
        let arreglo = [];
        let arrRama = [];
        let arrGrup = [];
        let arrPers = [];
        axios.post("/allZonas", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(zonas=>{
                arreglo.push({
                    value:zonas.nombreZona,
                    label:zonas.nombreZona
                })
            })   
            this.setState({
                selectedZona:arreglo
            })
        })

        axios.post("/allRama", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(ramas=>{
                arrRama.push({
                    value:ramas.nombreRama,
                    label:ramas.nombreRama
                })
            })   
            this.setState({
                selectedRoma:arrRama
            })
        })

        axios.post("/allPersona", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(nombre=>{
                arrPers.push({
                    value:nombre.nombre,
                    label:nombre.nombre
                })
            })   
            this.setState({
                selectedNombre:arrPers
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



    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    onClick = (e) => {
        axios.post("/asignarMiembro",{
            nombre:this.state.nombre,
            zona:this.state.zona,
            rama:this.state.rama,
            grupo:this.state.grupo
        }).then(res =>{
            if(!res.data.success){
                alert(res.data.err);
            }
            else{
                alert("Miembro Guardado correctamente")
            }
        })
    }


    render() {
        return (
            <div>
            <Header></Header>
            <main className = "container">
                    <div class="spacing-base"></div>
                    <div id="center-section">
                    <h2>Asignar miembros a grupos</h2>
                    <div class="spacing-base"></div>
                        <h3>Nombre:</h3>
                            <Select components={makeAnimated} name="nombre" value={this.state.nombre} className="basic-multi-select"
                            options={this.state.selectedNombre} classNamePrefix="select" onChange={this.handleChangeNombre}/> 
                        <div class="form-group" class="spacing-base">
                            <label for="zona">Seleccione la zona a la que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="zona" value={this.state.zonas} className="basic-multi-select"
                            options={this.state.selectedZona} classNamePrefix="select" onChange={this.handleChangeZonas}/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="rama">Seleccione la rama a la que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="rama" value={this.state.ramas} className="basic-multi-select"
                            options={this.state.selectedRoma} classNamePrefix="select" onChange={this.handleChangeRamas}/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="grupo">Seleccione el grupo al que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="grupo" value={this.state.grupo} className="basic-multi-select"
                            options={this.state.selectedGrupo} classNamePrefix="select" onChange={this.handleChangeGrupo}/>
                        </div>
                    </div>
                    <button type="button" class="btn btn-dark">Asignar</button>
            </main>
        </div>    
        )
    };
            
}
export default AsignacionMiembros;