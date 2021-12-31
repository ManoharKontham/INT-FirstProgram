var express = require('express');
const doubles = require('../models/double');
var router = express.Router();

/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
 });

router.get('/1', function(req, res, next) {
  //es.send('respond with a resource');
  doubles.find({}, function(err, rows){
    console.log(rows[0].col)
    const picUrl= rows[0].url;
    const picUrl1= rows[1].url;
    const picUrl2= rows[2].url;
    const picUrl3= rows[3].url;

    const head1 = rows[0].h;
    const head2 = rows[1].h;
    const head3 = rows[2].h;
    const head4 = rows[3].h;
    
    const para1 = rows[0].p;
    const para2 = rows[1].p;
    const para3 = rows[2].p;
    const para4 = rows[3].p;

    const col1 = rows[0].col;
    const col2 = rows[1].col;
    const col3 = rows[2].col;
    const col4 = rows[3].col;



    res.render('index',{picUrl,picUrl1,picUrl2,picUrl3,head1,head2,head3,head4,para1,para2,para3,para4,col1,col2,col3,col4})
});
});


// router.post("/", async (req, res) => {
//   const double = new doubles({
//       h: req.body.h,
//       p : req.body.p,
//       col : req.body.col
      
//   })
//   try{
//       await doubles.save()
//       res.redirect('/')
//   }
//   catch(error){
//       res.send("failed")
//   }
// })


module.exports = router;



