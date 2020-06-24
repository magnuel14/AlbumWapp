'use strict';

class vi_frag {
    //si no hay sesion activa redirecciona a registro si es el caso si no va ala principal
    verAlbum(req, res) {
        rres.render('index', {
            title: 'Descrubre un mundo de pixeles',
            fragmentos: 'Principal/album'

        });

    }
    verRegistro(req, res) {
        res.render('index', {
            title: 'Registra tu cuenta',
            fragmentos: "Principal/register"

        });

    }
    verIncio(req, res) {
        res.render('index', {
            title: 'Inicio de sesion',
            fragmentos: "Principal/loguin"

        });

    }
    verAgregar(req, res) {
        res.render('index', {
            title: 'Inicio de sesion',
            fragmentos: "Principal/agregar"

        });
    }
    verBuscar(req, res) {
        res.render('index', {
            title: 'Inicio de sesion',
            fragmentos: "Principal/buscar"

        });
    }

}
module.exports = vi_frag;
