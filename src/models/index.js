const config = require('config');
const Sequelize = require('sequelize');

const connection = config.get('connection');

const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  { ...connection.params, operatorsAliases: Sequelize.Op },
);

module.exports = {
  sequelize,
  ...sequelize.models,
};
