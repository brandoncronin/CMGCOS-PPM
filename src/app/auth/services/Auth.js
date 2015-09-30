(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('Auth', Auth);

  Auth.$inject = ['$rootScope', '$firebaseAuth', 'User', 'config', 'logger'];

  function Auth($rootScope, $firebaseAuth, User, config, logger) {
    var ref = new Firebase(config.firebaseUrl);
    var auth = $firebaseAuth(ref);
    var _authData = {};

    var service = {
      login: login,
      logout: logout,
      signedIn: signedIn,
      authData: _authData,
      $waitForAuth: auth.$waitForAuth,
      $requireAuth: auth.$requireAuth
    };

    // Login / Logout Handler
    auth.$onAuth(function (authData) {

      // Login
      if (authData) {
        logger.info("logged in");
        angular.copy(authData, _authData);
        _authData.user = User.getUser(authData.uid);
      } else { // Logout

        logger.info("logged out");

        if (_authData && _authData.user) {
          logger.info("destroy");
          _authData.user.$destroy();
        }

        angular.copy({}, _authData);
      }
    });

    return service;

    function login(user) {

      return auth.$authWithPassword(user);
    }

    function logout() {

      console.log("logout");
      auth.$unauth();
    }

    function signedIn() {

      return !!_authData.provider;
    }
  }
})();
