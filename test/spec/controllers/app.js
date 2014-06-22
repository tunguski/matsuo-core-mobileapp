'use strict';

describe('Controller: AppCtrl', function () {

  // load the controller's module
  beforeEach(module('mobileapp'));

  var AppCtrl,
      scope,
      $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {
      $scope: scope
    });
  }));

  it('config is defined', function () {
    expect(angular.isDefined(scope.config)).toBe(true);
  });

  it('showMessage works', function () {
    expect(angular.isDefined(scope.messageBox)).toBe(true);
    expect(scope.messageBox.show).toBe(false);

    $rootScope.showMessage('test', 'danger');

    expect(scope.messageBox.text).toBe('test');
    expect(scope.messageBox.class).toBe('bg-danger');
    expect(scope.messageBox.show).toBe(true);
  });
});
