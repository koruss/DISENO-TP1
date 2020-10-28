import React, { Component } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './miembrosXelemento.css'
import Button from 'react-bootstrap/Button'
import Card from './Card1'

export default class miembroXelemento extends Component {
    state = {
        zonas: [{ value: "norte", label: "norte" }, { value: "sur", label: "Sur" }, { label: "Este" }, { label: "oeste" }],
        ramas: [],
        grupos: [],
        selectedRama: [],
        selectedGrupo: [],
        selectedZona: [],
        resultMembers: [{ _id: 1, nombre: "Kenth" }, { _id: 2, nombre: "Kenneth" }, { _id: 3, nombre: "Kh" }, { _id: 4, nombre: "Knth" }, { _id: 5, nombre: "eth" }],

    }


    handleChange = selectedZona => {
        this.setState(
            { selectedZona },
            () => console.log(`Option selected:`, this.state.selectedZona)
        );
    };

    onChange = (e) => this.setState({
        [e.target.name]:  //Connects state attribute with the input in the html
            e.target.value
    });

    render() {
        return (
            <div>
                <div id="center-section">
                    <Button variant="dark">Dark</Button>
                    <div id="main-section">
                        <div className="spacing-base">
                            <label> Zonas </label>
                            <Select components={makeAnimated} name="zonas" value={this.state.selectedZona} onChange={this.handleChange} options={this.state.zonas} className="basic-multi-select" classNamePrefix="select" />
                        </div>
                    </div>

                    <div id="main-section">
                        <div className="spacing-base">
                            <label> Ramas </label>
                            <Select components={makeAnimated} name="ramas" value={this.state.selectedRama} onChange={this.handleChange} options={this.state.ramas} className="basic-multi-select" classNamePrefix="select" />
                        </div>
                    </div>
                    <div id="main-section">
                        <div className="spacing-base">
                            <label> Grupo </label>
                            <Select components={makeAnimated} name="grupos" value={this.state.selectedGrupo} onChange={this.handleChange} options={this.state.grupos} className="basic-multi-select" classNamePrefix="select" />
                        </div>
                    </div>
                </div >

                <div>
                {this.state.resultMembers.map((p,index) => 
                                    (<Card key={p._id} index={index} miembroData={p} isFriend={false} />)
                                )}

                </div>

            </div>
        )
    };



}