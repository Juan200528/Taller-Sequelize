const LibroService = require("../service/librosService");

class Libro {
  static async obtenerLibros(req, res){
    try{
      let respuesta = await LibroService.obtenerLibros();
      if(!respuesta){
        throw new Error("Ningun registro");
      }else{
        console.log("Obtenido")
        res.json({respuesta});
      }
    } catch(error) {
      console.log(error)
      res.json({error: error.message});
    }
  }
  static async crearLibro(req, res){
    try{
      let respuesta = await LibroService.crearLibro(req.body);
      if(!respuesta){
        throw new Error("Error al crear usuario");
      }else{
        console.log(respuesta);
        res.json({respuesta});
        return respuesta;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarLibro(req, res){
    try{
      let respuesta = await LibroService.actualizarLibro(req.params.id, req.body);
      if(!respuesta){
        throw new Error("No existe el usuario")
      }else{
        res.json({respuesta});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminarLibro(req, res){
    try{
      let respuesta = await LibroService.eliminarLibro(req.params.id);
      if(respuesta.resp == false){
        throw new Error("No existe el libro");
      }else{
        res.json({msg: "Usuario eliminado correctamente"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerLibro(req, res){
    try{
      let respuesta = await LibroService.obtenerLibro(req.params.id);
      if(!respuesta){
        throw new Error("No existe el libro");
      }else{
        res.json(respuesta);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
  
}

module.exports = Libro;