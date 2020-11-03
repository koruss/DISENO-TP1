import React, { Component } from 'react'
import './Contacto.css';

export default class Contacto extends Component {
    render(){
        // return (
        //     <div>
        //       <meta name="viewport" content="width=device-width, initial-scale=1" />
        //       <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\n* {box-sizing: border-box;}\n\ninput[type=text], select, textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n" }} />
        //       <h3>CONTACTA CON NOSOTROS</h3>
        //       <div className="container">
        //         <form action="/action_page.php">
        //           <label htmlFor="fname">Nombre</label>
        //           <input type="text" id="fname" name="firstname" placeholder="Nombre..." />
        //           <label htmlFor="lname">Apellido</label>
        //           <input type="text" id="lname" name="lastname" placeholder="Apellido.." />
        //           <label htmlFor="fname">Email</label>
        //           <input type="text" id="fname" name="Email" placeholder="Email.." />
        //           <label htmlFor="subject">Mensaje</label>
        //           <textarea id="subject" name="subject" placeholder="Escribe tu consulta.." style={{height: '200px'}} defaultValue={""} />
        //           <input type="submit" defaultValue="Submit" />
        //         </form>
        //       </div>
        //     </div>
        //   );


        return (
            <div>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\nform {border: 3px solid #f1f1f1;}\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n" }} />
              <h2>Login</h2>
              <form action="/action_page.php" method="post">
                <div className="imgcontainer">
                  <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                  <label htmlFor="Email"><b>Email</b></label>
                  <input type="text" placeholder="Ingresa tu Email" name="Email" required />
                  <label htmlFor="psw"><b>Contraseña</b></label>
                  <input type="password" placeholder="Ingresa tu Contraseña" name="psw" required />
                  <button type="submit">Login</button>
                  <label>
                    <input type="checkbox" defaultChecked="checked" name="remember" /> Recordarme
                  </label>
                </div>
              </form>
            </div>
          );
    };
}