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
        mainHeader :{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(252, 90, 44, 0.89)',
            color: '#fff',
            padding: 5,
        },
        homeHeader: {
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
        forcastComponent: {
            container: {
                display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    maxWidth: 1200,
                    margin: '50px auto'
            },
            dayContainer: {
                display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    margin: 35
            },
            header: {
                fontSize: 65,
                    color: '#333',
                    fontWeight: 100,
                    textAlign: 'center'
            },
            subheader: {
                fontSize: 30,
                    color: '#333',
                    fontWeight: 100
            },
            weather: {
                height: 130
            }
        },

        detailComponent: {
            descriptionContainer: {
                fontSize: 34,
                fontWeight: 100,
                maxWidth: 400,
                margin: '0 auto',
                textAlign: 'center',
            }

        },
        dayItemComponent: {
            dayContainer: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                margin: 35
            },
            subheader: {
                fontSize: 30,
                color: '#333',
                fontWeight: 100
            },
            weather: {
                height: 130
            }
        }

    };


    module.exports = styles;

})();