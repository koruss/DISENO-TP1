const DAO = require('../DAO/DAO.js')

module.exports= class Control{
    dao = new DAO();
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
        let response = await this.dao.guardar(info, res).then(
            console.log(res)
        )
        

    }

    async allZonas(req, res){
        await this.dao.allZonas(req,res)
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


