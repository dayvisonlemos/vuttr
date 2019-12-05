const router = require('express').Router({ mergeParams: true });
const validate = require('./contract');
const controller = require('./controller');

router.get('/tools', controller.find);
router.post('/tools', validate, controller.save);
router.delete('/tools/:id', controller.remove);

module.exports = router;
