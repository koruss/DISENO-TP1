var GestorMiembro = require('./GestorMiembro');

module.exports = class Control{
    gestorMiembro = new GestorMiembro();

    setCoordinacion(coordinacion){
    }

    crearCoordinacion(){

    }

    definirEstructura(){
        console.log("A huevo")

    }

    guardarMiembro(data){
        this.gestorMiembro.agregarMiembro(data);
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


