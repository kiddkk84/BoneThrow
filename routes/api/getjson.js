const http = require('http');
const https = require('https');

// /**https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express
//  * getJSON:  RESTful GET request returning JSON object(s)
//  * @param options: http options object
//  * @param callback: callback to pass the results JSON object(s) back
//  */

getJSON = (options, onResult) => {
    console.log('rest::getJSON');
    const port = options.port == 443 ? https : http;

    let output = '';

    const req = port.request(options, (res) => {
        console.log(`${options.host} : ${res.statusCode}`);
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            output += chunk;
        });

        res.on('end', () => {
            let obj = JSON.parse(output);

            onResult(res.statusCode, obj);
        });
    });

    req.on('error', (err) => {
        // res.send('error: ' + err.message);
    });

    req.end();
};

module.exports = {getJSON}