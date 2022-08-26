import express from 'express';

import { DataTypes } from "sequelize";

import sequelize from "../loadSequelize.js";

const Curs = sequelize.define('Curs', {
    informacio: DataTypes.STRING

}, { tableName: 'cursos', timestamps: false });


//DEFINICION DEL MODELO
const Edicio = sequelize.define('Edicio', {
    titol: DataTypes.STRING,
    datainici: DataTypes.DATEONLY,
    CurId: {
        type: DataTypes.INTEGER,
        field: "CurId",
        references: {
            model: Curs,
            key: "id"
        }
    },

}, { tableName: 'edicions', timestamps: false });

Curs.hasMany(Edicio);



const router = express.Router();

// GET lista de todos los cursos
// vinculamos la ruta /api/cursos a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_curs...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}

router.get('/', function (req, res, next) {

    sequelize.sync().then(() => {

        Curs.findAll({ include:{model: Edicio} })
            //.then(cursos => res.json(cursos))
            .then(cursos => res.json({
                ok: true,
                data: cursos
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

// GET de un solo curs
router.get('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Curs.findOne({ where: { id: req.params.id } })
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



// POST, creació d'un nou curs
router.post('/', function (req, res, next) {
    sequelize.sync().then(() => {



        Curs.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))


    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});


// put modificació d'un curs
router.put('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Curs.findOne({ where: { id: req.params.id } })
            .then(curs_trobat =>
                curs_trobat.update(req.body)
            )
            .then(curs_modificat => res.json({
                ok: true,
                data: curs_modificat
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



// DELETE elimina l'curs id
router.delete('/:id', function (req, res, next) {

    sequelize.sync().then(() => {
        
        Curs.destroy({ where: { id: req.params.id } })
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
