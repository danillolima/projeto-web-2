var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/cadastrar', function(req, res, next){
  res.render('cadastrar', {title: "Cadastro"});
});
router.post('/cadastrar', userController.create_user);

router.get('/friends', userController.show_friends);


module.exports = router;
