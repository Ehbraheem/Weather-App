/**
 * Created by Ehbraheem on 23/03/2017.
 */

(function () {

    "use strict";

    var styles = {
        homeContainer: {
            backgroundSize: 'cover',
            backgroundImage: "url('app/images/pattern.svg')",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        },
        mainContainer: {
            width: '100%',
            height: '92%'
        },
        header: {
            fontSize: 45,
            color: '#fff',
            fontWeight: 100,
        },
        weatherStyles: function(value) {
            return {
                display: 'flex',
                flexDirection: value.direction || 'column',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 300,
                alignSelf: 'right'
            }
        },
    }


    module.exports = styles;

})();