//var api_locParams = "lat=50.1243111&lon=14.4901953";
var api_locParams = "q=Moscow";
//var api_appId = "bd5e378503939ddaee76f12ad7a97608"; 
var api_appId = "0f981fc6dae80059ba371be25d34f724";
var api_lang = "ru"
var api_units = "metric"; 
var api_params = null;

var refreshTime = 0.5 * 60 * 1000;
var tempType = "feelsLike";
var refreshWeatherTime = 30 * 60 * 1000;

// Browser in kindle paperwhite doesn't support rotation.
// You can override with this parameter 'll' and 'lr' for landscape left/right, 'up' for upside down.
//var rotation = "ll";

// You can set night mode,
// "auto" - by sunrise and sunset,
// "HH-HH - like: ""22-06", from 22:00 to 06:00
// "on" - night mode all the day :)
var night_mode = "on";

// Timezone offset - kindle doesnt report correct local time to the kindle (always it is GMT),
// You can set custom GMT offset, in format "+08:00".
// You may need to set it again after winter/summer time change.
// Null is default
var utcOffset = "+03:00"

