var DAO = require('./DAO');
var GrupoSchema = require("../Schemas/GrupoSchema.js");

module.exports = class GrupoDAO {
    dao = new DAO();
    grupoSchema = new GrupoSchema();

    constructor(){
    }

    
    async postGrupo(req,res){
        this.grupoSchema = new GrupoSchema();
        this.grupoSchema.nombreRama= req.body.selectedRama.value;
        this.grupoSchema.nombreGrupo= req.body.nombreGrupo;
        await this.dao.postData(this.grupoSchema,res);
    }

    updatePersona(data){

    }

    //Funcion encargada de obtener todas las zonas de la base de datos
    async getGrupos(req, res){
        this.dao.getData(GrupoSchema, res);
        const respuesta = res.data;
        console.log(respuesta);
    }

    async updateMiembroEnGrupo(data, res){
        this.dao.updateMiembroEnGrupo(data, GrupoSchema, res);
    }

    async cambiarNombreGrupo(data, res){
        this.dao.cambiarNombreGrupo(data, GrupoSchema, res);
    }

    async trasladarMiembro(data, res){
        this.dao.trasladarMiembro(data.body, GrupoSchema, res);
    }

 }