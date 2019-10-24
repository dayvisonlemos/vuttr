const Repository = require('../repository');

class ToolSave {
  constructor() {
    this.repository = new Repository();
  }

  async save(data) {
    return this.repository.saveTool(data);
  }
}

module.exports = ToolSave;
