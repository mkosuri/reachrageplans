'use strict';

/**
 * @ngdoc overview
 * @name reachrageplansApp
 * @description
 * # reachrageplansApp
 *
 * Main module of the application.
 */
angular
  .module('reachrageplansApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      }).otherwise({
        redirectTo: '/login'
      });
  });
