const Sequelize = require("sequelize");
const sql = require('mssql');
const mysql = require('mysql');

//  credenciais para a inserção na NUVEM
// const sequelize = new Sequelize
//   ('broken_db', //nome database 
//     'mathias_db', //user
//     '#Gf45619523810', { // senha
//     // credenciais para o sequelize entrar no mysql
//     host: 'brokendb.database.windows.net',
//     dialect: 'mssql'
//   });


// credenciais para a inserção  LOCAL
const sequelize = new Sequelize
  ('api_mk2', //nome database 
    'mathias', //user
    '123456', { // senha
    // credenciais para o sequelize entrar no mysql
    host: 'localhost',
    dialect: 'mysql'
  });


sequelize.authenticate().then(function () {
  console.log('Conexao relizada com sucesso!');
}).catch(function (err) {
  console.log('Erro ao realizar a conexao:' + err)
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mathias',
  password: '123456',
  database: 'api_mk2'
});

module.exports = {
  // Sequelize: Sequelize,
  // sequelize: sequelize,
  connection: connection
};



//  Inserir registro no banco de dados
// coment.create({
//   nome: "Energia",
//   valor: 220
// })