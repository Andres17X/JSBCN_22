const express = require('express');
const { autentica, autError } = require('./middleware');

const { Article } = require('../models/index');
const router = express.Router();
const multer = require('multer');

//multer es un plugin que facilita la lectura de archivos procedentes de forms
//aquí se inicializa, indicando que la carpeta es 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file');


//get de tots els articles
router.get('/', (req, res, next) => {
  Article.findAll()
    .then(lista => res.json({ ok: true, data: lista }))
    .catch(err => res.json({ ok: false, error: err }));
});



router.get('/:id', (req, res, next) => {
  let idArticle = req.params.id;
  // Article.findById(idArticle)
  Article.findOne({ where: { id: idArticle } })
      .then(item => res.json({ ok: true, data: item }))
      .catch(err => res.json({ ok: false, error: err }));
});




router.delete('/:id', (req, res, next) => {
  let idArticle = req.params.id;
  Article.destroy({ where: { id: idArticle } })
      .then(item => res.json({ ok: true, data: item }))
      .catch(err => res.json({ ok: false, error: err }));
});



// post article, incloent foto
router.post('/', (req, res, next) => {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }

    if (!req.file || !req.body.categoria) {
      res.status(400).json({ ok: false, error: "dades incomplertes" });
    } else {
      const article = {
        foto: req.file.filename,
        titol: req.body.titol,
        categoria: req.body.categoria
      }

      Article.create(article)
        .then(a => res.json({ ok: true, article: a }))
        .catch(e => res.json({ ok: false, error: e }));
    }

  })

});



// put article, incloent foto
router.put('/:id', (req, res, next) => {

  let idcosa = req.params.id;

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }

    if (!req.file && !req.body.categoria && !req.body.titol) {
      res.status(400).json({ ok: false, error: "dades incomplertes" });
    } else {

      const article = {};
      if (req.file) article.foto =  req.file.filename;
      if (req.body.titol) article.titol = req.body.titol;
      if (req.body.categoria) article.categoria = req.body.categoria;

      console.log("UPDATE>>>>", article)
      Article.findOne({ where: { id: idcosa } })
        .then(item => item.update(article))
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({ ok: false, error: err }));
    }

  })

});



module.exports = router;