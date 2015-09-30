(function() {
  'use strict';

  angular
    .module('app.auth')
    .run(appRun);

  appRun.$inject = ['statehelper'];

  /* @ngInject */
  function appRun(statehelper) {
    statehelper.configureStates(getRoutes());
  }

  function getRoutes() {
    return [
      {
        name: 'login',
        url: '/login',
        templateUrl: 'app/auth/partials/login.html',
        controller: 'loginCtrl as vm'
      }
    ];
  }
})();
