const express = require('express');
const router = express.Router();

var http = require('http');
var url = require('url');

const Parsetime = require('../modules/parsetime-model'); 


router.get('/api/parsetime', async (req, res) => {

    var server = http.createServer(function(request, response) 
    {
        
            var parsedURL = url.Parsetime(request.url, true);
            var path = parsedURL.pathname;
            var date = new Date(parsedURL.query.iso);
            
                var output = { hour: date.getHours(),
                                minute: date.getMinutes(),
                                second: date.getSeconds()
                            };
            
            if (output) 
            {
                response.writeHead(200, {'content-type': 'application/json'});
                response.end(JSON.stringify(output));
            }
            else
            { 
                response.writeHead(401, {error});
                response.end('nope');
            }
        
});
    
    // var server = http.createServer(function (req, res){
    //     var parsedUrl = JSON.parse(req.url, true);
    // });
    // res.writeHead(200);
    // req.test(parsedUrl);

    // var http = require('http');  
    // var url = require('url');
    // var server = http.createServer(function(request, response) {
    
    //     var parsedURL = url.parse(request.url, true);
    //     var path = parsedURL.pathname;
    //     var date = new Date(parsedURL.query.iso);
        
    //     var output = { hour: date.getHours(),
    //                     minute: date.getMinutes(),
    //                     second: date.getSeconds()};
        
       
    //     var output = {unixtime: date.getTime()};
        
    //     if (output) {
    //     response.writeHead(200, {'content-type': 'application/json'});
    //     response.end(JSON.stringify(output));
    //     }
    //     else{
    //         return res.json({errorMessgae: "invalide endpoint " + 401});
    //     }
    
    // });
    // server.listen(process.argv[2]);

    // function getUrlVars() {
    //     var vars = {};
    //     var parts = window.location.href.replace(/[?-TZ.:]/gi, function(m,key,value) {
    //         vars[key] = value;
    //     });
    //     return vars;
    // }

    // var server = http.createServer(function (req, res){
    //     var parsedUrl = JSON.parse(req.url, true);
    // });

    // const time = new Parsetime({
    //     hour: req.body.hour,
    //     minute: req.body.minute,
    //     second: req.body.second
    //     });
//     try{
        
//         const result = await time.save();
//         res.json(result);
//         return res.status(200).json(time);
//     }catch (error){
//         return res.json({errorMessgae: "invalide endpoint " + 401});
//     }

//     var output = { hour: res.getHours(),
//         minute: res.getMinutes(),
//         second: res.getSeconds()
// };
// return output;
    

});


module.exports = router;