/**
 * Created by kent1 on 8/2/2016.
 */

function settings($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: 'assets',
        globalPath: 'assets/global',
        layoutPath: 'assets/layouts/layout2',
    };
    $rootScope.settings = settings;
    return settings;
};

export default angular.module('H2SWebApp.settings', [])
    .factory('settings', settings)
    .run(['settings', function(result) {
        console.log("settings: ",result);
    }]);
