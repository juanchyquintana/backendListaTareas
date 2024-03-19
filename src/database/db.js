import mongoose from "mongoose";
import 'dotenv/config';

const database = process.env.MONGO_URL;

mongoose.connect(database);

const datosConexion = mongoose.connection;
datosConexion.once('open', () => {
    console.log('Base de Datos Conectada!')
})