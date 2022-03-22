const express = require('express');
const router = express.Router();

const xiaomiController = require('../app/controllers/xiaomiController');

router.get('/:slug', xiaomiController.show);
router.get('/', xiaomiController.index);

module.exports = router;
