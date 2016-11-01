app.controller("CarsCtrl",["carsData","$scope","$state","$stateParams",function (carsData, $scope, $state, $stateParams) {
    $scope.brands = carsData;

    $scope.$emit("topTabActiveChanged",2);
}]);

