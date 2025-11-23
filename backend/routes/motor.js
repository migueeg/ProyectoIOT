const express = require("express");
const router = express.Router();

let motorState = false;

router.post("/toggle", (req, res) => {
    motorState = !motorState;
    console.log("Motor ahora está:", motorState ? "ENCENDIDO" : "APAGADO");
    res.json({ motor: motorState });
});

router.get("/", (req, res) => {
    res.json({ motor: motorState });
});

module.exports = router;