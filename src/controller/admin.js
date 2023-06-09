const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
//vamos carregar nosso modelo 
require("../models/tarefas");
const Tarefas = mongoose.model("tarefas");


// ROTAS 

router.get('/',(req, res)=>{
    Tarefas.find().lean().then((tarefas) => {
        res.render("home", { tarefas: tarefas });
    });
});

router.get('/posts',(req,res)=>{
    res.send("Página de posts");
});

router.get('/categorias',(req,res)=>{
    res.send("Página de categorias");
});

module.exports = router;