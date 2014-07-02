'use strict';

angular.module('mobileapp', ['mt.ui', 'snap'])
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
      backgroundImage: '',
      productName: 'XYZ'
    })

    .config(function(snapRemoteProvider) {
      snapRemoteProvider.globalOptions.disable = 'right';
    })
;
