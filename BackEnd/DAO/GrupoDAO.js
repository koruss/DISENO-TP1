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

    // updatePersona(data){

    // }

    //Funcion encargada de obtener todas las zonas de la base de datos
    async getGrupos(req, res){
        this.dao.getData(GrupoSchema, res);
        const respuesta = res.data;
        //console.log(respuesta);
    }

    async updateMiembroEnGrupo(data, res){
        this.dao.updateMiembroEnGrupo(data, GrupoSchema, res);
    }

    async cambiarNombreGrupo(data, res){
        this.dao.cambiarNombreGrupo(data, GrupoSchema, res);
    }

    async postGrupo(req,res){
        console.log(req.body);
        // this.grupoSchema.idCoordinacion=req.idCoordinacion;
        this.grupoSchema.nombreRama=req.body.selectedZona.value;
        this.grupoSchema.monitores=req.body.monitores.value;
        this.grupoSchema.jefesGrupo=[];
        this.grupoSchema.nombreGrupo=req.body.nombreGrupo;
        await this.dao.postData(this.grupoSchema,res);
    }

 }