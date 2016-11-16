
  'use strict';

/**
 * @ngdoc overview
 * @name singlePageApp
 * @description
 * # singlePageApp
 *
 * Main module of the application.
 */
angular
  .module('singlePageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('demographic', {
        url: '/demographic',
        templateUrl: 'modules/views/demographicView.html',
        controller: 'demographicViewCtrl'
    }).state('patientIn', {
        url: '/patientIn',
        templateUrl: 'modules/views/patientInView.html',
        controller: 'patientInCtrl'
    })
    $urlRouterProvider.otherwise('/demographic');
});
  