const route = require("express").Router();
const Libro = require("../controller/librosController");

route.get("/libros", Libro.obtenerLibros);
route.post("/libros", Libro.crearLibro);
route.put("/libros/:id", Libro.actualizarLibro);
route.delete("/libros/:id", Libro.eliminarLibro);
route.get("/libros/:id", Libro.obtenerLibro);

module.exports = route;