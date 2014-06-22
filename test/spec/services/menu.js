'use strict';

describe('Service: menuService', function () {

  // load the controller's module
  beforeEach(module('mobileapp'));

  var menuService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _menuService_) {
    scope = $rootScope.$new();
    menuService = _menuService_;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(angular.isDefined(menuService.menuElementStyle)).toBe(true);
    expect(angular.isDefined(menuService.menu)).toBe(true);
  });
});
