let DataTypes = require("sequelize"),
  Sequelize = require("../config/database");
const Usuario = require("./usuariosModels");
const Libro = require("./librosModels");

const Prestamo = Sequelize.define("Prestamo", {
  fechaPrestamo:{
    type: DataTypes.DATE,
    allowNull: true
  },
  fechaDevolucion:{
    type: DataTypes.DATE,
    allowNull: true
  },
  estado:{
    type: DataTypes.BOOLEAN,
    default: false
  },
  registroPrestamo:{
    type: DataTypes.DATE,
    default: DataTypes.NOW
  },
  idUsuario:{
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  idLibro:{
    type: DataTypes.INTEGER,
    allowNull: true
  }
},
{
  timestamps:false,
  tableName: "prestamo"
});

Prestamo.belongsTo(Libro, {
  foreignKey: "idLibro"
});


Prestamo.belongsTo(Usuario, {
  foreignKey: "idUsuario"
});


module.exports = Prestamo;