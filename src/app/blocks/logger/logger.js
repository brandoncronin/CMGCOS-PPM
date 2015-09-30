(function () {
  'use strict';

  angular
    .module('blocks.logger')
    .factory('logger', logger);

  logger.$inject = ['$log', 'toastr', 'loggerConfig'];

  function logger($log, toastr, loggerConfig) {

    var showToasts = loggerConfig.config.showToasts;
    var showLogs = loggerConfig.config.showLogs;

    var service = {
      showToasts: showToasts,
      showLogs: showLogs,

      error: error,
      info: info,
      success: success,
      warning: warning,

      // straight to console; bypass toastr
      log: $log.log
    };

    return service;
    /////////////////////

    function error(message, data, title) {
      if (service.showToasts) {
        toastr.error(message, title);
      }

      if (service.showLogs) {
        $log.error('Error: ' + message, data);
      }
    }

    function info(message, data, title) {
      if (service.showToasts) {
        toastr.info(message, title);
      }

      if (service.showLogs) {
        $log.info('Info: ' + message, data);
      }
    }

    function success(message, data, title) {

      if (service.showToasts) {
        toastr.success(message, title);
      }

      if (service.showLogs) {
        $log.info('Success: ' + message, data);
      }
    }

    function warning(message, data, title) {

      if (service.showToasts) {
        toastr.warning(message, title);
      }

      if (service.showLogs) {
        $log.warn('Warning: ' + message, data);
      }
    }
  }
}());
