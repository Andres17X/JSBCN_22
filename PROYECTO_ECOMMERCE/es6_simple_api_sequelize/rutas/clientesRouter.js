import express from 'express';

import { DataTypes } from "sequelize";

import sequelize from "../loadSequelize.js";


//DEFINICION DEL MODELO
const Facturas = sequelize.define('Facturas', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    numero: DataTypes.STRING,
    fecha: DataTypes.DATEONLY,
    direccion: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    cpostal: DataTypes.STRING,
    nombre: DataTypes.STRING


}, { tableName: 'facturas', timestamps: false });

const Cliente = sequelize.define('Cliente', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    direccion: DataTypes.STRING,
    poblacion: DataTypes.STRING,
    cpostal: DataTypes.STRING,
    password: DataTypes.STRING

}, { tableName: 'clientes', timestamps: false });

 //
// const Matricula = sequelize.define('Matricula', {
//     FacturasId: {
//         type: DataTypes.INTEGER,
//         field: "FacturasId",
//         references: {
//             model: Facturas,
//             key: "id"
//         }
//     },
//     ClienteID: {
//         field: "ClienteID",
//         type: DataTypes.INTEGER,
//         references: {
//             model: Cliente,
//             key: "id"
//         }
//     }
// }, { tableName: 'matricula', timestamps: false });

// Facturas.belongsToMany(Cliente, {through: Matricula});
// Cliente.belongsToMany(Facturas, {through: Matricula});
//



const router = express.Router();

// GET lista de todos los clientes
// vinculamos la ruta /api/clientes a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_cliente...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}

router.get('/', function (req, res, next) {

    sequelize.sync().then(() => {

        Cliente.findAll()
            //.then(clientes => res.json(clientes))
            .then(clientes => res.json({
                ok: true,
                data: clientes
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

// GET de un solo Cliente
router.get('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Cliente.findOne({ where: { id: req.params.id } })
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



// POST, creació d'un nou Cliente
router.post('/', function (req, res, next) {
    sequelize.sync().then(() => {



        Cliente.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))


    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});


// put modificació d'un Cliente
router.put('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        Cliente.findOne({ where: { id: req.params.id } })
            .then(cliente_trobat =>
                cliente_trobat.update(req.body)
            )
            .then(cliente_modificat => res.json({
                ok: true,
                data: cliente_modificat
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



// DELETE elimina l'cliente id
router.delete('/:id', function (req, res, next) {

    sequelize.sync().then(() => {
        
        Cliente.destroy({ where: { id: req.params.id } })
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
