const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrupoSchema = new Schema(
    {
        idCoordinacion:String,
        nombreRama:String,
        nombreGrupo:String,
        monitores:Array,
        jefesGrupo:Array,
        miembros: Array
    }
);

module.exports= mongoose.model("Grupo",GrupoSchema)