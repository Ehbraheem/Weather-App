/**
 * Created by Ehbraheem on 27/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');

    var Forcast = require("../components/Forecast");
    var weatherUtils = require('../utils/data');

    var ForcastContainer = React.createClass({
        getInitialState: function () {
            return {
                loading: true,
                data: {}
            }
        },
        componentDidMount: function () {
            this.contactApi(this.props.routeParams.place)
        },
        componentWillUnmount: function () {
            this.contactApi(nextProps.routeParams.place)
        },
        contactApi: function (place) {
            weatherUtils.getForcast(place)
                .then(function (response) {
                    this.setState({
                        loading: false,
                        data: response
                    });
                }.bind(this));
        },
        render: function () {
            console.log(this.state.data);
            return (
                <Forcast  place={this.props.routeParams.place}
                          loading={this.state.loading}
                          data={this.state.data} />)
        }
    });

    module.exports = ForcastContainer;
})();