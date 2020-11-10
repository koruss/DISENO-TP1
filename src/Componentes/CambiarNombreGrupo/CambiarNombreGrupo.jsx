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
        nombre:[],
        zonas:[],
        ramas:[],
        grupo:[]
    }

    
    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    _handleChangeNombreAnterior(val) {
        return val;
    }



    componentWillMount() {
        var self = this;
        let arreglo = [];
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
                selectedGrupo:arreglo
            })
        })
    }

    //Funcion para manejar los eventos de un boton
    onClick = (e) => {
        if(this.state.nombre != "" && this.state.selectedRama.length != 0 &&
        this.state.selectedZona.length != 0 && this.state.selectedGrupo.length != 0){
            axios.post("/cambiarNombreGrupo",{
                zona:this.state.zona,
                rama:this.state.rama,
                grupo:this.state.grupo,
                nombre:this.state.nombreNuevo
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
                <div id="center-section">
                    <h2>Cambiar nombre grupo</h2>
                    <div class="form-group">
                        <label for="zona">Seleccione la zona a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="zona" onChange={this.handleChangeZonas} 
                        value={this.state.zonas} options={this.state.selectedZona} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="rama" onChange={this.handleChangeRamas} 
                        value={this.state.ramas} options={this.state.selectedRama} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Seleccione el grupo al que desea cambiarle el nombre:</label>
                        <Select components={makeAnimated} name="grupo" onChange={this.handleChangeGrupo} 
                        value={this.state.grupos} options={this.state.selectedGrupo} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="nombreNuevo">Nuevo nombre:</label>
                        <input ref={this.nombreRef} type="text" name="nombreNuevo" onChange={this.onChange}  className="input-standar"/>
                    </div>
                </div>
                
                <button type="button" class="btn btn-dark"  onClick={this.onClick}>Cambiar</button>
        </main>
    </div>    
    )
};

}

export default CambiarNombreGrupo;