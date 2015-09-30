(function () {
  'use strict';

  var app = angular.module("app.core");

  // Configure Toastr
  toastr.options.timeOut = 4000;
  toastr.options.positionClass = 'toast-bottom-right';

  var events = {
    controllerActivateSuccess: 'controller.activateSuccess',
    spinnerToggle: 'spinner.toggle'
  };

  // Resources
  var firebaseUrl = 'https://ppm-demo.firebaseio.com/';

  var statusColorMap = {
    'Unassigned': 'badge-default',
    'Not Started': 'badge-warning',
    'In Progress': 'badge-success',
    'Completed': 'badge-primary'
  };

  var config = {
    docTitle: 'GMGCOS-PPM App',
    version: '2.0.0',
    events: events,
    firebaseUrl: firebaseUrl,
    statusColorMap: statusColorMap
  };

  app.value('config', config);

  app.config(configure);

  configure.$inject = ['$logProvider', '$stateProvider', '$urlRouterProvider', 'statehelperConfigProvider', 'loggerConfigProvider', '$provide'];

  function configure($logProvider, $stateProvider, $urlRouterProvider, statehelperConfigProvider, loggerConfigProvider, $provide) {

    // turn debugging off/on (no info or warn)
    loggerConfigProvider.config.showLogs = true;

    // turn toastr off/on
    loggerConfigProvider.config.showToasts = false;

    // Configure the state provider
    statehelperConfigProvider.config.$stateProvider = $stateProvider;
    statehelperConfigProvider.config.$urlRouterProvider = $urlRouterProvider;
    statehelperConfigProvider.config.docTitle = 'CMGCOS-PPM: ';
  }

}());
