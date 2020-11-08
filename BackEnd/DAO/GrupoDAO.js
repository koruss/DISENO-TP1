var DAO = require('./DAO');
var GrupoSchema = require("../Schemas/GrupoSchema.js");

module.exports = class GrupoDao {
    List = [];
    dao = new DAO();
    grupoSchema = new GrupoSchema();

    constructor(){
    }

    //Funcion encargada de guardar un nuevo usuario en la base de datos
    async postPersona(data, res){
        //const direccion = {
        //    pais: data.pais
        //}
        //console.log("pais ---------->",data.pais.value);
        this.personaSchema.nombre=data.nombre;
        this.personaSchema.identificacion=data.identificacion;
        this.personaSchema.apellido1=data.apellido1;
        this.personaSchema.apellido2=data.apellido2;
        this.personaSchema.estado=false;
        this.personaSchema.telefono=data.celular;
        this.personaSchema.correo=data.correo;
        this.personaSchema.direccion.pais=data.pais.value;
        await this.dao.postData(this.personaSchema, res);
    }

    updatePersona(data){

    }

    //Funcion encargada de obtener todas las zonas de la base de datos
    async getGrupos(req, res){
        this.dao.getData(GrupoSchema, res);
        const respuesta = res.data;
        console.log(respuesta);
    }

 }