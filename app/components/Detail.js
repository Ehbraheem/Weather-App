/**
 * Created by Ehbraheem on 27/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');

    var styles = require("../styles/styles");
    var dateUtils = require('../utils/utils');

    var DayItem = require('./DayItem');


    var Detail = props => {
        return (

            <div style={styles.container}>
            <DayItem day={props.weather} />
                <div style={styles.detailComponent.descriptionContainer}>
                    <p>{props.place}</p>
                    <p>{props.weather.weather[0].description}</p>
                    <p>min temp: {dateUtils.convertTemp(props.weather.temp.min)} degrees</p>
                    <p>max temp: {dateUtils.convertTemp(props.weather.temp.max)} degrees</p>
                    <p>humidity: {props.weather.humidity}</p>
                </div>
            </div>
        )
    }




    module.exports = Detail;
})();