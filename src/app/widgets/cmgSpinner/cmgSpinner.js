(function () {
  'use strict';

  angular
    .module('app.widgets')
    .directive('cmgSpinner', cmgSpinner);

  cmgSpinner.$inject = ['$window'];

  /* @ngInject */
  function cmgSpinner($window) {
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {
        scope.spinner = null;
        scope.$watch(attrs.cmgSpinner, function(options){
          if (scope.spinner) {
            scope.spinner.stop();
          }
          scope.spinner = new $window.Spinner(options);
          scope.spinner.spin(element[0]);
        }, true)
    }
  }
})();

