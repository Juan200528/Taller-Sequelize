const route = require("express").Router();
const Usuario = require("../controller/usuariosController");

route.get("/usuarios", Usuario.obtenerUsuarios);
route.post("/usuarios", Usuario.crearUsuario);
route.put("/usuarios/:id", Usuario.actualizarUsuario);
route.delete("/usuarios/:id", Usuario.eliminarUsuario);
route.get("/usuarios/:id", Usuario.obtenerUsuario);

module.exports = route;