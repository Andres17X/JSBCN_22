// importem llibreries utilitzades
import express from 'express';
import cors from 'cors';

// carreguem array de motos definit a motos.js
import CITAS from './citas.js';

// definim port on e'executarà el servidor
const PORT = 5001;

// creem express app
const app = express();

// activem cors per no tenir problemes des del front
app.use(cors());

// definim public com a ruta per axius estàtics
app.use(express.static('public'))

// ruta /motos retorna tota la llista
app.get('/citas', function (req, res) {
    let random = Math.floor ( Math.random() * CITAS.length)
    res.json(CITAS[random])
})

// ruta /motos/honda retorna només les honda




// iniciem el servidor al port indicat
app.listen(PORT, function () {
    console.log('Escoltant port ' + PORT)
})
