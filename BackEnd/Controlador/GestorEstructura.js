var Direccion = require('../Modelo/Direccion');
var LeafPersona = require('../Modelo/LeafPersona');
var CompositePersona = require('../Modelo/CompositePersona');
var ZonaDAO = require('../DAO/ZonaDao.js');
var RamaDAO = require('../DAO/RamaDao.js');

module.exports = class GestorEstructura{
    zonaDAO = new ZonaDAO();
    ramaDAO = new RamaDAO();
    zonas = [];

    constructor(){

    }

    crearZona(){

    }

    async crearRama(data, res){
        await this.ramaDAO.postRama(data,res);
    }

    crearGrupo(){
        
    }
    
    async cargarComposite(){

    }

    async obtenerZonas(req,res){
        await this.zonaDAO.getZonas(req,res);
    }

    clientCode(component) {
        console.log(`RESULT: ${component.operation()}`);
    }

}
