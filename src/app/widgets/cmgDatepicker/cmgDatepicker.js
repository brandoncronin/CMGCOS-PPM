(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive("cmgDatepicker", function () {
      return {
        replace: true,
        restrict: "E",
        require: 'ngModel',
        scope: {
          ngModel: '=',
          dateOptions: "=",
          opened: "=",
          minDate: "=",
          maxDate: "=",
          ngChange: "&",
          ngDisabled: "="
        },
        link: function ($scope, element, attrs, ctrl) {

          $scope.open = function (event) {

            event.preventDefault();
            event.stopPropagation();

            $scope.opened = true;
          };

          $scope.clear = function () {
            $scope.ngModel = null;
          };

          $scope.$parent.$watch(attrs.ngModel, function (newVal, oldVal) {

            if (newVal) {

              console.log("ngChange");
              $scope.ngChange();
            }
          });

          $scope.$parent.$watch(attrs.minDate, function (newVal, oldVal) {

            $scope.minDate = newVal;
          });

          $scope.$parent.$watch(attrs.maxDate, function (newVal, oldVal) {

            $scope.maxDate = newVal;
          });
        },
        templateUrl: '/app/widgets/cmgDatepicker/cmgDatepicker.html'
      }
    });


  angular
    .module('app.widgets')
    .config(['$provide', datepickerDecorator]);

  function datepickerDecorator($provide) {

    $provide.decorator('datepickerDirective', function ($delegate) {

      var directive = $delegate[0];

      directive.templateUrl = '/app/widgets/cmgDatepicker/templates/datepicker.html';

      return $delegate;
    })
  }

  angular
    .module('app.widgets')
    .config(['$provide', daypickerDecorator]);

  function daypickerDecorator($provide) {

    $provide.decorator('daypickerDirective', function ($delegate) {

      var directive = $delegate[0];

      directive.templateUrl = '/app/widgets/cmgDatepicker/templates/day.html';

      return $delegate;

    })
  }

  angular
    .module('app.widgets')
    .config(['$provide', monthpickerDecorator]);

  function monthpickerDecorator($provide) {

    $provide.decorator('monthpickerDirective', function ($delegate) {

      var directive = $delegate[0];

      directive.templateUrl = '/app/widgets/cmgDatepicker/templates/month.html';

      return $delegate;

    })
  }

  angular
    .module('app.widgets')
    .config(['$provide', yearpickerDecorator]);

  function yearpickerDecorator($provide) {

    $provide.decorator('yearpickerDirective', function ($delegate) {

      var directive = $delegate[0];

      directive.templateUrl = '/app/widgets/cmgDatepicker/templates/year.html';

      return $delegate;

    })
  }

  angular
    .module('app.widgets')
    .config(['$provide', datepickerPopupWrapDecorator]);

  function datepickerPopupWrapDecorator($provide) {

    $provide.decorator('datepickerPopupWrapDirective', function ($delegate) {

      var directive = $delegate[0];

      directive.templateUrl = '/app/widgets/cmgDatepicker/templates/popup.html';

      return $delegate;

    })
  }
})();
