(function () {
  'use strict';

  angular
    .module('app.projects')
    .controller('addProjectCtrl', addProjectCtrl);

  addProjectCtrl.$inject = ['Auth', 'logger', 'Projects'];

  function addProjectCtrl(Auth, logger, Projects) {
    /* jshint validthis:true */
    var vm = this;
    vm.title = 'addProjectCtrl';

    // Members
    vm.currentUser = Auth.authData.user;

    vm.newProject = {
      Name: '',
      Description: '',
      CreatedBy: vm.currentUser.$id
    };

    // Methods
    vm.add = add;
    vm.cancel = cancel;

    activate();

    function activate() {

      logger.info("current user", vm.currentUser);
      logger.info('Activated Create Project Modal Controller');
    }

    function add() {

      vm.newProject.CreatedDate = moment();

      logger.info("vm.newProject", vm.newProject);
      Projects.addProject(vm.newProject).then(function (newProject) {


      });
    }

    function cancel() {

      $modalInstance.dismiss('cancel');
    }
  }
})();

