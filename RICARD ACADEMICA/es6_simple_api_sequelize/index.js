//importamos/requerimos express y controladores
import express from "express";
import cors from "cors";

import alumnesRouter from './rutas/alumnesRouter.js';
import indexRouter from './rutas/indexRouter.js';
import edicionsRouter from './rutas/edicionsRouter.js';
import cursosRouter from './rutas/cursosRouter.js';

//instanciamos nueva aplicación express
const app = express();

//necesario para poder recibir datos en json
app.use(express.json());
app.use(cors());


//las rutas que empiecen por /api/alumnes se dirigirán a alumnesRouter
app.use('/', indexRouter);
app.use('/api/alumnes', alumnesRouter);
app.use('/api/edicions', edicionsRouter);
app.use('/api/cursos', cursosRouter);

//arranque del servidor
const port = 5000
app.listen(port, () => console.log(`App listening on port ${port}!`))
