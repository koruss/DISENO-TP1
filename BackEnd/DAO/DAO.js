const Zona = require("./ZonaSchema");
const DataSource= require('./DataSource');




module.exports= class DAO {
    dataSource = new DataSource();
    openConnection() {
        //////////////////////////////
        ///   MONGODB CONNECTION
        //////////////////////////////

        connection = dataSource.Connect;

        state = connection.connection;
        state.once('open', () => console.log('------->>> Conexion con MongoDB exitosa <<<------'));
        state.on('error', console.error.bind(console, '------->>> Mamendez Con MongoDB <<<------:'));

    }


    guardarZona(info){
        const connection = this.dataSource.Connect;
        let state = connection.connection;
        state.once('open', () => console.log('------->>> Conexion con MongoDB exitosa <<<------'));
        state.on('error', console.error.bind(console, '------->>> Mamendez Con MongoDB <<<------:'));
        console.log("Llegue al DAO");
        console.log(info)
        let zona = new Zona();
        zona.nombreZona=info;
        zona.save((err)=>{
            if(err)return res.json({success:false, error:"Se ha producido un error guardando"+err});
            else{
                console.log("Algo hice");
            }
        });
        
    }
}










// checks if connection with the database is successful