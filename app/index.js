/**
 * Created by Ehbraheem on 21/03/2017.
 */

(function () {

    "use strict";

    var React      = require('react'),
        ReactDom   = require('react-dom');

    var HelloWorld = React.createClass({
        render: function () {
            return (
                <div>Hello World</div>
            )
        }
    });

    ReactDom.render(
        <HelloWorld />,

        document.getElementById('app')
    );

})();