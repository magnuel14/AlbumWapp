var express = require('express');
//solo pra vizulizar fragmentos
var visucontrol= require('../controladores/vi_frag');
var visu= new visucontrol();
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {title: 'Descrubre un mundo de pixeles',
        fragmentos: 'Principal/album'});

});
//inico de sesio y registro
router.get('/verRegistro', visu.verRegistro);
router.get('/verIncio', visu.verIncio);
router.get('/verBuscar', visu.verBuscar);
router.get('/verAgregar', visu.verAgregar);




module.exports = router;
