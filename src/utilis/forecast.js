const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/99169618d3ded5d1ffb4bad7472c5864/'+ latitude + ',' + longitude + '?units=si&exclude=[hourly%20minutely]';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '  °C out. There is a ' + body.currently.precipProbability + '% chance of rain.' + "Today Highest Temperature is " + body.daily.data[0].temperatureHigh + '°C, Lowest Temperature is ' + body.daily.data[0].temperatureLow + '°C. Weekely summary is ' + body.daily.summary);
        }
    })
}

module.exports = forecast