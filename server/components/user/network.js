const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.post('/', async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        const info = await controller.addUser(name, email, password, phone);
        response.success(req, res, info, 201)
    } catch (e) {
        if (e.code === 11000) {
            response.error(req, res, 'Nombre de Usuario o Correo ya estan registrados', 300, e)
        } else {
            response.error(req, res, 'Información Invalida', 300, e)
        }
    }
})


router.get('/', async (req, res) => {
    const filterUser = req.query || null;
    try {
        const userList = await controller.getUsers(filterUser)
        response.success(req, res, userList, 200);
    } catch (e) {
        response.error(req, res, 'Error de Registro', 500, e);
    }
})


module.exports = router;