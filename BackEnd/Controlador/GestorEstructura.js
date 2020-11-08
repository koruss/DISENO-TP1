var Direccion = require('../Modelo/Direccion');
var LeafPersona = require('../Modelo/LeafPersona');
var CompositePersona = require('../Modelo/CompositePersona');
var ZonaDAO = require('../DAO/ZonaDAO');
var RamaDAO = require('../DAO/RamaDAO');
var GrupoDAO = require('../DAO/GrupoDAO')



module.exports = class GestorEstructura{
    zonaDAO = new ZonaDAO();
    ramaDAO = new RamaDAO();
    grupoDAO = new GrupoDAO();
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

    async obtenerRamas(req,res){
        await this.ramaDAO.getRamas(req,res);
    }

    async obtenerGrupos(req,res){
        await this.grupoDAO.getGrupos(req,res);
    }

  

    clientCode(component) {
        console.log(`RESULT: ${component.operation()}`);
    }

}
