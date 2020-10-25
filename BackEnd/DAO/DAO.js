const express = require('express');

const bodyParser = require('body-parser');
var cors = require('cors');
const logger = require('morgan');
//const session = require('express-session');
const API_PORT = 3001;
const app = express();

app.use(cors());

app.listen(3001, () => console.log(`LISTENING ON PORT ${API_PORT}`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));



// let db = mongoose.connection;
// db.once('open', () => console.log('------->>> Conexion con MongoDB exitosa <<<------'));
// db.on('error', console.error.bind(console, '------->>> FAILED CONNECTION WITH MONGO DB <<<------:'));


class DataSource {
    get Connect() {
        this.mongoose = require('mongoose');
        const dbroute =
            'mongodb+srv://kenitoUwU:1234@tp-diseno.hwnkz.mongodb.net/test?authSource=admin&replicaSet=atlas-j7zojs-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
        this.mongoose.connect(dbroute, { useNewUrlParser: true, useUnifiedTopology: true });
        return this.mongoose;
    }
}

//////////////////////////////
///   MONGODB CONNECTION
//////////////////////////////
const dataSource = new DataSource();
const connection = dataSource.Connect;

let state=connection.connection;
state.once('open', () => console.log('------->>> Conexion con MongoDB exitosa <<<------'));
state.on('error', console.error.bind(console, '------->>> Mamendez Con MongoDB <<<------:'));


// checks if connection with the database is successful