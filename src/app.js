// src/app.js
const express = require("express");
const app = express();
// Middleware para ler JSON no body das requisições
app.use(express.json());
// Rota de teste — vamos remover depois
const eventoRoutes = require('./routes/eventoRoutes');
app.use('/eventos', eventoRoutes);  
app.get("/", (req, res) => {
    res.json({
        message: "API de Notificações",
        rotas: {
            eventos: "/eventos",
        },
    });
});
module.exports = app;