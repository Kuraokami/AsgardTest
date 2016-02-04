'use strict';

/* Controllers */
var Asgard = angular.module('AsgardApp', ['ui.bootstrap']);

/* Controllers */
Asgard.controller('dataGatewaysController', function ($scope) {
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.searchDataGateway = '';
  
    // create the list of sushi rolls 
    $scope.dataGateways = [
        {
            id: 1,
            name: "Microsoft SQL Server",
            description: "",
            username: "aperdomob",
            password: "",

            Connection: {
                type: "SqlServer",
                name: "Sql Server Connection",
                description: "My Sql Server connection for test",
                HostAddress: "198.168.1.10",
                Port: "3306",
                Scheme: "default",
                Username: "sa",
                Password: "admin123",
                UseSLL: "y",
                RequiredSll: "y",
                VerifyServerCertification: "n"
            }
        }, {
            id: 2,
            name: "Oracle",
            description: "",
            username: "frodriguez",
            password: "",

            Connection: {
                type: "Oracle",
                name: "Oracle SQL Engine",
                description: "My Sql Server connection for test",
                HostAddress: "198.168.1.10",
                Port: "3306",
                Scheme: "default",
                Username: "sa",
                Password: "admin123",
                UseSLL: "y",
                RequiredSll: "y",
                VerifyServerCertification: "n"
            }
        }
    ];
});

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
