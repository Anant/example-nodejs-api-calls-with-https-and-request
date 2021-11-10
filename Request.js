const request = require('request');

_EXTERNAL_URL = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast'

const callExternalApiUsingRequest = (callback) => {
//This is the line that contains the User-Agent Header. The weather.gov api asks you to put your own <unique identifier> so that they can monitor for excessive use
    request(_EXTERNAL_URL, {headers: {'User-Agent': '<uniqueID>: (Anant, <youremail>)'}, json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest; //Ask in rehearsal what this does
