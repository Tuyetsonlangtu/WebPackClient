/**
 * Created by kent1 on 8/2/2016.
 */
class FooterCtrl {
    constructor($scope) {
        console.log("FooterCtrl");

        $scope.$on('$includeContentLoaded', function() {
            //Layout.initFooter(); // init footer
        });
    }

    init (){

    }
}

export default angular
    .module('share.footer.controller', [])
    .controller('FooterCtrl', FooterCtrl);