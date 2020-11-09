const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrupoSchema = new Schema(
    {
        idCoordinacion:String,
        nombreRama:String,
        monitores:Array,
        jefesGrupo:Array
    }
);

module.exports= mongoose.model("Grupo",GrupoSchema)