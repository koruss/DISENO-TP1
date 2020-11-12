var PersonaDAO = require('../DAO/PersonaDAO');

module.exports = class GestorMiembro{
    miembros=[];
    personaDAO = new PersonaDAO();

    constructor(){
    }

    //Funcion que crea un objeto de tipo persona y lo envia para ser guardado
    async agregarMiembro(data, res){
        await this.personaDAO.postPersona(data, res)
    }

    //Funcion que crea un objeto de tipo persona y lo envia para ser guardado
    async agregarAsesor(data, res){
        let response = await this.personaDAO.postAsesor(data, res)
    }

    cambiarMiembroGrupo(data, res){
        this.personaDAO.updatePersona(data, res);
    }

    async obtenerPersonas(req,res){
        await this.personaDAO.getPersonas(req,res);
    }

    async obtenerAsesores(req,res){
        await this.personaDAO.getAsesores(req,res);
    }


}