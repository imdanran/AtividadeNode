var http = require('http');
var url = require ('url');

var callback = function (request, response){
    
    response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
    
    var parts = url.parse(request.url);
    
    if(parts.path == "/"){
        response.end("Site Principal");
    }else if (parts.path == "/rota1"){
        response.end("ROTA 1");   
    }
    else if (parts.path == "/rota2"){
        response.end("ROTA 2");   
    }
    else if (parts.path == "/rota3"){
        response.end("ROTA 3");   
    }else{
        response.end("Rota inválida: " + parts.path);
    }
};


server.listen(3000);

console.log("Servidor iniciado em http://localhost:3000/")