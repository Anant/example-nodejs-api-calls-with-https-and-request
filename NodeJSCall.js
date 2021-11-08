const https = require('https');

const options = {
    hostname: 'api.weather.gov',
    path: '/gridpoints/TOP/96,70/forecast',
//put your unique ID in the line below to implement the User-Agent header
    headers: {'User-Agent': '<uniqueID>: (Anant, nicholas.brackley@anant.us)'}
}

const callExternalApiUsingHttp = (callback) => {
    https.get(options, (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
    });

    }).on("error", (err) => {

    console.log("Error: " + err.message);
    });
}

module.exports.callApi = callExternalApiUsingHttp; 
