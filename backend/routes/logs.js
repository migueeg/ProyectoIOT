const express = require("express");
const router = express.Router();
const db = require("../database");

router.post("/", (req, res) => {
    const { sensor, value } = req.body;

    if (!sensor || !value) {
        return res.status(400).json({ error: "Datos incompletos" });
    }

    const timestamp = new Date().toISOString();

    db.run(
        "INSERT INTO logs (timestamp, sensor, value) VALUES (?, ?, ?)",
        [timestamp, sensor, value],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });

            res.json({ message: "Log insertado correctamente" });
        }
    );
});

router.get("/", (req, res) => {
    db.all("SELECT * FROM logs ORDER BY id DESC LIMIT 50", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

module.exports = router;