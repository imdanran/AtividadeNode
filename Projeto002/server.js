const app = require('./app');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

require('dotenv').config({path: "variables.env"});

//conexao ao banco de dados
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});         //String de conexão com parametros
mongoose.Promise = global.Promise;              //Liberando funcionalidade para o mongoose
mongoose.connection.on('Error', (error)=> {     //Log de Erro
    console.log("ERROR: "+error.mensage);
})

app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando na porta: "+server.address().port);
}); 