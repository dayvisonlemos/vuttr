const router = require('express').Router();

const status = require('./status');
const tools = require('./tools');

router.use(status);
router.use(tools);

module.exports = router;
