(function () {
  'use strict';

  angular
    .module('blocks.logger')
    .provider('loggerConfig', loggerConfigProvider);

  // Must configure via the loggerConfigProvider
  function loggerConfigProvider() {
    /* jshint validthis:true */
    this.config = {
      // These are the properties we need to set
      showToasts: true,
      showLogs: true
    };

    this.$get = function () {
      return {
        config: this.config
      };
    };
  }
})();
