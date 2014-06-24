'use strict';

/**
 * @ngdoc function
 * @name mobileapp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the mobileapp
 */
angular.module('mobileapp')
    .controller('MenuCtrl', function ($scope, menuService) {
      $scope.menuService = menuService;
    });
