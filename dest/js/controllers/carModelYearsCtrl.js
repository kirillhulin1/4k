app.controller("CarModelYearsCtrl",["modelData", "$scope", "$stateParams", function (modelData, $scope, $stateParams) {
    $scope.years = modelData;

    $scope.car = $stateParams.car;
    $scope.model = $stateParams.model;

}]);

