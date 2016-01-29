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
