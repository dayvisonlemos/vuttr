const httpStatus = require('http-status');
const ToolSave = require('./usecase/tool.save');

const save = async (req, res) => {
  const toolSave = new ToolSave();
  const result = await toolSave.save(req.body);
  res.status(httpStatus.CREATED).json(result);
};

module.exports = {
  save,
};
