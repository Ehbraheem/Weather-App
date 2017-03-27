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
            <div style={styles.forcastComponent.dayContainer} onClick={props.handleClick}>
                <img style={styles.forcastComponent.weather} src={'./app/images/weather-icons/' + icon + '.svg'} alt="Weather"/>
                <h2 style={styles.forcastComponent.subheader}>{date}</h2>
            </div>
        )
    }

    var ForecastUI = props => {
        return (
            <div>
                <h1 style={styles.forcastComponent.header}>{props.place}</h1>
                <div style={styles.forcastComponent.container}>{props.forecast.list.map(listItem => {
                    return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
                })}</div>
            </div>
        )
    }

    function Forecast (props) {
        console.log(props);
        return ( <div>
            {
                props.loading
                    ? <h1 style={styles.forcastComponent.header}>Loading </h1>
                    : <ForecastUI place={props.place} forecast={props.data} handleClick={props.handleClick} />
            }
        </div>
        )
    }

    Forecast.propTypes = {
        place: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        data: PropTypes.object.isRequired,
        handleClick: PropTypes.func.isRequired
    };
    module.exports = Forecast;

})();