app.controller("NewsDetailCtrl",["$scope", "$stateParams","$state",function ($scope, $stateParams,$state) {
    $scope.name = $stateParams.name;
    $state.current.data.displayName = $stateParams.name;
}]);