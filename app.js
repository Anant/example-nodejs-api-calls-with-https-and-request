//Lines that initialize the code sources from other files in the program
const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')

//Line that initialize a code library
const http = require('http')

//CreateServer... creates a server. The if statements below define the endpoints of the server
http.createServer((req,res) => {
    if(req.url === "/request"){
        apiCallFromRequest.callApi(function(response){
            res.write(JSON.stringify(response));
            res.end();
        });
    }
    else if(req.url === "/node"){
        apiCallFromNode.callApi(function(response){
            res.write(response);
            res.end();
        });
    }

    // res.end();
//Code line specifies the listenting port
}).listen(3000);

console.log("service running on 3000 port...."); 
