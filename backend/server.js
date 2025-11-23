const express = require("express");
const cors = require("cors");
const db = require("./database");

const logsRoutes = require("./routes/logs");
const motorRoutes = require("./routes/motor");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/logs", logsRoutes);
app.use("/motor", motorRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Servidor backend corriendo en http://localhost:" + PORT);
});