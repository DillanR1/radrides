const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.cars.index);
router.get('/:id', ctrl.cars.show);

// exports
module.exports = router;