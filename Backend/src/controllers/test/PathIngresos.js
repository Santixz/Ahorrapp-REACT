const express = require("express");
const app = express();

app.get('/ingresos/:id', (res, req) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ error: 'El ID del ingreso debe ser un número entero positivo' });
    }
    return res.json({ id, nombre: 'Ingreso de prueba.' })
});