app.controller("CarModelYearModificationsCtrl",["yearData", "$scope", "$stateParams","$state", function (yearData, $scope, $stateParams, $state) {
    $scope.modifications = yearData;

    $scope.car = $stateParams.car;
    $scope.model = $stateParams.model;
    $scope.year = $stateParams.year;

    $state.current.data.displayName = "Шины для автомобиля " +  $stateParams.car + " " + $stateParams.model + " " + $stateParams.year;
    $state.$current.parent.data.displayName = $stateParams.year;
    $state.$current.parent.parent.data.displayName = $stateParams.model;
    $state.$current.parent.parent.parent.data.displayName = $stateParams.car;

}]);

