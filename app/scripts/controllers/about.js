'use strict';

/**
 * @ngdoc function
 * @name reachrageplansApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the reachrageplansApp
 */
angular.module('reachrageplansApp')
  .controller('AboutCtrl', function ($scope, user) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
