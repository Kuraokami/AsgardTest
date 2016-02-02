'use strict';

/* Controllers */
var Asgard = angular.module('AsgardApp', []);

Asgard.controller('PhoneListCtrl', function ($scope){
  $scope.phones = [
    {
      'name': 'Nexus 5',
      'snippet': 'Fast just got Faster'

    },
    {
      'name': 'Motorola Moto X',
      'snippet': 'Hell yeah'

    }
  ];
}
);

Asgard.controller('dataGatewaysController', function($scope) {
  $scope.sortType     = 'id';
  $scope.sortReverse  = false;
  $scope.searchDataGateway   = '';
  
  // create the list of sushi rolls 
  $scope.dataGateways = [
    {
      id: 1,
      name: "Microsoft SQL Server",
      description: "",
      username: "",
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
      username: "",
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