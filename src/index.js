const express = require('express');
const app = express();

const cors = require("cors");
const {dbConnection} = require('./config/config');

const PORT = process.env.PORT

app.use( express.json());
app.use( cors());

app.use('/api', require('./routes/auth.routes'));


dbConnection();

app.listen(PORT, function(){
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});