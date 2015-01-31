'use strict';

/**
 * @ngdoc function
 * @name projetsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetsApp
 */
angular.module('projetsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
