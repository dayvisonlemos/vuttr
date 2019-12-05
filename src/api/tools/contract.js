const joi = require('@hapi/joi');
const { BadRequestException } = require('../../exceptions');

const schema = joi.object({
  title: joi.string().required(),
  link: joi.string().required(),
  description: joi.string().required(),
  tags: joi.array().items(joi.string()).min(1).required(),
});

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const [{ message }] = error.details;
    throw new BadRequestException(message);
  }
  next();
};

module.exports = validate;
