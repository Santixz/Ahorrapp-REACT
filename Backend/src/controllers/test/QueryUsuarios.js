const mysql = require("mysql2");
const express = require("express");
const app = express();

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'AhorrApp',
    password: 'Ah0rrApp_2026!',
    database: 'SEproyectoNA'
});

conexion.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

