var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is the Default Page of the Server. If You have not specified anything or a Address, This is the page that is visible.</p></body></html>');
        res.write('<html><body><p>  CMD [ "node","index.js" ] command in dockerfile  5000 port</p></body></html>');
        res.end();

    }
    else if (req.url == "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Home Page.</p></body></html>');
        res.end();

    }
    else if (req.url == "/dashboard") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Dashboard Page.</p></body></html>');
        res.end();
    }
    
    else if (req.url == "/deploy") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is DEPLOYMENT page created by VIGNAN Page.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')
