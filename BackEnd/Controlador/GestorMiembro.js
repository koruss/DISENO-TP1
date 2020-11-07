var PersonaDAO = require('../DAO/PersonaDAO.js');

module.exports = class GestorMiembro{
    miembros=[];
    personaDAO = new PersonaDAO();


    constructor(){
    }

    //Funcion que crea un objeto de tipo persona y lo envia para ser guardado
    async agregarMiembro(data, res){
        let response = await this.personaDAO.postPersona(data, res)
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