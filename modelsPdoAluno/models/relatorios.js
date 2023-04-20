'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relatorios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relatorios.init({
    dataInicio: DataTypes.DATE,
    dataFim: DataTypes.DATE,
    valorTotal: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Relatorios',
  });
  return Relatorios;
};