const ToolRepository = require('../tool.repository');

class ToolSave {
  constructor() {
    this.repository = new ToolRepository();
  }

  async save(data) {
    const {
      title, link, description, tags,
    } = data;

    const tool = await this.repository.save({
      title, link, description, tags,
    });

    return tool;
  }
}

module.exports = ToolSave;
