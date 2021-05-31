const express = require('express');
const router = express.Router();

const portfolioController = require('../controllers/portfolio');

router.get('/',portfolioController.getportFolio);

router.post('/submit',portfolioController.postSubmit);

module.exports = router;