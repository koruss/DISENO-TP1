import React,{Component} from 'react';
import Header from '../General/Header';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import './RegistroMiembro.css'; 
import axios from 'axios';

class RegistroMiembro extends Component{
    state = {
        paisOpc:[
            { value: "Costa Rica", label: "Costa Rica" }
        ],
        provinciaOpc:[
            { value: "Cartago", label: "Cartago" },
            { value: "San Jose", label: "San Jose" },
            { value: "Heredia", label: "Heredia" }
        ],
        cantonOpc:[
            { value: "Turrialba", label: "Turrialba" },
            { value: "Juan Vinas", label: "Juan Vinas" }
        ],
        distritoOpc:[
            { value: "Tayutic", label: "Tayutic" },
            { value: "La Suiza", label: "La Suiza" }
        ],
        identificacion: "",
        correo: "",
        nombre: "",
        celular: "",
        apellido1: "",
        apellido2: "",
        pais: [],
        provincia: [],
        canton: [],
        distrito: []
    }
    

    onChange = (e) => this.setState({[e.target.name]:e.target.value});


    //Funcion para manejar los eventos de un boton
    onClick = (e) => {
        axios.post("/guardarMiembro",{
            pais:this.state.pais,
            provincia:this.state.provincia,
            canton:this.state.canton,
            distrito:this.state.distrito,
            identificacion:this.state.identificacion,
            correo:this.state.correo,
            nombre:this.state.nombre,
            celular:this.state.celular,
            apellido1:this.state.apellido1,
            apellido2:this.state.apellido2
        }).then(res =>{
            if(!res.data.success){
                alert(res.data.err);
            }
            else{
                alert("Miembro Guardado correctamente")
            }
        })
    }

    handleChangePais = pais => {
        this.setState(
            { pais },     
        );
    };

    handleChangeProvincia = provincia => {
        this.setState(
            { provincia },     
        );
    };

    handleChangeCanton = canton => {
        this.setState(
            { canton },     
        );
    };

    handleChangeDistrito = distrito => {
        this.setState(
            { distrito },     
        );
    };

    render() {
        return (
            <div>
            <Header></Header>
                <div class="box-container-yellow">
                    <h1>Afiliar nuevo miembro a la organizacion</h1>
                        <div class="label-container">
                            <div className="label-wrapper">
                                <label for="identificacion">Identificacion : </label>
                                <input type="text" name="identificacion" onChange={this.onChange} className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="correo">Correo Electronico: </label>
                                <input type="text" name="correo" onChange={this.onChange} className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="nombre">Nombre: </label>
                                <input type="text" name="nombre" onChange={this.onChange} className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="celular">Celular Personal: </label>
                                <input type="text" name="celular" onChange={this.onChange} className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="apellido1">Apellido1: </label>
                                <input type="text" name="apellido1" onChange={this.onChange} className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="apellido2">Apellido2: </label>
                                <input type="text" name="apellido2" onChange={this.onChange} className="input-standar"/>
                            </div>
                        </div>
                        
                        <div class="label-container">
                            <div className="label-wrapper">
                            <label for="pais">Pais: </label>
                                <div className="label-select" >
                                    <Select components={makeAnimated} name="pais" value={this.state.pais} className="basic-multi-select"
                                    options={this.state.paisOpc} classNamePrefix="select" onChange={this.handleChangePais}/>   
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="provincia">Provincia: </label>
                                <div className="label-select">
                                    <Select components={makeAnimated} name="provincia" onChange={this.handleChangeProvincia}
                                    options={this.state.provinciaOpc} classNamePrefix="select" value={this.state.provincia}/>
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="canton">Canton: </label>
                                <div className="label-select">
                                    <Select components={makeAnimated} name="canton" onChange={this.handleChangeCanton}
                                    options={this.state.cantonOpc} classNamePrefix="select" value={this.state.canton}/>
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="distrito">Distrito: </label>
                                <div className="label-select">
                                    <Select components={makeAnimated} name="distrito"  onChange={this.handleChangeDistrito}
                                    options={this.state.distritoOpc} classNamePrefix="select" value={this.state.distrito}/>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-dark" onClick={this.onClick} >Afiliar miembro</button>
                </div> 
            </div>
        )
    }
};

export default RegistroMiembro;