
import React,{ Component } from 'react'
import './RegistroMiembro.css'
import '../../Componentes/General/Utils.css'

class RegistroMiembro extends Component{
    render() {
        return (
            <div>
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
                                <label for="pais">Pais: </label>
                                <input type="text" name="pais" onChange={this.onChange} tabIndex="6" className="input-standar"/>
                            </div>
                        </div>
                        <span class="button buttonInside">
                                <button type="submit" class="button-indent" tabIndex="3">Afiliar miembro</button>
                        </span>
                </div>      
            </form>
            </div>
        )
    };

}

export default RegistroMiembro;