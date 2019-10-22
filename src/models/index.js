const config = require('config');
const Sequelize = require('sequelize');
const Tool = require('./tool');

const connection = config.get('connection');

const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  { ...connection.params, operatorsAliases: Sequelize.Op },
);

Tool.init(sequelize);

module.exports = {
  sequelize,
  ...sequelize.models,
};
