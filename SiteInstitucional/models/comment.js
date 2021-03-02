const db = require('./database');
// caso queira mudar algo esta é a const que "cria as tabelas"
// const comentario = db.sequelize.define('comentario', {
//     nome: {
//         type: db.Sequelize.STRING
//     },
//     email: {
//         type: db.Sequelize.STRING
//     },
//     comentario: {
//         type: db.Sequelize.TEXT
//     }
// })

// Criar tabela com Sequelize forcado
// comentario.sync({ force: true });

// module.exports = comentario