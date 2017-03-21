/**
 * Created by Ehbraheem on 21/03/2017.
 */

module.exports = {
    entry : [
        './app/index.js'
    ],
    output : {
        path : __dirname + '/dist',
        filename : "index_bundle.js"
    }

    module : {
        loaders : [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

}