angular.module('outage-checker.services', [])
  .factory('Success', function() {
    return {
    success: function(scope, res) {
      
      return scope.up = res.data;
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