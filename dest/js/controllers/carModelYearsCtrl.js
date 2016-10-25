app.controller("CarModelYearsCtrl",["modelData", "$scope", "$stateParams", "$state", function (modelData, $scope, $stateParams, $state) {
    $scope.years = modelData;

    $scope.car = $stateParams.car;
    $scope.model = $stateParams.model;

    $state.current.data.displayName = "Шины для автомобиля " +  $stateParams.car + " " + $stateParams.model;
    $state.$current.parent.data.displayName = $stateParams.model;
    $state.$current.parent.parent.data.displayName = $stateParams.car;

}]);

