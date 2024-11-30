const Usuario = require("../models/usuariosModels");

class UsuarioService {
  static async obtenerUsuarios(){
    try{
      let respuesta = await Usuario.findAll();
      return respuesta;
    } catch(error) {
      console.log(error);
    }
  }
  static async crearUsuario(body){
    try{
      let respuesta = await Usuario.create(body);
      return respuesta;
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarUsuario(id, body){
    try{
      let existsUsuario = await Usuario.findByPk(id);
      if(!existsUsuario){
        throw new Error("Resultados no encontrados");
      }else{
        let UsuarioUpdate = await existsUsuario.update(body, {
          where: {id}
        });
        await UsuarioUpdate.save();
        console.log("Estado actualizado")
        return existsUsuario;
      }
    } catch(error) {
      return error.message
    }
  }
  static async eliminarUsuario(id){
    try{
      let existsUsuario = await Usuario.findByPk(id);
      if(existsUsuario == null){
        throw new Error("Resultados no encontrados");
      }else{
        let UsuarioEliminado = await existsUsuario.destroy();
        await UsuarioEliminado.save();
        console.log("Estado eliminado");
        return true;
      }
    } catch(error) {
      return {error: error.message, resp: false}
    }
  }
  static async obtenerUsuario(id){
    try{
      let respuesta = await Usuario.findByPk(id);
      if(!respuesta){
        throw new Error("No hemos encontrado el usuario");
      }else{
        return respuesta;
      }
    } catch(error) {
      return error.message;
    }
  }
}

module.exports = UsuarioService;