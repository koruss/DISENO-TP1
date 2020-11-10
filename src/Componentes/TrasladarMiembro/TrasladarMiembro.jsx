import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './TrasladarMiembro.css'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';

class TrasladarMiembro extends Component {
    
    state = {
        selectedNombre:[],
        selectedZona:[],
        selectedRama:[],
        selectedGrupoFrom:[],
        selectedGrupoTo:[],
        nombres:[],
        zonasFrom:[],
        ramasFrom:[],
        grupoFrom:[],
        grupoTo:[]
    }


    onChange = (e) => this.setState({[e.target.name]:e.target.value});


    componentWillMount() {
        var self = this;
        let arreglo = [];
        let arrPers = [];
        axios.post("/allZonas", {}).then(res => {
            const respuesta = res.data;
            respuesta.forEach(zonas=>{
                arreglo.push({
                    value:zonas.nombreZona,
                    label:zonas.nombreZona
                })
            })   
            this.setState({
                zonasFrom:arreglo
            })
        })


        axios.post("/allPersona", {}).then(res => {
            const respuesta = res.data;
            respuesta.forEach(nombre=>{
                arrPers.push({
                    value:nombre.nombre,
                    label:nombre.nombre,
                    datosPersona:{ _id:nombre._id,
                        direccion: nombre.direccion,
                        nombre:nombre.nombre,
                        identificacion:nombre.identificacion,
                        apellido1:nombre.apellido1,
                        apellido2:nombre.apellido2,
                        correo:nombre.correo,
                        telefono:nombre.telefono,
                        estado:nombre.estado}
                })
            })   
            this.setState({
                nombres:arrPers
            })
        })


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
                ramasFrom:arreglo
            })
        })
    }

    obtenerGruposFrom(){
        var self = this;
        let arreglo =[];
        axios.post("/allGrupos", {}).then(res => {
            const respuesta=res.data;
            const ramaNombre = this.state.selectedRama.value;
            respuesta.forEach(grupo=>{
                if(grupo.nombreRama == ramaNombre){
                    arreglo.push({
                        value:grupo.nombreGrupo,
                        label:grupo.nombreGrupo,
                        identificacion:grupo._id
                    })
                }
            })   
            this.setState({
                grupoFrom:arreglo
            })
        })
    }

    obtenerGruposTo(){
        var self = this;
        let arreglo =[];
        axios.post("/allGrupos", {}).then(res => {
            const respuesta=res.data;
            const ramaNombre = this.state.selectedRama.value;
            respuesta.forEach(grupo=>{
                if(grupo.nombreRama == ramaNombre){
                    arreglo.push({
                        value:grupo.nombreGrupo,
                        label:grupo.nombreGrupo,
                        identificacion:grupo._id
                    })
                }
            })   
            this.setState({
                grupoTo:arreglo
            })
        })
    }



    onClick = (e) => {
        if(this.state.selectedNombre.length != 0 && this.state.selectedZona.length != 0 &&
            this.state.selectedRama.length != 0 && this.state.selectedGrupoFrom.length != 0 &&
            this.state.selectedGrupoTo.length != 0){
            axios.post("/cambiarMiembroGrup",{
                nombre:this.state.selectedNombre,
                zona:this.state.selectedZona,
                rama:this.state.selectedRama,
                grupoFrom:this.state.selectedGrupoFrom,
                grupoTo: this.state.selectedGrupoTo
            }).then(res =>{
                if(!res.data.success){
                    alert(res.data.err);
                }
                else{
                    alert("Miembro Guardado correctamente")
                    this.setState({
                        selectedNombre:[],
                        selectedZona:[],
                        selectedRama:[],
                        selectedGrupoFrom:[],
                        selectedGrupoTo:[]
                    })
                }
            })
        }
        else{
            alert("Ingrese todos los datos")
        }
    }

    handleChangeNombre = selectedNombre => {
        this.setState(
            { selectedNombre },     
        );
    };

    handleChangeZonas = selectedZona => {
        this.setState(
            { selectedZona }
        );
        this.limpiarRamas();
        this.obtenerRamas();
    }

    handleChangeRamas = selectedRama => {
        this.setState(
            {selectedRama}
        );
        this.limpiarGrupos();
        this.obtenerGruposFrom();
        this.obtenerGruposTo();
    }

    handleChangeGrupoFrom = selectedGrupoFrom => {
        this.setState(
            { selectedGrupoFrom },     
        );
    };

    handleChangeGrupoTo = selectedGrupoTo => {
        this.setState(
            { selectedGrupoTo },     
        );
    };

    limpiarRamas(){
        this.state.selectedRamaFrom = []
    }

    limpiarGrupos(){
        this.state.selectedGrupoFrom = []
        this.state.selectedGrupoTo = []
    }

    render() {
        return (
            <div>
                <Header></Header>
                <main className="container">
                    <form>
                        <h2>Trasladar miembro de grupo</h2>
                        <div id="center-section">
                            <h5>Nombre de la persona a cambiar de grupo</h5>
                            <Select components={makeAnimated} name="nombre" value={this.state.selectedNombre} className="basic-multi-select"
                                options={this.state.nombres} classNamePrefix="select" onChange={this.handleChangeNombre} />
                            <div class="form-group" class="spacing-base">
                                <label for="zona">Seleccione la zona a la que pertenece la persona:</label>
                                <Select components={makeAnimated} name="zonaFrom" value={this.state.selectedZona} className="basic-multi-select"
                                    options={this.state.zonasFrom} classNamePrefix="select" onChange={this.handleChangeZonas} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Seleccione la rama a la que pertenece la persona:</label>
                                <Select components={makeAnimated} name="ramaFrom" value={this.state.selectedRama} className="basic-multi-select"
                                    options={this.state.ramasFrom} classNamePrefix="select" onChange={this.handleChangeRamas} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Seleccione el grupo al que pertenece la persona:</label>
                                <Select components={makeAnimated} name="grupoFrom" value={this.state.selectedGrupoFrom} className="basic-multi-select"
                                    options={this.state.grupoFrom} classNamePrefix="select" onChange={this.handleChangeGrupoFrom} />
                            </div>
                            
                            <div class="form-group" class="spacing-base">
                                <label for="grupoTo">Seleccione el grupo al que pertenecerá la persona:</label>
                                <Select components={makeAnimated} name="grupoTo" value={this.state.selectedGrupoTo} className="basic-multi-select"
                                    options={this.state.grupoTo} classNamePrefix="select" onChange={this.handleChangeGrupoTo} />
                            </div>
                            <button type="button" class="btn btn-dark" onClick={this.onClick}>Cambiar</button>
                        </div>
                    </form>
                </main>
            </div>
        )
    };

}

export default TrasladarMiembro;