import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './CardGrupoRoles.css'

export default class CardGrupoRoles extends Component {

state = {

}

render() {
const { id,zona, rama, grupo, rol}= this.props.miembroData;
return (
<div className="card1-container" >
<div id="center-section">
<Card style={{width: '25rem'}}>
{/* <div id="center-section"> */}
<Card.Body>
<Card.Title>{id}</Card.Title>
<Card.Text>
| {zona} | {rama} | {grupo} | {rol} | 
</Card.Text>
</Card.Body>
{/* </div> */}
</Card>
</div>
</div>
)
};
}