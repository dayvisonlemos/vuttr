const router = require('express').Router();

const status = require('./status');

router.use(status);

module.exports = router;