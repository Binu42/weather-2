const request = require('request');

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2JpbnU0MiIsImEiOiJjanlpN2F1NTAwN2Q2M2NueHIwejdlMDFmIn0.fswJto5sPhUkQjxQAC-FRw&limit=1';
    request({
        url: url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('unable to connect to Location Service.', undefined);
        } else if (body.features.length === 0) {
            callback('Location does not exit. try anyother place', undefined);
        } else {
            var features = body.features[0];
            callback(undefined, {
                latitude: features.center[1],
                longitude: features.center[0],
                location: features.place_name
            })
        }
    })
}

module.exports = geoCode;