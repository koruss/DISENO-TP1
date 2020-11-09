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
        selectedNombreFrom:[],
        selectedZonaFrom:[],
        selectedRomaFrom:[],
        selectedGrupoFrom:[],
        selectedZonaTo:[],
        selectedRomaTo:[],
        selectedGrupoTo:[],
        nombre:[],
        zonasFrom:[],
        zonasTo:[],
        ramasFrom:[],
        ramasTo:[],
        grupoFrom:[],
        grupoTo:[]
    }


    onChange = (e) => this.setState({[e.target.name]:e.target.value});


    componentWillMount() {
        var self = this;
        let arreglo = [];
        let arrRama = [];
        let arrGrup = [];
        let arrPers = [];
        let arregloTo = [];
        let arrRamaTo = [];
        let arrGrupTo = [];
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
                selectedZonaFrom:arreglo

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
                selectedRomaFrom:arrRama
                
            })
        })

        axios.post("/allPersona", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
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
                selectedNombreFrom:arrPers
            })
        })

        axios.post("/allGrupos", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(grupo=>{
                arrGrup.push({
                    value:grupo.nombreGrupo,
                    label:grupo.nombreGrupo,
                    identificacion:grupo._id
                })
            })   
            this.setState({
                selectedGrupoFrom:arrGrup
            })
        })

        axios.post("/allZonas", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(zonas=>{
                arregloTo.push({
                    value:zonas.nombreZona,
                    label:zonas.nombreZona
                })
            })   
            this.setState({
                selectedZonaTo:arregloTo

            })
        })

        axios.post("/allRama", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(ramas=>{
                arrRamaTo.push({
                    value:ramas.nombreRama,
                    label:ramas.nombreRama
                })
            })   
            this.setState({
                selectedRomaTo:arrRamaTo
                
            })
        })

        axios.post("/allGrupos", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(grupo=>{
                arrGrupTo.push({
                    value:grupo.nombreGrupo,
                    label:grupo.nombreGrupo,
                    identificacion:grupo._id
                })
            })   
            this.setState({
                selectedGrupoTo:arrGrupTo
            })
        })
    }




    onClick = (e) => {
        axios.post("/trasladarMiembro",{
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

    handleChangeZonas = zonasFrom => {
        this.setState(
            { zonasFrom },     
        );
    };


    handleChangeZonasTo = zonasTo => {
        this.setState(
            { zonasTo },     
        );
    };

    handleChangeRamas = ramasFrom => {
        this.setState(
            { ramasFrom },     
        );
    };

    handleChangeRamasTo = ramasTo => {
        this.setState(
            { ramasTo },     
        );
    };

    handleChangeGrupo = grupoFrom => {
        this.setState(
            { grupoFrom },     
        );
    };

    handleChangeGrupoTo = grupoTo => {
        this.setState(
            { grupoTo },     
        );
    };

    render() {
        return (
            <div>
                <Header></Header>
                <main className="container">
                    <form>
                        <h2>Trasladar miembro de grupo</h2>
                        <div className="label-wrapper">
                            <h5>Nombre de la persona a cambiar de grupo</h5>
                            <Select components={makeAnimated} name="nombre" value={this.state.nombre} className="basic-multi-select"
                                options={this.state.selectedNombreFrom} classNamePrefix="select" onChange={this.handleChangeNombre} />
                            <div class="form-group" class="spacing-base">
                                <label for="zona">Seleccione la zona a la que pertenece la persona:</label>
                                <Select components={makeAnimated} name="zonaFrom" value={this.state.zonasFrom} className="basic-multi-select"
                                    options={this.state.selectedZonaFrom} classNamePrefix="select" onChange={this.handleChangeZonas} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Seleccione la rama a la que pertenece la persona:</label>
                                <Select components={makeAnimated} name="ramaFrom" value={this.state.ramasFrom} className="basic-multi-select"
                                    options={this.state.selectedRomaFrom} classNamePrefix="select" onChange={this.handleChangeRamas} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupo">Seleccione el grupo al que pertenece la persona:</label>
                                <Select components={makeAnimated} name="grupoFrom" value={this.state.grupoFrom} className="basic-multi-select"
                                    options={this.state.selectedGrupoFrom} classNamePrefix="select" onChange={this.handleChangeGrupo} />
                            </div>
                            <button type="button" class="btn btn-dark" onClick={this.onClick}>Cambiar</button>
                        </div>
                        <div className="label-wrapper">
                            <div class="form-group" class="spacing-base">
                                <label for="zona">Seleccione la zona a la que pertenecerá la persona:</label>
                                <Select components={makeAnimated} name="zonaTo" value={this.state.zonasTo} className="basic-multi-select"
                                    options={this.state.selectedZonaTo} classNamePrefix="select" onChange={this.handleChangeZonasTo} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="rama">Seleccione la rama a la que pertenecerá la persona:</label>
                                <Select components={makeAnimated} name="ramaTo" value={this.state.ramasTo} className="basic-multi-select"
                                    options={this.state.selectedRomaTo} classNamePrefix="select" onChange={this.handleChangeRamasTo} />
                            </div>
                            <div class="form-group" class="spacing-base">
                                <label for="grupoTo">Seleccione el grupo al que pertenecerá la persona:</label>
                                <Select components={makeAnimated} name="grupoTo" value={this.state.grupoTo} className="basic-multi-select"
                                    options={this.state.selectedGrupoTo} classNamePrefix="select" onChange={this.handleChangeGrupoTo} />
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        )
    };

}

export default TrasladarMiembro;