const express = require('express');
const router = express.Router();
const { addMouse } = require('../controllers/mouse.js')

router.post('/addMouse', addMouse)
router.get('/test', (req,res) => {
  res.status(200).send('It works!')
})

module.exports = router;