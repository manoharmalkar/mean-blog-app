var db = require('../config/db');

var blogsCollection = db.get('blogs');

exports.getBloglist = function(callback){
    blogsCollection.find({},{}, function(err, results){
        if(err)
            console.log('error'+err);
        callback(err, results);
    });
}
exports.searchBlog = function(query, callback){
    blogsCollection.find({ $or: [ { title : new RegExp(query)}, { url : new RegExp(query)} ] }, function(err, results){
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

exports.saveBlog = function(req, callback){
    var newblog = {title:req.body.title, content: req.body.content, author:req.body.author, tags: req.body.tags, url:ToSeoUrl(req.body.title)};
    if(typeof req.body._id !== "undefined"){
        blogsCollection.update({_id:req.body._id},{$set:newblog}, function(err, result) {
            if(err)
                console.log('error'+err);
            else
                console.log('sucess'+result);
            callback(err, result);
        });
    }
    else{
        blogsCollection.insert(newblog, function(err, result) {
            if(err)
                console.log('error'+err);
            else
                console.log('sucess'+result);
            callback(err, result);
        });        
    }
}

exports.removeBlog = function(req, callback){
    blogsCollection.remove({_id: req.body._id}, function(err, result) {
        if(err)
            console.log('error'+err);
        else
            console.log('sucess'+result);
        callback(err, result);
    });
    
}




function ToSeoUrl(url) {
    var encodedUrl = url.toString().toLowerCase(); 
    encodedUrl = encodedUrl.split(/\&+/).join("-and-")
    encodedUrl = encodedUrl.split(/[^a-z0-9]/).join("-");       
    encodedUrl = encodedUrl.split(/-+/).join("-");
    encodedUrl = encodedUrl.trim('-'); 
    return encodedUrl; 
}