'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdutoPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Pedidos, {
        foreignKey: 'pedidosId',
        as: 'pedido',
      });
      this.belongsTo(models.Produtos, {
        foreignKey: 'produtosId',
        as: 'produto',
      });
    }
  }
  ProdutoPedido.init({
    quantidade: DataTypes.INTEGER,
    //id_Pedido: DataTypes.INTEGER,
    //id_Produto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProdutoPedido',
  });
  return ProdutoPedido;
};