const express = require("express");
const app = express();
app.use(express.json());

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", express.static("public"));

const deckRoutes = require('./routes/deckRoutes');
app.use('/main_menu', deckRoutes);

const testRoutes = require("./routes/myTestRoutes");
app.use("/", testRoutes);