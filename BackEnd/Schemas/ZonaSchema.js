const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Esquema de zona de la base de datos
const ZonaSchema = new Schema(
    {
        idCoordinacion:String,
        ramas:Array,
        nombreZona:String,
        jefesZona:Array
    }
);

module.exports= mongoose.model("Zona",ZonaSchema)