import React, { Component } from 'react'
import '../../Componentes/General/Utils.css'
import Header from '../General/Header';
import Tree from 'react-hierarchy-tree-graph';

class TreeContainer extends React.PureComponent{
    state = {
        treeData: [
            {
              name: 'Top Level',
              attributes: {
                keyA: 'A',
                keyB: 'B',
                keyC: 'B',
              },

              children: [
                {
                  name: 'Level 2: A',
                  id:1,
                  attributes: {
                    id:1,
                    keyA: 'val A',
                    keyB: 'val B',
                    keyC: 'val C',
                  },
                },
                {
                  name: 'Level 2: B',
                  attributes:{
                      id:2
                  },
                  link:"hola",
                  shapeProps:{
                      id:2
                  }
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

    translate() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 2
            }
        });
    }
    crearArbol() {

    }

    componentDidMount() {
        this.translate();
    }



    render() {
        return (


            
            <div style ={this.state.style} ref={tc => (this.treeContainer = tc)}>
                <Tree data={this.state.treeData} nodeSvgShape={this.state.svgSquare} orientation={"vertical"} collapsible={false} translate={this.state.translate} onClick={this.onClick} />
            </div>
        




        // <div>
        //     <div class= "center-section">
        //         <Header></Header>
        //     </div>
 

        // </div>




        )
    };
}
export default TreeContainer;