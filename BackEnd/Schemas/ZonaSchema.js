const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ZonaSchema = new Schema(
    {
        idCoordinacion:String,
        ramas:Array,
        nombreZona:String,
        jefesZona:Array
    }
);

module.exports= mongoose.model("Zona",ZonaSchema)