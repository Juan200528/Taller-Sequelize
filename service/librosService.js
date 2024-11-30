const Libro = require("../models/librosModels");

class LibroService {
  static async obtenerLibros(){
    try{
      let respuesta = await Libro.findAll();
      return respuesta;
    } catch(error) {
      console.log(error);
    }
  }
  static async crearLibro(body){
    try{
      let respuesta = await Libro.create(body);
      return respuesta;
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarLibro(id, body){
    try{
      let existsLibro = await Libro.findByPk(id);
      if(!existsLibro){
        throw new Error("Resultado no encontrados");
      }else{
        let libroUpdate = await existsLibro.update(body, {
          where: {id}
        });
        await libroUpdate.save();
        console.log("Estado actualizado")
        return existsLibro;
      }
    } catch(error) {
      return error.message
    }
  }
  static async eliminarLibro(id){
    try{
      let existsLibro = await Libro.findByPk(id);
      if(existsLibro == null){
        throw new Error("Resultado no encontrados");
      }else{
        let libroEliminado = await existsLibro.destroy();
        await libroEliminado.save();
        console.log("Estado eliminado");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }
  static async obtenerLibro(id){
    try{
      let respuesta = await Libro.findByPk(id);
      if(!respuesta){
        throw new Error("No se ha encontrado el libro");
      }else{
        return respuesta;
      }
    } catch(error) {
      return error.message;
    }
  }
}

module.exports = LibroService;