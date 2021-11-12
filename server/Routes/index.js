const express = require("express");
const router = express.Router();
const { addMouse, allMouse } = require("../controllers/mouse.js");
const { getScrapeData } = require("../controllers/scrapeData.js");
const { getYTScrapeData } = require("../controllers/scrapeYT.js");

router.post("/addMouse", addMouse);
router.get("/getAll", allMouse);
router.post("/getScrapeData", getScrapeData);
router.post("/getLink", getYTScrapeData);

module.exports = router;
