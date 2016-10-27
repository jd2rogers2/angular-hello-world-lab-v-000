function MainController($scope){
  $scope.name = 'James'
  $scope.email = 'email@email.com'
  $scope.phone = '911'
}

angular
  .module('app')
  .controller('MainController', MainController)