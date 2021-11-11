const express = require('express');
const router = express.Router();
const { addMouse, allMouse } = require('../controllers/mouse.js')
const { getScrapeData } = require('../controllers/scrapeData.js')

router.post('/addMouse', addMouse)
router.get('/getAll', allMouse)
router.post('/getScrapeData', getScrapeData)

module.exports = router;