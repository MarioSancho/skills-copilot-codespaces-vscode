// Create web server
// Create a web server that listens to requests on port 3000 and serves a file called comments.js. The file should contain the following JavaScript code:

// var comments = [
//   { username: "Alice", comment: "I love this site!" },
//   { username: "Bob", comment: "This site is the best!" },
//   { username: "Charlie", comment: "How long has this site been around?" }
// ];
// When you're ready to test your server, you can run the following command in your terminal:

// node comments.js
// This will start your web server. If you navigate to http://localhost:3000/comments.js in your web browser, you should see the comments.js file that you created.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/javascript'});
  fs.readFile('comments.js', function(err, data) {
    res.write(data);
    res.end();
  });
});

server.listen(3000);