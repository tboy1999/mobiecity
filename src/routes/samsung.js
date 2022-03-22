const express = require('express');
const router = express.Router();

const samsungController = require('../app/controllers/samsungController');

router.get('/:slug', samsungController.show);
router.get('/', samsungController.index);

module.exports = router;
