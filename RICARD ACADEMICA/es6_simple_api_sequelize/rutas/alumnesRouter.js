import express from 'express';

import {sequelize} from "../loadSequelize.js";

import { Alumne, Edicio, Matricula } from '../modelos/Models.js';

Edicio.belongsToMany(Alumne, { through: Matricula, foreignKey: "alumnes_id" });
Alumne.belongsToMany(Edicio, { through: Matricula, foreignKey: "edicions_id" });


const router = express.Router();

// GET lista de todos los alumnes
// vinculamos la ruta /api/alumnes a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_alumne...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}

router.get('/', function (req, res, next) {

    sequelize.sync().then(() => {

        Alumne.findAll({ include: { model: Edicio } })
            //.then(alumnes => res.json(alumnes))
            .then(alumnes => res.json({
                ok: true,
                data: alumnes
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

});

// GET de un solo alumne
router.get('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Alumne.findOne({ where: { id: req.params.id },  include: { model: Edicio } })
            .then(al => res.json({
                ok: true,
                data: al
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });
});



// POST, creació d'un nou alumne
router.post('/', function (req, res, next) {
    sequelize.sync().then(() => {

        Alumne.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))


    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});


// put modificació d'un alumne
router.put('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Alumne.findOne({ where: { id: req.params.id } })
            .then(alumne_trobat =>
                alumne_trobat.update(req.body)
            )
            .then(alumne_modificat => res.json({
                ok: true,
                data: alumne_modificat
            }))
            .catch(error => res.json({
                ok: false,
                error: error.message
            }));

    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});



// DELETE elimina l'alumne id
router.delete('/:id', function (req, res, next) {

    sequelize.sync().then(() => {

        Alumne.destroy({ where: { id: req.params.id } })
            .then((data) => res.json({ ok: true, data }))
            .catch((error) => res.json({ ok: false, error }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

});


export default router;
