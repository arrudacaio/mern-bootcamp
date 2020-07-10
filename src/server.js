const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();


const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV !== 'production'){  // Verificando se não estamos no ambiente de produção, para que permita que as variaveis de acesso ao db sejam globais.
    require('dotenv').config();
}

app.use('/files', express.static(path.resolve(__dirname, '..', 'files')));
app.use(cors());
app.use(express.json());

app.use(routes);


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