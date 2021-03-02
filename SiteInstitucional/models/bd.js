const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mathias',
    password: '123456',
    database: 'api_mk2'
  });


connection.connect(function(err){
  if (err) {
    console.error('Erro ao realizar a conexao com BD:'
    + err.stack); return;
  }
});


connection.query("INSERT INTO users(nome, email) VALUES ('Jessica', 'jessica@celke.com.br')", function(err, result){
  if (!err) {
    console.log('Usuario editado com sucesso!')
  }else{
    console.log('Erro: o usuario nao foi editado com sucesso ');
  }
});