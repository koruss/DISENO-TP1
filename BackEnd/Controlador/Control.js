const DAO = require('../DAO/DAO.js')
var GestorMiembro = require('./GestorMiembro');
const GestorEstructura = require('./GestorEstructura');

module.exports = class Control{
    dao = new DAO();
    gestorMiembro = new GestorMiembro();
    gestorEstructura = new GestorEstructura();
    


    constructor(){
    }

    setCoordinacion(coordinacion){
    }

    crearCoordinacion(){

    }

    async crearRama(data, res){
        await this.gestorEstructura.crearRama(data,res);
    } 

    async definirEstructura(info){
        console.log( this.dao.guardarZona(info));
    }

    async guardarMiembro(data, res){
        let response = await this.gestorMiembro.agregarMiembro(data, res);
    }

    async asignarMiembro(data, res){
        // terminar
    }

    //HACER FUNCION EN GESTOR DE ESTRUCTURA DE CREAR ZONA
    async prueba(info, res){
            await this.dao.guardar(info, res).then(
            console.log(res)
        )
    }



    async allZonas(req, res){
        await this.gestorEstructura.obtenerZonas(req, res);
    }

    async ramasDeZona(req,res){
        await this.gestorEstructura(req,res)
    }
    
    registrarMiembro(){

    }

    consultarMiembro(){

    }

    modificarMiembro(){

    }

    modificarEstadoMiembro(){

    }

    cambiarMiembroGrupo(data){
        console.log("cambiar");
        this.gestorMiembro.cambiarMiembroGrupo(data);
    }

    definirMonitor(){

    }

    crarGrupo(){

    }

    consultarComposicionGrupo(){

    }
}


