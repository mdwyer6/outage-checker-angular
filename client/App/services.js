angular.module('outage-checker.services', [])
  .factory('Success', function() {
    return {
    success: function(scope) {
      return scope.up = 'Site is up';
    }
  }
  })
  .factory('Failure', function() {
    return {
      failure: function(scope) {
        return scope.up = 'Site is down';
      }
    }
  })