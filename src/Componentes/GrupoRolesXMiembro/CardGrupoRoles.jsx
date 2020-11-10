import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './CardGrupoRoles.css'

export default class CardGrupoRoles extends Component {

    state = {

    }

    render() {
        const { id, zona, rama, grupo, rol } = this.props.miembroData;
        return (
            <div className="card1-container" >
                <div id="center-section">
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title>{id}</Card.Title>
                            <Card.Text>
                                | Zona: {zona} | Rama: {rama} | Grupo: {grupo} | Rol: {rol} |
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    };
}