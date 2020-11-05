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

    definirEstructura(info){
        this.dao.guardarZona(info);

    }

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


