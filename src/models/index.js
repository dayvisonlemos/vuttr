const uuid = require('uuid/v4');
const config = require('config');
const Sequelize = require('sequelize');
const Tool = require('./tool');
const Tag = require('./tag');

const connection = config.get('connection');

const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  { ...connection.params, operatorsAliases: Sequelize.Op },
);

sequelize.addHook('beforeCreate', (instance) => {
  instance.set('id', uuid());
});

sequelize.addHook('beforeBulkCreate', (instances) => {
  instances.forEach((instance) => {
    instance.set('id', uuid());
  });
});

Tool.init(sequelize);
Tag.init(sequelize);

Tool.associate(sequelize.models);
Tag.associate(sequelize.models);

module.exports = {
  sequelize,
  ...sequelize.models,
};
