const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');



routes.get('/', (req,res) => {
    res.send({msg: "Deu bom poooo"})
});


routes.post('/register', UserController.store);


module.exports = routes;