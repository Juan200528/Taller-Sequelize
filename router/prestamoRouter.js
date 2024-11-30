const route = require("express").Router();
const prestamosController = require("../controller/prestamosController");

route.get("/prestamos", prestamosController.obtenerPrestamos);
route.post("/prestamos", prestamosController.crearPrestamo);
route.put("/prestamos/:id", prestamosController.actualizarPrestamo);
route.delete("/prestamos/:id", prestamosController.eliminarPrestamo);
route.get("/prestamos/:id", prestamosController.obtenerPrestamo);
route.get("/listadelibros", prestamosController.listadelibros);
route.get("/inf", prestamosController.InfLibros);
route.get("/recientes", prestamosController.prestamosRecientes);

module.exports = route;