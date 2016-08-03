webpackJsonp([1],{

/***/ 14:
/***/ function(module, exports) {

	/**
	 * Created by kent1 on 7/31/2016.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DashboardController = function () {
	    function DashboardController($rootScope, $scope, $http, $timeout) {
	        _classCallCheck(this, DashboardController);

	        this.name = 'Dashboard controller';
	        this.$rootScope = $rootScope;
	        this.$scope = $scope;

	        //Call and public function
	        this.initDashboard = this.initDashboard();
	    }

	    _createClass(DashboardController, [{
	        key: 'initDashboard',
	        value: function initDashboard() {
	            this.$scope.$on('$viewContentLoaded', function () {
	                App.initAjax();
	            });
	            // set sidebar closed and body solid layout mode
	            this.$rootScope.settings.layout.pageContentWhite = true;
	            this.$rootScope.settings.layout.pageBodySolid = false;
	            this.$rootScope.settings.layout.pageSidebarClosed = false;
	        }
	    }]);

	    return DashboardController;
	}();

	exports.default = angular.module('dashboard111', []).controller('DashboardController', DashboardController);

/***/ }

});