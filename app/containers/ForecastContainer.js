/**
 * Created by Ehbraheem on 27/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');

    var Forcast = require("../components/Forecast");

    var ForcastContainer = React.createClass({
        render: function () {
            return (<Forcast />)
        }
    });

    module.exports = ForcastContainer;
})();