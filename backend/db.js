const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT
});

sequelize.authenticate()
  .then(() => console.log('Connected to MySQL'))
  .catch(err => console.error('Error:', err));

module.exports = sequelize;
