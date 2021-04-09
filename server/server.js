var fs= require('fs');
var http = require('http');
var { json } = require('body-parser');
var jsonParser = json();
var server = http.createServer(handleReq)

function handleReq(request, response){
  const headers = {
    "Access-Control-Allow-Origin" : '*',
    "Access-Control-Allow-Methods" :'OPTIONS,POST,GET',
    "Access-Control-Max-Age" : 2592000,
    "Access-Control-Allow-Headers": '*'
  };
 if(request.method === 'OPTIONS'){
   response.writeHead(204, headers);
   response.end();
   return;
 }
 if(request.url === "/developers" && request.method === 'GET'){

   var data = fs.readFileSync('./allFileJson/developers.json')
  console.log(data)
   response.writeHead(200, headers);
   response.end(data);
 }
 if(request.url === "/" && request.method === 'GET'){
  var data = fs.readFileSync('./allFileJson/developers.json')
  response.writeHead(200, headers);
  response.end(data);
}
 if(request.url === "/developers" && request.method === "POST"){
   jsonParser(request, response, (error) => {
     if(error){
        throw error;
     }
     var devs = JSON.parse(fs.readFileSync('./allFileJson/developers.json'))
     var data = Object.assign(devs, request.body);
     fs.writeFileSync("./allFileJson/developers.json",JSON.stringify(data));
     response.writeHead(200, headers);
     response.end('daaa detkaaa')
     
   })
 }
}

server.listen(3000);