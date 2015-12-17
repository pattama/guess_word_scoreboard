(function() {
  'use strict';

  angular.module('frontend.scoreboard')
    .directive('pullDown', [
      '$timeout', '$window',
      function directive($timeout, $window) {
        return {
          restrict: 'C',
          link: function link(scope, element) {
            var resize = function resize() {
              var totalHeight = angular.element($window).height() - 170;
              angular.element(element).css('margin-top', totalHeight + 'px');
            };
            angular.element($window).bind('resize', function onEvent() {
              resize();
            });

            resize();
          }
        };
      }
    ])
  ;
}());
