(function () {
  'use strict';

  angular
    .module('blocks.statehelper')
    .provider('statehelperConfig', statehelperConfig);

  // Must configure via the statehelperConfigProvider
  function statehelperConfig() {
    /* jshint validthis:true */
    this.config = {
      // These are the properties we need to set
      //$stateProvider: undefined,
      //docTitle: ''
      // resolveAlways: {ready: function() { } }
    };

    this.$get = function () {
      return {
        config: this.config
      };
    };
  }
})();
