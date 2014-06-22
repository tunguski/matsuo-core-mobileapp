'use strict';

/**
 * @ngdoc function
 * @name matsuoCoreMobileappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matsuoCoreMobileappApp
 */
angular.module('mobileapp')
    .controller('MenuCtrl', function ($scope, menuService) {
      $scope.menuService = menuService;
    });
