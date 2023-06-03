// Carregando módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const path =require('path');
const app = express();

const rota_tarefas =require('./controller/tarefasController');
//Configurações

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// arquivos estaticos
app.use('/bootstrapStyle', express.static('public/css/bootstrap/css'));
app.use('/bootstrapScript', express.static('public/css/bootstrap/js'));
app.use('/bootstrapIcons', express.static('public/css/bootstrap/icons/font'));
app.use('/style', express.static('public/css'));

app.use('/images', express.static('public/img'));
app.use('/fonts', express.static('public/fonts'));



// //Mongoose

// //Rotas
// app.use('/admin', admin);
// //rota alternativa
// app.get('/', (req, res) => {
//     res.send("Estou na rota principal")
// });

//Remanejando Rotas de tarefas
app.use('/rota_tarefas', rota_tarefas);

// Outros
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor Rodando");
});