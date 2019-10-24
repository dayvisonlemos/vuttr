const httpStatus = require('http-status');
const ToolSave = require('./usecase/tool.save');

const save = async (req, res, next) => {
  try {
    const toolSave = new ToolSave();
    const result = await toolSave.save(req.body);
    return res.status(httpStatus.CREATED).json(result);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  save,
};
