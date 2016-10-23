app.controller("CarModelsCtrl",["brandData", "$scope", "$stateParams", function (brandData, $scope, $stateParams) {
    $scope.models = brandData;
    $scope.car = $stateParams.car;
}]);

