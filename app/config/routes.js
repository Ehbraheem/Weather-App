/**
 * Created by Ehbraheem on 22/03/2017.
 */

(function () {

    "use strict";

    var React         = require('react'),
        ReactRouter   = require('react-router');


    var Router = ReactRouter.Router;
    var Route  = ReactRouter.Route;

    var IndexRoute = ReactRouter.IndexRoute;


    var componentPath = '../components';
    var Main = require( componentPath + '/Main');
    var Home = require( componentPath + '/Home');


    var routes = (

        <Router>

            <Route path="/" component="{Main}">
                <Route path='/home' component={Home} />
            </Route>

        </Router>

    )


    module.exports = routes;
})();