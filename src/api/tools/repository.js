const { Tool, Tag } = require('../../models');

const find = async (tagName) => {
  const where = {};
  if (tagName) {
    const tags = await Tag.findAll({
      where: { name: tagName },
      include: [{
        association: 'tools', attributes: ['id'], through: { attributes: [] },
      }],
    });
    where.id = tags.flatMap(tag => tag.tools).map(tool => tool.id);
  }
  const result = await Tool.findAll({
    where,
    include: [{
      association: 'tags', attributes: ['name'], through: { attributes: [] },
    }],
  });
  return result.map(tool => ({
    ...tool.dataValues,
    tags: tool.dataValues.tags.map(tag => tag.name),
  }));
};

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
  find,
  saveTool,
  findOrCreateTag,
};
