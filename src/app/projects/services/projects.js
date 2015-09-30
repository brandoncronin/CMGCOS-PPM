(function () {
  'use strict';

  angular
    .module('app.projects')
    .factory('Projects', Projects);

  Projects.$inject = ['$firebaseArray', '$firebaseObject', 'config'];

  /* @ngInject */
  function Projects($firebaseArray, $firebaseObject, config) {

    var projectRef = new Firebase(config.firebaseUrl + 'Projects');
    var usersRef = new Firebase(config.firebaseUrl + 'Users');

    var service = {
      getProjects: getProjects,
      getProject: getProject,
      addProject: addProject,
      updateProject: updateProject,
      deleteProject: deleteProject
    };

    return service;

    ////////////////

    function getProjects() {

        return $firebaseArray(projectRef);
    };

    function getProject(projectID) {
        return $firebaseObject(projectRef.child(projectID));
    };

    function addProject(project) {

      var root = new Firebase(config.firebaseUrl);
      var id = root.child("/projects").push();
      id.set(project, function(err) {
        if (!err) {

          var name = id.key();
          root.child("/Users/" + currentUser.$id + "/projects/CreatedBy/" + name).set(true);
        }
      })


    };

    function updateProject() {};

    function deleteProject() {};
  }

})();

