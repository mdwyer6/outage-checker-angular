angular.module('outage-checker', [])
  .controller('formController', ['$scope', '$http', function($scope, $http) {
    $scope.url;
    $scope.up;
    $scope.submit = function(url) {
      $http.post('/send', url, function success (res) {
        $scope.up = 'This site is up';
      }, function(res) {
        $scope.up ='This site could not be reached';
      })
    }
  }])