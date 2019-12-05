const httpStatus = require('http-status');
const toolSave = require('./usecase/tool.save');
const toolFind = require('./usecase/tool.find');
const toolRemove = require('./usecase/tool.remove');

const find = async (req, res, next) => {
  try {
    const result = await toolFind.find(req.query);
    return res.json(result);
  } catch (err) {
    return next(err);
  }
};

const save = async (req, res, next) => {
  try {
    const result = await toolSave.save(req.body);
    return res.status(httpStatus.CREATED).json(result);
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    await toolRemove.remove(id);
    return res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  find,
  save,
  remove,
};
