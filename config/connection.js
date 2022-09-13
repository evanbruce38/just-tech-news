const Sequelize = require('sequelize');

require('dotenv').config();

<<<<<<< HEAD
let sequelize;
=======
// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('newsfeed_db', 'root', 'Rebels38?', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
>>>>>>> develop

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;