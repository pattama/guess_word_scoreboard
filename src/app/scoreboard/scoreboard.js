/**
 * Messages component which is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.examples.messages' angular module.
 */
(function() {
  'use strict';

  // Define frontend.examples.messages angular module
  angular.module('frontend.scoreboard', []);

  // Module configuration
  angular.module('frontend.scoreboard')
    .config([
      '$stateProvider',
      function config($stateProvider) {
        $stateProvider
          // Messages
          .state('scoreboard', {
            url: '/scoreboard',
            views: {
              'content@': {
                templateUrl: '/frontend/scoreboard/scoreboard.html',
                controller: 'ScoreboardController'
              }
            }
          })
        ;
      }
    ])
  ;
}());
