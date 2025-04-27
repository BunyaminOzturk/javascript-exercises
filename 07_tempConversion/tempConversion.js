const convertToCelsius = function(fahrenheit) {
  
  const fahToCel = ((fahrenheit - 32) * 5) / 9;
  const celsius = Math.round(fahToCel * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  const celToFah = ((celsius * 9/5) + 32);
  const fahrenheit = Math.round(celToFah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
