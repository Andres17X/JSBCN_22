//importamos/requerimos express
const express = require('express');
const cors = require('cors');

//importamos los controladores que contienen las definiciones de las rutas
const usuariController = require('./routes/usuari-controller');
const indexController = require('./routes/index-controller');
const articleController = require('./routes/article-controller');
const formatController = require('./routes/format-controller');
const { autentica } = require('./routes/middleware');

//creamos una nueva aplicación express
const app = express();


app.use(express.json()); //necesario para poder recibir datos en json
app.use(cors()); //evita problemas al conectar desde otro servidor

//ruta estática para imágenes
app.use("/img", express.static('uploads'));



//las ruta "/" se gestiona en indexController
app.use('/', indexController);
app.use('/api/usuari', usuariController);
app.use('/api/article', articleController);
app.use('/api/format', formatController);

//arranque del servidor
const port = 3030
app.listen(port, () => console.log(`Express en puerto ${port}!`))
