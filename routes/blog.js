var express = require('express');
var router = express.Router();
var blog = require('../modules/blog');

router.get('/', function(req, res){
    blog.getBloglist(function(err, results){
        res.send(results);
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