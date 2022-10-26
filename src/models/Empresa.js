const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Empresa', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    identificacion: {
      type: DataTypes.BIGINT
    },
    nit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empleados: {
      type: DataTypes.INTEGER
    },
    razonSocial: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: {
      type: DataTypes.TEXT
    },
    aprobada: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    rechazada : {
      type : DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  },
    {
      createdAt: false,
      updatedAt: false
    });
};

