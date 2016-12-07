var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric';

module.exports = {
  getTemp: function(location) {
    var apiKey = '617f2a3ae4dd1237c5e75d4351615b9a';
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&appid=${apiKey}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
          var data = res.data.main;
          console.log(data)
          var data = {
              temp: data.temp,
              temp_min: data.temp_min,
              temp_max: data.temp_max
          }
          return data;

      }
    }, function(err) {
      throw new Error(err.response.data.message);
    });
  }
}
