import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './CardGrupoRoles.css'

export default class CardGrupoRoles extends Component {

    state = {
        rol: "",
        grupo: "",
        rama: ""
    }

    render() {
        this.state.rol = this.props.miembroData.rol;
        this.state.grupo = this.props.miembroData.grupo;  
        this.state.rama = this.props.miembroData.rama;

        return (
            <div className="card1-container" >
                <div id="center-section">
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                | Rol: {this.state.rol} | Grupo: {this.state.grupo} | Rama: {this.state.rama} |
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    };
}