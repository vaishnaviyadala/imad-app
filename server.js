var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;
var config = {
    user:'vaishuyadala1997',
    database:'vaishuyadala1997',
    host:'db.imad.hasura-app.io',
    password:process.env.DB_PASSWORD
};



var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req, res){
    //make a selective request
    //give a response the result
    Pool.query('SELECT* FROM test',function(err, result){
    if (err) {
        res.status(500).send(err.toString());
    }    else { 
        res.send(JSON.stringify(result));
    }
    });
});

var counter=0;
app.get('/counter', function (req, res){
    counter = counter+1;
    res.send(counter. toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
