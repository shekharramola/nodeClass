/*
Primary file for the API
*
*
*/

var http = require("http");
var url = require("url");
// the server should respond to all requests with a string
var server = http.createServer(function(req,res){
    // here true is calling two packages, one is url and the other one query string module
    var parsedUrl = url.parse(req.url, true);
    // get the url and parse it

    // get the path
    var path = parsedUrl.pathname;
    console.log(path);
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');
    // send the response 
    res.end("hello world\n");
    //log the request path
    console.log("Request recieved on path:" +trimmedPath);
});

// start the server and have it listen on port 3000
server.listen(3000,function(){
    console.log("server is listening on port 3000 now")
});
