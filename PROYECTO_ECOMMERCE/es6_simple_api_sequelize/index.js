//importamos/requerimos express y controladores
import express from "express";
import cors from "cors";

import clientesRouter from './rutas/clientesRouter.js';
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
app.use('/api/clientes', clientesRouter);
app.use('/api/edicions', edicionsRouter);
app.use('/api/cursos', cursosRouter);

//arranque del servidor
const port = 3001
app.listen(port, () => console.log(`App listening on port ${port}!`))
