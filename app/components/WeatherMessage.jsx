var React = require('react');

var WeatherMessage = ({temp, location, temp_min, temp_max}) => {
  return (
    <h3>It's {temp}&deg;C in {location}, with a min of {temp_min}&deg;C and a max of {temp_max}&deg;C</h3>
  )
};
module.exports = WeatherMessage;
