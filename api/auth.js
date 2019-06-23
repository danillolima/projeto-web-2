let jwt = require('jsonwebtoken')
var secret = 'deep coxinha carpado';

module.exports.withAuth = function(req, res, next) {
    const token =
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;
    
    if (!token) {
      res.status(401).send('Não autorizado: Sem token');
    } else {
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.status(401).send('Não autorizado: Token inválido');
        } else {
          req.user = decoded.user;
          next();
        }
      });
    }
  }