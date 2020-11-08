const Zona = require("../Schemas/ZonaSchema");
const Rama = require("../Schemas/RamaSchema");
const Grupo= require("../Schemas/GrupoSchema");
const Persona = require("../Schemas/PersonSchema");
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

    async allZonas(req,res){
        this.openConnection();
        Zona.find({},(err,zonas)=>{
            if(err) return console.log(err);
            //console.log(zonas)
            res.send(zonas);
            res.end();
        })
    }

    async allRamas(req,res){
        this.openConnection();
        Rama.find({},(err,ramas)=>{
            if(err) return console.log(err);
            // console.log(ramas)
            res.send(ramas);
            res.end();
        })
    }

    async allGrupos(req,res){
        this.openConnection();
        Grupo.find({},(err,grupo)=>{
            if(err) return console.log(err);
            // console.log(ramas)
            res.send(grupo);
            res.end();
        })
    }

    async allPersona(req,res){
        this.openConnection();
        Persona.find({},(err,personas)=>{
            if(err) return console.log(err);
            // console.log(ramas)
            res.send(personas);
            res.end();
        })
    }


    

}










// checks if connection with the database is successful