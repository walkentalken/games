'use strict';


// Declare app level module which depends on filters, and services
var gameApp = angular.module('game', [
  'ngRoute',
  'game.filters',
  'game.services',
  'game.controllers'
])

gameApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'PageController'});
  $routeProvider.when('/see-all', {templateUrl: 'partials/partial2.html', controller: 'PageController'});
  $routeProvider.when('/choice/:id', {templateUrl: 'partials/choice.html', controller: 'ChoiceController'});
  $routeProvider.when('/game-over', {templateUrl: 'partials/game-over.html', controller: 'ChoiceController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);


