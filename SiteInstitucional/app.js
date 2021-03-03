const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyParser = require("body-parser");
const comentario = require("./models/comment"); // use essa const para fazer a inserção
const to_app = require("./src/js/comentarios");
const connection = require("./models/bd").connection;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('src'));


// rotas
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/src/index.html"); // rota para a pagina inicial
});

// const sql = `INSERT INTO users(nome, email) VALUES ('Jessica', 'jessica@celke.com.br');`;

app.post('/cadastro', function(req, res){
  comentario.create({ // tera que mudar aqui tambem caso mude o nome 
      nome: req.body.nome,
      email: req.body.email,
      comentario: req.body.comentario
  }).then(function(){
    res.sendFile(__dirname + "/src/index.html");
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO users(nome, email) VALUES ('Jessica', 'jessica@celke.com.br');";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    })
  }).catch(function(erro){
      res.send("Erro: comentario não foi cadastrado com sucesso!" + erro)
  })
});

// function teste_conexao() {
//   const connection = require('../../models/database');
//   const Sequelize = require('../../node_modules/sequelize');


//   connection.connect(function (err) {
//     if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
//   });

//   connection.query("INSERT INTO users(nome, email) VALUES ('Jessica', 'jessica@celke.com.br')", function (err, result) {
//     if (!err) {
//       console.log('Usuario cadastrado com sucesso!');
//     } else {
//       console.log('Erro ao cadastra o usuario!');
//     }
//   });
// }


app.listen(8080);

