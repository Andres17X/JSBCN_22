import express from 'express';



import { Alumne, Edicio, Matricula, Curs, seq as sequelize } from '../modelos/Models.js';

//Edicio.belongsToMany(Alumne, { through: Matricula, foreignKey: "edicions_id", otherKey: "alumnes_id" });
//Alumne.belongsToMany(Edicio, { through: Matricula, foreignKey: "alumnes_id", otherKey: "edicions_id" });
/*
Edicio.hasMany(Matricula, {foreignKey: "edicions_id"});
Matricula.belongsTo(Edicio, {foreignKey: "edicions_id"});
Alumne.hasMany(Matricula, {foreignKey: "alumnes_id"});
Matricula.belongsTo(Alumne, {foreignKey: "alumnes_id"});
*/

Alumne.belongsToMany(Edicio, { through: Matricula, foreignKey: "alumnes_id" });
Edicio.belongsToMany(Alumne, { through: Matricula, foreignKey: "edicions_id" });

Edicio.belongsTo(Curs, {foreignKey: "cursos_id" } )


const router = express.Router();

// GET lista de todos los edicions
// vinculamos la ruta /api/edicions a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_edicio...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}

router.get('/', function (req, res, next) {

    sequelize.sync().then(() => {

        Edicio.findAll({ include:[Alumne, Curs]})
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

        Edicio.findOne({ where: { id: req.params.id }, include:[Alumne, Curs] })
            .then(ed => res.json({
                ok: true,
                data: ed
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



router.post('/:id1/noualumne/:id2', function (req, res, next) {
    sequelize.sync().then(() => {

        let alumneid=req.params.id2;
        let edicioid=req.params.id1;

        Matricula.create({
            alumnes_id: alumneid,
            edicions_id: edicioid,
            preu: 200
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
