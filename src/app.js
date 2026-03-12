const express = require("express");
const app = express();

// Middleware para ler JSON no body das requisições
app.use(express.json());

const eventoRoutes = require('./routes/eventoRoutes');
const participanteRoutes = require('./routes/participanteRoutes');
const inscricaoRoutes = require("./routes/inscricaoRoutes");

// rotas
app.use('/eventos', eventoRoutes);
app.use('/participantes', participanteRoutes);
app.use("/inscricoes", inscricaoRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "API de Notificações",
        rotas: {
            eventos: "/eventos",
            participantes: "/participantes",
            inscricoes: '/inscricoes'
        },
    });
});

module.exports = app;