app.controller("CarModelsCtrl",["brandData", "$scope", "$stateParams", "$state", function (brandData, $scope, $stateParams, $state) {
    $scope.models = brandData;
    $scope.car = $stateParams.car;

    $state.current.data.displayName = "Шины для автомобиля " +  $stateParams.car;
    $state.$current.parent.data.displayName = $stateParams.car;

    $scope.$emit("topTabActiveChanged",2);
}]);

