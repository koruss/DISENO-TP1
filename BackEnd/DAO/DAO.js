class DataSource {
    get Connect() {
        this.mongoose = require('mongoose');
        const dbroute =
            'mongodb+srv://kenitoUwU:1234@tp-diseno.hwnkz.mongodb.net/test?authSource=admin&replicaSet=atlas-j7zojs-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
        this.mongoose.connect(dbroute, { useNewUrlParser: true, useUnifiedTopology: true });
        return this.mongoose;
    }
}



class DAO {
    openConnection() {
        //////////////////////////////
        ///   MONGODB CONNECTION
        //////////////////////////////
        const dataSource = new DataSource();
        const connection = dataSource.Connect;

        let state = connection.connection;
        state.once('open', () => console.log('------->>> Conexion con MongoDB exitosa <<<------'));
        state.on('error', console.error.bind(console, '------->>> Mamendez Con MongoDB <<<------:'));

    }


    guardarZona(){
        
    }
}










// checks if connection with the database is successful