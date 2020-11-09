import React,{ Component } from 'react'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';
import './AsignacionMiembros.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

class AsignacionMiembros extends Component{
    state = {
        ramasCompletas: [],
        gruposCompletos: [],
        selectedNombre:[],
        selectedZona:[],
        selectedRoma:[],
        selectedGrupo:[],
        selectedMonitor:[{value:"Miembro", label:"Miembro"}, {value:"Monitor", label:"Monitor"}, {value:"Jefe Grupo", label:"Jefe Grupo"}],
        nombre:[],
        zonas:[],
        ramas:[],
        grupo:[],
        monitor:""
    }


    onChange = (e) => this.setState({[e.target.name]:e.target.value});


    componentWillMount() {
        var self = this;
        let arreglo = [];
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
                ramas:arreglo
            })
            this.setState({
                ramasCompletas:respuesta
            })
        })
    }

    obtenerGrupos(){
        var self = this;
        let arreglo =[];
        axios.post("/allGrupos", {}).then(res => {
            const respuesta=res.data;
            const ramaNombre = this.state.selectedRama.value;
            respuesta.forEach(grupo=>{
                if(grupo.nombreRama == ramaNombre){
                    arreglo.push({
                        value:grupo.nombreGrupo,
                        label:grupo.nombreGrupo
                    })
                }
            })   
            this.setState({
                selectedGrupo:arreglo
            })
        })
    }


    onClick = (e) => {
        axios.post("/asignarMiembro",{
            nombre:this.state.nombre,
            zona:this.state.zona,
            rama:this.state.rama,
            grupo:this.state.grupo,
            monitor:this.state.monitor
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
        this.obtenerGrupos();
    }

    handleChangeGrupo = grupo => {
        this.setState(
            { grupo },     
        );
    };

    limpiarRamas(){
        this.state.selectedRama = []
    }

    limpiarGrupos(){
        this.state.selectedGrupo = []
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
                        <div class="form-group" class="spacing-base">
                            <label for="monitor">Seleccione el tipo de persona:</label>
                            <Select components={makeAnimated} name="monitor" value={this.state.monitor} className="basic-multi-select"
                            options={this.state.selectedMonitor} classNamePrefix="select" onChange={this.handleChangeMonitor}/>
                        </div>
                    </div>
                    <button type="button" class="btn btn-dark" onClick={this.onClick} >Asignar</button> 
            </main>
        </div>    
        )
    };
            
}
export default AsignacionMiembros;