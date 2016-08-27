var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
var blog = require('../modules/blog');


router.get('/', function(req, res){
    res.render('index');
});
router.get('/getbloglist', function(req, res){
    blog.getBloglist(function(err, results){
        res.json(results);
    });
});
router.post('/blogdetails', function(req, res){
    blog.getBlogDetails(req,function(err, results){
        res.json(results);
    });
});
router.get('/create', function(req, res){
    blog.createBlog(function(err, results){
        res.sendStatus(200);
    });
    
});
router.get('/remove', function(req, res){
    blog.removeBlog(function(err, results){
        res.sendStatus(200);
    });
    
});


module.exports = router;