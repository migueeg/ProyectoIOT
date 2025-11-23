const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db.sqlite", (err) => {
    if (err) return console.error("Error al abrir la base de datos:", err);
    console.log("Base de datos conectada.");
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT NOT NULL,
            sensor TEXT NOT NULL,
            value TEXT NOT NULL
        )
    `);

    console.log("Tabla logs verificada.");
});

module.exports = db;