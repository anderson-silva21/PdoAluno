const { sequelize } = require("../models");
const models = require("../models");

async function createPedido(req,res){
    const{data, valor, formaPagamento, nome, observacao} = req.body;
    try{
        const produto = await models.Produtos.findByPk(req.params.id);
        if(!produto){
            return res.status(404);
        }

        const pedido = await models.ProdutoPedido.create({
            dataPedido: data,
            valorPedido: valor,
            formaPagamentoPedido: formaPagamento,
            nomePedido: nome,
            observacaoPedido: observacao,
        });

        return  res.json(pedido);
    }catch(error){
        return res.status(500).send(error);
    }
}
exports.createPedido = createPedido;