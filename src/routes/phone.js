const express = require('express');
const router = express.Router();

const phoneController = require('../app/controllers/phoneController');

router.get('/create', phoneController.create);
router.post('/store', phoneController.store);
router.get('/', phoneController.index);

module.exports = router;
