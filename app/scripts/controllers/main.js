'use strict';

/**
 * @ngdoc function
 * @name singlePageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the singlePageApp
 */
angular.module('singlePageApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.degraphic = {'mainHeadText':'Patient Demographic Information Area'};
  	$scope.newBornChild = {'Lastname':'' ,'First Name':'' , 'Middle Name':'','ID #':'','Gender':'','Birth Date':'',"Mother's Maiden Last":'',"Mother's Maiden First":'','Phone':''};
  	$scope.orgDetails = {'User':'','Org' :'', 'CH2': ''}
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
