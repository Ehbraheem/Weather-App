/**
 * Created by Ehbraheem on 22/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');
    var WeatherUIContainer = require("../containers/WeatherUIContainer");
    var styles = require("../styles/styles");

    var Main = React.createClass({

        render: function() {
            return (
                <div style={styles.mainContainer} >
                    <div style={styles.mainHeader}>
                        <h1 className="header" style={{margin: 0}}>Weather App</h1>
                        <WeatherUIContainer direction="row" />
                    </div>

                    {this.props.children}
                </div>
            )
        }
    });

    module.exports = Main;
})();