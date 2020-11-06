import React, { Component } from 'react'
import './GrupoRolesXMiembro.css'
import Card from './CardGrupoRoles'

export default class GrupoRolesXMiembro extends Component {
    state = {
        resultMembers: [{ _id: 1, zona: "Alajuela", rama: "Bomberos Junior", grupo: "Número 2", rol: "Jefe" },
        { _id: 1, zona: "Alajuela", rama: "Bomberos Junior", grupo: "Número 2", rol: "Jefe" },
        { _id: 1, zona: "Alajuela", rama: "Bomberos Junior", grupo: "Número 2", rol: "Jefe" },
        { _id: 1, zona: "Alajuela", rama: "Bomberos Junior", grupo: "Número 2", rol: "Jefe" },
        { _id: 1, zona: "Alajuela", rama: "Bomberos Junior", grupo: "Número 2", rol: "Jefe" },
        { _id: 1, zona: "Alajuela", rama: "Bomberos Junior", grupo: "Número 2", rol: "Jefe" }],
    }

    onChange = (e) => this.setState({
        [e.target.name]: //Connects state attribute with the input in the html
            e.target.value
    });

    render() {
        return (
            <div>
                <form >
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <style dangerouslySetInnerHTML={{ __html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box;}\n\ninput[type=text], select, textarea {\n width: 100%;\n padding: 12px;\n border: 1px solid #ccc;\n border-radius: 4px;\n box-sizing: border-box;\n margin-top: 6px;\n margin-bottom: 16px;\n resize: vertical;\n}\n\ninput[type=submit] {\n background-color: #4CAF50;\n color: white;\n padding: 12px 20px;\n border: none;\n border-radius: 4px;\n cursor: pointer;\n}\n\ninput[type=submit]:hover {\n background-color: #45a049;\n}\n\n.container {\n border-radius: 5px;\n background-color: #f2f2f2;\n padding: 20px;\n}\n" }} />
                    <h3>GRUPOS Y ROLES POR MIEMBRO</h3>
                    <div className="container">
                        <form action="/action_page.php">
                            <label htmlFor="fname">ingrese nombre aqui</label>
                            <div id="center-section">
                                <div className="spacing-base">
                                    <div className="box-container">
                                        <div className="center-section">
                                            <label htmlFor="fname">ZONA RAMA GRUPO ROL</label>
                                            {this.state.resultMembers.map((p, index) =>
                                                (<Card key={p._id} index={index} miembroData={p} />))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </form>
            </div>
        );
    }
}