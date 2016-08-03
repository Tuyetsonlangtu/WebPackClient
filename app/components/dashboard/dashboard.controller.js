/**
 * Created by kent1 on 8/2/2016.
 */
class DashboardCtrl {
    constructor() {
        console.log("DashboardCtrl");
    }
}

export default angular
    .module('dashboard.controller', [])
    .controller('DashboardCtrl', DashboardCtrl);

