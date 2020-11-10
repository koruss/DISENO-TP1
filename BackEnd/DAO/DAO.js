const Zona = require("../Schemas/ZonaSchema");
const Rama = require("../Schemas/RamaSchema");
const Grupo= require("../Schemas/GrupoSchema");
const Persona = require("../Schemas/PersonSchema");
const Asesor = require("../Schemas/AsesorSchema");
const DataSource= require('./DataSource');




module.exports= class DAO {
    dataSource = new DataSource();
    connection;
    state;

    openConnection() {
        //////////////////////////////
        ///   MONGODB CONNECTION
        //////////////////////////////

        this.connection = this.dataSource.Connect;

        this.state = this.connection.connection;
        this.state.once('open', () => console.log('------->>> Conexion con MongoDB exitosa <<<------'));
        this.state.on('error', console.error.bind(console, '------->>> Mamendez Con MongoDB <<<------:'));

    }

    //Funcion que recibe un esquema para guardarlo en la base de datos
    async postData(schema, res){
        this.openConnection();
        schema.save((err)=>{
            if(err)return res.json({success:false, error:"Se ha producido un error guardando"+err}) ;
            else{
                return res.json({success: true});
            }
        });
    }

    //Funcion que recibe un esquema para obtener los datos
    async getOneData(schema, param, req,res){
        this.openConnection();
        schema.findOne({usuario:req.body.usuario},(err,data)=>{
            if(err) return console.log(err);
            res.send(data);
            res.end();
        })
    }

    //Funcion que recibe un esquema para obtener los datos
    async getData(schema, res){
        this.openConnection();
        schema.find({},(err,data)=>{
            if(err) return console.log(err);
            res.send(data);
            res.end();
        })
    }


    //LISTA PARA SER BORRADA? - cambiar a usar postData
    async guardar(data,res){
        const connection = this.dataSource.Connect;
        let state = connection.connection;
        state.once('open', () => console.log('------->>> Conexion con MongoDB exitosa <<<------'));
        state.on('error', console.error.bind(console, '------->>> Mamendez Con MongoDB <<<------:'));
        console.log("Llegue al DAO");
        console.log(data)
        let zona = new Zona();
        zona.nombreZona=data.nombreZona;
        zona.save((err)=>{
            if(err)return res.json({success:false, error:"Se ha producido un error guardando"+err}) ;
            else{
                console.log("Algo hice");
                return res.json({success: true});
            }
        });
    }

    async updateMiembroEnGrupo(data, schema, res){
        this.openConnection();
        // console.log(data.body)
        if (data.body.monitor.value=="Monitor"){
            schema.updateOne({_id:data.body.grupo.identificacion}, {$push:{ monitores: data.body.nombre.datosPersona}}, 
                function(error, info) {if (error) {res.json({success: false, error: 'No se pudo modificar el cliente',error});
                } else {res.json({success: true, info: info })}})
        }else if (data.body.monitor.value=="Miembro"){
            schema.updateOne({_id:data.body.grupo.identificacion}, {$push:{ miembros: data.body.nombre.datosPersona}}, 
                function(error, info) {if (error) {res.json({success: false, error: 'No se pudo modificar el cliente',error});
                } else {res.json({success: true, info: info })}})
        }else{
            schema.updateOne({_id:data.body.grupo.identificacion}, {$push:{ jefesGrupo: data.body.nombre.datosPersona}}, 
                function(error, info) {if (error) {res.json({success: false, error: 'No se pudo modificar el cliente',error});
                } else {res.json({success: true, info: info })}})
        }
       

    }


    async cambiarNombreGrupo(req, schema, res){
        this.openConnection();
        schema.updateOne({_id:req.body.grupo.identificacion}, {$set:{ nombreGrupo: req.body.nombre}}, 
            function(error, info) {
            if (error) {
                res.json({
                    success: false,
                    error: 'No se pudo modificar el cliente',
                    error
                });
            } else {
                res.json({
                    success: true,
                    info: info
                })
            }
        })
    }

    async trasladarMiembro(data, schema, res){
        const schema2= schema;
        this.openConnection();
        
        schema.updateOne({_id:data.grupoTo.identificacion}, {$push:{ miembros: data.nombre.datosPersona}}, 
            function(error, info) {
            if (error) {
                res.json({
                    success1: false,
                    error1: 'No se pudo ingresar el miembro en el nuevo grupo',
                    error
                });
            } else {
                res.json({
                    success1: true,
                    info1: info
                })
            }
        })
        schema2.update({_id:data.grupoFrom.identificacion}, {$pull:{ "miembros":{"_id":data.nombre.datosPersona._id}} }).then((info,error)=>{
            if (error) {
                res.json({
                    success2: false,
                    error2: 'No se pudo borrar el miembro del grupo anterior',
                    error
                });
            } else {
                res.json({
                    success2: true,
                    info2: info
                })
            }
        })
    }

    async modificarRama(req, schema){
        this.openConnection();
        schema.updateOne({_id:req.body.selectedRama.identificacion}, {$push:{ grupos: {nombre: req.body.nombreGrupo}}}, 
            function(error, info) {
                /*if(error)return res.json({success:false, error:"Se ha producido un error guardando"+error}) ;
                else{
                    return res.json({success: true});
                }*/
            }
        )
    }

    async modificarZona(req, schema, res){
        console.log(req)
        this.openConnection();
        schema.updateOne({_id:req.selectedZona.identificacion}, {$push:{ ramas: {nombre: req.nombreRama}}}, 
            function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar las ramas',
                    error
                });
                console.log("error: ",error)
            } else {
                res.json({
                    resultado: true,
                    info: info
                })
            }
        })
    }

}














// checks if connection with the database is successful