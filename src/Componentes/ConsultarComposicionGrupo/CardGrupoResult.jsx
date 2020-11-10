import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './CardGrupoResult.css'

export default class CardGrupoResult extends Component {

    state = {

    }

    render() {
        const { nombre } = this.props.miembroData;
        return (
            <div className="card1-container" >
                <div id="center-section">
                    <Card style={{ width: '13rem' }}>
                        {/* <div id="center-section"> */}
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {nombre}
                            </Card.Text>
                        </Card.Body>
                        {/* </div> */}
                    </Card>
                </div>
            </div>
        )
    };
}