const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RamaSchema = new Schema(
    {
        idCoordinacion:String,
        nombreRama:String,
        zona: String,
        monitores:Array,
        jefesRama:Array,
        jefesGrupo: {
            id: String,
            nombre: String,
            apellido: String
        }   
    }
);

module.exports= mongoose.model("Rama",RamaSchema)