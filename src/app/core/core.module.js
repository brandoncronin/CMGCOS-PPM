(function () {
  'use strict';

  angular
    .module('app.core', [
      /*
       * Angular modules
       */
      'ngAnimate',
      'ngSanitize',
      /*
       * Our reusable cross app code modules
       */
      'blocks.logger',
      'blocks.statehelper',
      /*
       * 3rd Party Modules
       */
      'ui.router'
    ]);

})();
