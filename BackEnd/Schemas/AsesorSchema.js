const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AsesorSchema= new Schema(
    {
      usuario: String,
      contrasena: String,  
    }
);

module.exports = mongoose.model("Asesor", AsesorSchema);