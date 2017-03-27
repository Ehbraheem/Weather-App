/**
 * Created by Ehbraheem on 27/03/2017.
 */

// TODO: Refactor and DRY

(function () {

    "use strict";

    var axios = require('axios');

    var _baseURL = 'http://api.openweathermap.org/data/2.5/';
    var _API_KEY = 'a714bdb1d5e9558aff25b93ab28d2480';

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
                    console.log(response);
                },
                handleError);
    }

    function getWeather (city) {
        var url = makeUrl('weather', queryParam(city))

        return queryAPI(url);
    }

    function getForcast (city) {
        var url = makeUrl('forcast/daily', makeParams(city));

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