'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class ItemRelatorio extends Model {
    static associate(models) {
      this.belongsTo(models.Relatorios, {
        foreignKey: 'relatorioId',
        as: 'relatorio',
      });
      this.belongsTo(models.Pedidos, {
        foreignKey: 'pedidosId',
        as: 'pedido',
      });
    }}
    ItemRelatorio.init({
      quantidade: DataTypes.INTEGER,
      valorUnitario: DataTypes.DECIMAL(10, 2),
    }, {
      sequelize,
      modelName: 'ItemRelatorio',
    });

};

module.exports = ItemRelatorio;