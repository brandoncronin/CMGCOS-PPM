(function () {
  'use strict';

  angular
    .module('blocks.statehelper')
    .factory('statehelper', statehelper);

  statehelper.$inject = ['$location', '$rootScope', '$state', '$urlRouter', 'logger', 'statehelperConfig'];

  function statehelper($location, $rootScope, $state, $urlRouter, logger, statehelperConfig) {

    var handlingRouteChangeError = false;
    var routeCounts = {
      errors: 0,
      changes: 0
    };
    var $stateProvider = statehelperConfig.config.$stateProvider;
    var $urlRouterProvider = statehelperConfig.config.$urlRouterProvider;

    var service = {
      configureStates: configureStates,
      getRoutes: getRoutes,
      routeCounts: routeCounts
    };

    init();

    return service;
    ///////////////

    function configureStates(states) {

      // Set up states
      states.forEach(function (state) {

        $stateProvider.state(state);
      });
      $urlRouterProvider.otherwise('/');
    }

    function handleRoutingErrors() {
      // Route cancellation:
      // On routing error, go to the dashboard
      // Provide an exit clause if it tries to do it twice
      //$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

      //    if (handlingRouteChanageError) {
      //        return;
      //    }
      //    routeCounts.errors++;
      //    handlingRouteChangeError = true;
      //    var destination = (toState && (toState.title || toState.name || toState.loadedTempalteUrl)) || 'unknown target';
      //    var msg = 'Error routing to ' + destination + '. ' + (error.msg || '');
      //    logger.warning(msg, [toState]);

      //    $state.go('home');
      //});
    }

    function init() {
      handleRoutingErrors();
    }

    function getRoutes() {

      return $state.get();
    }

  }
})();
