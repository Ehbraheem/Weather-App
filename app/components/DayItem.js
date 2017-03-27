/**
 * Created by Ehbraheem on 27/03/2017.
 */
(function () {

    "use strict";

    var React = require('react');
    var PropTypes = React.PropTypes;

    var styles = require("../styles/styles");
    var dateUtils = require('../utils/utils');

    var DayItem = props => {
        var date = dateUtils.getDate(props.day.dt);
        var icon = props.day.weather[0].icon;

        return (
            <div style={styles.dayItemComponent.dayContainer} onClick={props.handleClick}>
                <img style={styles.dayItemComponent.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt="Weather"/>
                <h2 style={styles.forcastComponent.subheader}>{date}</h2>
            </div>
        )
    }

    DayItem.propTypes = {
        day: PropTypes.shape({
            dt: PropTypes.number.isRequired,
            weather: PropTypes.array.isRequired
        }).isRequired,
        handleClick: PropTypes.func
    }

    module.exports = DayItem;
})();