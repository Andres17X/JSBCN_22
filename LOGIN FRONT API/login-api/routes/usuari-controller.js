const express = require('express');
const {autentica, autError} = require('./middleware');

//bcrypt es un modulo que nos permite encriptar en una dirección
const bcrypt = require('bcrypt');

const model = require('../models/index');
const Usuari = model.Usuari;

const jsonwebtoken = require('jsonwebtoken');
const Config = require('./config');

const { secretKey, expiredAfter } = Config;

const router = express.Router();


router.post('/login', (req, res) => {
	const response = {};
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ ok: false, msg: "email o password no rebuts" });
  }

  Usuari.findOne({ where: { email } })
    .then((usuari) => {

      if (usuari && bcrypt.compareSync(password, usuari.password)) {
        return usuari;
      } else {
        throw "usuari/password invalids";
      }
    })
    .then(usuari => {
        response.token = jsonwebtoken.sign(
          {
            expiredAt: new Date().getTime() + expiredAfter,
            email,
            perfil: usuari.perfil,
            idioma: usuari.idioma,
            nom:usuari.nom,
            id: usuari.id,
          },
          secretKey
        );
        response.ok=true;
    res.json(response);
	})
  .catch(err => res.status(400).json({ ok: false, msg: err }))
	
});




/* POST registro de usuario */
router.post('/registre', function (req, res, next) {
  const hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash;
  Usuari.create(req.body)
    .then(item => res.json({ ok: true, data: item }))
    .catch((error) => res.json({ ok: false, error }))
});



/* POST CHECK LOGIN */
router.get('/checktoken', [autentica, autError], (req, res) => {
  res.status(200).json({
    ok: true,
    token: req.token});
});

router.get('/open', (req, res) => {
  res.status(200).json({
    ok: true,
    data: "TOTHOM POT VEURE AIXÒ"});
});


router.get('/secret', [autentica, autError], (req, res) => {
  res.status(200).json({
    ok: true,
    data: "EL NÚMERO SECRET ÉS 42"});
});




module.exports = router;