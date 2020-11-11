import React, { Component } from 'react'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';
import Tree from 'react-hierarchy-tree-graph';
import axios from 'axios';

class TreeContainer extends React.PureComponent{
    state = {
        aux:true,
        arbol:[{name:"Movilize",children:[]}],
        zonas:[],
        ramas:[],
        grupos:[],
        treeData: [
            {
              name: 'Top Level',

              children: [
                {
                  name: 'Level 2: A',
                  id:1,
                  children:[
                      {
                          name:'level 2 : a',
                          id:35
                      },
                      {
                        name:'level 2 : b',
                        id:36
                      }
                  ]
                },
                {
                  name: 'Level 2: B',
                  attributes:{
                      id:2
                  },
                },
              ],
            },
          ],
          
        svgSquare: {
            shape: 'rect',
            shapeProps: {
                width: 20,
                height: 20,
                x: -10,
                y: -10,
            }
        },

        style: {
            width: "100%",
            height: "100vh"
        }


    }

    onClick = (nodeData, e) => {
        console.log(nodeData.name);
        console.log(e);
        alert("Has clickeado un nodo nindo");
    }

    btnClick = (e)=>{
        var self = this;
        this.setState({
            treeData: self.state.arbol
        })
    }

    translate() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 2
            }
        });
    }

    armarArbol(){
        let arbol=this.state.arbol;
        let zonas= this.state.zonas;
        let ramas= this.state.ramas;
        let grupo= this.state.grupos;
        zonas.forEach(zona=>{
            this.state.arbol[0].children.push({name:zona.nombreZona,id:zona._id, children:[]})
        })
        ramas.forEach(rama=>{
            let nombreZona= rama.nombreZona;
            
        })
        


    }




    componentDidMount() {
        console.log("1");

        /*
        Cuando se implemente los coordinadores se debe inicializar el arbol aqui
        */ 

        axios.post("/allZonas", {}).then(res => {
            const respuesta1 = res.data;  
            this.setState({
                zonas:respuesta1
            })
        })
        axios.post("/allRama", {}).then(res => {
            const respuesta2 = res.data;
            this.setState({
                ramas:respuesta2
            })
        })
        axios.post("/allGrupos", {}).then(res => {
            const respuesta3 = res.data;
            this.setState({
                grupos:respuesta3
            })
        }).then(res=>{
            this.armarArbol();
            

        }).then(res =>{
            this.translate();

        })
        console.log("3");
    }

    render() {
        return (
            <div>
                <Header></Header>
                <button type="button" class="btn btn-dark" onClick={this.btnClick}>Cambiar</button>
                <div style ={this.state.style} ref={tc => (this.treeContainer = tc)}>
                <Tree 
                data={this.state.treeData}
                 nodeSvgShape={this.state.svgSquare} 
                 orientation={"vertical"} 
                 collapsible={false} 
                 translate={this.state.translate}
                // onClick={this.onClick} 
                />
            </div>

            </div>    

        )
    };
}
export default TreeContainer;