/**
 * Created by Ehbraheem on 27/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');

    var Detail = require('../components/Detail');

    var DetailContainer = React.createClass({
        render: function () {
            console.log(this.props.location.state.weather);
            return (
                <Detail weather={this.props.location.state.weather} place={this.props.routeParams.place}/>
            )
        }
    })


    module.exports = DetailContainer;
})();
