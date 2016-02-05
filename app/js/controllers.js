'use strict';

/* Controllers */
var Asgard = angular.module('AsgardApp', ['ui.bootstrap']);

/* Controllers */
/*
Asgard.controller('dataGatewaysController', function ($scope) {

    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.searchDataGateway = '';
    $scope.dataGateways = [];

});
*/

Asgard.controller('dataGatewaysController', ['$scope', '$http', function ($scope, $http) {

    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.searchDataGateway = '';


    $http.get('../gateways.json').then(function (response) {
        $scope.dataGateways = response.data;
    });
}]);


Asgard.controller('OpenNewGatewayModalController', function ($scope, $uibModal, $log) {
    $scope.animationsEnabled = true;

    $scope.open = function (gateways) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'add-new-gateway.html',
            controller: 'ModalInstanceCtrl',
            size: 'sm'
        });

        modalInstance.result.then(function (selectedItem) {
            gateways.push(selectedItem);
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };
});

Asgard.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance/*, items*/) {

    $scope.current = {};

    $scope.ok = function () {
        $uibModalInstance.close($scope.current);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
