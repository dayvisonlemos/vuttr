const { Tool, Tag } = require('../../models');

const findOrCreateTag = (name) => {
  const where = {
    name,
  };
  return Tag.findOne({ where })
    .then((result) => {
      if (result) {
        return result;
      }
      return Tag.create(where);
    });
};

const saveTool = tool => Tool.create(tool);

module.exports = {
  saveTool,
  findOrCreateTag,
};
