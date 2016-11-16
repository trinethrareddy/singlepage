'use strict';

/**
 * @ngdoc function
 * @name singlePageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the singlePageApp
 */
angular.module('singlePageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
