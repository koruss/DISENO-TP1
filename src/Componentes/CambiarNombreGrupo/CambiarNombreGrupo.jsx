import React,{ Component } from 'react'
import './CambiarNombreGrupo.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import axios from 'axios';

class CambiarNombreGrupo extends Component{

    constructor(props){
        super(props);
        this.nombreRef=React.createRef();
    }

    state = {
        selectedZona:[],
        selectedRama:[],
        selectedGrupo:[],
        nombre:"",
        zonas:[],
        ramas:[],
        grupos:[]
    }

    
    onChange = (e) => this.setState({[e.target.name]:e.target.value});


    componentWillMount() {
        var self = this;
        let arreglo = [];
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

    //Funcion para manejar los eventos de un boton
    onClick = (e) => {
        if(this.state.nombre != "" && this.state.selectedRama.length != 0 &&
        this.state.selectedZona.length != 0 && this.state.selectedGrupo.length != 0){
            axios.post("/cambiarNombreGrupo",{
                zona:this.state.selectedZona,
                rama:this.state.selectedRama,
                grupo:this.state.selectedGrupo,
                nombre:this.state.nombre
            }).then(res =>{
                if(!res.data.success){
                    alert(res.data.err);
                }
                else{
                    alert("Nombre de grupo modificado correctamente")
                    this.nombreRef.current.value="";
                    this.setState({
                        selectedRama:[]
                    })
                    this.setState({
                        selectedZona:[]
                    })
                    this.setState({
                        selectedGrupo:[]
                    })
                }
            })
        }
        else{
            alert("Ingrese todos los datos")
        }
    }

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
                <div id="center-section">
                    <h2>Cambiar nombre grupo</h2>
                    <div class="form-group">
                        <label for="zona">Seleccione la zona a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="zona" onChange={this.handleChangeZonas} 
                        value={this.state.selectedZona} options={this.state.zonas} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="rama" onChange={this.handleChangeRamas} 
                        value={this.state.selectedRama} options={this.state.ramas} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Seleccione el grupo al que desea cambiarle el nombre:</label>
                        <Select components={makeAnimated} name="grupo" onChange={this.handleChangeGrupo} 
                        value={this.state.selectedGrupo} options={this.state.grupos} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="nombreNuevo">Nuevo nombre:</label>
                        <input ref={this.nombreRef} type="text" name="nombre" onChange={this.onChange}  className="input-standar"/>
                    </div>
                </div>
                
                <button type="button" class="btn btn-dark"  onClick={this.onClick}>Cambiar</button>
        </main>
    </div>    
    )
};

}

export default CambiarNombreGrupo;