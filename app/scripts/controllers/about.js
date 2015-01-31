'use strict';

/**
 * @ngdoc function
 * @name projetsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetsApp
 */
angular.module('projetsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
