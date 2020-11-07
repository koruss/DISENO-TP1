import React,{ Component } from 'react'
import './ConsultarCompGrupo.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import axios from 'axios';

class ConsultarComposicionGrupo extends Component{
    state = {
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
                <div id="center-section">
                    <h2>Consultar Composicion de Grupo</h2>
                    <div class="form-group">
                        <label for="zona">Seleccione la zona a la que pertenece el grupo:</label>
                        {/* <Select components={makeAnimated} name="zona" onChange={this.onChange} options={this.state.zona} classNamePrefix="select"/> */}
                        <Select components={makeAnimated} name="zona" value={this.state.selectedZona} onChange={this.handleChange} options={this.state.zonas} className="basic-multi-select" classNamePrefix="select" />
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        {/* <Select components={makeAnimated} name="rama" onChange={this.onChange} options={this.state.rama} classNamePrefix="select"/> */}
                        <Select components={makeAnimated} name="rama" value={this.state.ramas} onChange={this.handleChange} options={this.state.ramas} className="basic-multi-select" classNamePrefix="select" />
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="grupo">Seleccione el grupo:</label>
                        <Select components={makeAnimated} name="grupo" onChange={this.onChange} options={this.state.grupo} classNamePrefix="select"/>
                    </div>
                </div>
                <div id="center-section">
                    <button type="button" class="btn btn-dark">Consultar</button>
                </div>
        </main>
    </div>    
    )
};

}

export default ConsultarComposicionGrupo;