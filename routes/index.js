const express = require('express');
const router = express.Router();
const { taskFunction } = require('../controller/taskController.js');
const { bmiFunction } = require('../controller/bmiCalculator.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: JSON.stringify(bmiFunction()) });
});

router.post('/test', taskFunction);

module.exports = router;
