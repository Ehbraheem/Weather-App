/**
 * Created by Ehbraheem on 21/03/2017.
 */

(function () {

    "use strict";

    var React      = require('react'),
        ReactDom   = require('react-dom');


    var configPath = "./config";

    var routes = require( configPath + '/routes');


    ReactDom.render(
       routes,
        document.getElementById('app')
    );

})();