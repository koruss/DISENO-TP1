var PersonaDAO = require('../DAO/PersonaDAO');

module.exports = class GestorMiembro{
    miembros=[];
    personaDAO = new PersonaDAO();


    constructor(){
    }

    // Operaciones sobre miembros
    agregarMiembro(data){
        this.personaDAO.postPersona(data);
    }

    cambiarMiembroGrupo(data){
        this.personaDAO.updatePersona(data);
    }

    getMiembros(){

    }

    getMiembrosGrupo(){

    }

    // Operaciones sobre jefes
    getJefesGrupo(){

    }

    getJefesRama(){

    }

    getJefesZona(){

    }

    // Operaciones sobre mentores
    getMentores(){

    }

    asignarGrupoMentor(){

    }

    getMentoresGrupo(){

    }
}