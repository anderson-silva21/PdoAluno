async function getProduto(req, res){
    const produto = await models.Produtos.findByPk(req.params.id);
    if(!produto){
        return res.sendStatus(404);
    }
    res.json(produto);
}
exports.getProduto = getProduto;

async function createProduto(req,res){
    const{nome, preco, categoria} = req.body;
    try{
        const produto = await models.Produtos.create({
            nomeProduto: nome,
            precoProduto: preco,
            categoriaProduto: categoria,
        });
        return res.json(produto);
    } catch(error){
        res.status(500).send(error);
    }
}
exports.createProduto = createProduto;