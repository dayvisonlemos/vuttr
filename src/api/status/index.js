const router = require('express').Router({ mergeParams: true });
const controller = require('./status.controller');

router.get('/status', controller.status);

module.exports = router;