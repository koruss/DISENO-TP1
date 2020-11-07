const DAO = require('../DAO/DAO.js')
var GestorMiembro = require('./GestorMiembro');
const GestorEstructura = require('./GestorEstructura');

module.exports = class Control{
    dao = new DAO();
    gestorMiembro = new GestorMiembro();
    gestorEstructura=new GestorEstructura();
    


    constructor(){
    
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

    async asignarMiembro(data, res){
        // terminar
    }

    async prueba(info, res){
            await this.dao.guardar(info, res).then(
            console.log(res)
        )
    }

    async allZonas(req, res){
        await this.dao.allZonas(req,res)
    }

    async allRama(req,res){
        // await this.gestorEstructura(req,res)
        await this.dao.allRamas(req, res)
    }

    async allPersona(req,res){
        // await this.gestorEstructura(req,res)
        await this.dao.allPersona(req, res)
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


