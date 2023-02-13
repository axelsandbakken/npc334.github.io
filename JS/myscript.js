function getWeatherBergen() {
fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.39&lon=5.32')
.then((response) => response.json())
.then((data) => {
var temperature = data.properties.timeseries[0].data.instant.details.air_temperature;
var conditions = data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
var weatherData = {
temperature: temperature,
conditions: conditions
};
document.getElementById("temperature-value").innerHTML = weatherData.temperature + "°C";
document.getElementById("conditions-value").innerHTML = weatherData.conditions;
});
}

function getWeatherOslo() {
fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.91&lon=10.75')
.then((response) => response.json())
.then((data) => {
var temperature = data.properties.timeseries[0].data.instant.details.air_temperature;
var conditions = data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
var weatherData = {
temperature: temperature,
conditions: conditions
};
document.getElementById("temperature-value").innerHTML = weatherData.temperature + "°C";
document.getElementById("conditions-value").innerHTML = weatherData.conditions;
});
}