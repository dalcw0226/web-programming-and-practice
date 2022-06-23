const http = require("http");

const server = http.createServer(function(req,res){
	res.writeHead(200, {"Context-Type" : "text/plain"});
	res.end("hello");
	});

server.listen(8080, console.log("8080에서 서버가 돌아간다."));
