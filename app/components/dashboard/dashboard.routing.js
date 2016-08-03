/**
 * Created by kent1 on 8/2/2016.
 */
'use strict';

function routes($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "app/components/dashboard/dashboard.view.html",
            data: {pageTitle: 'Dashboard'},
            controller: "DashboardCtrl",
            resolve: {
                //     loadDashboard: ['$ocLazyLoad', function($ocLazyLoad) {
                //         return $ocLazyLoad.load({
                //             name: 'dashboard',
                //             insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                //             files: [
                //                 'assets/global/plugins/morris/morris.css',
                //                 'assets/global/plugins/morris/morris.min.js',
                //                 'assets/global/plugins/morris/raphael-min.js',
                //                 'assets/global/plugins/jquery.sparkline.min.js',
                //
                //                 'assets/pages/scripts/dashboard.js',
                //                 'app/controllers/DashboardController.js'
                //             ]
                //         });
                //     }]
                loadCtrl: ($q, $ocLazyLoad) => {
                    // lazy load the controller
                    return $q(resolve => {
                        require.ensure([], () => {
                            let module = require('./dashboard.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }

        });
};

export default angular
    .module('H2SWebApp.routing.dashboard', [])
    .config(routes);