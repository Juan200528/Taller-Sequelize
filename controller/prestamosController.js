const PrestamoService = require("../service/prestamosService");

class PrestamoController {
  static async obtenerPrestamos(req, res){
    try{
      let respuesta = await PrestamoService.obtenerPrestamos();
      res.json(respuesta);
    } catch(error) {
      console.log(error)
    }
  }
  static async crearPrestamo(req, res){
    try{
      let respuesta = await PrestamoService.crearPrestamo(req.body);
      if(!respuesta){
        throw new Error("Error al crear Prestamo");
      }else{
        console.log(respuesta);
        res.json({respuesta});
        return respuesta;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarPrestamo(req, res){
    try{
      let respuesta = await PrestamoService.actualizarPrestamo(req.params.id, req.body);
      if(!respuesta){
        throw new Error("Prestamo no encontrado");
      }else{
        res.json({respuesta});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminarPrestamo(req, res){
    try{
      let respuesta = await PrestamoService.eliminarPrestamo(req.params.id);
      if(respuesta.resp == false){
        throw new Error("Prestamo no encontrado");
      }else{
        res.json({msg: "Prestamo eliminado correctamente"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerPrestamo(req, res){
    try{
      let respuesta = await PrestamoService.obtenerPrestamo(req.params.id);
      if(!respuesta){
        throw new Error("Prestamo no encontrado");
      }else{
        res.json(respuesta);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
  static async listadelibros(req, res){
    try{
      let respuesta = await PrestamoService.listadelibros();
      res.json(respuesta);
    } catch(error) {
      res.json({err: error})
    }
  }
  static async InfLibros(req, res){
    try{
      let respuesta = await PrestamoService.InfLibros();
      const contador = respuesta.reduce((acc, prestamo) => {
        acc[prestamo.idLibro] = (acc[prestamo.idLibro] || 0) + 1;
        return acc;
      }, {});

      const repetidos = respuesta.filter((prestamo) => contador[prestamo.idLibro] > 1);

      res.json(repetidos)
    } catch(error) {
      res.json({err: error})
    }
  }
  static async prestamosRecientes(req, res){
    try{
      let respuesta = await PrestamoService.prestamosRecientes();
      res.json(respuesta)
    } catch(error) {
      res.json({err: error})
    }
  }
}

module.exports = PrestamoController;