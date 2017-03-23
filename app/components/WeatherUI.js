/**
 * Created by Ehbraheem on 23/03/2017.
 */

(function () {

    "use strict";

    var React = require("react");
    var PropTypes = React.PropTypes;
    var styles = require("../styles/styles");

    var InputField = props => {
        return (
            <input type="text"
                   onChange={props.onChange}
                   className="form-control"
                   placeholder="Olodi-Apap, Lagos"
                   value={props.place} />
        )
    };

    var Button = props => {
        return (
            <button type="button"
                    style={{margin: 10}}
                    className="btn btn-success"
                    onClick={props.submitPlace}>
                {props.children}
            </button>
        )
    };

    var WeatherUI = function (props) {
        return (
                <div style={styles.weatherStyles(props)}>
                    <InputField
                        onChange={props.handleChange}
                        place={props.place} />
                    <Button submitPlace={props.submitPlace}>
                        Get Weather
                    </Button>
                </div>
        )
    }

    WeatherUI.propTypes = {
        direction : PropTypes.string,
        handleChange : PropTypes.func.isRequired,
        submitPlace : PropTypes.func.isRequired,
        place : PropTypes.string.isRequired
    }

    module.exports = WeatherUI;
})();