/**
 * Created by Ehbraheem on 27/03/2017.
 */

// TODO: Refactor and DRY

(function () {

    "use strict";

    var axios = require('axios');

    var _baseURL = 'http://api.openweathermap.org/data/2.5/';
    var _API_KEY = '1e4052afa7eddd4063d5717e7cb467b9';

    function makeParams (queryObject) {
        return Object.keys(queryObject)
            .map(key => {
                return key + '=' + encodeURIComponent(queryObject[key]);
            }).join('&')
    };

    function makeUrl(type, queryparam) {
        return _baseURL + type + "?" + makeParams(queryparam);
    }

    function queryParam(city) {
        return {
            q     : city,
            type  : "accurate",
            APPID : _API_KEY,
            cnt   : 5
        }
    }

    function queryAPI (url) {

        return axios.get(url)
            .then(response => {
                    // console.log(response.data);
                return response.data;
                },
                handleError);
    }

    function getWeather (city) {
        var param = queryParam(city);
        var url = makeUrl('weather', param);

        return queryAPI(url);
    }

    function getForcast (city) {
        var param = queryParam(city);
        var url = makeUrl('forecast/daily', param);

        return queryAPI(url);
    }

    var helpers = {

        getWeather: getWeather,

        getForcast: getForcast

    };

    function handleError(response) {
        console.log(response);
    }

    module.exports = helpers;

})();