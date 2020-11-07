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
        console.log(data);
        this.ramaSchema.idCoordinacion="123"; //TODO: OBTENER ID DE LA COORDINACION
        this.ramaSchema.nombreRama=data.nombreRama;
        this.ramaSchema.zona = data.selectedZona.value;
        this.ramaSchema.monitores = [];
        this.ramaSchema.jefesRama = [];
        await this.dao.postData(this.ramaSchema, res);
    }

    //Funcion encargada de obtener todas las ramas de la base de datos
    async getRamas(req, res){
        this.dao.getData(RamaSchema, res);
        const respuesta = res.data;
        console.log(respuesta);
    }

 }