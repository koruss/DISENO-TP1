const DAO = require('../DAO/DAO.js');
const GestorEstructura = require('./GestorEstructura');

module.exports= class Control{
    dao = new DAO();
    gestorEstructura=new GestorEstructura();
    // coordinacion;
     
    // constructor(coordinacion){
    //     this.coordinacion=coordinacion;
    // }
    constructor(){

    }

    setCoordinacion(coordinacion){
    }

    crearCoordinacion(){

    }

    async definirEstructura(info){
        console.log( this.dao.guardarZona(info) );

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


    

    // async definirEstructura().then(req,res){

    // }

    registrarMiembro(){

    }

    consultarMiembro(){

    }

    modificarMiembro(){

    }

    modificarEstadoMiembro(){

    }

    cambiarMiembroDeGrupo(){

    }

    definirMonitor(){

    }

    crarGrupo(){

    }

    consultarComposicionGrupo(){

    }
}


