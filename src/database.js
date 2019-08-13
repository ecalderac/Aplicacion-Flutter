const mongoose = require('mongoose');//modulo q permite conectarse a la base de datos

async function connect(){
   await mongoose.connect('mongodb://localhost/flutter-node-tutorial', {
        useNewUrlParser: true
    });
    console.log('Database: Connected');
};

module.exports = { connect };