import React,{ Component } from 'react'
import './ConsultarCompGrupo.css'
import '../../Componentes/General/Utils.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Header from '../General/Header';
import axios from 'axios';

class ConsultarComposicionGrupo extends Component{
state = {
    zona:[
        { value: "chocolate", label: "Chocolate" }
    ],
    rama:[
        { value: "chocolate", label: "Chocolate" }
    ],
    grupo:[
        { value: "chocolate", label: "Chocolate" }
    ]
}

onChange = (e) => this.setState({[e.target.name]:
    e.target.value}); 

    onClick = (e) => {
        console.log("REGISTRO MIEMBRO");
        axios.post("/guardarMiembro",{
            zona:this.state.zona,
            rama:this.state.rama,
            grupo:this.state.grupo
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
        <main className = "container">
                <div id="center-section">
                    <h2>Consultar Composicion de Grupo</h2>
                    <div class="form-group">
                        <label for="zona">Seleccione la zona a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="zona" onChange={this.onChange} options={this.state.zona} classNamePrefix="select"/>
                    </div>
                    <div class="form-group" class="spacing-base">
                        <label for="rama">Seleccione la rama a la que pertenece el grupo:</label>
                        <Select components={makeAnimated} name="rama" onChange={this.onChange} options={this.state.rama} classNamePrefix="select"/>
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