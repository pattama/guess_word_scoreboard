/**
 * This file contains all necessary Angular controller definitions for 'frontend.examples.messages' module.
 *
 * Note that this file should only contain controllers and nothing else.
 */
(function() {
  'use strict';

  /**
   * Message controller that demonstrates boilerplate error handling and usage of MessageService.
   *
   * @todo
   *  1) Make example about $http / $sailsSocket usage where automatic message is disabled.
   *  2) Make example about invalid JWT
   */
  angular.module('frontend.scoreboard')
    .controller('ScoreboardController', [
      '$scope', '$http', '$sailsSocket',
      'MessageService', 'BackendConfig',
      function(
        $scope, $http, $sailsSocket,
        MessageService, BackendConfig
      ) {
        // Initialize used scope variables

        $scope.guessWord = 'Taxi Driver Base';
        var words = ['a','b','c','d','e','g'];

        $scope.team1Point = 0;
        $scope.team2Point = 0;
        $scope.point = 1;

        $scope.reset = function reset() {
          $scope.guessWord = 'Taxi Driver Base';
          words = ['a','b','c','d','e','g'];

          $scope.team1Point = 0;
          $scope.team2Point = 0;
          $scope.point = 1;
        };



        $scope.randomGuessWord = function randomGuessWord() {

          //var randomIndex = _.random(0, words.length-1);
          if(_.isEmpty(words)){
            return MessageService['error']('Run out of Words in list');
          }
          $scope.guessWord = words.splice(_.random(words.length - 1), 1)[0];
        };

        $scope.addTeam1Point = function addTeam1Point() {
          $scope.team1Point += _.parseInt($scope.point);
        };
        $scope.addTeam2Point = function addTeam2Point() {
          $scope.team2Point += _.parseInt($scope.point);
        };
        $('.pull-down').each(function() {
          $(this).css('margin-top', $(this).parent().height()-$(this).height())
        });
      }
    ])
  ;
}());
