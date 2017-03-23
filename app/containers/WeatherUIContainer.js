/**
 * Created by Ehbraheem on 23/03/2017.
 */

(function () {

    "use strict";

    var React = require("react");
    var PropTypes = React.PropTypes;

    var WeatherUI = require("../components/WeatherUI");

    var WeatherUIContainer = React.createClass({
        getDefaultProps : function () {
            return {direction: 'column'}
        },

        getInitialState : function () {
            return {
                place : ""
            }
        },
        propTypes: {
            direction: PropTypes.string
        },

        handleChange : function () {
            console.log(this.state.place)
        },
        handleSubmitPlace: function (e) {
            this.setState({
                place: e.target.value
            })
        },
        render: function (){
            return (
                <WeatherUI direction={this.props.direction}
                           handleChange={this.handleChange}
                           place={this.state.place}
                           submitPlace={this.handleSubmitPlace}/>)
        }
    })

    module.exports = WeatherUIContainer;
})();
