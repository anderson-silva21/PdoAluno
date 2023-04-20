'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedidos.init({
    
    data: DataTypes.DATE,
    valor: DataTypes.FLOAT,
    formaPagamento: DataTypes.STRING,
    nome: DataTypes.STRING,
    observacao: DataTypes.STRING,
    cpf: {
      type: DataTypes.STRING,
      validate:{
      len: 11,
      msg: "Coloca um cpf de verdade.",
      allowNull: false,
    }
    }
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};
