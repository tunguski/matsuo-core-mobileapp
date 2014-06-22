'use strict';

describe('Controller: ConfigurationCtrl', function () {

  // load the controller's module
  beforeEach(module('mobileapp'));

  var ConfigurationCtrl,
      scope,
      $rootScope,
      $translate,
      appConfiguration;

  var $translateUseExecutedProperly = false;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_, _appConfiguration_) {
    $rootScope = _$rootScope_;
    appConfiguration = _appConfiguration_;
    scope = $rootScope.$new();
    $translate = {
      use: function (val) {
        $translateUseExecutedProperly = val === 'en';
      }
    };

    ConfigurationCtrl = $controller('ConfigurationCtrl', { $scope: scope, $translate: $translate });
  }));

  it('config is defined', function () {
    expect(angular.isDefined(scope.config)).toBe(true);
  });

  it('language works', function () {
    appConfiguration.language = 'en';

    scope.$digest();

    expect($translateUseExecutedProperly).toBe(true);
  });
});
