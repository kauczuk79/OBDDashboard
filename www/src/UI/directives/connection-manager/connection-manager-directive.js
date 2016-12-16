(function () {
    'use strict';
    angular
        .module('OBDDashboardApp.UI.directives')
        .directive('connectionManager', [function connectionManager() {
            console.log('Directive connectionManager');
            return {
                restrict: 'E',
                template: '<b>test</b>',
                controller: 'connectionManagerController',
                controllerAs: 'connectionManagerCtrl',
                bindToController: true
            };
        }]);
}());