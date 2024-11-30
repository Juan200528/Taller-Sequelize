const express = require("express");
const app = express();


const librosRouter = require("./router/librosRouter");
const usuarioRouter = require("./router/usuarioRouter");
const prestamoRouter= require("./router/prestamoRouter");

const sequelize = require("./config/database");

require("dotenv").config();
const PORT = process.env.PORT;


app.use( express.json() );

// Rutas
app.use("/api", librosRouter);
app.use("/api", usuarioRouter);
app.use("/api", prestamoRouter);

const startServerDB = async () => {
  try{
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Corriendo servidor en: http://localhost:${PORT}`));
  } catch(error) {
    console.log(`Error en la Base de Datos: ${error}`);
  }
}

startServerDB();