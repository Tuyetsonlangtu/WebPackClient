/**
 * Created by kent1 on 8/2/2016.
 */

class QuickSidebarCtrl {
    constructor($scope) {
        console.log("QuickSidebarCtrl");
        $scope.$on('$includeContentLoaded', function() {
            setTimeout(function(){
                QuickSidebar.init(); // init quick sidebar
            }, 2000)
        });
    }
    init (){

    }
}

export default angular
    .module('share.quick-sidebar.controller', [])
    .controller('QuickSidebarCtrl', QuickSidebarCtrl);