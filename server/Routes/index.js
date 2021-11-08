const express = require('express');
const router = express.Router();
const { addMouse, allMouse } = require('../controllers/mouse.js')

router.post('/addMouse', addMouse)
router.get('/getAll', allMouse)

module.exports = router;