const DAO = require('../DAO/DAO.js')
var GestorMiembro = require('./GestorMiembro');
const GestorEstructura = require('./GestorEstructura');

module.exports = class Control{
    dao = new DAO();
    gestorMiembro = new GestorMiembro();
    gestorEstructura = new GestorEstructura();
    
    async allAsesores(req,res){
        await this.gestorMiembro.obtenerAsesores(req,res);
    }

    async logIn(req,res){
        var pName = req.body.pName;
        var pPassword = req.body.pPassword;
        req.session.loggedIn = true;
        req.session.user=pName;
        req.session.password=pPassword; 
        return res.json({ success: true });  
    }
    
    cerrarSesion(req,res){
        req.session.destroy((err) => {
            if (err) return console.log("Error al cerrar sesion");
            else  return res.json({ success: true });
        })
    }

    constructor(){
    }

    setCoordinacion(coordinacion){
    }

    crearCoordinacion(){

    }

    async crearRama(req, res){
        await this.gestorEstructura.crearRama(req,res);
    } 

    async guardarGrupo(req,res){
        await this.gestorEstructura.modificarRama(req);
        await this.gestorEstructura.crearGrupo(req,res);
    }

    async definirEstructura(info){
        console.log( this.dao.guardarZona(info));
    }

    async guardarMiembro(data, res){
        let response = await this.gestorMiembro.agregarMiembro(data, res);
    }

    async guardarAsesor(data, res){
        let response = await this.gestorMiembro.agregarAsesor(data, res);
    }

    async asignarMiembro(req, res){
        await this.gestorEstructura.asignarMiembro(req, res);
    }

    //HACER FUNCION EN GESTOR DE ESTRUCTURA DE CREAR ZONA
    async prueba(info, res){
            await this.dao.guardar(info, res).then(
            console.log(res)
        )
    }

    async allZonas(req, res){
        await this.gestorEstructura.obtenerZonas(req, res);
    }

    async allRama(req,res){
        await this.gestorEstructura.obtenerRamas(req, res)
    }

    async allGrupos(req,res){
        await this.gestorEstructura.obtenerGrupos(req, res)
    }

    async allPersona(req,res){
        await this.gestorMiembro.obtenerPersonas(req, res)
    }

    async cambiarNombreGrupo(req,res){
        await this.gestorEstructura.cambiarNombreGrupo(req, res)
    }
    
    registrarMiembro(){

    }

    consultarMiembro(){

    }

    modificarMiembro(){

    }

    modificarEstadoMiembro(){

    }

    cambiarMiembroGrupo(data, res){
        this.gestorEstructura.trasladarMiembro(data, res);
    }

    definirMonitor(){

    }

    crarGrupo(){

    }

    consultarComposicionGrupo(){

    }
}


