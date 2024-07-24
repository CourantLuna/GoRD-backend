var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/admins', adminController.crearAdmin);
router.get('/admins', adminController.obtenerAdmins);

module.exports = router;
