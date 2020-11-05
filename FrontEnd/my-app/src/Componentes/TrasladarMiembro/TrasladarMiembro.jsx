import React,{ Component } from 'react'
import './TrasladarMiembro.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';

class TrasladarMiembro extends Component{
    state = {
        options:[
            { value: "chocolate", label: "Chocolate" }
        ]
    }

    render() {
        return (
            <div>
            <Header></Header>
            <main className = "container">
                <form>
                    <div id="center-section">
                        <h2>Trasladar miembro de grupo</h2>
                        <p></p>
                        <div class="form-group" class="spacing-base">
                            <label for="miembro">Seleccione el miembro que desea trasladar de grupo:</label>
                            <Select components={makeAnimated} name="miembro" onChange={this.handleChange} options={this.state.options} classNamePrefix="select"/>
                        </div>
                        <div class="form-group" class="spacing-base">
                            <label for="grupo">Seleccione el grupo al que desea trasladarlo:</label>
                            <Select components={makeAnimated} name="grupo" onChange={this.handleChange} options={this.state.options} classNamePrefix="select"/>
                        </div>
                        <button type="button" class="btn btn-dark">Cambiar</button>
                    </div>
                </form>
            </main>
        </div>
        )
    };

}

export default TrasladarMiembro;