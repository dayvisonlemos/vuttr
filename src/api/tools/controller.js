const httpStatus = require('http-status');
const toolSave = require('./usecase/tool.save');

const save = async (req, res, next) => {
  try {
    const result = await toolSave.save(req.body);
    return res.status(httpStatus.CREATED).json(result);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  save,
};
