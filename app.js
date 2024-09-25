const express = require('express');
const bodyParser = require('body-parser');

const projectRouters = require('./routes/projectRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/project', projectRouters);

app.use((req, res, next) => {
    res.status(404).json({code: 404, message: 'Ruta no encontrada'});
});//middleware para manejar las rutas inexistentes

module.exports = app;