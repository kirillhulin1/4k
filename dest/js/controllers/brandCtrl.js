app.controller("BrandCtrl",["$scope", "$stateParams","$state",function ($scope, $stateParams,$state) {
    $scope.brand = $stateParams.brand;
    $state.current.data.displayName = $stateParams.brand;
}]);

