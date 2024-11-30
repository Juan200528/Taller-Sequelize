let DataTypes = require("sequelize"),
  sequelize = require("../config/database");

let Libro = sequelize.define("Libro", {
    titulo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disponibilidad: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    añoPublicacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cantidadTotal: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
      timestamps:false,
      tableName: "libro"
  }
);

module.exports = Libro;