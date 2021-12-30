var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  //es.send('respond with a resource');
  res.render('index', { title: 'Express'});
  double.find({}, function(err, rows){
    console.log(rows)
  });
  
});

module.exports = router;
