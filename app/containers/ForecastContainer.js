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
        contextTypes: {
            router: React.PropTypes.object.isRequired
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
        handleClick: function (weather) {
            console.log(this.props);
            this.context.router.push({
                pathname: this.props.location.pathname + '/detail',
                state: {
                    weather: weather
                }
            })
        },
        render: function () {
            console.log(this.state.data);
            return (
                <Forcast  place={this.props.routeParams.place}
                          loading={this.state.loading}
                          data={this.state.data}
                          handleClick={this.handleClick}/>)
        }
    });

    module.exports = ForcastContainer;
})();