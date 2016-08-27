var db = require('../config/db');

var blogsCollection = db.get('blogs');

exports.getBloglist = function(callback){
    blogsCollection.find({},{}, function(err, results){
        if(err)
            console.log('error'+err);
        callback(err, results);
    });
}

exports.getBlogDetails = function(req, callback){
    blogsCollection.find({_id:req.body.id},{}, function(err, results){
        if(err)
            console.log('error'+err);
        callback(err, results);
    });
}

exports.createBlog = function(callback){
    var newblog = {name: 'Chris', content: 'sevilayha', tags: 'password',url:'sjfdsmbm'};
    blogsCollection.insert(newblog, {w:1}, function(err, result) {
        if(err)
            console.log('error'+err);
        else
            console.log('sucess'+result);
        callback(err, result);
    });
    
}

exports.removeBlog = function(callback){
    blogsCollection.remove({name: 'Chris'}, {w:1}, function(err, result) {
        if(err)
            console.log('error'+err);
        else
            console.log('sucess'+result);
        callback(err, result);
    });
    
}