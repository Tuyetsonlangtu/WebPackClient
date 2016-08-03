/**
 * Created by kent1 on 8/2/2016.
 */

class ThemePanelCtrl {
    constructor($scope) {
        console.log("ThemePanelCtrl");
        $scope.$on('$includeContentLoaded', function() {
                 Demo.init(); // init theme panel
        });
    }
    init (){

    }
}

export default angular
    .module('share.theme-panel.controller', [])
    .controller('ThemePanelCtrl', ThemePanelCtrl);