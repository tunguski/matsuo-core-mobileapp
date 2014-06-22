'use strict';

describe('Controller: ConfigurationCtrl', function () {

  // load the controller's module
  beforeEach(module('mobileapp'));

  var ConfigurationCtrl,
      scope,
      $rootScope,
      $translate,
      appConfiguration;

  var $translate_useExecutedProperly = false;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_, _appConfiguration_) {
    $rootScope = _$rootScope_;
    appConfiguration = _appConfiguration_;
    scope = $rootScope.$new();
    $translate = {
      use: function (val) {
        $translate_useExecutedProperly = val == 'en';
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

    expect($translate_useExecutedProperly).toBe(true);
  });
});
