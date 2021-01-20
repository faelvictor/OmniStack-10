const express = require('express');
const mongoose = require('mongoose'); // Biblioteca para dar acesso ao Node na base de dados Mongo
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://rafael:12345@cluster0.2nznd.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); // faz com que o express entenda requisiçoes json
app.use(routes);

app.listen(3333); // porta do servidor