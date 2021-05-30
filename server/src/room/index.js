const router = require('express').Router();
const controller = require('../entity/message/controller');
const users = require('./users');

router.get('/room-1', controller.List);
router.post('/room-1', controller.Create);
router.get('/room-1/users', users.LIST);

module.exports = router;