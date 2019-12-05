const repository = require('../repository');

const find = ({ tag }) => repository.find(tag);

module.exports = {
  find,
};
