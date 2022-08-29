import express from 'express';
import { DataTypes } from "sequelize";

import sequelize from "../loadSequelize.js";


//DEFINICION DEL MODELO
const Edicio = sequelize.define('Edicio', {
    titol: DataTypes.STRING,
    datainici: DataTypes.DATEONLY

}, { tableName: 'edicions', timestamps: false });

const Cliente = sequelize.define('Cliente', {
    nom: DataTypes.STRING,
    datanaix: DataTypes.DATEONLY,
    email: DataTypes.STRING

}, { tableName: 'clientes', timestamps: false });


const Matricula = sequelize.define('Matricula', {
    EdicioId: {
        type: DataTypes.INTEGER,
        field: "EdicioId",
        references: {
            model: Edicio,
            key: "id"
        }
    },
    ClienteId: {
        field: "ClienteID",
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: "id"
        }
    }
}, { tableName: 'matricula', timestamps: false });

Edicio.belongsToMany(Cliente, {through: Matricula});
Cliente.belongsToMany(Edicio, {through: Matricula});


const router = express.Router();

// GET lista de todos los edicions
// vinculamos la ruta /api/edicions a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_edicio...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}

router.get('/', function (req, res, next) {

    sequelize.sync().then(() => {

        Edicio.findAll({ include:{model: Cliente} })
            //.then(edicions => res.json(edicions))
            .then(edicions => res.json({
                ok: true,
                data: edicions
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

// GET de un solo edicio
router.get('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Edicio.findOne({ where: { id: req.params.id }, include:{model: Cliente} })
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

router.post('/:id1/noucliente/:id2', function (req, res, next) {
    sequelize.sync().then(() => {

        Matricula.create({
            ClienteId: req.params.id2,
            EdicioId: req.params.id1
        })
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});

// POST, creació d'un nou edicio
router.post('/', function (req, res, next) {
    sequelize.sync().then(() => {

        Edicio.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});


// put modificació d'un edicio
router.put('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Edicio.findOne({ where: { id: req.params.id } })
            .then(edicio_trobat =>
                edicio_trobat.update(req.body)
            )
            .then(edicio_modificat => res.json({
                ok: true,
                data: edicio_modificat
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



// DELETE elimina l'edicio id
router.delete('/:id', function (req, res, next) {

    sequelize.sync().then(() => {
        
        Edicio.destroy({ where: { id: req.params.id } })
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
