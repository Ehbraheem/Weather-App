/**
 * Created by Ehbraheem on 22/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');
    var styles = require("../styles/styles");

    var Main = React.createClass({

        render: function() {
            return (
                <div style={styles.mainContainer} >
                    <h1 className="header">Main.js Header</h1>
                    {this.props.children}
                </div>
            )
        }
    });

    module.exports = Main;
})();