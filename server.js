var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/netid', function(request, response){
    response.send('YOU SHOULD PUT YOUR NETID HERE.');
});

app.get('/nickname', function(request, response){
    response.send('calm yak');
});

app.listen(process.env.PORT || 4000);


