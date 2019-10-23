const { Tool } = require('../../models');

class ToolRepository {
  constructor() {
    this.Tool = Tool;
  }

  save(tool) {
    return this.Tool.create(tool);
  }
}

module.exports = ToolRepository;
