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
    valor: DataTypes.NUMBER,
    formaPagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};