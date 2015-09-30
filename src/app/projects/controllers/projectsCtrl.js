(function () {
  'use strict';

  angular
    .module('app.projects')
    .controller('projectsCtrl', projectsCtrl);

  projectsCtrl.$inject = ['$state', 'logger'];

  /* @ngInject */
  function projectsCtrl($state, logger) {
    var vm = this;
    vm.title = 'projectsCtrl';

    // Members

    // Methods
    vm.add = add;

    activate();

    ////////////////

    function activate() {

      logger.info("Activated Projects View!");
    }

    function add() {

      $state.go('addProject');
    }
  }

})();

