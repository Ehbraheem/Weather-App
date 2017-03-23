/**
 * Created by Ehbraheem on 22/03/2017.
 */

(function () {

    "use strict";

    var React = require('react');

    var Main = React.createClass({

        render: function() {
            return (
                <div className="main-container">
                    {this.props.children}
                </div>
            )
        }
    });

    module.exports = Main;
})();