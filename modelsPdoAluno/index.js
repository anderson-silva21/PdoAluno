const express = require('express');
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");

const app = express();
const models = require('./models');
const bodyParser = require('body-parser');
const { default: adminjs, Router } = require('adminjs');

// Registrar o adapter Sequelize para o AdminJS
AdminJS.registerAdapter(AdminJSSequelize);


models.sequelize.sync().then(function () {
    console.log("A base de dados foi sincronizada!")
   }).catch(function (err) {
    console.log(" > Existe um problema em sincronizar a base de dados!", err);
   });
/*
app.get('/', function (req, res){
    res.send("Seja bem vindo ao P do Aluno");
});*/

const adminJs = new AdminJS({
    databases: [models.sequelize],
    resources: [
    models.Pedidos,
    models.ProdutoPedido,
    models.Relatorios,
    models.ItemRelatorio,
    models.Produtos,

    //models.Receitas,
    ],
    rootPath: '/admin',
   });
// Rota AdminJS
const router = AdminJSExpress.buildRouter(adminJs);
app.use(bodyParser.json({type: 'application/json'}));
app.use(adminJs.options.rootPath, router);

app.listen(8000, function(){
    console.log("Express server iniciado!");
})

app.get('/', async function(req, res){
    const pedidos = await models.Pedidos.findAll();
    res.send("<pre>" + JSON.stringify(pedidos, undefined, 4) + "<pre>");
});
  
app.get('/pedidos/:id', async function(req, res){
    var pedidos = await models.Pedidos.findByPk(req.params.id);
    if(!pedidos){
        return res.sendStatus(404);
    }
    res.send("<pre>" + JSON.stringify(pedidos, undefined, 4) + "<pre>");
});