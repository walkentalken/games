'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var gameServices = angular.module('game.services', ['ngResource']);
 


 gameServices.factory('Choice', ['$resource',
  function($resource){
    return $resource('db/questions.json', {}, {
      getAllChoices: {method:'GET', isArray:false}
    });
  }]); 
