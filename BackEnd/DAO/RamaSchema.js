const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RamaSchema = new Schema(
    {
        idCoordinacion:String,
        nombreRama:String,
        ramas:Array,
        monitores:Array,
        jefesRama:Array,
        monitores:Array,
    }
);

module.exports= mongoose.model("Rama",RamaSchema)