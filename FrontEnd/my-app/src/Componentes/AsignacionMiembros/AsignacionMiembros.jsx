import React,{ Component } from 'react'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';
import './AsignacionMiembros.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

class AsignacionMiembros extends Component{
    state = {
        nombre:'',
        selectedZona: [],
        zonas: [{ value: "norte", label: "norte" }, { value: "sur", label: "Sur" }, { value: "Este", label: "Este" }, { value: "oeste", label: "oeste" }],
        nombreRama: "",
        ramas:[]

    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });


    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    componentDidMount() {
        var self = this;
        axios.post("/allZonas", {}).then(res => {
            console.log(res)
            self.setState({
                zonas: res.data,
                ramas: res.data.ramas
            })

        })
    }

    render() {
        return (
            <div>
            <Header></Header>
            <main className = "container">
                    <div class="spacing-base"></div>
                    <div id="center-section">
                        <h2>Nombre: {this.state.nombre}</h2>
                        <Select components={makeAnimated} name="zona" onChange={this.handleChangeZona} 
                            value={this.state.zona} options={this.state.zonas} classNamePrefix="select"/>
                        <div class="form-group" class="spacing-base">
                            <label for="zona">Seleccione la zona a la que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="zona" onChange={this.handleChangeZona} 
                            value={this.state.zona} options={this.state.zonas} classNamePrefix="select"/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="rama">Seleccione la rama a la que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="rama" onChange={this.onChange} 
                            options={this.state.options} classNamePrefix="select"/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="grupo">Seleccione el grupo al que pertenecerá la persona:</label>
                            <Select components={makeAnimated} name="grupo" onChange={this.onChange} 
                            options={this.state.options} classNamePrefix="select"/>
                        </div>
                    </div>
                    <button type="button" class="btn btn-dark">Asignar</button>
            </main>
        </div>    
        )
    };
            
}
export default AsignacionMiembros;