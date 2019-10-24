const router = require('express').Router({ mergeParams: true });
const { BadRequestException } = require('../../exceptions');
const controller = require('./controller');

const validate = (req, res, next) => {
  const {
    title, link, description, tags,
  } = req.body;
  if (!title) {
    throw new BadRequestException('Title is required');
  }
  if (!link) {
    throw new BadRequestException('Link is required');
  }
  if (!description) {
    throw new BadRequestException('Description is required');
  }
  if (!tags || !tags.length) {
    throw new BadRequestException('Tags is required and cannot be null');
  }
  next();
};

router.post('/tools', validate, controller.save);

module.exports = router;
