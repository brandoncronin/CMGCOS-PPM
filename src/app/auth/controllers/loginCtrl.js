(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$rootScope', '$state', 'Auth', 'logger'];

  function loginCtrl($rootScope, $state, Auth, logger) {
    /* jshint validthis:true */
    var vm = this;
    vm.title = 'loginCtrl';

    // Members
    vm.user = {
      email: '',
      password: ''
    };
    vm.message = '';

    // Methods
    vm.login = login;

    activate();

    function activate() {

      logger.info('Activated Auth View');
    }

    function login() {

      Auth.login(vm.user).then(function () {

        logger.success('Successfully Logged In');

        if ($rootScope.toState) {
          $state.go($rootScope.toState.name, $rootScope.toStateParams);
        } else {
          $state.go('projects');
        }
      }).catch(function (error) {

        logger.error("Failed to log in: ", error);
        vm.message = 'Failed to log in: ' + error;
      })
    }

    function logout() {

      Auth.logout()
    }
  }
})();
