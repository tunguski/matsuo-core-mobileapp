'use strict';

/**
 * @ngdoc function
 * @name mobileapp.controller:ConfigurationCtrl
 * @description
 * # ConfigurationCtrl
 * Controller of the mobileapp
 */
angular.module('mobileapp')
    .controller('ConfigurationCtrl', function ($scope, $translate, appConfiguration) {
      $scope.config = appConfiguration;

      $scope.$watch('config.language', function (n, o) {
        $translate.use(n);
      });
    });
