var DAO = require('./DAO');
var RamaSchema = require('../Schemas/RamaSchema.js');

module.exports = class RamaDao {
    List = [];
    dao = new DAO();
    ramaSchema = new RamaSchema();

    constructor(){
    }

    //Funcion encargada de guardar una nueva zona en la base de datos
    async postRama(data, res){
        this.ramaSchema.idCoordinacion="PRUEBA"; 
        this.ramaSchema.nombreRama=data.body.nombreRama;
        this.ramaSchema.zona = data.body.selectedZona.value;
        this.ramaSchema.monitores = [];
        this.ramaSchema.jefesRama = [];
        await this.dao.postData(this.ramaSchema, res);
    }

    async updateRama(req){
        this.dao.modificarRama(req, RamaSchema);
    }

    //Funcion encargada de obtener todas las ramas de la base de datos
    async getRamas(req, res){
        this.dao.getData(RamaSchema, res);
        const respuesta = res.data;
    }

    //funcion encargada de llamar a la funcion que cambia el nombre del grupo en la rama
    async cambiarNombreGrupoRama(req){
        this.dao.cambiarNombreGrupoRama(req,RamaSchema);

    }


    //Funcion encargada de modificar una rama
    async updateRama(req, res){
        this.dao.modificarRama(req, RamaSchema, res);
    }

 }