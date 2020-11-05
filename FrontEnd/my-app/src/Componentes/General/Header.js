import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import axios from 'axios';
import './Header.css'


class Header extends Component {
    state = {
        isAuth: true,
    }

    componentDidMount(){
        {/*if(this.props.isStore) this.state.isStore=true;          
         var self=this;
         axios.get('/showSession').then(function(res){
             if(res.data.loggedIn == true) self.setState({isAuth:true})
             else self.setState({isAuth:false});
         })
        */}
    }

    logOut(){
        try {this.props.reload()} catch(error){}
        axios.get("logOut",{})
        .then(function (res) {
          })
          .catch(function (err) {
          });        
        this.setState({
            isAuth:false
        })
    }

    render() {
        var session = this.state.isAuth;
        return (<>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <header className="header">
                <div className="topContainer">
                    {/* Home logo */}
                    <h1 display="inline-block">
                        <Link className="link" to="/">Movilize!!</Link>
                    </h1>
                    <div id="menu">
                        <Route render={() => {
                            if(!session){ return <>{" | "} <Link className="link" to="/login">Iniciar Sesión</Link></>}
                            else{ return <></> }
                        }}/>
                        <Route render={() => {
                            if(!session){ return <>{" | "} <Link className="link" to={{pathname:"/registroMiembro", state:{ newAdmin: false }}}>Registrarse</Link></>}
                            else{ return <></> }
                        }}/>
                        <Route render={() => {
                            if(session){ return <>{" | "}<Link className="link" to="/" onClick={() => this.logOut()}>Cerrar sesión</Link></>}
                            else{ return <></> }
                        }}/>
                       <Route render={() => {
                            return <>{" | "} <Link className="link" onClick={()=>this.showSession()}>Show Session</Link></>
                        }}/>
                    </div>
                </div>
            </header>
            </>
        )

    }

}
export default Header;