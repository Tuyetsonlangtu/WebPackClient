/**
 * Created by kent1 on 8/2/2016.
 */

class SidebarCtrl {
    constructor($scope) {
        console.log("SidebarCtrl");
        $scope.$on('$includeContentLoaded', function() {
            Layout.initHeader(); // init header
        });
    }
    init (){

    }
}

export default angular
    .module('share.sidebar.controller', [])
    .controller('SidebarCtrl', SidebarCtrl);