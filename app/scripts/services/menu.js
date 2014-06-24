'use strict';

/**
 * @ngdoc function
 * @name mobileapp.service:menuService
 * @description
 * # menuService
 * Controller of the mobileapp
 */
angular.module('mobileapp')
    .service('menuService', function () {
      var menuService = {
        menuElementStyle: function (menuElement) {
        return 'xxx-' + menuElement.title;
      },
      menu: [{
          title: 't.a',
          elements: [
            { title: 'a.a', href: '#/test/show1' },
            { title: 'a.b', href: '#/test/show2' },
            { title: 'a.c', href: '#/test/show3' }
          ]
        }, {
          title: 't.b',
          elements: [
            { title: 'a.a', href: '#/test/show4' },
            { title: 'a.b', href: '#/test/show5' },
            { title: 'a.c', href: '#/test/show6' }
          ]
        }, {
          title: 't.c',
          elements: [
            { title: 'a.a', href: '#/test/show7' },
            { title: 'a.b', href: '#/test/show8' },
            { title: 'a.c', href: '#/test/show9' }
          ]
        }
      ]};

      return menuService;
    });
