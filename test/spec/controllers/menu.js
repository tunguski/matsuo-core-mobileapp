'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('mobileapp'));

  var MenuCtrl,
      scope,
      $rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', { $scope: scope });
  }));

  it('menuService is defined', function () {
    expect(angular.isDefined(scope.menuService)).toBe(true);
  });
});
