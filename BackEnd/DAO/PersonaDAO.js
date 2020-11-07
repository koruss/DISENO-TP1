var DAO = require('./DAO');
var PersonaSchema = require("../Schemas/PersonSchema.js");

module.exports = class PersonDao {
    List = [];
    dao = new DAO();
    personaSchema = new PersonaSchema();

    constructor(){
    }

    //Funcion encargada de guardar un nuevo usuario en la base de datos
    async postPersona(data, res){
        const direccion = {
            pais: data.pais.value,
            provincia: data.provincia.value,
            canton: data.canton.value,
            distrito: data.distrito.value
        }
        this.personaSchema.nombre=data.nombre;
        this.personaSchema.identificacion=data.identificacion;
        this.personaSchema.apellido1=data.apellido1;
        this.personaSchema.apellido2=data.apellido2;
        this.personaSchema.estado=false;
        this.personaSchema.telefono=data.celular;
        this.personaSchema.correo=data.correo;
        this.personaSchema.direccion=direccion;
        await this.dao.postData(this.personaSchema, res);
    }

    updatePersona(data){

    }

 }