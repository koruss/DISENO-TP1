const DAO = require('../DAO/DAO.js')
var GestorMiembro = require('./GestorMiembro');
const GestorEstructura = require('./GestorEstructura');

module.exports = class Control{
    dao = new DAO();
    gestorMiembro = new GestorMiembro();

    constructor(){
    gestorMiembro = new GestorMiembro();
    gestorEstructura=new GestorEstructura();
    }

    setCoordinacion(coordinacion){
    }

    crearCoordinacion(){

    }

    async definirEstructura(info){
        console.log( this.dao.guardarZona(info));

    }

    //Funcion encargada de guardar un miembro en la base de datos
    async guardarMiembro(data, res){
        let response = await this.gestorMiembro.agregarMiembro(data, res);
    }

    async prueba(info, res){
            await this.dao.guardar(info, res).then(
            console.log(res)
        )
    }

    async allZonas(req, res){
        await this.dao.allZonas(req,res)
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


