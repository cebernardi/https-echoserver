"use strict";

const sslOpts = {
   key: require('fs').readFileSync('privkey.pem'),
   cert: require('fs').readFileSync('fullchain.pem'),
};

require('http')
    .createServer(serverHandler)
    .listen(8080, ()=> console.log("HTTP Ready!"));

require('http')
    .createServer(serverHandler)
    .listen(8081, ()=> console.log("HTTP Ready!"));

require('https')
    .createServer(sslOpts, serverHandler)
    .listen(8443, ()=> console.log("HTTPS Ready!"));

function serverHandler(req, res) {
    req.on('data', () => null);
    req.on('end', () => {
        let result = {
            httpVersion: req.httpVersion,
            method: req.method,
            url: req.url,
            headers: req.headers,
        };
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result));
    })
}
