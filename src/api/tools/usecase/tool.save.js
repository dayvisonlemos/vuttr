const ToolRepository = require('../tool.repository');

class ToolSave {
  constructor(transaction) {
    this.repository = new ToolRepository(transaction);
  }

  save(data) {
    const tool = {
      ...data,
    };

    return this.repository.save(tool);
  }
}

module.exports = ToolSave;
