var PersonaDAO = require('../DAO/PersonaDAO');

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

    async obtenerPersonas(req,res){
        await this.PersonaDAO.getPersonas(req,res);
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