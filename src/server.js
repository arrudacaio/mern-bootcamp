const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterController = require('./controllers/RegisterController');
const app = express();


const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV !== 'production'){  // Verificando se não estamos no ambiente de produção, para que permita que as variaveis de acesso ao db sejam globais.
    require('dotenv').config();
}


app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.send({msg: "Deu bom po"})
});


app.post('/register', RegisterController.store);


try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
} catch (error) {
    console.log(error);
}





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});