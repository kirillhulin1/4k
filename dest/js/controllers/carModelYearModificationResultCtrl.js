app.controller("CarModelYearModificationResultCtrl",["resultData", "$scope", "$stateParams","$state", function (resultData, $scope, $stateParams, $state) {
    console.log(resultData);

    $state.current.data.displayName = "Шины для автомобиля " +  $stateParams.car + " " + $stateParams.model + " " + $stateParams.year + " " + $stateParams.modification;
    $state.$current.parent.data.displayName = $stateParams.modification;
    $state.$current.parent.parent.data.displayName = $stateParams.year;
    $state.$current.parent.parent.parent.data.displayName = $stateParams.model;
    $state.$current.parent.parent.parent.parent.data.displayName = $stateParams.car;

    $scope.car = $stateParams.car;
    $scope.model = $stateParams.model;
    $scope.year = $stateParams.year;
    $scope.modification = $stateParams.modification;

}]);
