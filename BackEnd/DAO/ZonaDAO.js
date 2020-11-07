var DAO = require('./DAO');
var ZonaSchema = require("../Schemas/ZonaSchema.js");

module.exports = class ZonaDao {
    List = [];
    dao = new DAO();
    zonaSchema = new ZonaSchema();

    constructor(){
    }

    //Funcion encargada de guardar una nueva zona en la base de datos
    async postZona(data, res){

    }

    //Funcion encargada de obtener todas las zonas de la base de datos
    async getZonas(req, res){
        this.dao.getData(ZonaSchema, res);
        const respuesta = res.data;
        console.log(respuesta);
    }

 }