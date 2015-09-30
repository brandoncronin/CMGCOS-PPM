(function () {
  'use strict';

  angular
    .module('app.issues')
    .controller('issuesSummaryCtrl', issuesSummaryCtrl);

  issuesSummaryCtrl.$inject = [];

  /* @ngInject */
  function issuesSummaryCtrl() {
    var vm = this;
    vm.title = 'ControllerName';

    activate();

    ////////////////

    function activate() {

    }
  }

})();


