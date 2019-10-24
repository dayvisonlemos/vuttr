const { sequelize, Tool, Tag } = require('../../models');

class Repository {
  constructor() {
    this.Tool = Tool;
    this.Tag = Tag;
  }

  findOrCreateTag(name, transaction) {
    const where = {
      name,
    };
    return this.Tag.findOne({ where, transaction })
      .then((result) => {
        if (result) {
          return result;
        }
        return this.Tag.create(where, { transaction });
      });
  }

  async saveTool(data) {
    const transaction = await sequelize.transaction();

    try {
      const {
        title, link, description,
      } = data;

      const tool = await this.Tool.create({ title, link, description }, { transaction });

      const promises = [];
      data.tags.forEach((name) => {
        promises.push(this.findOrCreateTag(name, transaction));
      });

      const tags = await Promise.all(promises);
      await tool.addTags(tags, { transaction });
      tool.dataValues.tags = tags.map(tag => tag.name);

      return tool;
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
}

module.exports = Repository;
