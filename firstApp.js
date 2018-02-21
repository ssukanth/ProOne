var https= require("http");
https.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text\plain'});
    res.end("Sukanth Says Hi To The World");

}).listen(8085);
console.log('Server running at http://127.0.0.1:8085/');