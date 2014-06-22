'use strict';

var mobileapp = angular.module('mobileapp', ['ui.bootstrap', 'snap', 'mt.route', 'pascalprecht.translate']);

mobileapp
    .config(function($translateProvider) {
      //$translateProvider.useStaticFilesLoader({ prefix: 'i18n/locale-', suffix: '.json' });
      $translateProvider.preferredLanguage('pl');
    })
    .config(function(mtRouteConfig) {
      mtRouteConfig.file = true;
    })
    .config(function($routeProvider) {
      $routeProvider.otherwise({ templateUrl: 'views/general/main.html' });
    })
//    .constant('baseUrl', 'http://localhost:8000')
    // wersja na serwerze z przekierowaniem apache'a
    .constant('baseUrl', '')
    .value('appConfiguration', {
      asButtons: true,
      language: 'pl',
      buttonStyle: 'glass',
      backgroundImage: ''
    })

    .config(function(snapRemoteProvider) {
      snapRemoteProvider.globalOptions.disable = 'right';
    })

    .controller('ConfigurationCtrl', function ($scope, $translate, appConfiguration) {
      $scope.config = appConfiguration;

      $scope.$watch('config.language', function (n, o) {
        $translate.use(n);
      });
    })

    .controller('MenuCtrl', function ($scope, $rootScope, $location) {
    })

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
    })

    .controller('ReportBugCtrl', function ($scope) {
    })
;
