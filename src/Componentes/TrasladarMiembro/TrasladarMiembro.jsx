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
        nombre:[],
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


        axios.post("/allPersona", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(nombre=>{
                arrPers.push({
                    value:nombre.nombre,
                    label:nombre.nombre,
                    datosPersona:[{ _id:nombre._id,
                        direccion: nombre.direccion,
                        nombre:nombre.nombre,
                        identificacion:nombre.identificacion,
                        apellido1:nombre.apellido1,
                        apellido2:nombre.apellido2,
                        correo:nombre.correo,
                        telefono:nombre.telefono,
                        estado:nombre.estado}]
                })
            })   
            this.setState({
                selectedNombre:arrPers
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
                selectedRama:arreglo
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
                selectedGrupoFrom:arreglo
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
                selectedGrupoTo:arreglo
            })
        })
    }



    onClick = (e) => {
        axios.post("/cambiarMiembroGrup",{
            nombre:this.state.nombre,
            zona:this.state.zona,
            rama:this.state.rama,
            grupoFrom:this.state.grupoFrom,
            grupoTo: this.state.grupoTo
        }).then(res =>{
            if(!res.data.success){
                alert(res.data.err);
            }
            else{
                alert("Miembro Guardado correctamente")
            }
        })
    }

    handleChangeNombre = nombre => {
        this.setState(
            { nombre },     
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

    handleChangeGrupoFrom = grupoFrom => {
        this.setState(
            { grupoFrom },     
        );
    };

    handleChangeGrupoTo = grupoTo => {
        this.setState(
            { grupoTo },     
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
                            <Select components={makeAnimated} name="nombre" value={this.state.nombre} className="basic-multi-select"
                                options={this.state.selectedNombre} classNamePrefix="select" onChange={this.handleChangeNombre} />
                            <div class="form-group" class="spacing-base">
                                <label for="zona">Seleccione la zona a la que pertenece la persona:</label>
                                <Select components={makeAnimated} name="zonaFrom" value={this.state.zonasFrom} className="basic-multi-select"
                                    options={this.state.selectedZona} classNamePrefix="select" onChange={this.handleChangeZonas} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Seleccione la rama a la que pertenece la persona:</label>
                                <Select components={makeAnimated} name="ramaFrom" value={this.state.ramasFrom} className="basic-multi-select"
                                    options={this.state.selectedRama} classNamePrefix="select" onChange={this.handleChangeRamas} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Seleccione el grupo al que pertenece la persona:</label>
                                <Select components={makeAnimated} name="grupoFrom" value={this.state.grupoFrom} className="basic-multi-select"
                                    options={this.state.selectedGrupoFrom} classNamePrefix="select" onChange={this.handleChangeGrupoFrom} />
                            </div>
                            
                            <div class="form-group" class="spacing-base">
                                <label for="grupoTo">Seleccione el grupo al que pertenecerá la persona:</label>
                                <Select components={makeAnimated} name="grupoTo" value={this.state.grupoTo} className="basic-multi-select"
                                    options={this.state.selectedGrupoTo} classNamePrefix="select" onChange={this.handleChangeGrupoTo} />
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