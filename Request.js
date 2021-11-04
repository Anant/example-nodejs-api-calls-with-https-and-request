const request = require('request');

_EXTERNAL_URL = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast'

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, {headers: {'User-Agent': 'Nick-Brack: (Anant, nicholas.brackley@anant.us)'}, json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest; //Ask in rehearsal what this does