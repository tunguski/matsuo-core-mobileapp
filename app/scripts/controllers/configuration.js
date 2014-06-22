'use strict';

/**
 * @ngdoc function
 * @name matsuoCoreMobileappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the matsuoCoreMobileappApp
 */
angular.module('mobileapp')
    .controller('ConfigurationCtrl', function ($scope, $translate, appConfiguration) {
      $scope.config = appConfiguration;

      $scope.$watch('config.language', function (n, o) {
        $translate.use(n);
      });
    });
