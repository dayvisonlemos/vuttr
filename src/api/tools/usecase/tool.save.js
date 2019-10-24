const repository = require('../repository');

const save = async (data) => {
  const {
    title, link, description,
  } = data;
  const tool = await repository.saveTool({
    title, link, description,
  });
  const promises = [];
  [...new Set(data.tags)].forEach((name) => {
    promises.push(repository.findOrCreateTag(name));
  });
  const tags = await Promise.all(promises);
  await tool.addTags(tags);
  tool.dataValues.tags = tags.map(tag => tag.name);
  return tool;
};

module.exports = {
  save,
};
