const repository = require('../repository');

const remove = async id => repository.remove(id);

module.exports = {
  remove,
};
