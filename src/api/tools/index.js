const router = require('express').Router({ mergeParams: true });
const controller = require('./controller');

router.post('/tools', controller.save);

module.exports = router;
