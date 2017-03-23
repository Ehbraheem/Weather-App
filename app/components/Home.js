/**
 * Created by Ehbraheem on 22/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');
    var styles = require("../styles/styles");
    var WeatherUIContainer = require("../containers/WeatherUIContainer");


    var Home = function (props) {
        return (
            <div
            style={styles.homeContainer} >
            <h1 style={styles.header}>Enter a City and State</h1>
                <WeatherUIContainer/>
        </div>)
    };

    module.exports = Home;
})();