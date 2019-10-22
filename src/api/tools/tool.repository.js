const { Tool } = require('../../models');

class ToolRepository {
  constructor(transaction) {
    this.options = {
      transaction,
    };
    this.Tool = Tool;
  }

  save(tool) {
    return this.Tool.create(tool, this.options);
  }
}

module.exports = ToolRepository;
