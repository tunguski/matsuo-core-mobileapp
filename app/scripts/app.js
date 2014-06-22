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
      $rootScope.checkLevel = function (sensor) {
        return sensor.actual_value < sensor.warning_level ? 0 : sensor.actual_value < sensor.critical_level ? 1 : 2;
      };

      $rootScope.$on('sensorsData', function (event, sensors) {
        $scope.sensors = sensors;
        $scope.groups = {};
        angular.forEach(sensors, function (sensor) {
          if (sensor.groups) {
            angular.forEach(sensor.groups.split(','), function (groupName) {
              groupName = groupName.trim();
              $scope.groups[groupName] = $scope.groups[groupName] || [];
              $scope.groups[groupName].push(sensor);
            });
          }
        });

        angular.forEach($scope.groups, function (arr) {
          arr.criticals = 0;
          arr.warnings = 0;

          angular.forEach(arr, function (sensor) {
            var level = $rootScope.checkLevel(sensor);
            if (level == 1) {
              arr.warnings = arr.warnings + 1;
            } else if (level == 2) {
              arr.criticals = arr.criticals + 1;
            }
          });
        });
      });

      $scope.isActive = function (groupName) {
        return $location.search().groupName && $location.search().groupName === groupName;
      };

      $scope.getLinkActiveGroup = function (link) {
        return $location.path().indexOf(link) >= 0 ? 'active' : '';
      };
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
      }
    })

    .controller('ReportBugCtrl', function ($scope) {
    })
;
