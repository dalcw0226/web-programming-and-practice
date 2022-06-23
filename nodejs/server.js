const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res){
	fs.readFile("index.html", function(err, data){
		res.writeHead(200, {"Context-Type":"text/html"});
		res.end(data);
	});
});
server.listen(8080, console.log("서버가 8080 port에서 돌고 있습니다."));