var express = require('express');
var app = express();

app.set('view engine','ejs');

var blog = require('./routes/blog');

app.use('/',blog);

app.listen('3000');
console.log('listening to 3000');