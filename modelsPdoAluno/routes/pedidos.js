const { sequelize } = require("../models");
const models = require("../models");

async function createPedido(req,res){
    const{data, valor, formaPagamento, nome, observacao, cpf} = req.body;
    try{
        const produto = await models.Produtos.findByPk(req.params.id);
        if(!produto){
            return res.status(404);
        }

        const pedido = await models.Pedidos.create({
            data: data,
            valor: valor,
            formaPagamento: formaPagamento,
            nome: nome,
            observacao: observacao,
            cpf: cpf,
        });

        return  res.json(pedido);
    }catch(error){
        return res.status(500).send(error);
    }
}
exports.createPedido = createPedido;