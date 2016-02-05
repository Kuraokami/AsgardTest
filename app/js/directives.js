'use strict';

/* Directives */

Asgard.directive('gatewaysList', function () {
    return {
        restrict: 'E',
        templateUrl: '../gateways-list.html'
    };
});

Asgard.directive('passwordVerify', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            repeat: '=ngModel',
            password: '=passwordVerify'
        },
        link: function (scope, element, attributes, control) {
            control.$parsers.unshift(function (viewValue) {
                var origin = scope.password;
                if (origin !== viewValue) {
                    control.$setValidity("passwordVerify", false);
                    return undefined;
                } else {
                    control.$setValidity("passwordVerify", true);
                    return viewValue;
                }
            });

            scope.$watch("password", function () {
                if (scope.password !== scope.repeat) {
                    control.$setValidity("passwordVerify", false);
                } else {
                    control.$setValidity("passwordVerify", true);
                }
            });
        }
    };
});