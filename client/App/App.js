angular.module('outage-checker', ['outage-checker.services'])
  .controller('formController', ['$scope', '$http', 'Success', 'Failure', function($scope, $http, Success, Failure) {
    $scope.url;
    $scope.up;
    $scope.submit = function() {
      console.log('scope url', $scope.url);
      // $http.post('/send', { 'url': $scope.url }).then(Success.success($scope), Failure.failure($scope));
      $http.post('/send', { 'url': $scope.url }).then(function() {
        $scope.up = 'Site is up';
        }, function() {
          $scope.up = 'Site is down';
        })
    }
  }])