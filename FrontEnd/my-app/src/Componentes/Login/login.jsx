// import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'


// class Login extends Component {
//     state = {// este json pasa a ser como los atributos en react

//     }


//     render() {
//         return (
//             <div>
//             <Form>
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Usuario</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//             </Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Contrasena</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>

//             </div>

//         )
//     };
// }

// export default Login;



import React,{ Component } from 'react'
import './Login.css'
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';

class Login extends Component{
    state = {
        isAuth: false
    };

    showSession = (e) => {
        e.preventDefault();
        axios.get('/showSession',{}).then(function(res){
            //console.log("Sesion es de: "+res.data);
            //console.log("Sesion 2 es de : "+res.data.userName);
            alert("La sesión pertenece al usuario: "+res.data.userName+"\nEl correo es: "+res.data.email+
            "\nSu nombre completo es: "+res.data.fullName+"\nUsuario"+res.data.userType);
        });    
      };
      
    logIn = (e) => {
        e.preventDefault();
        var self = this;
        axios.post('UserLogIn',{ 
                pName: this.state.userName,
                pPassword: this.state.password
        }).then(function(res){
            if(!res.data.success){
                alert(res.data.error)
            }
            else{
                self.setState(
                    {
                        isAuth: true
                    }
                )

                //header.update();
            }
        })
        /*if(this.state.isAuth){
            //this.props.history.push("/profile")
            /*auth.logIn(() => {
                this.props.history.push("/profile")
            });            
        }
        */
        
        /*.catch(err => {
            console.log(e)
        }); 
        */         
    }

    onChange = (e) => this.setState({[e.target.name]:
        e.target.value}); 

    render(){
        //const { isAuth } = this.state.isAuth;
        //alert("Si se ha comprobado el estado: "+this.state.isAuth);
        //if(isAuth) return <Redirect to={'/profile'}/>
        console.log("Login, el estado del componente es: "+this.state.isAuth);
        if(this.state.isAuth){
            this.props.history.push("/")         
        }        
        
        return(  
            <div>
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
                                    <a id="create"role="button" href="/register" class="button-text">Register Here!</a>                     
                            </span>
                        </div>
                    </form>
                </div>
        )
    };
}

export default Login;