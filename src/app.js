const express = require("express");
const swaggerUi = require("swagger-ui-express"); // Importa a interface visual [cite: 56]
const swaggerSpec = require("./swagger");        // Importa a configuração que criamos acima [cite: 57]

const app = express();

app.use(express.json());

// Rota onde a documentação vai aparecer [cite: 59]
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Suas rotas que já existem...
const eventoRoutes = require("./routes/eventoRoutes");
const participanteRoutes = require("./routes/participanteRoutes");
const inscricaoRoutes = require("./routes/inscricaoRoutes");

app.use("/eventos", eventoRoutes);
app.use("/participantes", participanteRoutes);
app.use("/inscricoes", inscricaoRoutes);

module.exports = app;