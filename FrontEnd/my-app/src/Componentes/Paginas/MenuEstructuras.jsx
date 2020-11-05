import React, { Component } from 'react'
import "./Estructura.css"
import {Button} from 'react';

export default class Card1 extends Component {

    state={
        
    }

    render() {

        return (
            <div>
         
            <Button variant="dark">Agregar Zona</Button>{' '}
            <Button variant="dark">Agregar Rama</Button>{' '}
            <Button variant="dark">Agregar Grupo</Button>{' '}
                                


            </div>


        )
    };

}