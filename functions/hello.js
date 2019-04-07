var http = require('http');

exports.handler = function(event, context, callback) {
    http.get({
            hostname: 'metadata.google.internal',
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
