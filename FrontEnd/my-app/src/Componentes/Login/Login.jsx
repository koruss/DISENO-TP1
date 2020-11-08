import React,{ Component } from 'react'
import './Login.css'
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';
import Header from '../General/Header';

class Login extends Component{
    state = {
        isAuth: false
    };
      
    logIn = (e) => {
        e.preventDefault();
        var self = this;
        axios.post('logIn',{ 
                pName: "admin",
                pPassword:"1234"
                //pName: this.state.userName,
                //pPassword: this.state.password
        }).then(function(res){
            if(!res.data.success){
                alert(res.data.error)
            }
            else{
                //self.isAuth=true;
                self.setState(
                    {
                        isAuth: true
                    }
                )
                

                //header.update();
            }
        })
        if(this.state.isAuth){
            this.props.history.push("/ventanaAsesor")       
        }
        
        
        /*.catch(err => {
            console.log(e)
        }); 
        */         
    }

    onChange = (e) => this.setState({[e.target.name]:
        e.target.value}); 

    
    /*onClick = (e) => {
        axios.post("/cargarComposite",{
        }).then(res =>{
            if(!res.data.success){
                alert(res.data.err);
            }
            else{
                alert("Miembro Guardado correctamente")
            }
        })
    }
    */

    render(){    
        if(!this.state.isAuth) {
        return(  
            <div>
                    <Header></Header>
                    {/*<h1>{auth.getAuth()?"hola":"no sirve"}</h1>*/}
                    <form onSubmit={this.logIn}> 
                        <div id="center-section">
                            <div id="main-section">
                                <div class="border">
                                    <div class="box-container">
                                        <h1>Log In</h1>
                                        <div class="spacig-base">
                                            <label for="email">Username or Email</label>
                                            <input type="text" name="userName" autoComplete="on" onChange={this.onChange} tabIndex="1"></input>
                                        </div>    
                                        <div class="spacig-base">
                                            <label for="password">Password</label>
                                            <input type="password" name="password" onChange={this.onChange} tabIndex="2"/>       
                                        </div>  
                                        <div class="spacing-base">
                                            <span class="button buttonInside">
                                                <button type="submit" class="button-text" tabIndex="3">Log in</button>
                                            </span>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div class="divider">
                                <h5>You don't have an account?</h5>
                            </div>
                            <span id="registrationLink" class="button">
                                <button type="button" class="btn btn-dark" onClick={this.onClick} >Afiliar miembro</button>             
                            </span>
                        </div>
                    </form>
                </div>
        )
        }else return (
            <>
            <Redirect to="/ventanaAsesor"></Redirect>
            </>
        )
    };
}

export default Login;