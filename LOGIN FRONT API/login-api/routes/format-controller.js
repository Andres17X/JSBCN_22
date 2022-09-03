const express = require('express');

const { Format } = require('../models/index');
const router = express.Router();


//get de tots els formats
router.get('/', (req, res, next) => {
  Format.findAll()
    .then(lista => res.status(200).json({ ok: true, data: lista }))
    .catch(err => res.status(400).json({ ok: false, error: err.parent.sqlMessage }));
});

//obtener un registro
router.get('/:id', (req, res, next) => {
  const idABuscar = req.params.id;

  Format.findOne({
    where: {
      id: idABuscar
    }
  })
    .then(lista => res.status(200).json({ ok: true, data: lista }))
    .catch(err => res.status(400).json({ ok: false, error: err.parent.sqlMessage }));
});


// modificar
router.put('/:id', (req, res, next) => {
  const idABuscar = req.params.id;

  Format.findOne({
    where: {
      id: idABuscar
    }
  })
    .then(fo => fo.update(req.body))
    .then(() => res.json({ ok: true }))
    .catch((error) => res.json({ ok: false, err: error }))
})




//crea registre a format
router.post('/', (req, res, next) => {
  Format.create(req.body)
    .then(() => res.json({ ok: true }))
    .catch((error) => res.json({ ok: false, err: error }))
})




//obtener un registro
router.delete('/:id', (req, res, next) => {
  const idABuscar = req.params.id;

  Format.destroy({
    where: {
      id: idABuscar
    }
  })
    .then(lista => res.status(200).json({ ok: true }))
    .catch(err => res.status(400).json({ ok: false, error: err.parent.sqlMessage }));
});



module.exports = router;