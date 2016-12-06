setInterval(function() {
  window.history.pushState('', '', '/back');
}, 500);

angular.module('outage-checker', ['outage-checker.services'])
  .controller('formController', ['$scope', '$http', 'Success', 'Failure', function($scope, $http, Success, Failure) {
    $scope.url;
    $scope.up;
    $scope.submit = function() {
      if ($scope.url === 'http://www.isitdownrightnow.com/') {
        $scope.up = "Site is stupid";
        return;
      } 
      $scope.up = '';
      $http.post('/send', { 'url': $scope.url }).then((res) => Success.success($scope, res), () => Failure.failure($scope));
     }
  }])

