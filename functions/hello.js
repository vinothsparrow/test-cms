var http = require('http');

exports.handler = function(event, context, callback) {
    http.get({
            hostname: '169.254.169.254',
            port: 80,
            path: '/',
            agent: false  // Create a new agent just for this one request
        }, (res) => {
            callback(null, {
            statusCode: 200,
            body: res
        });
    });
}
