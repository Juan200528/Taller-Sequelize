const UsuarioService = require("../service/usuarioService");

class Usuario {
  static async obtenerUsuarios(req, res){
    try{
      let respuesta = await UsuarioService.obtenerUsuarios();
      if(!respuesta){
        throw new Error("No hay registros");
      }else{
        res.json(respuesta);
      }
    } catch(error) {
      console.log(error)
      res.json({error: error.message});
    }
  }
  static async crearUsuario(req, res){
    try{
      let respuesta = await UsuarioService.crearUsuario(req.body);
      if(!respuesta){
        throw new Error("Error al crear Usuario");
      }else{
        console.log(respuesta);
        res.json({respuesta});
        return respuesta;
      }
    } catch(error) {
      console.log(error);
    }
  }
  static async actualizarUsuario(req, res){
    try{
      let respuesta = await UsuarioService.actualizarUsuario(req.params.id, req.body);
      if(!respuesta){
        throw new Error("Usuario no encontrado")
      }else{
        res.json({respuesta});
      }
    } catch(error) {
      res.json({error})
    }
  }
  static async eliminarUsuario(req, res){
    try{
      let respuesta = await UsuarioService.eliminarUsuario(req.params.id);
      if(respuesta.resp == false){
        throw new Error("Usuario no encontrado");
      }else{
        res.json({msg: "Usuario eliminado correctamente"});
      }
    } catch(error) {
      res.json({error: error.message});
    }
  }
  static async obtenerUsuario(req, res){
    try{
      let respuesta = await UsuarioService.obtenerUsuario(req.params.id);
      if(!respuesta){
        throw new Error("Usuario no encontrado");
      }else{
        res.json(respuesta);
      }
    } catch(error) {
      res.json({err: error.message})
    }
  }
}

module.exports = Usuario;