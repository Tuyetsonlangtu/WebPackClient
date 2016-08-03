class MainCtrl {
    constructor($rootScope, $state) {
     console.log("MainCtrl");
    }
}

export default angular
    .module('H2SWebApp.controller', [])
    .controller('MainCtrl', MainCtrl);