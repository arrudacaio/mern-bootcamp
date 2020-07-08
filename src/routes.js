const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');



routes.get('/', (req,res) => {
    res.send({msg: "Deu bom poooo"})
});


routes.post('/user/register', UserController.createUser);
routes.get('/user/:userById', UserController.getUserById);



module.exports = routes;