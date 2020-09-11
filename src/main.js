/* https://www.w3schools.com/nodejs/nodejs_filesystem.asp using this tutorial to start up.
Aiming to:
accept a request 
parse the inbound http request for string 
use a value from the string
parse a local http file based on the query string - name
display the relevant text - this as a base will allow me to communicate with each dev 
 */

var http = require('http'); //use the http module like create server
var dt = require('./YipModule'); // load my module
var url = require('url'); // access the url
var fs = require('fs'); // file system

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "src"+ q.pathname;
    console.log(q.host); 
    console.log(q.pathname); 
    console.log(q.search);
    console.log(filename); 
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
          } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
  }).listen(process.env.PORT);