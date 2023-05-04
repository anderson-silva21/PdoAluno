async function getRelatorio(req, res){
    const relatorio = await ModelTypeScript.Relatorios.findByPk(req.params.id);
    if(!relatorio){
        return res.sendStatus(404);
    }
     res.json(produto);
}
exports.getRelatorio = getRelatorio;

async function createRelatorio(req, res){
    const{inicio, fim, total} = req.body;
    try{
        const relatorio = await models.Relatorios.create({
            dataInicio: inicio,
            dataFim: fim,
            valorTotal: total,
        });
        return res.json(relatorio);
    }catch(error){
        res.status(500).send(error);
    }
}
exports.createRelatorio = createRelatorio;