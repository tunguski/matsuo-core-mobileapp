'use strict';

/**
 * @ngdoc function
 * @name mobileapp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the mobileapp
 */
angular.module('mobileapp')
    .controller('AppCtrl', function ($scope, $rootScope, appConfiguration) {
      $scope.config = appConfiguration;

      $rootScope.messageBox = {
        show: false
      };
      $rootScope.showMessage = function (text, type) {
        $rootScope.messageBox.text = text;
        $rootScope.messageBox.class = 'bg-' + type;
        $rootScope.messageBox.show = !!text;
      };
    });
