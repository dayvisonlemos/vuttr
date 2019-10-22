const log = require('@flagcard/log');
const { sequelize } = require('../src/models');

sequelize.sync({
  force: true,
}).done(() => log.info('database created.'));
