const  {Client} = require("pg");

const dbConnection = async () => {
    try{
        const client = new Client({
            connectionString: process.env.DB_URL,
        });
        await client.connect();
        console.log("Base de datos inicializada exitosamente");
        return client

    }catch (error){
        console.log(error);
        throw new Error(' Error al inicializar la base de datos');   
    }
}


module.exports = {
    dbConnection
}