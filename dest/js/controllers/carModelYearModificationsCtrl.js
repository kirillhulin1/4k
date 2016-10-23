app.controller("CarModelYearModificationsCtrl",["yearData", "$scope", "$stateParams", function (yearData, $scope, $stateParams) {
    $scope.modifications = yearData;

    $scope.car = $stateParams.car;
    $scope.model = $stateParams.model;
    $scope.year = $stateParams.year;

}]);

