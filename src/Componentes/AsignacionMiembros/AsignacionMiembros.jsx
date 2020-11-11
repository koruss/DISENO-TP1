import React,{ Component } from 'react';
import '../../Componentes/General/Utils.css';
import Header from '../General/Header';
import './AsignacionMiembros.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

class AsignacionMiembros extends Component{
    
    state = {
        ramasCompletas: [],
        gruposCompletos: [],
        selectedNombre:[],
        selectedZona:[],
        selectedRama:[],
        selectedGrupo:[],
        tipoMonitores:[{value:"Miembro", label:"Miembro"}, {value:"Monitor", label:"Monitor"}, {value:"Jefe Grupo", label:"Jefe Grupo"}],
        nombres:[],
        zonas:[],
        ramas:[],
        grupos:[],
        selectedMonitor:[]
    }


    onChange = (e) => this.setState({[e.target.name]:e.target.value});


    componentWillMount() {
        var self = this;
        let arreglo = [];
        let arrGrup = [];
        axios.post("/allZonas", {}).then(res => {
            const respuesta = res.data;
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

        this.obtenerPersonas()
        


    }

    obtenerPersonas(){
        let arrPers = [];
        axios.post("/allPersona", {}).then(res => {
            const respuesta = res.data;
            console.log(respuesta)
            respuesta.forEach(nombre=>{
                if(nombre.estado==false){
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
                            estado:nombre.estado }]
                    })
                }
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
                ramas:arreglo
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
                        label:grupo.nombreGrupo,
                        identificacion:grupo._id
                    })
                }
            })   
            this.setState({
                grupos:arreglo
            })
        })
    }


    onClick = (e) => {
        if(this.state.selectedNombre.length != 0 && this.state.selectedZona.length != 0 &&
           this.state.selectedRama.length != 0 && this.state.selectedGrupo.length != 0 &&
           this.state.selectedMonitor.length != 0){
            axios.post("/asignarMiembro",{
                nombre:this.state.selectedNombre,
                zona:this.state.selectedZona,
                rama:this.state.selectedRama,
                grupo:this.state.selectedGrupo,
                monitor:this.state.selectedMonitor
            }).then(res =>{
                if(!res.data.success){
                    alert(res.data.err);
                }
                else{
                    alert("Miembro asignado correctamente")
                    this.setState({
                        selectedMonitor:[],
                        selectedGrupo:[],
                        selectedRama:[],
                        selectedZona:[],
                        selectedNombre:[],
                        nombres:[]
                    })
                    
                    this.obtenerPersonas()
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
        this.obtenerGrupos();
    }

    handleChangeGrupo = selectedGrupo => {
        this.setState(
            { selectedGrupo },     
        );
    };

    handleChangeMonitor = selectedMonitor => {
        this.setState(
            { selectedMonitor },     
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
                            <Select components={makeAnimated} name="nombre" value={this.state.selectedNombre} className="basic-multi-select"
                            options={this.state.nombres} classNamePrefix="select" onChange={this.handleChangeNombre}/> 
                        <div class="form-group" class="spacing-base">
                            <label for="zona">Seleccione la zona a la que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="zona" value={this.state.selectedZona} className="basic-multi-select"
                            options={this.state.zonas} classNamePrefix="select" onChange={this.handleChangeZonas}/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="rama">Seleccione la rama a la que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="rama" value={this.state.selectedRama} className="basic-multi-select"
                            options={this.state.ramas} classNamePrefix="select" onChange={this.handleChangeRamas}/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="grupo">Seleccione el grupo al que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="grupo" value={this.state.selectedGrupo} className="basic-multi-select"
                            options={this.state.grupos} classNamePrefix="select" onChange={this.handleChangeGrupo}/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="monitor">Seleccione el tipo de persona:</label>
                            <Select components={makeAnimated} name="monitor" value={this.state.selectedMonitor} className="basic-multi-select"
                            options={this.state.tipoMonitores} classNamePrefix="select" onChange={this.handleChangeMonitor}/>
                        </div>
                    </div>
                    <button type="button" class="btn btn-dark" onClick={this.onClick} >Asignar</button> 
            </main>
        </div>    
        )
    };
            
}
export default AsignacionMiembros;