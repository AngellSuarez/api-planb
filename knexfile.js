require("dotenv").config();
const path = require('path');

module.exports = {

  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
  },
  migrations: {
    directory: path.join(__dirname, 'migrations'),
  },

};
