const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/adminController');

router.get('/:id/edit', adminController.edit);
router.put('/:id/update', adminController.update);
router.delete('/:id/delete', adminController.destroy);
router.get('/', adminController.index);

module.exports = router;
