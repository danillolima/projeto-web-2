var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('friends', { title: 'Página de mensagens' });
});

module.exports = router;
