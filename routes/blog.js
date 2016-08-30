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
router.post('/deleteblog', function(req, res){
    blog.removeBlog(req, function(err, results){
        res.json(results);
    });
});
router.post('/searchblog', function(req, res){
    blog.searchBlog(req.body.title, function(err, results){
        res.json(results);
    });
});
router.post('/blogdetails', function(req, res){
    blog.getBlogDetails(req,function(err, results){
        res.json(results);
    });
});
router.post('/saveblog', function(req, res){
    blog.saveBlog(req,function(err, results){
        res.json(results);
    });
});
router.get('/:url', function(req, res){
    blog.searchBlog(req.param.url, function(err, results){
        res.render('viewblog',{data : results});
    });
});

module.exports = router;
