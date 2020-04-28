const request = require('request');

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=99aea887f6e54cfc39042e9359cc731d&query=' + long + ',' + lat;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}


module.exports = forecast;




