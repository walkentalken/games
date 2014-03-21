'use strict';

/* Controllers */

var gameControllers = angular.module('game.controllers', []);


gameControllers.controller('PageController', ['$scope', 'Choice',
  function($scope, Choice) {
    $scope.choices = Choice.getAllChoices();
    $scope.test = "THIS IS THE PAGE CONTROLLER";
    
  }]);


gameControllers.controller('ChoiceController', ['$scope', 'Choice', '$routeParams',
  function($scope, Choice, $routeParams) {
    $scope.choices = Choice.getAllChoices();
    $scope.test = "This is the Choice Controlelr";
    $scope.choiceID = $routeParams.id;

    $scope.choicesArray = Choice.getAllChoices( function(choice) {
      $scope.choiceData = choice.choices[$routeParams.id];
      var choiceData = choice.choices[$routeParams.id];
      $scope.question = choiceData.question;

      $scope.choice1Label = choiceData.answers["choice-1"].label;
      $scope.choice2Label = choiceData.answers["choice-2"].label;

      $scope.choice1URL = choiceData.answers["choice-1"].nextID;
      $scope.choice2URL = choiceData.answers["choice-2"].nextID;

      


    });
    
  }]);

