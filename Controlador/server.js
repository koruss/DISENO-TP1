const { Control } = require('./Control');
const { Coordinacion } = require('./Coordinacion');


class server {
    app;
    constructor(){
        this.openAPI(); 
    }
    openAPI() {
        const express = require('express');
        const bodyParser = require('body-parser');
        var cors = require('cors');
        const logger = require('morgan');
        //const session = require('express-session');
        const API_PORT = 3001;
        this.app= express();
        this.app.use(cors());
        this.app.listen(3001, () => console.log(`LISTENING ON PORT ${API_PORT}`));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(logger('dev'));
    }
}

var main= new server();
var cord = new Coordinacion("116","tec","San Jose.com","asd","090123","dasd","asd","asd","asd");//una coordeinacion x 

const control = new Control(cord);
app = main.app;

app.post('/guardarZona ',(req,res)=>{
    control.definirEstructura();

})

