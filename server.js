var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('view engine','ejs');

var blog = require('./routes/blog');

app.use('/static', express.static('public'));



app.use('/',blog);

app.listen('3000');
console.log('listening to 3000');