import React,{ Component } from 'react'
import './RegistroMiembro.css'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';


class RegistroMiembro extends Component{
    state = {
        pais:[
            { value: "Costa Rica", label: "Chocolate" }
        ],
        provincia:[
            { value: "Cartago", label: "Cartago" },
            { value: "San Jose", label: "San Jose" },
            { value: "Heredia", label: "Heredia" }
        ],
        canton:[
            { value: "Turrialba", label: "Turrialba" },
            { value: "Juan Vinas", label: "Juan Vinas" }
        ],
        distrito:[
            { value: "Tayutic", label: "Tayutic" },
            { value: "La Suiza", label: "La Suiza" }
        ],
        identificacion: "",
        correo: "",
        nombre: "",
        celular: "",
        apellido1: "",
        apellido2: ""
    }
    

    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    onClick = (e) => {
        console.log("REGISTRO MIEMBRO");
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

    render() {
        return (
            <div>
            <Header></Header>
            <form onSubmit={this.registroFunc}> 
                <div class="box-container-yellow">
                    <h1>Afiliar nuevo miembro a la organizacion</h1>
                        <div class="label-container">
                            <div className="label-wrapper">
                                <label for="identificacion">Identificacion : </label>
                                <input type="text" name="identificacion" onChange={this.onChange} tabIndex="1" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="correo">Correo Electronico: </label>
                                <input type="text" name="correo" onChange={this.onChange} tabIndex="2" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="nombre">Nombre: </label>
                                <input type="text" name="nombre" onChange={this.onChange} tabIndex="3" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="celular">Celular Personal: </label>
                                <input type="text" name="celular" onChange={this.onChange} tabIndex="4" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="apellido1">Apellido1: </label>
                                <input type="text" name="apellido1" onChange={this.onChange} tabIndex="5" className="input-standar"/>
                            </div>
                            <div className="label-wrapper">
                                <label for="apellido2">Apellido2: </label>
                                <input type="text" name="apellido2" onChange={this.onChange} tabIndex="5" className="input-standar"/>
                            </div>
                        </div>
                        
                        <div class="label-container">
                            <div className="label-wrapper">
                            <label for="pais">Pais: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="pais"    options={this.state.pais} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="provincia">Provincia: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="provincia" options={this.state.provincia} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="canton">Canton: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="canton" options={this.state.canton} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            <div className="label-wrapper">
                                <label for="distrito">Distrito: </label>
                                <div className="label-select" id="center-section">
                                    <Select components={makeAnimated} name="distrito" options={this.state.distrito} classNamePrefix="select" width="200px"/>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-dark" onClick={this.onClick}>Afiliar miembro</button>
                </div>      
            </form>
            </div>
        )
    };

}

export default RegistroMiembro;