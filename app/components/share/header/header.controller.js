/**
 * Created by kent1 on 8/2/2016.
 */

class HeaderCtrl {
    constructor($scope) {
        console.log("HeaderCtrl");
        $scope.$on('$includeContentLoaded', function() {
            Layout.initHeader(); // init header
        });
    }
    init (){

    }
}

export default angular
    .module('share.header.controller', [])
    .controller('HeaderCtrl', HeaderCtrl);