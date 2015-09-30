(function() {
  'use strict';

  angular
    .module('app.projects')
    .run(appRun);

  appRun.$inject = ['statehelper'];

  /* @ngInject */
  function appRun(statehelper) {
    statehelper.configureStates(getRoutes());
  }

  function getRoutes() {
    return [
      {
        name: 'projects',
        url: '/',
        templateUrl: 'app/projects/partials/projects.html',
        controller: 'projectsCtrl as vm',
        resolve: {
          currentAuth: ['Auth', function (Auth) {

            return Auth.$requireAuth();
          }]
        }
      },
      {
        name: 'addProject',
        url: '/addProject',
        templateUrl: 'app/projects/partials/addProject.html',
        controller: 'addProjectCtrl as vm',
        resolve: {
          currentAuth: ['Auth', function (Auth) {

            return Auth.$requireAuth();
          }]
        }
      }
    ];
  }
})();
