/**
 * Created by kent1 on 8/2/2016.
 */
function routes($controllerProvider, $urlRouterProvider) {
    $controllerProvider.allowGlobals();
    $urlRouterProvider.otherwise("/dashboard");
};

export default angular.module('H2SWebApp.routing', [
        require('./components/dashboard/dashboard.routing').name
    ])
    .config(routes);
