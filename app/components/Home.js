/**
 * Created by Ehbraheem on 22/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');
    var styles = require("../styles/styles");

    var Home = function (props) {
        console.log(props);
        return (<div
            style={styles.container} >
            <h1 style={styles.header}>Enter a City and State</h1>
        </div>)
    };

    module.exports = Home;
})();