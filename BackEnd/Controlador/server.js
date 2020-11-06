var Control = require('./Control');
var Coordinacion= require('./Coordinacion');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const logger = require('morgan');
//const session = require('express-session');
const API_PORT = 3001;
app = express();
app.use(cors());
app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });
app.listen(3001, () => console.log(`LISTENING ON PORT ${API_PORT}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

var cord = new Coordinacion("116", "tec", "San Jose.com", "asd", "090123", "dasd", "asd", "asd", "asd");

const control = new Control(cord);

app.post('/guardarZona', (req, res) => {
    control.prueba(req.body, res);
})



app.post('/guardarMiembro', (req, res) => {
  control.guardarMiembro(res);
})

app.post("/allZonas",(req,res)=>{
  control.allZonas(req, res);
})

app.post('/cambiarMiembroGrup', (req, res) => {
  control.cambiarMiembroGrupo(res);
})
