//put this in termanal to run --->  node api.js 3080       (can put any number or none at all)
const http = require('http');
const url = require('url');

const PORT = process.argv[2] || 9090;

const apiServer = http.createServer((req, res) => {
    if(req.method === 'GET'){
        const oUrl = url.parse(req.url, true);
        const pathname = oUrl.pathname;
        const date = new Date(oUrl.query.iso);

        if (pathname === '/api/parsetime'){
            // parse iso time to get hour, minute, seconds
            // const date = new Date(oUrl.query.iso);

            const payload ={ 
                hour: date.getUTCHours(), 
                minute: date.getUTCMinutes(),
                second: date.getUTCSeconds()
            };

            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify(payload));
        }
        else if (pathname == '/api/unixtime'){
            // get unix time stamp

            res.writeHead(200, {'content-type': 'application/json'});
            res.end(JSON.stringify( {unixtime: date.getTime()} ));
        }
        else{
            // send a 401
            res.writeHead(401, {'content-type': 'application/json'});
            res.end(JSON.stringify({ error: 'Sorry, you provided an invalid endpoint.' }));
        }
    }
});
apiServer.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


//the above is the answer he gave in class

// var http = require('http');
// var url = require('url');

// const PORT = 8000;

// var server = http.createServer(function (request, response) {
//     if (request.method === 'GET') {
//         var parsedURL = url.parse(request.url, true);
//         var path = parsedURL.pathname;
//         var date = new Date(parsedURL.query.iso);

//         if (path === '/api/parsetime') {
//             var output =
//             {
//                 hour: date.getHours(),
//                 minute: date.getMinutes(),
//                 second: date.getSeconds()
//             };

//         }
//         else if (path === '/api/unixtime') {
//             var output = { unixtime: date.getTime() };

//         }
//         else {
//             response.writeHead(401);
//             response.end(JSON.stringify("401: invalide endpoint/path "));
//         }

//         if (output) {
//             response.writeHead(200, { 'content-type': 'application/json' });
//             response.end(JSON.stringify(output));
//         }
//         else { //I am unsure why this does not run when the output values are null
//             response.writeHead(401);
//             response.end(JSON.stringify("401: invalide arguments"));
//         }
//     }
//     else {
//         response.writeHead(401, "invalide type ");
//         response.end(JSON.stringify("401: not a GET request"));
//     }
// });
// server.listen(PORT);

