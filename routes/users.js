var express = require('express');
var router = express.Router();

const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios)
});
router.get('/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario)
});
router.post('/',  async function(req, res, next) {
  const {nombre, apellido} = req.body
  const nuevoUsuario = await Usuario.create({nombre, apellido})
  res.status(201).json(nuevoUsuario)
});
router.put('/:id', async (req, res) => {
  const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body , { new: true,});
  res.json(usuarioActualizado)
});
router.delete('/:id', async (req, res) => {
  const usuarios = await Usuario.findByIdAndDelete(req.params.id);
  res.json({mensaje:"usuario eliminado"})
});

module.exports = router;
