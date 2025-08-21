var express = require('express');
var router = express.Router();

/* GET articles listing. */
router.get('/', function(req, res, next) {
  res.render('articles/index', {
    title: 'Articles',
  });
});

module.exports = router;
