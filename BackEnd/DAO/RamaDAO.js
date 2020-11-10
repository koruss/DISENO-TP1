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
        const jefesGrupoQuemado = {
            id: '123',
            nombre: 'Anner',
            apellido: 'Josue Calvo Mejia Papero PRO'
        }
        console.log(jefesGrupoQuemado);
        this.ramaSchema.idCoordinacion="123"; //TODO: OBTENER ID DE LA COORDINACION
        this.ramaSchema.nombreRama=data.nombreRama;
        this.ramaSchema.zona = data.selectedZona.value;
        this.ramaSchema.monitores = [];
        this.ramaSchema.jefesRama = [];
        this.ramaSchema.jefesGrupo = jefesGrupoQuemado;
        await this.dao.postData(this.ramaSchema, res);
    }

    async updateRama(req, res){
        this.dao.modificarRama(req, RamaSchema, res);
    }

    //Funcion encargada de obtener todas las ramas de la base de datos
    async getRamas(req, res){
        this.dao.getData(RamaSchema, res);
        const respuesta = res.data;
        console.log(respuesta);
    }

    async cambiarNombreGrupo(req, res){
        this.dao.cambiarNombreGrupo(req, RamaSchema, res);
    }


    //Funcion encargada de modificar una rama
    async updateRama(req, res){
        console.log(req)
        this.dao.modificarRama(req, RamaSchema, res);
    }

 }