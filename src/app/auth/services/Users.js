(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('User', User);

  User.$inject = ['$firebaseArray', '$firebaseObject', 'config'];

  function User($firebaseArray, $firebaseObject, config) {

    var ref = new Firebase(config.firebaseUrl);

    var service = {
      getUsers: getUsers,
      getUser: getUser
    };

    return service;

    function getUsers() {

      return $firebaseArray(ref.child('Users'));
    }

    function getUser(userID) {

      return $firebaseObject(ref.child('Users').child(userID));
    }
  }
})();
