/**
 * Created by Ehbraheem on 22/03/2017.
 */

(function () {

    "use strict";

    var React         = require('react'),
        ReactRouter   = require('react-router');



    var Router = ReactRouter.Router;
    var Route  = ReactRouter.Route;

    var HashHistory = ReactRouter.hashHistory;

    var IndexRoute = ReactRouter.IndexRoute;


    var componentPath = "../components/";
    var Main          = require(("../components/Main"));
    var Home          = require(("../components/Home"));
    var ForecastContainer      = require("../containers/ForecastContainer");
    var DetailContainer = require("../containers/DetailContainer");


    var routes = (

        <Router history={HashHistory}>

            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="forecast/:place" components={ForecastContainer} />
                <Route path="forecast/:place/detail" components={DetailContainer}/>
            </Route>

        </Router>

    )


    module.exports = routes;
})();