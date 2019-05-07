const http = require('http');
const PORT = 8080;

// a function which handles request and send response

function requestHandler(request, response) {
    // console.log('request', request)
    // console.log('response', response.server)
    // response.end('Requested Path: ${request.url}\nRequested Method: ${request.method}');
    if (request.url == "/") {
        response.end("welcome");
    } else if (request.url == "/url") {
        response.end("wwww.lighthouselabs.ca\ wwww.google.com");
        
    } else {
        response.statusCode = 404
        response.end("Unkown Path")
    }
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {

    console.log('Server litsening on: http://localhost: ${PORT}')
});