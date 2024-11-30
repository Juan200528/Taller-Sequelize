const Libro = require("../models/librosModels");
const Prestamo = require("../models/prestamosModels");
const Usuario = require("../models/usuariosModels");

class PrestamoService {
  static async obtenerPrestamos(){
    try{
      let respuesta = await Prestamo.findAll({
        include: [
          {
            model: Libro,
            attributes: ["titulo", "autor"]
          },
          {
            model: Usuario,
            attributes: ["nombre", "apellido"]
          }
        ]
      });
      return respuesta;
    } catch(error) {
      console.log(error);
    }
  }
  static async crearPrestamo(body){
    try{
      let respuesta = await Prestamo.create(body);
      return respuesta;
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarPrestamo(id, body){
    try{
      let existPrestamo = await Prestamo.findByPk(id);
      if(!existPrestamo){
        throw new Error("Resultados no encontrados");
      }else{
        let prestamoUpdate = await existPrestamo.update(body, {
          where: {id}
        });
        await prestamoUpdate.save();
        console.log("Estado actualizado")
        return existPrestamo;
      }
    } catch(error) {
      return error.message
    }
  }
  static async eliminarPrestamo(id){
    try{
      let existPrestamo = await Prestamo.findByPk(id);
      if(existPrestamo == null){
        throw new Error("Resultados no encontrados");
      }else{
        let prestamoEliminado = await existPrestamo.destroy();
        await prestamoEliminado.save();
        console.log("Estado eliminado");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }
  static async obtenerPrestamo(id){
    try{
      let respuesta = await Prestamo.findByPk(id);
      if(!respuesta){
        throw new Error("No hemos encontrado el prestamo");
      }else{
        return respuesta;
      }
    } catch(error) {
      return error.message;
    }
  }
  static async listadelibros(){
    try{
      let respuesta = await Prestamo.findAll({
        include: [
          {
            model: Libro,
            attributes: ["titulo", "autor", "disponibilidad"]
          }
        ],
        attributes: ["estado", "fechaDevolucion"]
      })
      return respuesta;
    } catch(error) {
      console.log(error)
    }
  }
  static async InfLibros(req, res){
    try {
        const respuesta = await Prestamo.findAll();
        return respuesta;
    } catch (error) {
      console.error(error);
    }
  }
  static async prestamosRecientes(req, res){
    try {
        const respuesta = await Prestamo.findAll({
          order: [
            ['fechaPrestamo', 'DESC']
          ],
        });
        return respuesta;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PrestamoService;