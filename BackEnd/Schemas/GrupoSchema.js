const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrupoSchema = new Schema(
    {
        idCoordinacion:String,
        idRama:String,
        nombreRama:String,
        monitores:Array,
        jefesGrupo:Array,
        nombreGrupo:String,
        personas: Array
    }
);

module.exports= mongoose.model("Grupo",GrupoSchema)