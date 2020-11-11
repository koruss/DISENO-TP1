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

    async crearRama(req, res){
        await this.ramaDAO.postRama(req,res);
    }

    async crearGrupo(req,res){
        await this.grupoDAO.postGrupo(req,res);
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

    async asignarMiembro(req, res){
        await this.grupoDAO.updateMiembroEnGrupo(req, res);
    }

    async cambiarNombreGrupo(req, res){
        await this.grupoDAO.cambiarNombreGrupo(req, res);
    }

    async trasladarMiembro(req, res){
        await this.grupoDAO.trasladarMiembro(req, res);
    }

    async modificarZona(req){
        await this.zonaDAO.updateZona(req);
    }

    async modificarRama(req){
        await this.ramaDAO.updateRama(req);
    }

    async guardarZona(req, res){
        await this.zonaDAO.postZona(req,res);
    }

    clientCode(component) {
        console.log(`RESULT: ${component.operation()}`);
    }

    
}
