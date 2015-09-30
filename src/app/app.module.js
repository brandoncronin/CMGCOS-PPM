(function() {
  'use strict';

  var app = angular.module('app', [
    /*
     * Order is not important. Angular makes a
     * pass to register all of the modules listed
     * and then when app.dashboard tries to use app.data,
     * it's components are available.
     */

    /*
     * Everybody has access to these.
     * We could place these under every feature area,
     * but this is easier to maintain.
     */
    'app.core',
    'app.widgets',
    'app.auth',

    /*
     * Feature areas
     */
    'app.projects',
    'app.issues',

    /*
     *   3rd Party Modules
     */
    'firebase'

  ]);

  app.run(init);

  init.$inject = ['$rootScope', '$state', 'Auth'];

  function init($rootScope, $state, Auth) {

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {

    });

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromparams, error) {

      if (error === "AUTH_REQUIRED") {

        $rootScope.toState = toState;
        $rootScope.toStateParams = toParams;
        $state.go('login');
      }

    });
  }
})();
