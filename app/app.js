/**
 * Created by kent1 on 8/2/2016.
 */
'use strict';

require('angular');
var H2SWebApp = angular.module('H2SWebApp', [
        require('angular-ui-router'),
        require('angular-ui-bootstrap'),
        require('oclazyload'),
        require('angular-sanitize'),
        require('./app.routing').name,

        require('./components/main/main.controller').name,
        require('./components/share/footer/footer.controller').name,
        require('./components/share/theme_panel/theme-panel.controller').name,
        require('./components/share/quick_sidebar/quick-sidebar.controller').name,
        require('./components/share/header/header.controller').name,
        require('./components/share/sidebar/sidebar.controller').name,

        require('./components/common/settings.factory').name,

        require('./components/directive/spinner-bar.directive').name,
        require('./components/directive/drop-down-menu-hover').name,
        require('./components/directive/link').name
]);

/* Setup Layout Part - Header */
H2SWebApp.controller('HeaderController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
                Layout.initHeader(); // init header
        });
}]);

/* Setup Layout Part - Sidebar */
H2SWebApp.controller('SidebarController', ['$scope', function($scope) {
        $scope.$on('$includeContentLoaded', function() {
                Layout.initSidebar(); // init sidebar
        });
}]);

angular.element(document).ready(function () {
        angular.bootstrap(document, ["H2SWebApp"]);
});