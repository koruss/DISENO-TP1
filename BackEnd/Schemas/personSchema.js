const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema= new Schema(
    {
      identificacion: String,
      nombre: String,
      estado: Boolean,
      telefono: String,
      correo: String,
      direccion: {
          provincia: String,
          canton:String,
          distrito: String,
          senas: String
      }   
    }
);

module.exports = mongoose.model("Person", personSchema);