var http = require('http');

exports.handler = function(event, context, callback) {
    http.get({
            hostname: 'ipinfo.io',
            port: 80,
            path: '/',
            agent: false  // Create a new agent just for this one request
        }, (res) => {
            res.setEncoding('utf8');
            res.on('data', function(chunk){
                console.log(chunk);
            });
            callback(null, {
                statusCode: 200,
                body: "Hello"
            });
    });
}
