/**
 * Created by Ehbraheem on 27/03/2017.
 */

(function () {

    "use strict";

    var daysMap = {
        "0":"Sunday",
        "1":"Monday",
        "2":"Tuesday",
        "3":"Wednesday",
        "4":"Thursday",
        "5":"Friday",
        "6":"Saturday"
    };

    var monthMap = {
        "0":"Jan",
        "1":"Feb",
        "2":"Mar",
        "3":"Apr",
        "4":"May",
        "5":"June",
        "6":"July",
        "7":"Aug",
        "8":"Sept",
        "9":"Oct",
        "10":"Nov",
        "11":"Dec"
    };

    var convertTemp = kelvin => (kelvin -273.15) * 1.8000 + 32.00;

    var getDate = unixTimestamp => {
        var date = new Date(unixTimestamp * 1000);
        var day = daysMap[date.getDay()];
        var month = monthMap[date.getMonth()] + ' ' + date.getDate();
        return day + ', ' + month;
    };

    var utils = {
        convertTemp: convertTemp,
        getDate: getDate
    };

    module.exports = utils;
})();